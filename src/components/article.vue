<template>
  <v-container>
    <v-row  justify="center" align-content="center">
      <v-col style="height: 350px;"  class="mb-16" cols="12">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="97%" cover></v-img>
        <v-breadcrumbs :items="['HOME', 'article']"></v-breadcrumbs>
      </v-col>
      <v-col  cols="10"  xl="9" lg="9" md="9" sm="10" class=" border mb-10">
        <v-sheet color="white" width="100%" min-height="110" >
        <v-row>
          <v-col  cols="12"  xl="4" lg="4" md="4" sm="12" >
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100%" width="100%" cover></v-img>
          </v-col>
          <v-col  cols="12"  xl="8" lg="8" md="8" sm="12">
            <v-card flat shaped>
              <v-card-title class="font-weight-bold">テスト記事タイトル:Vo1</v-card-title>
              <v-card-subtitle class="mb-1">2023.12.23</v-card-subtitle>
              <v-divider class="mb-2"></v-divider>
              <v-card-text>テスト本文No1が入ります。テスト本文No1が入ります。テスト本文No1が入ります。テスト本文No1が入ります。テスト本文No1が入ります。テスト本文No1が入ります。テスト本文No1が入ります。テスト本文No1が入ります。</v-card-text>
              <v-card-actions><v-btn to="/article/2023-12-23" color="pink-darken-1" class="ml-auto mr-2 red--text">View More</v-btn></v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        </v-sheet>
      </v-col>
      <v-col  cols="10"  xl="9" lg="9" md="9" sm="10" class=" border mb-10">
        <v-sheet color="white" width="100%" min-height="110" >
          <v-row>
            <v-col  cols="12"  xl="4" lg="4" md="4" sm="12" >
              <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="100%" width="100%" cover></v-img>
            </v-col>
            <v-col  cols="12"  xl="8" lg="8" md="8" sm="12">
              <v-card flat shaped>
                <v-card-title class="font-weight-bold" >テスト記事タイトル:Vo2</v-card-title>
                <v-card-subtitle class="mb-1">2024.12.24</v-card-subtitle>
                <v-divider class="mb-2"></v-divider>
                <v-card-text>テスト本文No2が入ります。テスト本文No2が入ります。テスト本文No2が入ります。テスト本文No2が入ります。テスト本文No2が入ります。テスト本文No2が入ります。テスト本文No2が入ります。テスト本文No2が入ります。</v-card-text>
                <v-card-actions><v-btn to="/article/2023-12-24" color="pink-darken-1"  class="ml-auto mr-2">View More</v-btn></v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
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



