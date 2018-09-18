<template>
  <v-app id="app">
    <v-toolbar dark color="primary">
      <v-spacer/>
      <v-toolbar-items>
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/create" flat>Create</v-btn>
        <v-btn to="/edit" flat>Edit</v-btn>
        <v-btn to="/about" flat>About</v-btn>
      </v-toolbar-items>
      <v-spacer/>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>

<style lang="scss">
</style>
