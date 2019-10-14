<template>
    <div class="tmpl">
        <div class="profile">
            <section class="nodatatipWrap NoDataTip-wrapper" v-if="isShow">
                <img src="../assets/images/book/1.png">
                <h3>登录后查看外卖订单</h3>
                <button @click="login()">立即登录</button>
            </section>
            <ul v-if="!isShow">
                <my-li-2 @del="delete_book()" v-for="(item,i) of book_list" :key="i" :index="i" :total="item.total" :count="item.count" :time="item.time" :name="item.name" :shop_name="item.shop_name" :pic_name="item.pic_name"></my-li-2>
            </ul>
            <div class="mb"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:true,
            book_list:''
        }
    },
    methods:{
        login(){
            this.$router.push({name:"Login"});
        },
        delete_book(index){
            this.$messagebox({title:"提示",message:"是否删除?",showConfirmButton:true,showCancelButton:true}).then(action=>{
                if(action=="confirm"){
                    this.book_list.splice(index,1);
                }
            });
        }
    },
    beforeDestroy(){
        //this.bus.$off("delete_book");
    },
    created(){
        //this.bus.$on("delete_book",this.delete_book.bind(this));
        if(window.sessionStorage.getItem("phone_number")!=null){
            this.isShow=false;
            this.$axios.get("http://localhost:3000/book/getBookList?pageNow=1&phone_number="+window.sessionStorage.getItem("phone_number")).then(res=>{
                this.book_list=res.data;
            });
        }else{
            this.isShow=true;
        }
    },
    mounted(){
        $(".is-selected").removeClass("is-selected");
        if(window.sessionStorage.getItem("navTabIndex")=="首页"){
            $(".mint-tab-item:eq(0)").find("img").attr("src",require("../assets/images/Tabber_1_2.png"));
            $(".mint-tab-item:eq(0)").addClass("is-selected");
        }else if(window.sessionStorage.getItem("navTabIndex")=="发现"){
            $(".mint-tab-item:eq(1)").find("img").attr("src",require("../assets/images/Tabber_2_2.png"));
            $(".mint-tab-item:eq(1)").addClass("is-selected");
        }else if(window.sessionStorage.getItem("navTabIndex")=="订单"){
            $(".mint-tab-item:eq(2)").find("img").attr("src",require("../assets/images/Tabber_3_2.png"));
            $(".mint-tab-item:eq(2)").addClass("is-selected");
        }else if(window.sessionStorage.getItem("navTabIndex")=="我的"){
            $(".mint-tab-item:eq(3)").find("img").attr("src",require("../assets/images/Tabber_4_2.png"));
            $(".mint-tab-item:eq(3)").addClass("is-selected");
        }
    }
}
</script>
<style scoped>
.profile{
    min-height: 100vh;
    background-color: #F5F5F5;
}
.profile::before{
    display: table;
    content: "";
}
.profile::after{
    display: table;
    content: "";
}
.NoDataTip-wrapper{
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.nodatatipWrap{
    margin-top: 2.666667rem;
    margin-top: 26.666667vw;
}
.NoDataTip-wrapper img{
    display: block;
    width: 5.333333rem;
    width: 53.333333vw;
}
.NoDataTip-wrapper h3{
    margin: .333333rem 0 .266667rem;
    margin: 3.333333vw 0 2.666667vw;
    color: #6a6a6a;
    font-weight: 400;
    font-size: .453333rem;
}
.NoDataTip-wrapper button{
    padding: .266667rem;
    padding: 2.666667vw;
    min-width: 3.2rem;
    min-width: 32vw;
    border: none;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-color: #56d176;
    color: #fff;
    text-align: center;
    font-size: 0.4rem;
    font-family: inherit;
}
</style>