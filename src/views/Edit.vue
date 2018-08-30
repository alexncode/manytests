<template>
  <div class="edit">
    <TestCardsBlock :mode="'edit'" />
  </div>
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
.edit {
  display: grid;
  grid-gap: 1rem;
}
</style>
