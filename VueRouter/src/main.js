import { createApp } from 'vue'
import App from './App.vue'
// run npm install vue-router in cmd and then import the router here.
import router from "./router"

import './assets/main.css'

// With vue-router installed we need to store createApp(App) in a variable in order to access the .use method prior to mounting the app to the #app div. This is necessary in order to tell Vue to utilize the router.
const app = createApp(App);
app.use(router);
app.mount('#app');

// Without vue-router installed
// createApp(App).mount("#app");
