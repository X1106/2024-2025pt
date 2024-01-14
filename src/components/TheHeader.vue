<template>
  <v-app-bar app  dark elevation="1" flat :height="50" class="d-flex d-sm-none">
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <v-toolbar-title></v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" fixed temporary>
    <v-list nav dense>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-title ><v-btn height="45" width="100%" variant="text" to="/">HOME</v-btn></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title><v-btn height="45" width="100%" variant="text" to="/article">Article</v-btn></v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>


