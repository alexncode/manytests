<template>
  <div class="test-card">
    <h3 class="title">{{ test.name }}</h3>
    <p class="description">{{ test.description }}</p>
    <router-link 
      v-if="mode===&quot;show&quot;" 
      :to="'/test/'+test.url" 
      class="btn">Start</router-link>
    <router-link 
      v-if="mode===&quot;edit&quot;" 
      :to="'/update/'+test.url" 
      class="btn">Edit</router-link>
  </div>
</template>

<script>
export default {
  name: "TestCard",
  props: {
    test: Object,
    mode: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
