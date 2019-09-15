<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected" fixed class="tabber" v-if="$route.meta.showTab">
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
      $(".is-selected").removeClass("is-selected");
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
      $(event.currentTarget).addClass("is-selected");
      if(this.selected=="首页"){
        this.$router.push({name:'Home'});
      }else if(this.selected=="发现"){
        this.$router.push({name:'Find'});
      }else if(this.selected=="订单"){
        this.$router.push({name:'Book'});
      }else{
        this.$router.push({name:'Mine'});
      }
    }
  },
  mounted(){
    if(window.localStorage.getItem("navTabIndex")=="首页"){
      $(".mint-tab-item:eq(0)").find("img").attr("src",require("./assets/images/Tabber_1_2.png"));
      $(".mint-tab-item:eq(0)").addClass("is-selected");
      this.$router.push({name:'Home'});
    }else if(window.localStorage.getItem("navTabIndex")=="发现"){
      $(".mint-tab-item:eq(1)").find("img").attr("src",require("./assets/images/Tabber_2_2.png"));
      $(".mint-tab-item:eq(1)").addClass("is-selected");
      this.$router.push({name:'Find'});
    }else if(window.localStorage.getItem("navTabIndex")=="订单"){
      $(".mint-tab-item:eq(2)").find("img").attr("src",require("./assets/images/Tabber_3_2.png"));
      $(".mint-tab-item:eq(2)").addClass("is-selected");
      this.$router.push({name:'Book'});
    }else if(window.localStorage.getItem("navTabIndex")=="我的"){
      $(".mint-tab-item:eq(3)").find("img").attr("src",require("./assets/images/Tabber_4_2.png"));
      $(".mint-tab-item:eq(3)").addClass("is-selected");
      this.$router.push({name:'Mine'});
    }else{
      $(".mint-tab-item:eq(0)").find("img").attr("src",require("./assets/images/Tabber_1_2.png"));
      $(".mint-tab-item:eq(0)").addClass("is-selected");
      this.$router.push({name:'Home'});
    }
  },
  watch:{
    selected:function(val,oldVal){
      window.localStorage.setItem("navTabIndex",val);
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
