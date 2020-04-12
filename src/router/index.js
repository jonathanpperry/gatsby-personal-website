import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import BlogHome from "@/components/BlogHome";
import BlogPost from "@/components/BlogPost";
import FAQ from "@/components/FAQ";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home/",
      name: "home",
      component: Home,
      meta: {
        auth: false,
        title: "Jonathan Perry's Website"
      }
    },
    {
      path: "/about/",
      name: "about",
      component: About
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    }
  ]
});
