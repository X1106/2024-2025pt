import { createApp } from 'vue'
import App from './App.vue'
import router from '../router' // 追加
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import VueScrollTo from "vue-scrollto";




import { registerPlugins } from '@/plugins'
// Components



// Composables


const app = createApp(App).use(router,VueAxios, axios,VueScrollTo)

registerPlugins(app)

app.mount('#app')