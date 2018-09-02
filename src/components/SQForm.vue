<template>
  <div class="question-form">
    <h3 class="question-title">Question {{questionNumber}}</h3>
    <label for="question">Question</label>
    <textarea id='question' type="text" rows="10" v-model="text"></textarea>
    <label for="answer">Answer</label>
    <input id='answer' type="text" v-model="answer">
    <div class="buttons">
      <div class="btn btn-left" @click="nextQuestion(-1)">Previous</div>
      <div class="btn btn-right" @click="nextQuestion(1)">Next</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionForm",
  props: {
    questionNumber: Number,
    slug: ""
  },
  data() {
    return {
      text: "",
      answer: ""
    };
  },
  created() {
    this.question = this.$root.store.tests[this.slug].questions[
      this.questionNumber - 1
    ];
    if (this.question) {
      this.text = this.question.text;
      this.question = this.question.question;
    }
  },
  methods: {
    nextQuestion: function(val) {
      this.$root.store.tests[this.slug].questions[this.questionNumber - 1] = {
        text: this.text,
        answer: this.answer
      };
      this.$emit("nextQuestion", val);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.question-form {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  .question-title {
    grid-column: 1 / -1;
  }
  .buttons {
    display: flex;
    justify-self: center;
    grid-column: 1 / -1;
    .btn {
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: rgb(29, 29, 29);
      text-align: center;
      background-color: rgb(248, 225, 160);
      cursor: pointer;
    }
    .btn-left {
      border-right: 1px solid rgba(0, 0, 0, 0.25);
      box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px 0 0 15px;
    }
    .btn-left:hover {
      transform: scale(1.01);
      box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.25);
    }
    .btn-right {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0 15px 15px 0;
    }
    .btn-right:hover {
      transform: scale(1.01);
      box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
