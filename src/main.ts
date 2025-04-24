import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import pages
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ActivitiesPage from './pages/ActivitiesPage.vue'
import ActivityDetail1Page from './pages/ActivityDetail1Page.vue'
import ActivityDetail2Page from './pages/ActivityDetail2Page.vue'
import ActivityDetail3Page from './pages/ActivityDetail3Page.vue'
import SelfReflectionPage from './pages/SelfReflectionPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, meta: { title: 'Home' } },
    { path: '/about', component: AboutPage, meta: { title: 'About' } },
    { path: '/activities', component: ActivitiesPage, meta: { title: 'Activities' } },
    { path: '/activity/1', component: ActivityDetail1Page, meta: { title: 'Project Alpha' } },
    { path: '/activity/2', component: ActivityDetail2Page, meta: { title: 'Project Beta' } },
    { path: '/activity/3', component: ActivityDetail3Page, meta: { title: 'Project Gamma' } },
    { path: '/reflection', component: SelfReflectionPage, meta: { title: 'Self Reflection' } },
    { path: '/:pathMatch(.*)*', component: NotFoundPage, meta: { title: 'Page Not Found' } }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Your Portfolio` || 'Your Portfolio'
  next()
})

// Create app
const app = createApp(App)
app.use(router)
app.mount('#app')