<template>
  <div class="definition">
      <h3>Testing App</h3>
        <p>Choose test to solve, if there is no test you can create them!</p>
  </div>
</template>

<script>
export default {
  name: "Definition"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.definition {
  width: var(--big-screen);
  margin: 0;
  border-radius: 5px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  justify-self: center;
}
@media only screen and (max-width: 560px) {
  .definition {
    width: var(--small-screen);
  }
}
</style>
