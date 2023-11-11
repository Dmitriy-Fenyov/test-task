import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateContact from '../views/CreateContact.vue'
import ContactCard from '../views/ContactCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'createContact',
      component: CreateContact
    },
    {
      path: '/contact/:id',
      name: 'contactCard',
      component: ContactCard
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ]
})

export default router
