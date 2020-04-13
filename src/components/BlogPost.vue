<template>
  <div class="row">
    <div class="col-3">
      <h4 class="pl-3">Recent posts</h4>
    </div>
    <div class="col-6" id="blog-post">
      <h1>{{ post.data.title }}</h1>
      <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <div v-html="post.data.body"></div>

      <router-link
        v-if="post.meta.previous_post"
        :to="/blog/ + post.meta.previous_post.slug"
        class="button"
      >{{ post.meta.previous_post.title }}</router-link>
      <router-link
        v-if="post.meta.next_post"
        :to="/blog/ + post.meta.next_post.slug"
        class="button"
      >{{ post.meta.next_post.title }}</router-link>
    </div>
  </div>
</template>


<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-post",
  data() {
    return {
      post: null
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          console.log("res is: ", res);
          this.post = res.data;
        })
        .catch(res => {
          console.log(res);
        });
    }
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
