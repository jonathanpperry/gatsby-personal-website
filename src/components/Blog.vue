<template>
  <div id="blog-home">
    <h1 class="text-center">{{ page_title }}</h1>
    <div class="row">
      <div class="col-3">
        <h4 class="pl-3">Recent posts</h4>
      </div>
      <div class="col-6" id="blog-post-div">
        <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
        <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
          <router-link :to="'/blog/' + post.slug">
            <article class="media">
              <figure>
                <!-- Bind results using a `:` -->
                <!-- Use a `v-if`/`else` if there is a `featured_image` -->
                <img img id="blog-image" v-if="post.featured_image" :src="post.featured_image" alt />
                <img img id="blog-image" v-else src="https://via.placeholder.com/150" alt />
              </figure>
              <h2>{{ post.title }}</h2>
              <p>{{ post.summary }}</p>
            </article>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { butter } from "../buttercms";
export default {
  name: "blog",
  data() {
    return {
      page_title: "Blog",
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
  },
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>
#blog-image {
  max-width: 100%;
}
</style>