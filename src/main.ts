import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { useStore, key } from './store/index.ts'; // Import your Vuex store
import router from './router/index.ts'; // Import your Vue Router

const app = createApp(App);

app.use(useStore, key); // Use the Vuex store
app.use(router); // Use the Vue Router

app.mount('#app');
