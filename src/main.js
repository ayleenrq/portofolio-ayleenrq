import './assets/main.css'
import { createApp } from 'vue'
import Home from './views/Home.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

const home = createApp(Home)

// Mount aplikasi
home.mount('#home')
