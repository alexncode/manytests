<template>
  <div>
    <v-card v-for="(test, key) in $root.testsArray" :key="key" class="mb-3 pa-2">
      <v-card-title primary-title>
        <h3 class="headline mb-0">{{ test.name }}</h3>
      </v-card-title>
      <v-card-text>
        <div>{{ test.description }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="mode === 'show'" :to="'/test/' + test['.key']" color="light-blue">Solve</v-btn>
        <div v-else>
          <v-btn :to="'/update/' + test['.key']" color="light-blue">Edit</v-btn>
          <v-btn @click="deleteTest(test['.key'])" color="light-blue">Delete</v-btn>
        </div>
      </v-card-actions>
    </v-card>
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
  methods: {
    deleteTest: function(key) {
      this.$root.$firebaseRefs.testsArray.child(key).remove();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
