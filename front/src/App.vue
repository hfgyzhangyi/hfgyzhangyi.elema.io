<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected" fixed class="tabber">
      <mt-tab-item id="首页" @click.native="tabItemClick($event)">
        <img slot="icon" src="./assets/images/Tabber_1_1.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="发现" @click.native="tabItemClick($event)">
        <img slot="icon" src="./assets/images/Tabber_2_1.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="订单" @click.native="tabItemClick($event)">
        <img slot="icon" src="./assets/images/Tabber_3_1.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="tabItemClick($event)">
        <img slot="icon" src="./assets/images/Tabber_4_1.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  data(){
    return {
      selected:''
    }
  },
  methods:{
    tabItemClick(event){
      var anchors=$(event.currentTarget).parent().children("a");
      $(anchors[0]).find("img").attr("src",require("./assets/images/Tabber_1_1.png"));
      $(anchors[1]).find("img").attr("src",require("./assets/images/Tabber_2_1.png"));
      $(anchors[2]).find("img").attr("src",require("./assets/images/Tabber_3_1.png"));
      $(anchors[3]).find("img").attr("src",require("./assets/images/Tabber_4_1.png"));
      if($(event.currentTarget).index()==0){
        $(event.currentTarget).find("img").attr("src",require("./assets/images/Tabber_1_2.png"));
      }else if($(event.currentTarget).index()==1){
        $(event.currentTarget).find("img").attr("src",require("./assets/images/Tabber_2_2.png"));
      }else if($(event.currentTarget).index()==2){
        $(event.currentTarget).find("img").attr("src",require("./assets/images/Tabber_3_2.png"));
      }else{
        $(event.currentTarget).find("img").attr("src",require("./assets/images/Tabber_4_2.png"));
      }
    }
  }
}
</script>

<style lang="less" scoped>
@tabber_bg:#fff;
.tabber{
  background-color: @tabber_bg;
}
.tabber img{
  width: 18px;
  height: 18px;
  margin-left: 3px;
}
</style>
