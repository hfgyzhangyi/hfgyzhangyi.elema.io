<template>
    <div class="tmpl">
        <header class="header ElemeHeader-root">
            <div class="ElemeHeader-wrapper ElemeHeader-gradientBg ElemeHeader-fixed" style="z-index: 8844;">
                <div class="ElemeHeader-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" @click="back()"><path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"/></svg>
                </div>
                <h1 class="ElemeHeader-center">确认订单</h1>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    beforeCreate(){
    },
    methods:{
        back(){
            this.$router.push({name:"Detail",params:{id:window.sessionStorage.getItem("store_id")}});
        }
    },
    mounted(){
        history.pushState(null,null,document.URL);
        window.addEventListener('popstate',function(){
            history.pushState(null,null,document.URL);
        });
    }
}
</script>
<style scoped>
.ElemeHeader-root{
    height: 1.173333rem;
    height: 11.733333vw;
}
.ElemeHeader-wrapper{
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 100%;
    height: 1.173333rem;
    height: 11.733333vw;
    color: #fff;
    font-size: .48rem;
    background: #2395ff;
}
.ElemeHeader-gradientBg{
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.ElemeHeader-wrapper.ElemeHeader-fixed{
    position: fixed;
    top: 0;
    left: 0;
}
.ElemeHeader-left{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 1.173333rem;
    width: 11.733333vw;
    height: 1.173333rem;
    height: 11.733333vw;
}
.ElemeHeader-left svg{
    width: .32rem;
    width: 3.2vw;
}
.ElemeHeader-center{
    position: absolute;
    top: 0;
    left: 50%;
    height: 1.173333rem;
    height: 11.733333vw;
    max-width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.173333rem;
    line-height: 11.733333vw;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
</style>