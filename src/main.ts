import {createApp} from 'vue'
import {createPinia} from 'pinia'
import VueGtag from "vue-gtag";
import App from './App.vue'
import router from './router'
import './assets/main.scss'

const isProd = import.meta.env.PROD;
const app = createApp(App)

app.use(createPinia())
app.use(router)
if (isProd) {
    app.use(VueGtag, {
        config: {id: "G-ID"}
    })
}
app.mount('#app')
