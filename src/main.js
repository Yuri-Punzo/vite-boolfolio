import { createApp } from 'vue'
import App from './App.vue'

/* Import the router  */
import { router } from './router'
/* Tell Vue to use our router */
createApp(App).use(router).mount('#app')

/* Import Bootstrap */
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"