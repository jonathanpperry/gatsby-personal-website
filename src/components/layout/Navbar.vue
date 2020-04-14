<template>
  <v-container>
    <v-app-bar app color="white" height="100">
      <router-link to="/" class="brand-logo left">
        <v-avatar class="mr-3" color="grey lighten-5" size="70">
          <v-img src="../../assets/john.png" contain max-height="70%"></v-img>
        </v-avatar>
      </router-link>
      <v-toolbar-title class="font-weight-black headline">Jonathan Perry's Website</v-toolbar-title>
      <v-spacer></v-spacer>

      <div v-if="$vuetify.breakpoint.smAndUp">
        <v-btn text to="/home">HOME</v-btn>
        <v-btn text to="/about">ABOUT</v-btn>
        <v-btn text to="/projects">PROJECTS</v-btn>
        <v-btn text to="/blog">BLOG</v-btn>
      </div>
      <div v-else>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>

    <!--  DRAWER -->
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item class="blue lighten-1">
        <v-list-item-content>
          <v-list-item-title>Where to?</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item to="/home" link>
          <v-list-item-content>
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about" link>
          <v-list-item-content>
            <v-list-item-title>ABOUT</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/projects" link>
          <v-list-item-content>
            <v-list-item-title>PROJECTS</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/blog" link>
          <v-list-item-content>
            <v-list-item-title>BLOG</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: null
    };
  }
};
</script>