<template>
  <v-container class="home">
    <v-flex 
      xs12 
      md8 
      offset-md2 
      lg6 
      offset-lg3>
      <TestCardsBlock :mode="'edit'" />
    </v-flex>
  </v-container>
</template>
<script>
import TestCardsBlock from "@/components/TestCardsBlock.vue";
export default {
  components: {
    TestCardsBlock
  }
};
</script>

<style lang="scss">
</style>
