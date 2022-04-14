<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="../images/ultimatelogo.png" />
        </router-link>
        <h1>Utah Smash Ultimate Player Roster</h1>
      </div>
      <div id="side">
        <router-link to="/stats">
          <div class="menu-item stats">
            <img src="../images/percent.png" />
            <p>Search by Stats</p>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="menu-item">
            <img src="/images/love.png" />
            <p>{{ this.$root.$data.numItems }} items</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
  background-color: #f9f8f9;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#brand h1 {
  text-align: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

#side img {
  width: 70px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-item p {
  margin: 0px;
}

.stats {
  margin-right: 50px;
}
</style>
