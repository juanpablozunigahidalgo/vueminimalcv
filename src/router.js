// Import Vue and VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';

// Import components
import CV from './views/CvPage.vue';
import Projects from './views/ProjectsPage.vue';
import Blog from './views/BlogPage.vue';
import Contact from './views/ContactPage.vue';
import Mainview from './views/MainviewPage.vue';

// Define routes
const routes = [
  {
    path: '/',
    component: Mainview,
    children: [
      { path: 'cv', component: CV },
      { path: 'projects', component: Projects },
      { path: 'blog', component: Blog },
      { path: 'contact', component: Contact }
    ]
  },
  // Define routes for language selection
  { path: '/:lang', redirect: '/:lang/cv' }, // Redirect /lang to /lang/cv
  { path: '/:lang/cv', component: CV },
  { path: '/:lang/projects', component: Projects },
  { path: '/:lang/blog', component: Blog },
  { path: '/:lang/contact', component: Contact }
];


// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;