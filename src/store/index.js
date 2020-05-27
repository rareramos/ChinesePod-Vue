import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [
      // {
      //   word: 'out',
      //   correct: 0,
      //   descriptions: [
      //     '',
      //     'It\'s correct that this character is made up of two parts. However, these two parts '
      //     + 'need to be glued together.',
      //     'It\'s incorrect variant',
      //   ],
      // },
      {
        word: 'mouth',
        correct: 0,
        descriptions: [
          '',
          'The character we are looking for resembles an open mouth. Maybe try to open it up a '
          + 'bit more?',
          'This character did look like this thousands of years ago. However, modern characters '
          + 'have developed into square shapes.',
        ],
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
