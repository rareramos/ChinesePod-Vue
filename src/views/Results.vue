<template>
  <div
    :class="$style.results">
    <h1>Results</h1>
    <h2>{{ $route.query.answers || 0 }}</h2>
    <button
      :class="$style.backButton"
      @click="goToStart">
      Go back
    </button>
  </div>
</template>

<script>
export default {
  name: 'ResultsPage',

  methods: {
    async goToStart() {
      await this.$router.push({ path: '/' });
    }
  }
};
</script>

<style lang="scss" module>
  .results {
    h1, h2 {
      font-size: 66px;
    }

    h1 {
      text-transform: uppercase;
      color: #c00000;
    }

    h2 {
      text-align: center;
    }

    button {
      width: 180px;
      margin: auto;
      padding: 10px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 28px;
      color: #fff;
      border: 0;
      outline: none;
      border-radius: 10px;
      cursor: pointer;
    }

    .backButton {
      background: #757070;
    }
  }
</style>
