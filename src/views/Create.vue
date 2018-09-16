<template>
  <v-container>
    <v-flex xs12 md8 offset-md2 lg6 offset-lg3>
      <v-stepper v-model="progress">
        <v-stepper-header>
          <v-stepper-step :complete="progress > 1" step="1">Create test</v-stepper-step>
          <v-divider/>
          <v-stepper-step :complete="progress > 2" step="2">Add answers</v-stepper-step>
          <v-divider/>
          <v-stepper-step step="3">Finish</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="pa-3">
              <v-form ref="form" v-model="valid">
                <v-text-field v-model="name" :rules="nameRules" :counter="50" label="Name" required/>
                <v-textarea v-model="description" :rules="descriptionRules" label="Description" required/>
                <v-text-field v-model.number="numberOfQuestions" :rules="numberOfQuestionsRules" label="Number of questions" required/>
                <v-text-field v-model="color" :rules="colorRules" label="Theme color" hint="#f947ca" required/>
                <v-btn :disabled="!valid" @click="submit">submit</v-btn>
              </v-form>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card>
              <v-card-title>
                <h3>Current question {{ currentQuestion }}</h3>
              </v-card-title>
              <v-form ref="questionForm" v-model="questionValid">
                <v-textarea v-model="question" :rules="questionRules" :counter="250" label="Question" class="pa-3" required/>
                <v-text-field v-model="answer" :rules="answerRules" :counter="50" label="Answer" class="pa-3" required/>
                <v-btn v-if="currentQuestion === numberOfQuestions" :disabled="!questionValid" @click="submitQuestions">submit</v-btn>
              </v-form>
              <v-card-actions>
                <v-pagination :disabled="!questionValid" v-model="currentQuestion" :length="numberOfPages" />
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <v-stepper-content step="3" class="text-xs-center">
            <v-icon>check</v-icon> Finish
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-flex>
  </v-container>
  <!-- <div class="create">
    <h1>{{ title }}</h1>
    <TestForm v-if='state === 1' @create-test="processTest"/>
    <QuestionsForm v-if='state === 2' :slug='slug' @all-done='processQuestions'/>
    <div v-if='state == 3' class="success">Success!</div>
  </div> -->

  <!-- name: "Some test 1",
      description: "Test to guess what your number is",
      url: "some-test-1",
      numberOfQuestions: 15,
      color: "#fff",
      questions: [] -->
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
      valid: false,
      questionValid: false,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => v.length <= 50 || "Name must be less than 50 characters"
      ],
      description: "",
      descriptionRules: [v => !!v || "Description is required"],
      numberOfQuestions: 1,
      numberOfQuestionsRules: [
        v => !!v || "Number of questions is required",
        v => /^\d+$/.test(v) || "Must be a number"
      ],
      color: "#ffffff",
      colorRules: [
        v => !!v || "Color is required",
        v =>
          /^#[a-fA-F0-9]{6}$/.test(v) ||
          "Color must be in this format #nnnnnn where n in range 0-f"
      ],
      question: "",
      questionRules: [
        v => !!v || "Question is required",
        v => v.length <= 250 || "Name must be less than 250 characters"
      ],
      answer: "",
      answerRules: [
        v => !!v || "Answer is required",
        v => v.length <= 50 || "Answer must be less than 50 characters"
      ],
      currentQuestion: 1,
      progress: 1,
      questions: []
    };
  },
  computed: {
    numberOfPages: function() {
      return parseInt(this.numberOfQuestions) || 0;
    }
  },
  watch: {
    $route(to) {
      this.title = `You can ${to.name} test here`;
    },
    currentQuestion: function(val) {
      this.$refs.questionForm.reset();
      this.question = "";
      this.answer = "";
      let question = this.questions[val - 1];
      if (question !== undefined) {
        this.question = question.question;
        this.answer = question.answer;
      }
    }
  },
  created() {
    if (this.$route.name === "update") {
      let slug = this.$route.params.name;
      let test = this.$root.store.tests[slug];
      this.name = test.name;
      this.description = test.description;
      this.numberOfQuestions = test.numberOfQuestions;
      this.color = test.color;
      this.questions = test.questions;
      this.question = test.questions[0].question;
      this.answer = test.questions[0].answer;
    }
  },
  updated: function() {
    if (this.questions.length >= this.currentQuestion) {
      this.questions[this.currentQuestion - 1] = {
        question: this.question,
        answer: this.answer
      };
    }
  },
  methods: {
    submit: function() {
      this.progress += 1;
      this.questions = [
        ...this.questions,
        ...Array(this.numberOfQuestions - this.questions.length)
      ];
    },
    submitQuestions: function() {
      //TODO check all questions for existing
      let slug = slugify(this.name);
      this.$root.store.tests[slug] = {
        name: this.name,
        description: this.description,
        url: slug,
        numberOfQuestions: this.numberOfQuestions,
        color: this.color,
        questions: this.questions
      };
      this.progress += 1;
    }
  }
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
</script>

<style lang="scss">
</style>
