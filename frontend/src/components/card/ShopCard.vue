<template>

    <div class="card" style="width: 18rem;">
      <img src="@/components/images/azagr2.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ company_name }}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <router-link :to="{name: 'product', params: { company_id: company_id }}" rel="noopener" style="text-decoration: none;">
            <ButtonSubmit />
        </router-link>
      </div>
     
    </div>
  </template>
  
  <script setup>
  import ButtonSubmit from '@/components/button/ButtonSubmit.vue';
  
  defineProps(['company_name','company_id'])
  
  </script>