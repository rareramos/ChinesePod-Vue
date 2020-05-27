<template>
  <div
    :class="$style.test">
    <transition name="fade">
      <question-card
        v-if="isQuestionShown"
        v-bind="currentQuestion"
        @correct-answer="addCorrectAnswer"
        @same="goToSameQuestion"
        @next="goToNextQuestion" />
    </transition>
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
      isQuestionShown: true,
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
        this.isQuestionShown = false;
        setTimeout(() => {
          this.current += 1;
          this.isQuestionShown = true;
        }, 1500);
      } else {
        await this.$router.push({ path: 'results', query: { answers: this.correctAnswers } });
      }
    },

    goToSameQuestion() {
      this.isQuestionShown = false;
      setTimeout(() => {
        this.isQuestionShown = true;
      }, 1500);
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
