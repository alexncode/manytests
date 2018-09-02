<template>
  <div class="test-form">

    <!-- Name of the test -->
    <div class="error">{{ error.name }}</div>
    <label for="name">Name</label>
    <input id='name' type="text" v-model="test.name" @input="validateName">

    <!-- Description of the test -->
    <div class="error">{{ error.description }}</div>
    <label for="description">Description</label>
    <textarea id='description' type="text" rows="10" v-model="test.description"></textarea>

    <!-- Type of the test -->
    <div class="error">{{ error.type }}</div>
    <label for="type">Type of test</label>
    <select id="type" v-model="type">
      <option value="numeric">Numeric</option>
      <option value="variant">Variant</option>
    </select>

    <!-- Number of questions of the test -->
    <div class="error">{{ error.q_number }}</div>
    <label for="q_number">Number of questions</label>
    <input id='q_number' type="number" v-model.number="test.numberOfQuestions">

    <!-- Number of answers for each question of the test -->
    <div class="error">{{ error.a_number }}</div>
    <label for="a_number">Number of answers for each</label>
    <input id='a_number' type="text" v-model.number="test.numberOfAnswers">

    <!-- Color theme of the test -->
    <div class="error">{{ error.t_color }}</div>
    <label for="t_color">Color theme of test</label>
    <input id='t_color' type="text" v-model="test.color">

    <!-- Create button of the test -->
    <div class="btn" @click="validateForm">Create</div>
  </div>
</template>

<script>
export default {
  name: "TestForm",
  // props: {
  //   test: {
  //     default: () => {
  //       return {
  //         name: "",
  //         description: "",
  //         url: "",
  //         numberOfQuestions: "",
  //         numberOfAnswers: "1",
  //         color: "#fff"
  //       };
  //     }
  //   }
  // },
  data() {
    return {
      type: "",
      test: {
        name: "",
        description: "",
        url: "",
        numberOfQuestions: "",
        numberOfAnswers: "1",
        color: "#fff"
      },
      error: {
        name: "",
        description: "",
        type: "",
        q_number: "",
        a_number: ""
      }
    };
  },
  methods: {
    validateForm() {
      // if (this.name.length <= 5) {
      //   this.error.name = "Name should me longer than 5 characters";
      // }
      // if (this.description.length <= 15) {
      //   this.error.description = "Description should be longer than 15 symbols";
      // }
      // if (this.type !== "numeric" && this.type !== "variant") {
      //   this.error.type = "Type should be numeric or variant";
      // }
      // if (this.q_number <= 0) {
      //   this.error.q_number = "Number of questions should be greater than 0";
      // }
      // if (this.a_number <= 0) {
      //   this.error.a_number = "Number of answers should be more than 0";
      // }
      this.test.url = slugify(this.test.name);
      this.$root.store.tests[this.test.url] = this.test;
      this.$emit("create-test", this.test.url);
    },
    validateName() {
      if (this.test.name.length > 5) {
        this.error.name = "";
      }
      const vm = this;
      //Innefficient waste of memory do better!
      setTimeout(function() {
        if (vm.test.name.length <= 5) {
          vm.error.name = "Name should me longer than 5 characters";
        }
      }, 1000);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.test-form {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  .error {
    grid-column: 2;
    color: red;
  }
  .btn {
    grid-column: 1 / -1;
    justify-self: center;
    background-color: #8fd114;
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    text-decoration: none;
    color: rgb(29, 29, 29);
    text-align: center;
  }
  .btn:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
}
</style>
