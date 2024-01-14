<script setup>
import {useRoute} from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const id = ref (route.params["id"]);
const urls = "https://p-folio.microcms.io/api/v1/article/"
var str = urls +route.params["id"]
console.log(str)

fetch(str, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_MY_ENV_VARIABLE
        }
      })
        .then(res => res.json())
        .then(json => {
          document.getElementById("title").innerHTML = json.title;
          document.getElementById("content").innerHTML = json.content;
        })
</script>

<template>
  <v-container>
    <v-row  justify="center" align-content="center">
      <v-col style="height: 350px;"  class="mb-16" cols="12">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="97%" cover></v-img>
        <v-breadcrumbs :items="['HOME', 'article',id]"></v-breadcrumbs>
      </v-col>
    <V-col class="mb-9" cols="12"  xl="10" lg="10" md="10" sm="12">
      <v-card class="pa-1 pa-lg-10 " elevation="1" outlined  shaped tile>
        <v-card-title   class=" font-weight-bold text-lg-h4 .text-sm-body-1 mb-1"><p id="title"></p></v-card-title>
        <v-card-subtitle class="mb-3">{{ id }}</v-card-subtitle>
        <v-divider class="mb-4"></v-divider>
        <v-card-text>
          <p class="body-1" id="content"></p>
        </v-card-text>
        <v-card-actions>
          <v-col  cols="12"  xl="12" lg="12" md="12" sm="12" >
            <div align="center">
              <v-btn height="45" width="70%" variant="outlined" to="/article">記事一覧に戻る</v-btn>
            </div>
          </v-col>
        </v-card-actions>
      </v-card>
    </V-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  nmae:'articleid',
  props:{
    id:String
  },
};
</script>

