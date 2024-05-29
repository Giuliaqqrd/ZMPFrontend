<template>

  <new-nav-bar v-if="sessionStore.getIsAuth && sessionStore.getUser.role === 0"></new-nav-bar>
  <NavbarCompany v-if="sessionStore.getIsAuth && sessionStore.getUser.role === 1"></NavbarCompany>

  <cart-view></cart-view>
  <div class="container">
  <router-view></router-view>
  <footer>
    <Footer></Footer>
  </footer>
</div>
</template>

<script setup>
import NewNavBar from './components/NewNavBar.vue'
import CartView from './components/CartView.vue'
import Footer from './components/Footer.vue'
import {useSessionStore} from '@/store/modules/user';
import NavbarCompany from './components/NavbarCompany.vue';

const sessionStore = useSessionStore()
</script>
