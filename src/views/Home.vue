<template>
  <div
    v-if="show"
    :class="$style.home">
    <h1>Character structures</h1>
    <button
      :class="$style.goButton"
      @click="goToTest">
      Let's go
    </button>
    <button
      :class="$style.backButton"
      @click="goToResults">
      Go back
    </button>
  </div>
</template>

<script>

export default {
  name: 'Home',

  data() {
    return {
      show: false,
    };
  },

  created() {
    // TODO: refactor it
    this.$nextTick(() => {
      setTimeout(() => {
        this.show = true;
      }, 500);
    });
  },

  methods: {
    async goToTest() {
      await this.$router.push({ path: 'test' });
    },

    async goToResults() {
      await this.$router.push({ path: 'results' });
    },
  },
};
</script>

<style lang="scss" module>
  .home {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 66px;
      text-transform: uppercase;
      color: #c00000;
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

    .goButton {
      background: #000;
      margin-bottom: 20px;
    }

    .backButton {
      background: #757070;
    }
  }
</style>
