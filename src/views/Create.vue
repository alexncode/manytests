<template>
  <div class="create">
    <h1>{{ title }}</h1>
    <TestForm v-if='state === 1' @create-test="processTest" :test='testData'/>
    <QuestionsForm v-if='state === 2' :questions='testData.questions' @save-questions='processQuestions'/>
    <div v-if='state == 3' class="success">Success!</div>
  </div>
</template>

<script>
import TestForm from "@/components/TestForm.vue";
import QuestionsForm from "@/components/QuestionsForm.vue";

export default {
  name: "Create",
  components: {
    TestForm,
    QuestionsForm
  },
  data() {
    return {
      title: `You can ${this.$route.name} test here`,
      currentQuestion: 1,
      testData: {},
      state: 1
    };
  },
  created() {
    const tests = JSON.parse(window.localStorage.getItem("tests"));
    for (let i = 0; i < tests.length; i++) {
      if (tests[i].url === this.$route.params.name) {
        this.testData = tests[i];
      }
    }
  },
  watch: {
    $route(to) {
      this.title = `You can ${to.name} test here`;
    }
  },
  methods: {
    processTest: function(test_obj) {
      this.testData = test_obj;
      if (!this.testData.questions) {
        this.testData.questions = Array(this.testData.numberOfQuestions);
      }
      this.state++;
    },
    processQuestions: function(questions) {
      this.state++;
      this.testData.questions = questions;
      this.saveTest();
    },
    saveTest: function() {
      let allTest = JSON.parse(window.localStorage.getItem("tests"));
      allTest.push(this.testData);
      window.localStorage.setItem("tests", JSON.stringify(allTest));
    }
  }
};
</script>

<style lang="scss">
.create {
  width: var(--big-screen);
  margin: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: #f2f2f2;
  display: grid;
  grid-gap: 1rem;
}
</style>
