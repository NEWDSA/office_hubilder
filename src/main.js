import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import "vant/lib/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './assets/main.css'

const app = createApp(App).use(router);  


app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }