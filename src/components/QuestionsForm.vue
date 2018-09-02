<template>
  <div class="questions-form">
    <SQForm :questionNumber='currentQuestion'  
            :slug='slug'
            @nextQuestion='nextQuestion'/>
  </div>
</template>

<script>
import SQForm from "@/components/SQForm.vue";

export default {
  name: "QuestionsForm",
  components: {
    SQForm
  },
  props: {
    slug: ""
  },
  data() {
    return {
      currentQuestion: 1,
      test: {}
    };
  },
  created() {
    this.test = this.$root.store.tests[this.slug];
    this.test.questions = this.test.questions
      ? this.test.questions
      : Array(this.test.numberOfQuestions);
  },
  methods: {
    nextQuestion: function(inc) {
      this.currentQuestion += inc;
      if (this.currentQuestion > this.test.numberOfQuestions) {
        this.$emit("all-done");
      }
    }
  }
};
</script>

<style lang="scss">
.questions-form {
  background-color: #fff;
}
</style>
