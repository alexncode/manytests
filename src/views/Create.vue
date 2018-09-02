<template>
  <div class="create">
    <h1>{{ title }}</h1>
    <TestForm v-if='state === 1' @create-test="processTest"/>
    <QuestionsForm v-if='state === 2' :slug='slug' @all-done='processQuestions'/>
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
      state: 1,
      slug: ""
    };
  },
  created() {
    // const tests = JSON.parse(window.localStorage.getItem("tests"));
    // for (let i = 0; i < tests.length; i++) {
    //   if (tests[i].url === this.$route.params.name) {
    //     this.testData = tests[i];
    //   }
    // }
  },
  watch: {
    $route(to) {
      this.title = `You can ${to.name} test here`;
    }
  },
  methods: {
    processTest: function(slug) {
      this.slug = slug;
      this.state++;
    },
    processQuestions: function() {
      this.state++;
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
