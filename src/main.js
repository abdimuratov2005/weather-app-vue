import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'
import components from './components'
import store from './store/index';
// import router from './router/router.js'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})


app
// .use(router)
    .use(store)
    .mount('#app')