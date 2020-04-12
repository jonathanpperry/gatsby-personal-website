<template>
  <v-container>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row align="center" class="white--text mx-auto" justify="center">
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <span
                    class="font-weight-light"
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                  >WELCOME TO</span>

                  <br />

                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >My Website and Blog</span>
                </v-col>

                <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>

        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
          I am a programmer, web developer and hybrid app developer with experience in all of the
          big three web application frameworks (Angular, React, Vue).
          I graduated from the University of Michigan in 2015 and have been living in Japan since 2018 and in Tokyo for about a year and a half.
          Some of my interests include reading, learning languages, playing guitar/singing,
          and learning new programming languages/frameworks. This website is mostly
          for fun, but I hope you enjoy!
        </v-responsive>

        <v-avatar class="elevation-12 mb-12" size="128">
          <v-img src="../assets/john.png"></v-img>
        </v-avatar>

      </v-container>

      <div class="py-12"></div>
    </section>

    <section id="features" class="grey lighten-3">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">MY MISSION</h2>
        <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
          I lost my job in OKC in September 2017, which was the single most difficult
          and life-rattling thing that's happened to me in my life.
          <br />I began thinking about what was important to me and how I wanted to use
          my life to its maximum effect. At the time, I believed and still do believe
          that this world is not my home, and I wanted to store up treasure in heaven,
          and God really began to lay Japan more and more on my heart. As I have studied
          Japanese periodically throughout my life, I had my heart set upon coming to and
          living in Japan. Though my initial set of interviews weren't very successful,
          God seemingly miraculously opened up a door for me to get more than I could
          have even asked for or imagined, the best visa that is possible enabling me to
          work in the field I really wanted to work in, but also allowing me to fall back
          on other jobs such as teaching English if need be.
          <br />I currently attend Hillsong Tokyo, and am getting really excited about
          being able to volunteer more, and am really believing to see our campus explode
          and grow in Tokyo, but it's only going to happen if we are Jesus' hands and feet,
          and so I am really hoping to continue to come out of my shell and become a leader
          and to see this nation change. In the future, if it becomes difficult to support
          myself, I may ask for funding, but for now I have found what is just about a dream
          job working in programming here in my dream city of Tokyo, and life will never quite
          be perfect, but with the peace of God it can be pretty good.
        </v-responsive>
      </v-container>

      <div class="py-12"></div>
    </section>

    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
              <div class="text-center">
                <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                <div class="title font-weight-regular text-uppercase" v-text="title"></div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section id="blog">
      <div class="py-12"></div>

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <!-- Butter CMS component posts -->
        <BlogHome />
      </v-container>
    </section>

    <v-sheet id="contact" color="#333333" dark tag="section" tile>
      <div class="py-12"></div>

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-theme-provider light>
          <v-row>
            <v-col cols="12">
              <v-text-field flat label="Name*" solo></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field flat label="Email*" solo></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field flat label="Subject*" solo></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea flat label="Message*" solo></v-textarea>
            </v-col>

            <v-col class="mx-auto" cols="auto">
              <v-btn color="accent" x-large>Submit</v-btn>
            </v-col>
          </v-row>
        </v-theme-provider>
      </v-container>

      <div class="py-12"></div>
    </v-sheet>
  </v-container>
</template>

<script>
import BlogHome from "./BlogHome";
export default {
  name: "home",
  components: {
    BlogHome
  },
  data() {
    return {
      stats: [
        ["90", "Github Repositories"],
        ["3+", "Mobile App Releases"],
        ["TBD", "Downloads/mo"],
        ["5m", "Total Downloads"]
      ]
    };
  }
};
</script>