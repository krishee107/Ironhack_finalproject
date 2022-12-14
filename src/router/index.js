import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  //{ path: '/', component: () => import('../components/Views/Home.vue') },
  {
    path: '/',
    name: 'home',
    component: () => import ('../Views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../Views/Login.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import ('../Views/Registro.vue')
  },
  {
    path: '/archivadas',
    name: 'archivadas',
    component: () => import ('../Views/Archivadas.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import ('../Views/Perfil.vue')
  },
  {
    path: '/historial',
    name: 'historial',
    component: () => import ('../Views/Historial.vue')
  },
  {
    path: '/pomodoro',
    name: 'pomodoro',
    component: () => import ('../Views/Pomodoro.vue')
  }
 // { path: '/about', component: () => import ('../components/Views/About.vue') },
]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router