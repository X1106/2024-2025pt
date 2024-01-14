import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '/src/components/TheHome.vue'
import article from '/src/components/article.vue'
import NotFound from '/src/components/NotFound.vue'

const routes = [  
  {
    path: '/',
    name: 'TheHome',
    component: TheHome,
  },
  {
    path: '/article',
    name: 'article',
    component:()=>import('/src/components/article.vue') ,
  },
  {
    path: '/article/:id',
    name: 'articleid',
    component:()=>import('/src/components/Home.vue') ,
    props:true,
    props: routes=>({
    id:Number(routes.params.id)
    })
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router