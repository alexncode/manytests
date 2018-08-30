<template>
  <div class="container">
    <TestCard v-for='(test, key) in tests' 
              v-bind:key='key' 
              v-bind:test='test'
              v-bind:mode='mode'/>
  </div>
</template>

<script>
import TestCard from "./TestCard.vue";

export default {
  name: "TestCardsBlock",
  components: {
    TestCard
  },
  props: {
    mode: {
      default: "show",
      type: String
    }
  },
  data() {
    return {
      tests: Array
    };
  },
  created: function() {
    this.tests = JSON.parse(window.localStorage.getItem("tests"));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  width: var(--big-screen);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
@media only screen and (max-width: 580px) {
  .container {
    width: var(--small-screen);
    grid-template-columns: 1fr;
  }
}
</style>
