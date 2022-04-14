<template>
  <div id="back">
    <h1>Your Favorites</h1>
    <div v-if="hasFavorites">
      <FavoriteList :players="favorites" />
    </div>
    <div v-else>
      <h2>
        Your Favorites list is empty. Once you add something, it will appear
        here!
      </h2>
    </div>
  </div>
</template>
<script>
import FavoriteList from "../components/FavoriteList.vue";
export default {
  name: "Favorite-List",
  components: {
    FavoriteList,
  },
  computed: {
    favorites() {
      return this.$root.$data.favorites;
    },
    hasFavorites() {
      return this.$root.$data.totalFavorites > 0 ? true : false;
    },
  },
};
</script>

<style>
#back {
  background-color: rgba(172, 172, 172, 0.411);
}
</style>
