<template>
  <v-app>
    <Navbar />
    <router-view></router-view>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";

export default {
  name: "App",

  components: {
    Home,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
