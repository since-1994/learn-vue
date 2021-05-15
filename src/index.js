import Vue from "vue";
import App from "./App.vue";

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");

var appHeader = {
  template: "<header>{{num}}</header>",
  props: ["num"],
};

new Vue({
  el: "#app",
  components: {
    "app-footer": {
      template: "<footer>{{propsdata}}</footer>",
      props: ["propsdata"],
    },
    "app-header": appHeader,
  },
  data: {
    message: "hello world",
    num: 1,
  },
});
