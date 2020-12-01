import Vue from "vue";
import App from "./App.vue";
import Poppins from "./assets/fonts/Poppins.css";
import Montserrat from "./assets/fonts/Montserrat.css";
import Raleway from "./assets/fonts/Raleway.css";
import Style from "./assets/sass/main.css";
import fa from "./fontawesome/css/all.css"
import fa4min from "./fontawesome/css/v4-shims.min.css"
import fa4 from "./fontawesome/css/v4-shims.css"
// import CssPlugin from "./assets/gsap/CssPlugin";
// import TimelineLight from "./assets/gsap/TimelineLight.min.js";
// import TweenLite from "./assets/gsap/TweenLite.min.js"




Vue.config.productionTip = false;

Vue.use(Poppins);
Vue.use(Raleway);
Vue.use(Montserrat);
Vue.use(Style);
Vue.use(fa);
Vue.use(fa4min);
Vue.use(fa4);



new Vue({
	render: (h) => h(App),
}).$mount("#app");
