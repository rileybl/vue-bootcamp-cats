import { createApp } from 'vue'
import './styles/core.scss'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import pinia from "./store";

const app = createApp(App)

app.use(pinia);
app.use(router);
app.mount('#app')
