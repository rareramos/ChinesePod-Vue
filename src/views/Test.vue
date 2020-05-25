<template>
  <div
    :class="$style.test">
    <question-card
      :details="currentQuestion"
      @correct-answer="addCorrectAnswer"
      @next="goToNextQuestion" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import QuestionCard from '../components/QuestionCard.vue';

export default {
  name: 'Test',

  components: {
    QuestionCard,
  },

  data() {
    return {
      current: 0,
      correctAnswers: 0,
    };
  },

  computed: {
    ...mapState([
      'words',
    ]),

    currentQuestion() {
      if (this.current >= this.words.length) {
        return {};
      }

      return this.words[this.current];
    },
  },

  methods: {
    async goToNextQuestion() {
      if (this.current < this.words.length - 1) {
        this.current += 1;
      } else {
        await this.$router.push({ path: 'results', query: { answers: this.correctAnswers } });
      }
    },

    addCorrectAnswer() {
      this.correctAnswers += 1;
    },
  },
};
</script>

<style lang="scss" module>
  .test {

  }
</style>
