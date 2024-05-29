<template>
  <div class="card" style="width: 18rem;">
    <img src="@/components/images/verdura.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ product_name }}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <p>Price: {{ product_price }} $</p>
      <form @submit.prevent="handleAddToCart">
        <div class="form-group">
          <label for="quantity">Quantity</label>
          <div class="input-group">
            <input type="number" class="form-control quantity-input" id="quantity" v-model.number="quantity" name="quantity" min="1" max="100">
          </div>
        </div>
        <button @click="addToCart(product)" type="submit" class="btn mt-4 btn-primary">Add</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/store/modules/cart';
defineProps(['product_name', 'product_price', 'product']);

const cartStore = useCartStore();
const quantity = ref(1);
const emit = defineEmits(['add-to-cart']);

const addToCart = (product) => {
  cartStore.addToCart(product, quantity.value)
}

</script>

<style scoped>
.input-group-text {
  cursor: pointer;
}
.quantity-input {
  max-width: 60px;
}
</style>
