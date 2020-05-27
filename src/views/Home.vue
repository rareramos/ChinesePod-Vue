<template>
  <div
    v-if="show"
    :class="$style.home">
    <h1>Character structures</h1>
    <particle-effect-button
      :visible.sync="goButtonOptions.visible"
      :animating.sync="goButtonOptions.animating"
      :options="goButtonOptions"
      :cls="$style.goButton">
      Let's go
    </particle-effect-button>
    <button
      :class="$style.backButton"
      @click="goToResults">
      Go back
    </button>
  </div>
</template>

<script>
import ParticleEffectButton from "vue-particle-effect-buttons";

export default {
  name: 'Home',

  components: {
    ParticleEffectButton,
  },

  data() {
    return {
      show: false,
      goButtonOptions: {
        type: "triangle",
        duration: 1500,
        easing: "easeOutQuart",
        size: 6,
        particlesAmountCoefficient: 4,
        oscillationCoefficient: 2,
        color: "#000000",
        onBegin: () => {
          this.runAudioEffect('click letsgo.wav');

          setTimeout(async () => {
            await this.$router.push({ path: 'test' });
          }, 1000);
        },
        visible: true,
        animating: false
      },
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
    async goToResults() {
      this.runAudioEffect('button click.wav');
      await this.$router.push({ path: 'results' });
    },

    runAudioEffect(filename) {
      document.body.click();
      const audio = new Audio(require(`../assets/sounds/${filename}`));
      audio.play();
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
      width: 160px;
      padding: 10px !important;
      background: #000 !important;;
      margin-bottom: 20px !important;;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 28px;
      border-radius: 10px !important;;
    }

    .backButton {
      background: #757070;
    }
  }
</style>
