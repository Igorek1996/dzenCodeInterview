import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./assets/styles/styles.scss";
import "material-design-icons-iconfont";

const app = createApp(App);

app.use(store).use(router).mount("#app");
