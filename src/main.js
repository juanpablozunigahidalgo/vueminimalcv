import { createApp } from 'vue';
import App from './App.vue'; // Assuming your root component is App.vue
import router from './router'; // Import your router instance

const app = createApp(App);

app.use(router); // Use the router with the app instance

app.mount('#app'); // Mount the app to an element with id 'app' in your HTML