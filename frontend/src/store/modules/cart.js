import { defineStore } from "pinia";

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        products: []
    }),
    actions: {
        addToCart(product, quantity) {
            const existingProductIndex = this.products.findIndex(item => item.id === product.id);
            if (existingProductIndex !== -1) {
                // Product exists, update the quantity
                this.products[existingProductIndex].quantity += quantity;
            } else {
                // Product does not exist, add to cart
                product.quantity = 1
                this.products.push(product);
            }
        },
        removeFromCart(productId) {
            const productIndex = this.products.findIndex(item => item.id === productId);
            if (productIndex !== -1) {
                this.products.splice(productIndex, 1);
            }
        },
        clearCart() {
            this.products = [];
        }
    },
    getters: {
        cart: (state) => state.products
    },
    persist: true
})