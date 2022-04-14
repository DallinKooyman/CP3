import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home.vue";
import Stats from "../views/Stats.vue";
import Favorite from "../views/Favorite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/stats",
    name: "stats",
    component: Stats,
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
