<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <router-link :to="{name: 'home'}" class="navbar-brand">
            <img src="@/components/images/ZMP.png" alt="" height="50 px" width="50px">
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" :class="{ active: isActive('about') }">
                <router-link :to="{name: 'about'}" class="nav-link" >About</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('shop') }">
                <router-link :to="{name: 'shop'}" class="nav-link">Shop</router-link>
            </li>
            <li class="nav-item" :class="{ active: isActive('contact') }">
                <router-link :to="{name: 'contact'}" class="nav-link" href="#">Contact</router-link>
            </li>
        </ul>
        <button class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i class="bi bi-cart"></i>
            <span v-if="isCartNotEmpty" class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
            </span>
        </button>
        </div>
        <!-- Example single danger button -->
        <div class="btn-group">
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            <img :src="picture" class="profile-picture">
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-end">
            <li><router-link :to="{name: 'profile'}" class="dropdown-item" href="#">View profile</router-link></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="sessionLogout">Logout</a></li>
        </ul>
        </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useCartStore } from '@/store/modules/cart';
import {useSessionStore} from '@/store/modules/user';
import router from '@/router';



const route = useRoute();
const cartStore = useCartStore()
const sessionStore = useSessionStore()

const picture = ref()

const isActive = (name) => {
  return route.name === name;
};

onMounted(() => {
    picture.value = sessionStore.getUser.picture
})

// Computed property to check if the cart is not empty
const isCartNotEmpty = computed(() => cartStore.cart.length > 0);


const sessionLogout = () => {
    sessionStore.logout()
    router.push({name: 'landing'})
}

</script>

<style scoped>
.profile-picture {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover; /* Ensures the image covers the area without stretching */
}


</style>