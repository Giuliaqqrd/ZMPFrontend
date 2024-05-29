<template>
  <div class="container">
    <Heads/>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from './Footer.vue';
import Heads from '@/components/Heads.vue';
</script>
