<template>
  <v-container class="home">
    <v-flex 
      xs12 
      md8 
      offset-md2 
      lg6 
      offset-lg3>
      <h3>Testing App</h3>
      <p>Choose test to solve, if there is no test you can create them!</p>
      <TestCardsBlock/>
    </v-flex>
  </v-container>
</template>

<script>
// @ is an alias to /src
import TestCardsBlock from "@/components/TestCardsBlock.vue";

export default {
  name: "Home",
  components: {
    TestCardsBlock
  }
};
</script>
<style lang="scss">
</style>
