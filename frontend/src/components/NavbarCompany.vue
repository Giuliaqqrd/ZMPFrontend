<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
        <router-link :to="{name: 'home'}" class="navbar-brand">
            <img src="@/components/images/ZMP.png" alt="" height="50 px" width="50px">
        </router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        </div>

        <div class="dropdown me-5">
        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
            </svg>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {{ notifications.length }}
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-end">
            <li v-if="notifications.length === 0" class="dropdown-item">No notifications</li>
            <li v-for="(notification, index) in notifications" :key="index" class="dropdown-item notification-item">
                <div class="notification-text">{{ notification.text }}</div>
                <div class="notification-datetime">{{ notification.dateTime }}</div>
          </li>
           
        </ul>
        </div>

        <div class="btn-group">
        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
            <img src="@/components/images/azagr1.jpeg" class="profile-picture">
        </button>
        <ul class="dropdown-menu dropdown-menu-lg-end">
            <li><router-link :to="{name: 'manager'}" class="dropdown-item" href="#">Manage</router-link></li>
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
import NotificationService from './services/NotificationService';

var notifications = ref([])

const sessionStore = useSessionStore()


const fetchNotifications = async () => {
  try {
    const response = await NotificationService.getNotification(sessionStore.getUser.id);
    notifications.value = response.data.data;
    console.log(response)
  } catch (error) {
    console.error('Failed to fetch notifications:', error);
  }
};


onMounted(async() => {
    setInterval(fetchNotifications, 5000); // Fetch notifications every 5 seconds
})

// Computed property to check if the cart is not empty


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


.notification-dropdown {
  width: 300px;
}

.notification-item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.notification-text {
  font-weight: bold;
}

.notification-datetime {
  font-size: 0.8em;
  color: gray;
}

</style>