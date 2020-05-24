import Vue from "vue";
import App from "./App";

//createElement = h

new Vue({
    render: (h) => h(App),
  }).$mount('#app');
  

//lub:
// new Vue({
//     el: "#app",
//     render: (h) => h(App),
//   });
  

