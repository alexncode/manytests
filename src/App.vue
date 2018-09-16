// What wrong with this programm:
//  No user input checks
//  No comments
//  Inconsistent css
//  Bad ui
//  Tests saved in array => objects better
//  Type of test doing nothing
//  NumberOfAnswers doing nothing
//  No Unit Tests

<template>
  <v-app id="app">
    <v-toolbar 
      dark 
      color="primary">
      <v-spacer/>
      <v-toolbar-items>
        <v-btn 
          to="/" 
          flat>Home</v-btn>
        <v-btn 
          to="/create" 
          flat>Create</v-btn>
        <v-btn 
          to="/edit" 
          flat>Edit</v-btn>
        <v-btn 
          to="/about" 
          flat>About</v-btn>
      </v-toolbar-items>
      <v-spacer/>
    </v-toolbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link> |
      <router-link to="/edit">Edit</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </v-app>
</template>

<style lang="scss">
</style>
