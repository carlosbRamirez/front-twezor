import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue';

import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'
import inicio from '../components/inicio.vue'
import Home from '../components/Home.vue'
import Account from '../components/Account.vue'
import Notificacion from '../components/Notificacion.vue'

const routes = [
  
  {
    path: '/',
    name: 'root',
    component: App,
  },
  {
    path: '/',
    name: 'notification',
    component: Notificacion,
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: inicio,
  },
  {
      path: '/user/logIn',
      name: "logIn",
      component: LogIn,

  },
  {
    path: '/user/home',
    name: "home",
    component: Home,

},
{
  path: '/user/account',
  name: "account",
  component: Account,

},
  {
    path: '/user/signUp',
    name: 'signUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUp,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
