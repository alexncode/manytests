<template>
  <div class="home">
    <Definition/>
    <TestCardsBlock/>
  </div>
</template>

<script>
// @ is an alias to /src
import Definition from "@/components/Definition.vue";
import TestCardsBlock from "@/components/TestCardsBlock.vue";

export default {
  name: "home",
  components: {
    Definition,
    TestCardsBlock
  }
};
</script>
<style lang="scss">
:root {
  --color-border: rgb(150, 150, 150);
  --big-screen: 550px;
  --small-screen: 320px;
}
.home {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
}
</style>
