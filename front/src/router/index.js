import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Find from '@/components/Find'
import Book from '@/components/Book'
import Position from '@/components/Position'
import Login from '@/components/Login'

Vue.use(Router)
const originalPush=Router.prototype.push;
Router.prototype.push=function push(location){
  return originalPush.call(this,location).catch(err=>err);
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        showTab:true
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
        showTab:true
      }
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine,
      meta:{
        showTab:true
      }
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find,
      meta:{
        showTab:true
      }
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book,
      meta:{
        showTab:true
      }
    },
    {
      path: '/Position',
      name: 'Position',
      component: Position,
      meta:{
        showTab:true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
