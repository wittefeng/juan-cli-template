import { createApp } from 'vue'
import JuanCli from './index'
import App from './App.vue'
const app = createApp(App)
app.use(JuanCli)
app.mount('#app')
