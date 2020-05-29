import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import apolloProvider from "../graphql";

// CSS Stuff
import vuetify from "./plugins/vuetify";

/* Import the firebase SDK and extend with firestore */
import firebase from "firebase";
require("firebase/firestore");

/* Paste your firebase configuration below */
const config = {
  apiKey: "AIzaSyB51HliPYC6jqPrKYerkxgPYRQTtDKlQ0g",
  authDomain: "jonathanperry-blog.firebaseapp.com",
  databaseURL: "https://jonathanperry-blog.firebaseio.com",
  projectId: "jonathanperry-blog",
  storageBucket: "jonathanperry-blog.appspot.com",
  messagingSenderId: "897122919569",
  appId: "1:897122919569:web:706893461cf468a08f8b30",
  measurementId: "G-69XJPZ2Z3N"
};

/* Initialize firebase with your configuration */
firebase.initializeApp(config);

/* Bind firebase to your Vue instance */
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
  apolloProvider
}).$mount("#app");
