<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="item of items" :key="item.id">
        <div class="image">
          <img :src="'/images/products/' + item.image" />
        </div>
        <div class="info">
          <div class="specifics">
            <h1>{{ item.name }}</h1>
            <p>{{ item.country }}</p>
          </div>
          <div class="quantity">
            <h3>Total in cart:</h3>
            <h3>{{ item.quantity }}</h3>
          </div>
        </div>
        <div class="price">
          <h2>${{ totalPrice(item) }}</h2>
          <button v-on:click="RemoveToCart(item)" class="auto">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartList",
  props: {
    items: Array,
  },
  methods: {
    RemoveToCart(product) {
      let index = this.$root.$data.cart.indexOf(product);
      this.$root.$data.numItems -= this.$root.$data.cart[index].quantity;
      this.$root.$data.cart[index].quantity = 0;
      this.$root.$data.cart.splice(index, 1);
    },
    totalPrice(item) {
      let priceAsString = item.price;
      let priceAsFloat = parseFloat(priceAsString.substring(1));
      return (item.quantity * priceAsFloat).toFixed(2);
    },
  },
  computed: {},
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #0cd40c;
  color: #000;
  padding: 10px 30px;
  height: 100px;
  display: flex;
  flex: wrap;
  justify-content: space-between;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

h3 {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
