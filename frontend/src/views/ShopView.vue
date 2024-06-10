<template>
    <body>
        <div class="position-relative custom-background overflow-hidden text-center">
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-4 fw-normal poetsen-one-regular">Our Companies</h1>
      <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts.</p>
      <a class="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
  </div>
  <div class="container p-5 position-relative">
  <div class="row">
  <div class="col-sm" v-for="company in companies" :key="company.id">
    <ShopCard :company_name="company.name" :company_id = "company.id"></ShopCard>
</div>
</div>
</div>
</body>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import ShopService from '@/components/services/ShopService.js'
import ShopCard from '@/components/card/ShopCard.vue'

var companies = ref([])


const fetchCompanies = async () => {
  try {
    const response = await ShopService.getCompany();
    companies.value = response.data;
  } catch (error) {
    console.error('Failed to fetch companies:', error);
  }
};


onMounted(() => {
  fetchCompanies();
});


</script>
<style scoped>
.custom-background {
    background-color: rgb(237, 213, 135);
}

.pad {
  padding-top: 60px;
}
</style>