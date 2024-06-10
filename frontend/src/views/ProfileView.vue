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
    <div v-if="isCompany" class="container mt-5">
    <div class="card">
        <div class="card-header">
          <h3>User Details</h3>
        </div>
      
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
  