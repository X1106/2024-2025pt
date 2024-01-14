<template>
<v-navigation-drawer color="black" to="/" :width="165" class="d-none d-sm-flex ">
  <v-row style="height: 100%;" >
    <v-col cols="12">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class=" text-center text-h6 ">
            Portfolio
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-col >
    <v-col class="d-flex align-end mb-10" cols="12">
      <v-list  nav>
        <v-list-item prepend-icon="mdi-puzzle" title="Top Page" value="Home" to="/">
            <router-link to="/"></router-link>
          </v-list-item>
            <v-list-item prepend-icon="mdi-brush"  title="Article list" value="Article" to="/article">
              <router-link  to="/article"></router-link>
            </v-list-item>
          <v-list-item prepend-icon="mdi-application-variable-outline" title="Gallery" value="Engineer" class="text-decoration-line-through">
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</v-navigation-drawer>
</template>



