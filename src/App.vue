<template>
  <v-app>
    <v-app-bar app color="white" height="100">
      <v-avatar class="mr-3" color="grey lighten-5" size="70">
        <v-img src="./assets/john.png" contain max-height="70%"></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">Jonathan Perry's Website</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>
