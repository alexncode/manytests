<template>
  <v-layout class="pa-1">
    <v-flex v-if="!stateResult" xs12 sm6 offset-sm3>
      <h2 class="mt-3 mb-3">Solve this test!</h2>
      <v-card v-for="(question, key) in questions" :key="key" class="mb-3">
        <v-card-title primary-title>
          {{ question.question }}
        </v-card-title>
        <v-card-actions>
          <v-text-field v-model.number="question.user_answer" color="blue darken-2" label="Answer" required />
        </v-card-actions>
      </v-card>
      <v-btn flat color="primary" @click="getResults">Results</v-btn>
    </v-flex>

    <v-flex v-else xs12 sm6 offset-sm3>
      <v-card class="mt-3">
        {{ results }}
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
// @ is an alias to /src
import Question from "@/components/Question.vue";

export default {
  name: "Home",
  components: {
    Question
  },
  data() {
    return {
      questions: Array,
      stateResult: false,
      results: ""
    };
  },
  created: function() {
    const slug = this.$route.params.name;
    const tests = this.$root.testsObj[slug];
    this.name = tests.name;
    this.questions = tests.questions;
    this.answers = Array(this.questions.length);
  },
  methods: {
    checkAnswer: function(val, key) {
      this.answers[key] = val;
    },
    getResults: function() {
      let rightAnswers = this.questions.reduce(
        (ra, an) => ra + (an.user_answer === an.answer ? 1 : 0),
        0
      );
      this.results = `You answered right ${rightAnswers} from ${
        this.questions.length
      } questions.`;
      this.stateResult = true;
    }
  }
};
</script>
<style lang="scss">
</style>
