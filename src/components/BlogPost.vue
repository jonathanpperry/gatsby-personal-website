<template>
  <div class="row">
    <div class="col-3">
      <h4 class="pl-3">Recent posts</h4>
      <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
        <router-link :to="'/blog/' + post.slug">
          <v-card class="mx-auto" max-width="400" tile>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{post.title}}</v-list-item-title>
                <v-list-item-subtitle>{{post.summary}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </router-link>
      </div>
    </div>
    <div class="col-6" id="blog-post">
      <h1>{{ post.data.title }}</h1>
      <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <div v-html="post.data.body"></div>
    </div>
  </div>
</template>


<script>
import { butter } from "../buttercms";
export default {
  name: "blog-post",
  data() {
    return {
      page_title: "Blog",
      post: null,
      posts: []
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data;
          console.log("this post is: ", JSON.parse(JSON.stringify(res)));
        })
        .catch(res => {
          console.log(res);
        });
    },
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
  },
  created() {
    this.getPosts();
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.getPost();
      }
    }
  }
};
</script>
<style scoped>
img {
  max-width: 100%;
}
</style>