// Import Vue and VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import CV from './views/CvPage.vue';
import Others from './views/OthersPage.vue';
import Contact from './views/ContactPage.vue';
import Mainview from './views/MainviewPage.vue';
import About from './views/AboutSite.vue';

// Define routes
const routes = [
  {
    path: '/',
    component: Mainview,
    children: [
      { path: 'cv', component: CV },
      { path: 'others', component: Others },
      { path: 'contact', component: Contact }
    ]
  },
  // Define routes for language selection
  { path: '/:lang', redirect: '/:lang/cv' }, // Redirect /lang to /lang/cv
  { path: '/:lang/cv', component: CV },
  { path: '/:lang/others', component: Others },
  { path: '/:lang/contact', component: Contact },
  { path: '/:lang/about', component: About }
];


// Create router instance
const router = createRouter({
  history: createWebHistory(''),
  routes
});

export default router;