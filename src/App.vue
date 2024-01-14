<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheSidebar from './components/TheSidebar.vue';
import TheHome from './components/TheHome.vue';
import article from '/src/components/article.vue';
</script>


<template>
  <v-app>
    <TheSidebar/>
      <TheHeader/>
        <v-main>
          <router-view/>
        </v-main>
    <TheFooter/>
  </v-app>
</template>
  
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>