import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'

import Home from  './components/Pages/Home'
import Contact from  './components/Pages/Contact'
import About from  './components/Pages/About'
import User from  './components/Pages/User'
import PageNotFound from  './components/404'
import Todos from  './components/Pages/Todos'

Vue.use(VueRouter)

Vue.config.productionTip = false
// const Foo = { template: '<div>foo</div>' }
const appRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home, name:'homeRoute', alias: '/myhome' },
  { path: '/about', component: About, name:'aboutRoute'  },
  { path: '/contact', component: Contact, name:'contactRoute' },
  { path: '/todo', component: Todos, name:'todoRoute' },
  { path: '/user/:id', component: User, name:'userRoute'},
  { path: '*', component: PageNotFound, name:'notfoundRoute' },
];

const routerObj = new VueRouter({
  routes:appRoutes, // short for `routes: routes`
  mode:'history'
});

routerObj.beforeEach((to, from, next) => {
  console.log("from,", from);
  console.log("to,", to);
  next();  
});

routerObj.beforeResolve((to, from, next) => {
  console.log("resolve from,", from);
  console.log("resolve to,", to);
  next();  
});

routerObj.afterEach((to, from, next) => {
  console.log("after from,", from);
  console.log("after to,", to); 
});


new Vue({
  render: h => h(App),
  router:routerObj
}).$mount('#app')
