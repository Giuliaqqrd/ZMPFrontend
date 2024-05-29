<template>
  <div class="fixed-top">
    <Navbar/>
    <CartView></CartView>
  </div>
<header>
</header>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import CartView from '@/components/CartView.vue';


</script>
<style scoped>
.carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>