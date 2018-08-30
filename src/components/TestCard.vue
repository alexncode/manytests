<template>
  <div class="test-card">
      <h3 class="title">{{ test.name }}</h3>
      <p class="description">{{ test.description }}</p>
      <router-link v-if='mode==="show"' class="btn" :to="'/test/'+test.url">Start</router-link>
      <router-link v-if='mode==="edit"' class="btn" :to="'/update/'+test.url">Edit</router-link>
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
.test-card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem 1rem 2rem;
  background-color: #f2f2f2;
  .description {
    padding-bottom: 2rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    text-decoration: none;
    color: rgb(29, 29, 29);
  }
  .btn:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
}
</style>
