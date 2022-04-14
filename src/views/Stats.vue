<template>
  <div>
    <div class="full-search">
      <h2>Find players above a win percentage:</h2>
      <div class="wrapper">
        <div class="search">
          <form class="pure-form">
            <i class="fas fa-search"></i><input v-model="ratio" />
          </form>
        </div>
      </div>
    </div>
    <PlayerList :players="players" />
  </div>
</template>

<script>
import PlayerList from "../components/PlayerList.vue";
export default {
  name: "Stats",
  components: {
    PlayerList,
  },
  data() {
    return {
      ratio: "",
    };
  },
  computed: {
    players() {
      return this.$root.$data.players.filter(
        (player) => this.winloseRatio(player) > parseInt(this.ratio)
      );
    },
  },
  methods: {
    select(country) {
      this.country = country;
    },
    winloseRatio(player) {
      return (
        (parseInt(player.wins) /
          (parseInt(player.wins) + parseInt(player.loses))) *
        100
      ).toFixed(2);
    },
  },
};
</script>

<style scoped>
.full-search {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
