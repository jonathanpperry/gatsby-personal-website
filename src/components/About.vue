<template>
  <v-container>
    <div class="container text-center">
      <v-responsive class="mx-auto">
        <v-avatar class="elevation-12 mb-12" size="128">
          <v-img src="../assets/john.png"></v-img>
        </v-avatar>
      </v-responsive>
      <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>
      <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
        I am a programmer, web developer and hybrid app developer with experience in all of the
        big three web application frameworks (Angular, React, Vue).
        I graduated from the University of Michigan in 2015 and have been living in Japan since 2018 and in Tokyo for about a year and a half.
        Some of my interests include reading, learning languages, playing guitar/singing,
        and learning new programming languages/frameworks. This website is mostly
        for fun, but I hope you enjoy!
      </v-responsive>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      page_title: "About"
    };
  }
};
</script>