<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Shopping Cart</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <!-- Conditional rendering based on cart status -->
      <div v-if="isCartEmpty" class="text-center">
        <i class="bi bi-cart-x" style="font-size: 2rem;"></i>
        <p>No items in cart</p>
      </div>
      <div v-else>
        <ProductDisplay></ProductDisplay>
      </div>
      <div class="d-grid gap-2 mt-3">
        <button class="btn btn-primary" type="button" :disabled="isCartEmpty" @click="buyItems">Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCartStore } from '@/store/modules/cart';
import { useSessionStore } from '@/store/modules/user';
import ProductService from '@/components/services/ProductService'
import ProductDisplay from '@/components/ProductDisplay.vue';

const cartStore = useCartStore();
const sessionStore = useSessionStore();
const isCartEmpty = computed(() => cartStore.cart.length === 0);

const buyItems = async () => {
  // Logic for buying items goes here
  console.log(cartStore.cart)
  const order = {
    products: cartStore.cart,
    user: sessionStore.getUser,
    companyId: cartStore.cart[0]['companyId']
  }
  await addNewOrder(order)
};

const addNewOrder = async (order) => {
  try {
    const result = await ProductService.addNewOrder(order);
    console.log(result)
    alert('Purchase successful!');
    cartStore.clearCart(); // Clear the cart after purchase
  }catch(error) {
    console.error('Failed to add new order:', error);
  }
}

</script>
