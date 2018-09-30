import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import HelloWorld2 from '@/components/HelloWorld2'
//import HelloWorld3 from '@/components/HelloWorld3'

Vue.use(Router)

const home = {
  template: '<div class="v-fix">home component!</div>'
};
const about = {
  template: '<div class="v-fix v-bis">about component!</div>'
};
const skills = {
  template: '<div class="v-fix">skills component!</div>'
};
const works = {
  template: '<div class="v-fix v-bis">works component!</div>'
};
const contact = {
  template: '<div class="v-fix">contact component!</div>'
};

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/skills',
      component: skills
    },
    {
      path: '/works',
      component: works
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }//,
    //{ path: '/tab-3', name: 'HelloWorld2', component: HelloWorld2 },
    //{ path: '/tab-4', name: 'HelloWorld3', component: HelloWorld3 }
  ]
})
