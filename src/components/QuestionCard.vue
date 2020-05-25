<template>
  <div
    :class="$style.question">
    <h1>
      Find the character for "{{ word }}"
    </h1>
    <div
      :class="$style.variants">
      <div
        v-for="variant in 3"
        :key="variant"
        @click="chooseVariant(variant - 1)">
        <component
          :is="getVariantComponentName(word, variant)"
          :error="error[variant - 1]" />
      </div>
    </div>
    <div
      :class="$style.error">
      <transition name="fade" mode="out-in">
        <div
          v-if="error[selected]">
            {{ details.descriptions[selected] }}
        </div>
      </transition>
    </div>
    <div
      :class="$style.unknown">
      <button
        @click="nextQuestion">
        I don't know
      </button>
    </div>
  </div>
</template>

<script>
import OutVariant1 from './words/out/variant1.vue';
import OutVariant2 from './words/out/variant2.vue';
import OutVariant3 from './words/out/variant3.vue';
import MouthVariant1 from './words/mouth/variant1.vue';
import MouthVariant2 from './words/mouth/variant2.vue';
import MouthVariant3 from './words/mouth/variant3.vue';

export default {
  name: 'QuestionCard',

  components: {
    'out-1': OutVariant1,
    'out-2': OutVariant2,
    'out-3': OutVariant3,
    'mouth-1': MouthVariant1,
    'mouth-2': MouthVariant2,
    'mouth-3': MouthVariant3,
  },

  props: {
    details: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      selected: -1,
      error: [
        false,
        false,
        false,
      ]
    };
  },

  computed: {
    word() {
      return this.details.word || '';
    },
  },

  mounted() {
    console.log('mounted');
  },

  created() {
    console.log('created');
  },

  // mounted() {
  //   Object.assign(this.$data, this.$options.data());
  // },

  methods: {
    nextQuestion() {
      this.$emit('next');
    },

    chooseVariant(variant) {
      this.selected = variant;
      this.$set(this.error, variant, false);

      if (this.details.correct === variant) {
        this.$emit('correct-answer');
        this.nextQuestion();
      } else {
        this.$set(this.error, variant, true);
      }
    },

    getVariantComponentName(word, variant) {
      return `${word}-${variant}`;
    },
  },
};
</script>

<style lang="scss" module>
  .question {
    h1 {
      font-size: 24px;
      text-transform: uppercase;
      color: #c00000;
    }

    .variants {
      display: flex;
      justify-content: center;
      padding: 80px 20px;

      > div {
        width: 200px;
        height: 200px;
        margin: 0 20px;
        border-radius: 20px;
        border: 2px #fff dashed;
        cursor: pointer;

        &:hover {
          border: 2px #7f7f7f dashed;
        }
      }
    }

    button {
      width: 225px;
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

    .error {
      height: 82px;

      > div {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 2px #c00000 dashed;
        border-radius: 15px;
      }
    }

    .unknown {
      text-align: right;
      padding: 0 50px;

      button {
        background: #757070;
      }
    }
  }
</style>
