<template>

    <div class="pad">
        <h1>Manager Dashboard</h1>
        <h3>Welcome back {{ sessionStore.user.name }}</h3>
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
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5>Available Products</h5>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
              Add new Product
            </button>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }} €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>

      <div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
        <div v-for="order in orders" :key="order.id" class="card mb-3">
          <div class="card-header d-flex justify-content-between align-items-center">
            <div>
              <strong>Order ID:</strong> {{ order.id }} - <strong>Date:</strong> {{ order.dateTime }} - <strong>Shipped:</strong> {{ order.shipped }}
            </div>
            <div class="badge bg-primary">
              Total Price: {{ getTotalPrice(order.products) }} €
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Customer: {{ order.user.name }} {{ order.user.surname }}</h5>
            <p class="card-text"><strong>Email:</strong> {{ order.user.email }}</p>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in order.products" :key="product.id">
                  <td>{{ product.name }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>{{ product.price }} €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
              <button @click="addNewProduct" type="button" data-bs-dismiss="modal" class="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>



<script setup>
import { ref, onMounted } from 'vue';
import { useSessionStore } from '@/store/modules/user';
import ProductService from '@/components/services/ProductService'

// Store data
const sessionStore = useSessionStore();
const products = ref([])
const orders = ref([])
const newProduct = ref({
    name: '',
    price: ''
});

const getTotalPrice = (products) => {
      return products.reduce((total, product) => total + product.price * product.quantity, 0);
    };

onMounted(async () => {
    await fetchProducts();
    await fetchOrders();
});


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

const fetchOrders = async () => {
    try {
        const company_id = sessionStore.user.id
        const response = await ProductService.getOrders(company_id)
        orders.value = response.data
        console.log(response)
    }catch(error) {
        console.error('Failed to fetch orders:', error);
    }
};


const addNewProduct = async () => {
    try {
        const product = {
            name: newProduct.value.name,
            price: newProduct.value.price,
            companyId: sessionStore.getUser.id
        }
        const response = await ProductService.addNewProduct(product)
        products.value.push(response.data.data)
    } catch(error) {
        console.error('Failed to add product:', error);
}

}

</script>
<style scoped>
.pad {
  padding-top: 60px;
}
</style>