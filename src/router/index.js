import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
// import BlogPost from "@/components/BlogPost";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home/",
      name: "home",
      component: Home
    },
    {
      path: "/about/",
      name: "about",
      component: Home
    },
    {
      path: "/blog/",
      name: "blog",
      component: Home
    }

    // {
    //   path: "/blog/",
    //   name: "blog-home",
    //   component: BlogHome
    // },
    // {
    //   path: "/blog/:slug",
    //   name: "blog-post",
    //   component: BlogPost
    // }
  ]
});
