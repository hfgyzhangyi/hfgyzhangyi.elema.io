<template>
    <div class="tmpl">
        <section class="section1">
            <svg aria-label="返回按钮" role="button" class="section1_svg1" @click="back()">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow">
                    <svg viewBox="0 0 20 32" id="arrow" width="100%" height="100%"><path d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"></path></svg>
                </use>
            </svg>
            <form class="section1_form">
                <svg aria-hidden="true" class="section1_svg2">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search">
                        <svg viewBox="0 0 12 12" id="search" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#F5F5F5" d="M-179-10h375v805h-375z"></path><path fill="#FFF" d="M-179 0h375v22h-375z"></path><text font-family="PingFangSC-Regular, PingFang SC" font-size="11" transform="translate(-179)"><tspan x="179.5" y="16" fill="#333">黄焖鸡</tspan> <tspan x="212.5" y="16" fill="#999">标准份</tspan></text><g><path fill="#FFF" d="M-179-11h375v44h-375z"></path><path fill="#F5F5F5" d="M-167-3h351a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-351a2 2 0 0 1-2-2V-1a2 2 0 0 1 2-2z"></path><path fill="#999" fill-rule="nonzero" d="M11.255 5.338C11.11 2.475 8.787.152 5.924.008A5.632 5.632 0 0 0 .008 5.926c.145 2.845 2.44 5.158 5.284 5.325a5.636 5.636 0 0 0 2.24-.319.507.507 0 1 0-.342-.954 4.622 4.622 0 0 1-1.839.261c-2.327-.137-4.211-2.036-4.33-4.365A4.618 4.618 0 0 1 5.871 1.02c2.344.119 4.251 2.026 4.37 4.37a4.602 4.602 0 0 1-1.275 3.434.62.62 0 0 0 .007.866l2.16 2.16a.507.507 0 1 0 .718-.716L9.956 9.238a5.615 5.615 0 0 0 1.3-3.9z"></path></g></g></svg>
                    </use>
                </svg>
                <input type="search" placeholder="输入商家、商品名称" class="section1_input" v-model="store_name">
                <button type="submit" class="section1_button" @click="ajax_search($event)">搜索</button>
            </form>
        </section>
        <div class="div1" style="padding-bottom:0px;">
            <div style="display:none;">
                <p role="button" class="div1_p1">
                    <svg class="div1_svg1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search">
                            <svg viewBox="0 0 12 12" id="search" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#F5F5F5" d="M-179-10h375v805h-375z"></path><path fill="#FFF" d="M-179 0h375v22h-375z"></path><text font-family="PingFangSC-Regular, PingFang SC" font-size="11" transform="translate(-179)"><tspan x="179.5" y="16" fill="#333">黄焖鸡</tspan> <tspan x="212.5" y="16" fill="#999">标准份</tspan></text><g><path fill="#FFF" d="M-179-11h375v44h-375z"></path><path fill="#F5F5F5" d="M-167-3h351a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2h-351a2 2 0 0 1-2-2V-1a2 2 0 0 1 2-2z"></path><path fill="#999" fill-rule="nonzero" d="M11.255 5.338C11.11 2.475 8.787.152 5.924.008A5.632 5.632 0 0 0 .008 5.926c.145 2.845 2.44 5.158 5.284 5.325a5.636 5.636 0 0 0 2.24-.319.507.507 0 1 0-.342-.954 4.622 4.622 0 0 1-1.839.261c-2.327-.137-4.211-2.036-4.33-4.365A4.618 4.618 0 0 1 5.871 1.02c2.344.119 4.251 2.026 4.37 4.37a4.602 4.602 0 0 1-1.275 3.434.62.62 0 0 0 .007.866l2.16 2.16a.507.507 0 1 0 .718-.716L9.956 9.238a5.615 5.615 0 0 0 1.3-3.9z"></path></g></g></svg>
                        </use>
                    </svg>
                    查找
                    <span class="div1_span1">"{{store_name}}"</span>
                </p>
                <ul>
                    <li v-for="(store,i) of search_list" :key="i">
                        <div class="shopitem-type">
                            <img class="shopitem-type-img" :src="require('../assets/images/search/'+store.short_pic)">
                            <div class="shopitem-type-div">
                                <div>
                                    <p class="shopitem-type-div-p">
                                        <span class="shopitem-type-div-p-span1" v-html="store.store_name"></span>
                                        <span class="shopitem-type-div-p-span2" style="background-color: rgb(250, 112, 71); margin-right: -0.5em;">减</span>
                                    </p>
                                </div>
                                <span class="shopitem-type-div-span">评价{{store.estimate}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <section>
                    <header class="section2_header">
                        <span>历史搜索</span>
                        <div aria-label="清除历史搜索" role="button" class="section2_div1">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bin">
                                    <svg viewBox="0 0 512 512" id="bin" width="100%" height="100%"><path d="M64 160v320c0 17.6 14.4 32 32 32h288c17.6 0 32-14.4 32-32V160H64zm96 288h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zm64 0h-32V224h32v224zM424 64H320V24c0-13.2-10.8-24-24-24H184c-13.2 0-24 10.8-24 24v40H56c-13.2 0-24 10.8-24 24v40h416V88c0-13.2-10.8-24-24-24zm-136 0h-96V32.401h96V64z"></path></svg>
                                </use>
                            </svg>
                        </div>
                    </header>
                    <section class="section2_section1">
                        <button role="button" class="section2_button1">烧烤</button>
                    </section>
                </section>
                <section class="section3">
                    <header class="section3_header">热门搜索</header>
                    <section class="section3_section">
                        <button role="button" class="section3_button">白领小厨</button>
                        <button role="button" class="section3_button">披萨</button>
                        <button role="button" class="section3_button">芝根芝底</button>
                        <button role="button" class="section3_button">盖浇饭</button>
                        <button role="button" class="section3_button">炸鸡</button>
                        <button role="button" class="section3_button">奶茶</button>
                        <button role="button" class="section3_button">黄焖鸡</button>
                        <button role="button" class="section3_button">鸡排</button>
                        <button role="button" class="section3_button">汉堡</button>
                        <button role="button" class="section3_button">酸菜鱼</button>
                    </section>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            store_name:'',
            search_list:''
        }
    },
    methods:{
        back(){
            this.$router.push({name:"Home"});
        },
        ajax_search(event){
            event.preventDefault();
        }
    },
    watch:{
        store_name:function(val,oldVal){
            this.$axios.get("http://localhost:3000/search",{params:{store_name:val}})
            .then(res=>{
                if(val!=""){
                    $(".div1").children("div:eq(1)").hide();
                    $(".div1").children("div:eq(0)").show();
                    if(res.data!=""){
                        $(".div1_p1").hide();
                        this.search_list=res.data;
                    }else{
                        this.search_list=[];
                        $(".div1_p1").show();
                    }
                }else{
                    $(".div1").children("div:eq(0)").hide();
                    $(".div1").children("div:eq(1)").show();
                }
            });
        }
    }
}
</script>
<style scoped>
.section1{
    background: #fff;
    position: relative;
    z-index: 52;
}
.section1_svg1{
    width: .933333rem;
    width: 9.333333vw;
    height: .933333rem;
    height: 9.333333vw;
    fill: #999;
    padding: .133333rem .133333rem .133333rem 0;
    padding: 1.333333vw 1.333333vw 1.333333vw 0;
}
.section1_form{
    display: -webkit-flex;
    display: flex;
    position: relative;
}
.section1_form{
    -webkit-flex-grow: 1;
    flex-grow: 1;
    padding: .293333rem .293333rem .293333rem 0;
    padding: 2.933333vw 2.933333vw 2.933333vw 0;
    margin-left: .293333rem;
    margin-left: 2.933333vw;
    background-color: #fff;
    z-index: 101;
}
.section1_svg2{
    width: .293333rem;
    width: 2.933333vw;
    height: .293333rem;
    height: 2.933333vw;
    position: absolute;
    top: .533333rem;
    top: 5.333333vw;
    left: .293333rem;
    left: 2.933333vw;
}
.section1_input{
    -webkit-flex-grow: 1;
    flex-grow: 1;
    border-radius: .026667rem;
    border-radius: .266667vw;
    -webkit-appearance: none;
    background-color: #f8f8f8;
    padding: .173333rem .4rem .173333rem .88rem;
    padding: 1.733333vw 4vw 1.733333vw 8.8vw;
    font-size: .346667rem;
    color: #666;
}
.section1_button{
    outline: none;
    color: #333;
    font-size: .426667rem;
    background: #fff;
    font-weight: 700;
    margin-left: .293333rem;
    margin-left: 2.933333vw;
}
.div1{
    height: calc(100vh - 1.36rem);
    height: calc(100vh - 13.6vw);
}
.div1_p1{
    color: #999;
    font-size: .373333rem;
    padding: 0 .426667rem;
    padding: 0 4.266667vw;
    height: 1.173333rem;
    height: 11.733333vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.div1_svg1{
    height: .32rem;
    height: 3.2vw;
    width: .32rem;
    width: 3.2vw;
    margin-right: .373333rem;
    margin-right: 3.733333vw;
}
.div1_span1{
    color: #151515;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    width: 7.466667rem;
    width: 74.666667vw;
}
.section2_header{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    font-size: .426667rem;
    padding: .2rem .333333rem;
    padding: 2vw 3.333333vw;
    color: #666;
    font-weight: 700;
}
.section2_div1{
    display: block;
    padding-top: .053333rem;
    padding-top: .533333vw;
}
.section2_div1 svg{
    height: .32rem;
    height: 3.2vw;
    width: .32rem;
    width: 3.2vw;
    color: #cecece;
    fill: currentColor;
}
.section2_section1{
    padding: 0 .333333rem .333333rem;
    padding: 0 3.333333vw 3.333333vw;
}
.section2_button1{
    display: inline-block;
    border-radius: .066667rem;
    border-radius: .666667vw;
    padding: .2rem .266667rem;
    padding: 2vw 2.666667vw;
    font-size: .373333rem;
    margin-right: .333333rem;
    margin-right: 3.333333vw;
    margin-top: .333333rem;
    margin-top: 3.333333vw;
    color: #666;
    background-color: #f7f7f7;
}
.section3{
    margin-top: .4rem;
    margin-top: 4vw;
}
.section3_header{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    font-size: .426667rem;
    padding: .2rem .333333rem;
    padding: 2vw 3.333333vw;
    color: #666;
    font-weight: 700;
}
.section3_section{
    padding: 0 .333333rem .333333rem;
    padding: 0 3.333333vw 3.333333vw;
}
.section3_button{
    display: inline-block;
    border-radius: .066667rem;
    border-radius: .666667vw;
    padding: .2rem .266667rem;
    padding: 2vw 2.666667vw;
    font-size: .373333rem;
    margin-right: .333333rem;
    margin-right: 3.333333vw;
    margin-top: .333333rem;
    margin-top: 3.333333vw;
    color: #666;
    background-color: #f7f7f7;
}
.shopitem-type{
    padding: 0 .426667rem;
    padding: 0 4.266667vw;
    display: -webkit-flex;
    display: flex;
    height: 1.493333rem;
    height: 14.933333vw;
    -webkit-align-items: center;
    align-items: center;
}
.shopitem-type-img{
    -webkit-flex: none;
    flex: none;
    width: .64rem;
    width: 6.4vw;
    height: .64rem;
    height: 6.4vw;
    margin-right: .426667rem;
    margin-right: 4.266667vw;
    border-radius: .013333rem;
    border-radius: .133333vw;
}
.shopitem-type-div{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex: 1;
    flex: 1;
    height: 1.493333rem;
    height: 14.933333vw;
    border-bottom: 1px solid #e3e3e3;
}
.shopitem-type-div-p{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.shopitem-type-div-p-span1{
    display: inline-block;
    max-width: 5.6rem;
    max-width: 56vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .373333rem;
    color: #333;
    margin-right: .08rem;
    margin-right: .8vw;
}
.shopitem-type-div-p-span1>>>.g-highlight{
    color: #999;
}
.shopitem-type-div-p-span2{
    color: #fff;
    font-size: .533333rem;
    border-radius: .053333rem;
    border-radius: .533333vw;
    height: .693333rem;
    height: 6.933333vw;
    line-height: .693333rem;
    line-height: 6.933333vw;
    text-align: center;
    display: inline-block;
    padding: 0 .08rem;
    padding: 0 .8vw;
    margin-left: .08rem;
    margin-left: .8vw;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
}
.shopitem-type-div-span{
    color: #999;
    font-size: .32rem;
}
</style>