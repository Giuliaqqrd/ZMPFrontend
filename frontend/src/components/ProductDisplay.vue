<template>
  <div class="product-display">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img src="@/components/images/productview.png" class="product-image">
      <div class="product-details">
        <h5 class="product-name">{{ product.name }}</h5>
        <p class="product-quantity">Quantity: {{ product.quantity }}</p>
      </div>
      <button @click="cartStore.removeFromCart(product.id)" class="remove-button">
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import { useCartStore } from '@/store/modules/cart';

const cartStore = useCartStore()
var products = ref([])


onMounted(() => {
  products.value = cartStore.cart
})

</script>

<style scoped>
.product-display {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
}

.product-details {
  flex-grow: 1;
}

.product-name {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}

.product-quantity {
  margin: 0;
  font-size: 0.9rem;
  color: #555;
}

.remove-button {
  background: none;
  border: none;
  color: #d9534f;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
