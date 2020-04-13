import Vue from "vue";
import Router from "vue-router";
import VueDisqus from "vue-disqus";
import Home from "@/components/Home";
import About from "@/components/About";
import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import FAQ from "@/components/FAQ";
import Projects from "@/components/Projects";

Vue.use(Router);
Vue.use(VueDisqus);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        auth: false,
        title: "Jonathan Perry's Website"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/blog/",
      name: "blog",
      component: Blog
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: BlogPost
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/faq",
      name: "faq",
      component: FAQ
    }
  ]
});
