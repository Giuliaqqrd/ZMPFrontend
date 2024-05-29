import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue';
import ProductView from '@/views/ProductView.vue';
import ShopView from '@/views/ShopView.vue';
import LoginView from '@/views/LoginView.vue';
import { useSessionStore } from '@/store/modules/user';
import ProfileView from '@/views/ProfileView.vue';
import LandingView from '@/views/LandingView.vue';
import SignupView from '@/views/SignupView.vue';
import ForbiddenView from '@/views/ForbiddenView.vue';
import ManagerView from '@/views/ManagerView.vue';

export const routes = [
    {
      path: '/',
      meta: {requiresAuth: true},
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView,
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView,
        },
        {
          path: 'product/:company_id',
          name: 'product',
          component: ProductView,
          props: {default: true, nav: true},
        },
        {
          path: 'shop',
          name: 'shop',
          component: ShopView
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView
        },
      
      ]
    },
    
  
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: ForbiddenView // Add this route
    },

    {
      path: '/manager',
      name: 'manager',
      component: ManagerView, // Add this route
      meta: { requiresAuth: true, requiresCompany: true } // Add requiresCompany meta
    },

  ]
 
const history = createWebHistory();

const router = createRouter({
      history,
      routes,
    });

router.beforeEach((to, from, next) => {
  const authStore = useSessionStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isAuth) {
      next('/login');
    } else {
      if (to.matched.some(record => record.meta.requiresCompany)) {
        if (authStore.user.role === 1) {
          next();
        } else {
          next('/forbidden');
        }
      } else {
        if (authStore.user.role === 0) {
          next();
        } else {
          next('/forbidden');
        }
      }
    }
  } else {
    next();
  }
});
export default 
  router


