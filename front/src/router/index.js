import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Mine from '@/components/Mine'
import Find from '@/components/Find'
import Book from '@/components/Book'
import Position from '@/components/Position'

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
      component: Home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    },
    {
      path: '/Position',
      name: 'Position',
      component: Position
    }
  ]
})
