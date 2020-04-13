<template>
  <v-footer dark padless>
    <v-card flat tile class="indigo lighten-1 white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Let's connect on social media! Please check back periodically for more life updates,
        technical how-to posts, and positive vibes based on the power of Jesus.
        This website was made using the Vue CLI and Vuetify, based on a theme
        <a
          class="white--text"
          href="https://github.com/vuetifyjs/vuetify/tree/master/packages/docs/src/themes/parallax-starter"
          target="_blank"
        >Parallax</a> by John Leider, the founder of Vuetify.
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Jonathan Perry</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { icon: "fab fa-facebook", link: "https://facebook.com/jonnyramen" },
      { icon: "fab fa-twitter", link: "https://twitter.com/jonathanpperry" },
      { icon: "fab fa-github", link: "https://github.com/jonathanpperry" },
      {
        icon: "fab fa-linkedin",
        link: "https://linkedin.com/in/jonathanpperry"
      },
      {
        icon: "fab fa-instagram",
        link: "https://instagram.com/jonathanpperry"
      },
      { icon: "fab fa-spotify", link: "https://open.spotify.com/user/123862514?si=l3y-rtJFRxSRiLcHMpurgg" },
      { icon: "fab fa-untappd", link: "https://untappd.com/user/jonathanperry" },
      { icon: "fab fa-dribbble", link: "https://dribbble.com/jonnyramen" }
    ]
  })
};
</script>