import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/style.css'
import router from './router'
import ajax from 'vuejs-ajax'

createApp(App).use(router).use(ajax).mount('#app')
