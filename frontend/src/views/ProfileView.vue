<template>
    <div v-if="isUser" class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h3>User Details</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 text-center">
              <img :src="picture" class="img-fluid rounded-circle" alt="User Picture">
            </div>
            <div class="col-md-8">
              <p><strong>Name:</strong> {{ name }}</p>
              <p><strong>Surname:</strong> {{ surname }}</p>
              <p><strong>Email:</strong> {{ email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
        <div class="card-header">
          <h3>User Details</h3>
        </div>
      <div v-if="isCompany" class="container mt-5">
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 text-center">
              <img src="@/components/images/azagr2.jpeg" class="img-comp" alt="User Picture">
            </div>
            <div class="col-md-8">
              <p><strong>Company Name:</strong> {{ name }}</p>
              <p><strong>Email:</strong> {{ email }}</p>
              <p><strong>P.IVA:</strong> {{ piva }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>


      
    <div>
    <ul class="nav nav-tabs" id="profileTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="products-tab" data-bs-toggle="tab" data-bs-target="#products" type="button" role="tab" aria-controls="products" aria-selected="true">Products</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false">Orders</button>
      </li>
    </ul>
    <div class="tab-content" id="profileTabContent">
      <div class="tab-pane fade show active" id="products" role="tabpanel" aria-labelledby="products-tab">
        <div>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
            Add new Product
          </button>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Order Price</th>
              <th>Consumer ID</th>
              <th>Consumer Name</th>
              <th>Consumer Surname</th>
              <th>Consumer Email</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="order in orders" :key="order.id">
              <td>{{ order.productId }}</td>
              <td>{{ order.productName }}</td>
              <td>{{ order.productQuantity }}</td>
              <td>{{ order.orderPrice }}</td>
              <td>{{ order.consumerId }}</td>
              <td>{{ order.consumerName }}</td>
              <td>{{ order.consumerSurname }}</td>
              <td>{{ order.consumerEmail }}</td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>



  <!-- Modal -->
  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addProductModalLabel">Add New Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="productName" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="productName" v-model="newProduct.name" required>
              </div>
              <div class="mb-3">
                <label for="productPrice" class="form-label">Product Price</label>
                <input type="number" class="form-control" id="productPrice" v-model="newProduct.price" required>
              </div>
              <div class="mb-3">
                <label for="productQuantity" class="form-label">Product Quantity</label>
                <input type="number" class="form-control" id="productQuantity" v-model="newProduct.quantity" required>
              </div>
              <button @click="addNewProduct" type="button" data-bs-dismiss="modal" class="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>



  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useSessionStore } from '@/store/modules/user';
  import ProductService from '@/components/services/ProductService'
import ColorPicker from 'primevue/colorpicker';
  
  // Store data
  const sessionStore = useSessionStore();
  const picture = ref('');
  const name = ref('');
  const surname = ref('');
  const email = ref('');
  const piva = ref('')
  const role = ref('')
  const products = ref([])
  
  // Sample orders data
  const orders = ref([
    { id: 1, date: '2023-05-01', total: 100.0 },
    { id: 2, date: '2023-05-10', total: 200.0 },
    { id: 3, date: '2023-05-15', total: 150.0 }
  ]);
  
  const newProduct = ref({
      name: '',
      price: '',
      quantity: ''
    });

  onMounted(() => {
    picture.value = sessionStore.getUser.picture
    name.value = sessionStore.getUser.name;
    surname.value = sessionStore.getUser.surname;
    email.value = sessionStore.getUser.email;
    role.value = sessionStore.getUser.role
    piva.value = sessionStore.getUser.piva

  });
  const isUser = computed(() => role.value === 0);
  const isCompany = computed(() => role.value === 1);
 

  const fetchProducts = async() => {
  try {
    const company_id = sessionStore.user.id
    const response = await ProductService.getProducts(company_id);
    products.value = response.data;
    console.log(response.data)
  }catch(error) {
    console.error('Failed to fetch products:', error);
  }
};


const addNewProduct = async () => {
  try {
    const product = {
      name: newProduct.value.name,
      quantiyt: newProduct.value.quantity,
      price: newProduct.value.price,
      company: sessionStore.getUser
    }
    const response = await ProductService.addNewProduct(product)
    products.value.push(response.data.data)
  } catch(error) {
    console.error('Failed to add product:', error);
  }

}

onMounted(() => {
  fetchProducts();
})



  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  .img-fluid {
    max-width: 150px;
    max-height: 150px;
  }

  .img-comp {
    width: 300px;
    height: 200px;
  }
  </style>
  