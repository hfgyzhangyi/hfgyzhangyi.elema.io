import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import Vuex from 'vuex'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import './assets/css/my-mint.css'
import './assets/js/global.js'
import MyLi1 from '@/components/MyLi1'

Vue.use(MintUI);
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
Vue.component(MyLi1.name,MyLi1);
var store=new Vuex.Store({
  state:{
    navTabSelected:"首页"
  },
  mutations:{
    modifyNavTabSelected(state,selected){
      state.navTabSelected=selected;
    }
  },
  getters:{
    getNavTabSelected:function(state){
      return state.navTabSelected;
    }
  },
  actions:{
    modifyNavTabSelectedFun(context,selected){
      context.commit("modifyNavTabSelected",selected);
    }
  }
});
Vue.filter("phoneNumberFilter",function(val){
  if(val!="登录后享受更多特权"){
    return val.slice(0,3)+"****"+val.slice(7);
  }else{
    return val;
  }
});
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  store,
  watch:{
    '$route':function(from,to){
      document.body.scrollTop=0;
      document.documentElement.scrollTop=0;
    }
  }
})
