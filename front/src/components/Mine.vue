<template>
    <div class="tmpl">
        <div class="profile">
            <section>
                <div class="profile_1">
                    <div class="index_1" style="width:60px;height:60px;">
                        <img src="../assets/images/mine/1.png">
                    </div>
                    <div class="profile_1_div1">
                        <p class="profile_1_p1" @click="login()">登录/注册</p>
                        <p class="profile_1_p2">
                            <svg fill="#fff">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile">
                                    <svg viewBox="0 0 655 1024" id="mobile" width="100%" height="100%"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path></svg>
                                </use>
                            </svg>
                            <span>{{phone_number}}</span><!--过滤器-->
                        </p>
                    </div>
                    <span class="profile_1_span1">
                        <svg fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
                                <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                            </use>
                        </svg>
                    </span>
                </div>
            </section>
            <div class="index_2">
                <a href="javascript:;" class="index_2_a1">
                    <p>
                        <svg fill="#ff5f3e">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#luckybag">
                                <svg viewBox="0 0 48 48" id="luckybag" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path></svg>
                            </use>
                        </svg>
                    </p>
                    <p class="index_2_p1">红包</p>
                </a>
                <a href="javascript:;" class="index_2_a1">
                    <p>
                        <svg fill="#6ac20b">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-coins">
                                <svg viewBox="0 0 48 48" id="profile-coins" width="100%" height="100%"><path fill-rule="evenodd" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path></svg>
                            </use>
                        </svg>
                    </p>
                    <p class="index_2_p1">金币</p>
                </a>
            </div>
            <section class="profile_2">
                <a href="javascript:;" class="index_3_a1">
                    <aside class="index_3_aside1">
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#address">
                                <svg viewBox="0 0 16 16" id="address" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="none" d="M0 0h16v16H0z"></path><path fill="#4AA5F0" d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path></g></svg>
                            </use>
                        </svg>
                    </aside>
                    <div class="index_3_div1">
                        我的地址
                        <span class="index_3_span1">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </a>
            </section>
            <section class="profile_2">
                <a href="javascript:;" class="index_3_a1">
                    <aside class="index_3_aside1">
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point">
                                <svg viewBox="0 0 16 16" id="point" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path><path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path></g></svg>
                            </use>
                        </svg>
                    </aside>
                    <div class="index_3_div1">
                        金币商城
                        <span class="index_3_span1">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </a>
                <a href="javascript:;" class="index_3_a1">
                    <aside class="index_3_aside1">
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#commend">
                                <svg viewBox="0 0 40 40" id="commend" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FC7B53" d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"></path></g></svg>
                            </use>
                        </svg>
                    </aside>
                    <div class="index_3_div1">
                        分享拿20元现金
                        <span class="index_3_span1">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </a>
            </section>
            <section class="profile_2">
                <a href="javascript:;" class="index_3_a1">
                    <aside class="index_3_aside1">
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service">
                                <svg viewBox="0 0 54 54" id="service" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path stroke="#4DA6F0" stroke-width="3" d="M48 28c0 11.598-9.402 21-21 21"></path><path fill="#4DA6F0" d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path><path fill="#4DA6F0" d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"></path></g></svg>
                            </use>
                        </svg>
                    </aside>
                    <div class="index_3_div1">
                        我的客服
                        <span class="index_3_span1">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </a>
                <a href="javascript:;" class="index_3_a1">
                    <aside class="index_3_aside1">
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download">
                                <svg viewBox="0 0 40 40" id="download" width="100%" height="100%"><path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path></svg>
                            </use>
                        </svg>
                    </aside>
                    <div class="index_3_div1">
                        下载饿了么APP
                        <span class="index_3_span1">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </a>
                <a href="javascript:;" class="index_3_a1">
                    <aside class="index_3_aside1">
                        <svg fill="#4aa5f0">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rule">
                                <svg viewBox="0 0 17 18" id="rule" width="100%" height="100%"><g fill="#4DA6F0" fill-rule="evenodd"><path d="M10.389 18H2.444a1.5 1.5 0 0 1-1.5-1.5v-15a1.5 1.5 0 0 1 1.5-1.5h12.112a1.5 1.5 0 0 1 1.5 1.5V12h-4.867a.8.8 0 0 0-.8.8V18zM3.978 4a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978zm0 3a.2.2 0 0 0-.2.2v.6c0 .11.09.2.2.2h9.044a.2.2 0 0 0 .2-.2v-.6a.2.2 0 0 0-.2-.2H3.978z"></path><path d="M15.111 13l-3.778 4v-3.6c0-.22.18-.4.4-.4h3.378z"></path></g></svg>
                            </use>
                        </svg>
                    </aside>
                    <div class="index_3_div1">
                        规则中心
                        <span class="index_3_span1">
                            <svg>
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                            </svg>
                        </span>
                    </div>
                </a>
            </section>
            <div class="profile_3">
                <a href="javascript:;">隐私政策</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone_number:"登录后享受更多特权"
        }
    },
    mounted(){
        if(window.sessionStorage.getItem("phone_number")!=null){
            $(".profile_1_p1").text(window.sessionStorage.getItem("user_name"));
            this.phone_number=window.sessionStorage.getItem("phone_number");
        }
        if(window.sessionStorage.getItem("navTabIndex")=="首页"){
            $(".mint-tab-item:eq(0)").find("img").attr("src",require("../assets/images/Tabber_1_2.png"));
        }else if(window.sessionStorage.getItem("navTabIndex")=="发现"){
            $(".mint-tab-item:eq(1)").find("img").attr("src",require("../assets/images/Tabber_2_2.png"));
        }else if(window.sessionStorage.getItem("navTabIndex")=="订单"){
            $(".mint-tab-item:eq(2)").find("img").attr("src",require("../assets/images/Tabber_3_2.png"));
        }else if(window.sessionStorage.getItem("navTabIndex")=="我的"){
            $(".mint-tab-item:eq(3)").find("img").attr("src",require("../assets/images/Tabber_4_2.png"));
        }
    },
    methods:{
        login(){
            if($(".profile_1_p1").text()=="登录/注册"){
                this.$router.push({name:"Login"});
            }
        }
    }
}
</script>
<style scoped>
.profile{
    min-height: 100vh;
    background-color: #F5F5F5;
}
.profile::after{
    display: table;
    content: "";
}
.profile_1{
    display: -webkit-flex;
    display: flex;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: .666667rem .4rem;
    padding: 6.666667vw 4vw;
    color: #fff;
    -webkit-align-items: center;
    align-items: center;
}
.index_1{
    border-radius: 50%;
}
.index_1 img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.profile_1_div1{
    overflow: hidden;
    margin-left: .48rem;
    margin-left: 4.8vw;
    -webkit-flex-grow: 1;
    flex-grow: 1;
}
.profile_1_p1{
    font-size: .56rem;
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
    font-weight: 700;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.profile_1_p2{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    font-size: .32rem;
}
.profile_1_p2 svg{
    margin-right: .066667rem;
    margin-right: .666667vw;
    width: .186667rem;
    width: 1.866667vw;
    height: .293333rem;
    height: 2.933333vw;
}
.profile_1_div1 p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.profile_1_span1 svg{
    width: .266667rem;
    width: 2.666667vw;
    height: .56rem;
    height: 5.6vw;
}
.index_2{
    display: table;
    width: 100%;
    height: 2.24rem;
    height: 22.4vw;
    border-bottom: 1px solid #EEEEEE;
    background-color: #fff;
}
.index_2 svg{
    width: .693333rem;
    width: 6.933333vw;
    height: .693333rem;
    height: 6.933333vw;
}
.index_2_a1{
    display: table-cell;
    width: 33.3333%;
    vertical-align: middle;
    text-align: center;
}
.index_2_a1:not(:last-child){
    border-right: 1px solid #EEEEEE;
}
.index_2_p1{
    margin-top: .133333rem;
    margin-top: 1.333333vw;
    font-size: .32rem;
    line-height: .373333rem;
    line-height: 3.733333vw;
    font-weight: 500;
    color: #666;
    font-weight: 700;
}
.profile_2{
    margin-top: .266667rem;
    margin-top: 2.666667vw;
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #ECECEC;
    font-size: .426667rem;
    line-height: .453333rem;
    line-height: 4.533333vw;
    background: #fff;
}
.index_3_a1{
    font-size: .426667rem;
    color: #333;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: .666667rem;
    padding-left: 6.666667vw;
}
.index_3_aside1{
    margin-left: -.266667rem;
    margin-left: -2.666667vw;
    margin-right: .266667rem;
    margin-right: 2.666667vw;
}
.index_3_aside1 svg{
    width: .48rem;
    width: 4.8vw;
    height: .48rem;
    height: 4.8vw;
}
.index_3_div1{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 100%;
    padding: .373333rem .266667rem .373333rem 0;
    padding: 3.733333vw 2.666667vw 3.733333vw 0;
}
.index_3_span1 svg{
    width: .266667rem;
    width: 2.666667vw;
    height: .266667rem;
    height: 2.666667vw;
    fill: #bbb;
}
.index_3_a1:not(:last-child) .index_3_div1{
    border-bottom: 1px solid #F7F7F7;
}
.profile_3{
    text-align: center;
    margin: .613333rem auto;
    margin: 6.133333vw auto;
    color: #4da6f0;
    font-size: .4rem;
}
</style>