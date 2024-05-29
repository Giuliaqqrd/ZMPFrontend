<template>
  <div>
    <div class="position-relative custom-background overflow-hidden text-center">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal poetsen-one-regular">Shop the nature</h1>
        <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
        <a class="btn btn-outline-secondary" href="#">Coming soon</a>
      </div>
    </div>

    <div v-if="loading">Caricamento in corso...</div>

    <div v-else class="container p-5 position-relative">
      <div v-if="products.length === 0">
        <p>No products available! Try later or <router-link :to="{name: 'contact'}">contact us</router-link>.</p>
      </div>
      <div v-else class="row">
        <div v-for="product in products" :key="product.id" class="col-sm">
          <ProductCard
            :product_name="product.name"
            :product_price="product.price"
            :product=product
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ProductService from '@/components/services/ProductService'
import ProductCard from '@/components/card/ProductCard.vue'


// Create an instance of the store
const route = useRoute();
var products = ref([])
var loading = ref(false)

const fetchProducts = async() => {
  try {
    loading.value = true;
    const company_id = route.params.company_id;
    const response = await ProductService.getProducts(company_id);
    products.value = response.data;
    loading.value = false
  }catch(error) {
    console.error('Failed to fetch products:', error);
    loading.value = false
  }
};

onMounted(async () => {
  await fetchProducts();
})


</script>

<style>
.poetsen-one-regular {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.custom-background {
  background-color: rgb(202, 224, 172);
}

body {
  padding-top: 30px;
}
</style>
