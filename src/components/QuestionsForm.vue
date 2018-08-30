<template>
  <div class="questions-form">
    <SQForm :questionNumber='currentQuestion'  
            :question='questions[currentQuestion - 1]'
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
    questions: Array
  },
  data() {
    return {
      currentQuestion: 1
    };
  },
  methods: {
    nextQuestion: function(val, inc) {
      this.questions[this.currentQuestion - 1] = val;
      this.currentQuestion += inc;
      if (this.currentQuestion > this.questions.length) {
        this.$emit("save-questions", this.questions);
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
