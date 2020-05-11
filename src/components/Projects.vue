<template>
  <v-container>
    <h1 class="text-center mb-5">{{ page_title }}</h1>
    <v-card dark class="mb-10">
      <div class="row">
        <div class="col-6">
          <a href="https://japaninfojobs.netlify.app" target="_blank">
            <v-img src="../assets/projects/japaninfojobs.png" />
          </a>
        </div>
        <div class="col-6 text-center">
          <p class="display-1">Japan Info Jobs</p>
          <div class="container">
            <p class="body-1">
              Japan Info Jobs is an employment-related job search engine,
              particularly catered to foreigners, for jobs in Japan. Developed during my time
              as an employee at Japan Info, a subsidiary of Fuji TV, this was my
              first application developed in Vue framework and also using Vuetify, this was
              one of my first serious web application development projects.
              <br />
              <br />Technologies used: Vue, Vuetify, Bootstrap Vue, React, and others.
            </p>
          </div>
        </div>
      </div>
    </v-card>
    <v-card dark class="mb-10">
      <div class="row">
        <div class="col-6 text-center">
          <p class="display-1">Gatsby Tech Blog</p>
          <div class="container">
            <p class="body-1">
              The Tokyo Blog (Gatsby Tech Blog) is a single-page web application (SPA) built using
              <a
                href="https://gatsbyjs.org"
                target="_blank"
              >GatsbyJS</a>
              along with some other modern web Technologies.
              <br />
              <br />Technologies used: GatsbyJS, Axios, Firebase cloud functions, Reactstrap.
            </p>
          </div>
        </div>
        <div class="col-6">
          <a href="https://tokyoblog.netlify.app/" target="_blank">
            <v-img src="../assets/projects/tokyoblog.png" />
          </a>
        </div>
      </div>
    </v-card>
    <v-card dark class="mb-10">
      <div class="row">
        <div class="col-6">
          <a href="https://japaninfojobs.netlify.app" target="_blank">
            <v-img src="https://via.placeholder.com/150" />
          </a>
        </div>
        <div class="col-6 text-center">
          <p class="display-1">Placeholder Proj</p>
          <p class="body-1">
            Javascipt is just awesomeeeeeeeeeeee
            <br />
            <br />Technologies used: Javascript.
          </p>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { butter } from "../buttercms";
export default {
  name: "blog",
  data() {
    return {
      page_title: "Projects",
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
        })
        .then(res => {
          this.posts = res.data.data;
        });
    }
  }
};
</script>

<style scoped>
#blog-image {
  max-width: 100%;
}

#project-card {
}
</style>