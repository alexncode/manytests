<template>
  <div class="container-test">
    <h1 class="test__name">{{ name }}</h1>
    <Question v-for='(question, key) in questions' 
              v-bind:key='key'
              v-bind:question='question' 
              v-bind:result="stateResult"
              @answer='checkAnswer'/>
    <div class='btn' @click='results'>Result</div>
  </div>
</template>


<script>
// @ is an alias to /src
import Question from "@/components/Question.vue";

export default {
  name: "home",
  components: {
    Question
  },
  data() {
    return {
      questions: Array,
      stateResult: false
    };
  },
  created: function() {
    // const tests = JSON.parse(window.localStorage.getItem("tests"));
    const tests = this.$root.store.tests;
    const slug = this.$route.params.name;

    this.name = tests[slug].name;
    this.questions = tests[slug].questions;
    this.answers = Array(this.questions.length);
  },
  methods: {
    checkAnswer: function(val, key) {
      this.answers[key] = val;
    },
    results: function() {
      window.localStorage.setItem(
        "answers",
        JSON.stringify({ name: this.name, answers: this.answers })
      );
      for (let i = 0; i < this.questions.length; i++) {
        this.questions[i].user_answer = this.answers[i];
      }
      this.stateResult = true;
    }
  }
};
</script>
<style lang="scss">
.container-test {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  justify-items: center;
  .test__name {
    margin: 0;
  }
  .btn {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 2rem;
  }
  .btn:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
}
</style>
