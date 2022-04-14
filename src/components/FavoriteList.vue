<template>
  <div class="wrapper">
    <div class="players">
      <div class="player" v-for="player in players" :key="player.id">
        <div class="info">
          <div class="header">
            <h1>{{ player.first_name }} {{ player.last_name }}</h1>
            <button v-on:click="unfavoritePlayer(player)" class="auto">
              <img src="/images/favorited.png" />
            </button>
          </div>
          <p>ID: {{ player.id }}</p>
        </div>
        <div class="wins-loses">
          <div class="wins-holder">
            <h2 class="wins">Wins: {{ player.wins }}</h2>
          </div>
          <div class="loses-holder">
            <h2 class="loses">Loses: {{ player.loses }}</h2>
          </div>
        </div>
        <div class="ratio">
          <div v-if="winloseRatio(player) > 90" class="big-win-rate">
            <h2>{{ winloseRatio(player) }}% win rate</h2>
          </div>
          <div v-else-if="winloseRatio(player) > 75" class="good-win-rate">
            <h2>{{ winloseRatio(player) }}% win rate</h2>
          </div>
          <div v-else-if="winloseRatio(player) > 6" class="small-win-rate">
            <h2>{{ winloseRatio(player) }}% win rate</h2>
          </div>
          <div v-else-if="winloseRatio(player) > 4" class="average-rate">
            <h2>{{ winloseRatio(player) }}% win rate</h2>
          </div>
          <div v-else-if="winloseRatio(player) > 25" class="small-lose-rate">
            <h2>{{ winloseRatio(player) }}% win rate</h2>
          </div>
          <div v-else-if="winloseRatio(player) > 1" class="bad-lose-rate">
            <h2>{{ winloseRatio(player) }}% win rate</h2>
          </div>
          <div v-else class="big-lose-rate">
            <h2>{{ winloseRatio(player) }}% win rate</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FavoriteList",
  props: {
    players: Array,
  },
  methods: {
    favoritePlayer(player) {
      player.favorite = true;
      this.$root.$data.favorites.push(player);
      this.$root.$data.totalFavorites += 1;
    },
    unfavoritePlayer(player) {
      player.favorite = false;
      let index = this.$root.$data.favorites.indexOf(player);
      this.$root.$data.favorites.splice(index, 1);
      this.$root.$data.totalFavorites -= 1;
    },
    winloseRatio(player) {
      return (
        (parseInt(player.wins) /
          (parseInt(player.wins) + parseInt(player.loses))) *
        100
      ).toFixed(2);
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

.players {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.player {
  margin: 10px;
  margin-top: 50px;
  width: 450px;
}

.header {
  display: flex;
}

img {
  width: 30px;
  background: none;
}

.info {
  background: #3992f7;
  color: #000;
  padding: 10px 30px;
}

.info h1 {
  font-size: 26px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 16px;
}

.wins-loses {
  display: flex;
  background-color: #d6d6d6;
}

.wins-holder {
  color: rgb(5, 185, 5);
  text-align: center;
  flex: 1;
}

.loses-holder {
  color: rgb(233, 51, 51);
  text-align: center;
  flex: 1;
}

button {
  height: 50px;
  border: none;
  background: #3992f7;
}

.auto {
  margin-left: auto;
}

.ratio {
  display: flex;
}

.big-win-rate {
  background-color: #0f9246;
  flex: 1;
  text-align: center;
}

.good-win-rate {
  background-color: #7ebb42;
  flex: 1;
  text-align: center;
}

.small-win-rate {
  background-color: #fecc09;
  flex: 1;
  text-align: center;
}

.average-rate {
  background-color: #faad14;
  flex: 1;
  text-align: center;
}

.small-lose-rate {
  background-color: #f68e1f;
  flex: 1;
  text-align: center;
}

.bad-lose-rate {
  background-color: #ef4723;
  flex: 1;
  text-align: center;
}

.big-lose-rate {
  background-color: #bc1f26;
  flex: 1;
  text-align: center;
}
</style>
