import { createApp } from "vue";
import "normalize.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/styles.scss";
import "material-design-icons-iconfont";
import components from "@/components/UI";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
