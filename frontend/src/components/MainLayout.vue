<template>

  <Heads/>
  
  <main>
   <router-view>

   </router-view>
  </main>
<Footer></Footer>
</template>

<script setup>
import Footer from './Footer.vue';
import Heads from '@/components/Heads.vue';

</script>
