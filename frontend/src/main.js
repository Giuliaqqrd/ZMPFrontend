import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import {createPinia} from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import vue3GoogleLogin from 'vue3-google-login'


const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '112828250334-hstjp6m1rorrndi0679gq2tmtgm90rpa.apps.googleusercontent.com'
  })
app.use(pinia);
app.use(PrimeVue);
app.use(router);
app.mount('#app');

import "bootstrap/dist/js/bootstrap.js";
