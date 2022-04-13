<template>
  <div id="back">
    <h1>Your Cart</h1>
    <div v-if="hasProducts">
      <CartList :items="cart" />
    </div>
    <div v-else>
      <h2>Your cart is empty. Once you add something, it will appear here!</h2>
    </div>
  </div>
</template>
<script>
import CartList from "../components/CartList.vue";
export default {
  name: "Cart-List",
  components: {
    CartList,
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
    hasProducts() {
      return this.$root.$data.cart.length > 0 ? true : false;
    },
  },
};
</script>

<style>
#back {
  background-color: rgba(172, 172, 172, 0.411);
}
</style>
