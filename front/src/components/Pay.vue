<template>
    <div class="root">
        <header class="header ElemeHeader-root">
            <div class="ElemeHeader-wrapper ElemeHeader-gradientBg ElemeHeader-fixed" style="z-index: 8844;">
                <div class="ElemeHeader-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" @click="back()"><path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"/></svg>
                </div>
                <h1 class="ElemeHeader-center">确认订单</h1>
            </div>
        </header>
        <div class="checkout viewbody">
            <div>
                <div class="main">
                    <section class="cart-address">
                        <div class="address-item">
                            <p class="title">
                                <span>订单配送至</span>
                                <span class="address-tag address-tag-1 address-tag-2" style="display: none;"></span>
                            </p>
                            <p class="address-detail">
                                <span class="address-text">浦江宝邸(北区)江文路330弄53号302室</span>
                                <svg>
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right-bold">
                                        <svg viewBox="0 0 8 12" id="arrow-right-bold" width="100%" height="100%"><path fill="#fff" fill-rule="evenodd" d="M6.77 6.531a.73.73 0 0 0 0-1.062L2.338 1.22a.808.808 0 0 0-1.108 0 .73.73 0 0 0 0 1.062L5.108 6 1.23 9.718a.73.73 0 0 0 0 1.062.808.808 0 0 0 1.108 0L6.77 6.531z" opacity=".8"></path></svg>
                                    </use>
                                </svg>
                            </p>
                            <h2 class="address-name">
                                <span>张毅</span>
                                <span>(先生)</span>
                                <span class="phone">18221528042</span>
                            </h2>
                        </div>
                    </section>
                    <div class="checkout-section key-card">
                        <section>
                            <div class="delivery">
                                <div class="delivery-left">
                                    <div class="delivery-time">
                                        <span class="cart-item__title">送达时间</span>
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="delivery-select">
                                        <span>尽快送达({{time}}送达)</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div class="cart-item pay-way">
                                <div class="cart-item__title">支付方式</div>
                                <div>
                                    <span class="pay-text">在线支付</span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section class="checkout-section cart-group">
                        <h3 class="cart-group-h3">
                            <span class="cart-group-h3-span1">粉煲仔</span>
                            <span class="cart-group-h3-span2"></span>
                        </h3>
                        <ul class="cart-group-ul1">
                            <li v-for="(item,i) of book_list" :key="i">
                                <img class="cart-group-ul1-img" src="../assets/images/detail/1.jpg">
                                <div class="cart-group-ul1-div">
                                    <p class="cart-group-ul1-p">{{item.name}}</p>
                                </div>
                                <span class="cart-group-ul1-span1">×&nbsp;{{item.number}}</span>
                                <span class="cart-group-ul1-span2"></span>
                                <span class="cart-group-ul1-span3">
                                    <span class="cart-group-ul1-span4">¥</span>
                                    {{item.price}}
                                </span>
                            </li>
                        </ul>
                        <ul class="cart-group-ul2">
                            <li>
                                <div>
                                    <span class="mini-tag cart-group-ul2-span1">
                                        包装
                                        <span class="cart-group-ul2-span2 mini-tag-span">
                                            包装
                                        </span>
                                    </span>
                                    <span class="cart-group-ul2-span4">餐盒</span>
                                </div>
                                <div class="cart-group-ul2-div1">
                                    <span class="cart-group-ul2-span5">¥</span>
                                    0.2
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span class="mini-tag cart-group-ul2-span1">
                                        商家
                                        <span class="cart-group-ul2-span3 mini-tag-span">
                                            商家
                                        </span>
                                    </span>
                                    <span class="cart-group-ul2-span4">配送费</span>
                                </div>
                                <div class="cart-group-ul2-div1">
                                    <span class="cart-group-ul2-span5">¥</span>
                                    3.8
                                </div>
                            </li>
                            <li>
                                <div class="cart-group-ul2-div2">
                                    <span class="mini-tag cart-group-ul2-span1">
                                        满减
                                        <span class="cart-group-ul2-span3 mini-tag-span" style="background-color: rgb(240, 115, 115);">满减</span>
                                    </span>
                                    <span class="cart-group-ul2-span4">店铺满减优惠</span>
                                </div>
                                <div class="cart-group-ul2-div3">
                                    <span class="cart-group-ul2-span6">-&nbsp;</span>
                                    <span class="cart-group-ul2-span5">¥</span>
                                    13
                                </div>
                            </li>
                        </ul>
                        <div class="cart-item hongbao-1">
                            <div><h3 class="hongbao-h3">红包</h3></div>
                            <span class="text-ellipsis cartitem-right">
                                <span class="hongbao-span1" content="0个可用">
                                    0个可用
                                </span>
                                <svg class="hongbao-svg1">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
                                        <svg viewBox="0 0 8 13" id="arrow-right" width="100%" height="100%"><path fill="#D1D1D6" fill-rule="evenodd" d="M1.784 12.714l5.91-5.524a.932.932 0 0 0 0-1.38L1.784.286a1.097 1.097 0 0 0-1.478 0 .932.932 0 0 0 0 1.38L5.478 6.5.306 11.333a.932.932 0 0 0 0 1.381c.408.381 1.07.381 1.478 0z"></path></svg>
                                    </use>
                                </svg>
                            </span>
                        </div>
                        <div class="cart-group-div1">
                            <div class="cart-group-div2">
                                <div class="cart-group-div3">
                                    <a>
                                        <span>优惠说明</span>
                                        <svg>
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tip">
                                                <svg viewBox="0 0 12 12" id="tip" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><circle cx="6" cy="6" r="5.625" stroke="#BBB" stroke-width=".75"></circle><path fill="#BBB" d="M6.11 2.4c.64 0 1.16.17 1.56.53.4.35.6.83.6 1.43 0 .49-.13.9-.38 1.22-.09.11-.37.37-.84.78-.19.16-.33.34-.42.52-.11.2-.16.42-.16.66v.17H5.4v-.17c0-.37.06-.69.2-.95.13-.28.51-.69 1.13-1.24l.17-.19c.18-.23.28-.47.28-.73 0-.35-.1-.62-.29-.82-.2-.2-.49-.3-.85-.3-.45 0-.78.14-.98.43-.18.24-.27.58-.27 1.02H3.74c0-.73.21-1.3.63-1.72.42-.43 1-.64 1.74-.64zm-.18 5.85c.21 0 .39.06.53.2.14.13.21.3.21.51 0 .21-.08.38-.22.52a.75.75 0 0 1-.52.2.717.717 0 0 1-.73-.72c0-.21.07-.38.21-.51.14-.14.32-.2.52-.2z"></path></g></svg>
                                            </use>
                                        </svg>
                                    </a>
                                </div>
                                <div>小计 ¥<span class="cart-group-span1">{{total}}</span></div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer id="footer" class="action-bar">
                    <span>¥{{total}}</span>
                    <button class="submitbtn" @click="submit()">去支付</button>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            book_list:'',
            time:'',
            total:0
        }
    },
    created(){
        var store_id=window.sessionStorage.getItem("store_id");
        var phone_number=window.sessionStorage.getItem("phone_number");
        setTimeout(()=>{
            this.$axios.get("http://localhost:3000/book/payInit?store_id="+store_id+"&phone_number="+phone_number).then(res=>{
                this.book_list=res.data.data;
                this.time=res.data.time;
                this.total=res.data.total;
            });
        },150);
    },
    methods:{
        back(){
            this.$router.push({name:"Detail",params:{id:window.sessionStorage.getItem("store_id")}});
        },
        submit(){
            var store_id=window.sessionStorage.getItem("store_id");
            var phone_number=window.sessionStorage.getItem("phone_number");
            this.$messagebox({title:"提示",message:"确认支付?",showCancelButton:true,showConfirmButton:true}).then(action=>{
                if(action=="confirm"){
                    this.$axios.get("http://localhost:3000/book/pay?store_id="+store_id+"&phone_number="+phone_number).then(res=>{
                        if(res.data=="ok"){
                            this.$messagebox({title:"提示",message:"支付完成",showConfirmButton:true}).then(action=>{
                                window.sessionStorage.setItem("navTabIndex","订单");
                                this.$router.push({name:"Book"});
                            });
                        }
                    });
                }
            });
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
.root,.viewbody{
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex-grow: 1;
    flex-grow: 1;
}
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
.checkout{
    position: relative;
    font-size: .373333rem;
    color: #333;
    padding-bottom: 1.413333rem;
    padding-bottom: 14.133333vw;
    padding-left: .16rem;
    padding-left: 1.6vw;
    padding-right: .16rem;
    padding-right: 1.6vw;
    background-image: linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
}
.viewbody{
    width: 100%;
    transition: opacity .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),transform .5s cubic-bezier(.55,0,.1,1);
    transition: opacity .5s cubic-bezier(.55,0,.1,1),transform .5s cubic-bezier(.55,0,.1,1),-webkit-transform .5s cubic-bezier(.55,0,.1,1);
}
.cart-address{
    background-color: transparent;
    padding: .426667rem 0 .293333rem;
    padding: 4.266667vw 0 2.933333vw;
    min-height: 2.213333rem;
    min-height: 22.133333vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.cart-address .address-item{
    -webkit-flex: 0 100%;
    flex: 0 100%;
    padding: 0 .213333rem;
    padding: 0 2.133333vw;
    position: relative;
    color: #fff;
    overflow: hidden;
}
.title{
    font-size: .373333rem;
    line-height: 1.21;
    color: hsla(0,0%,100%,.8);
}
.title>span{
    vertical-align: middle;
}
.address-tag-1{
    display: inline-block;
    position: relative;
    -webkit-flex: none;
    flex: none;
    margin-right: .08rem;
    margin-right: .8vw;
    padding: .053333rem;
    padding: .533333vw;
    color: transparent;
    white-space: nowrap;
    border: 1px solid #3190e8;
    border-radius: .013333rem;
    border-radius: .133333vw;
    font-size: .266667rem!important;
    line-height: .266667rem;
    line-height: 2.666667vw;
}
.address-tag{
    margin-left: .16rem;
    margin-left: 1.6vw;
    vertical-align: middle;
}
.address-tag-1.address-tag-2{
    border: .013333rem solid hsla(0,0%,100%,.8);
    border: .133333vw solid hsla(0,0%,100%,.8);
}
.cart-address .address-item .address-detail{
    font-size: .453333rem;
    font-weight: 700;
    line-height: 1.88;
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.address-text{
    font-size: .586667rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - .4rem);
    max-width: calc(100% - 4vw);
}
.cart-address .address-item svg{
    width: .213333rem;
    width: 2.133333vw;
    height: .32rem;
    height: 3.2vw;
    margin-left: .213333rem;
    margin-left: 2.133333vw;
}
.cart-address .address-item .address-name{
    font-size: .373333rem;
    line-height: 1.21;
    margin-bottom: .133333rem;
    margin-bottom: 1.333333vw;

}
.phone{
    margin-left: .213333rem;
    margin-left: 2.133333vw;
}
.checkout-section{
    background: #fff;
    box-shadow: 0 0.013333rem 0.026667rem 0 rgba(0,0,0,.05);
    box-shadow: 0 0.133333vw 0.266667vw 0 rgba(0,0,0,.05);
}
.key-card{
    padding: 0 .533333rem;
    padding: 0 5.333333vw;
}
.checkout-section:not(:last-child){
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
}
.delivery{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    border-bottom: 1px dotted #eee;
    padding: .426667rem 0;
    padding: 4.266667vw 0;
}
.delivery-left{
    -webkit-flex: 1;
    flex: 1;
}
.delivery-time{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    font-size: .4rem;
    font-weight: 500;
}
.cart-item__title{
    font-weight: 500;
}
.right{
    text-align: right;
}
.delivery-select{
    text-align: right;
    color: #2395ff;
}
.delivery-select>span{
    font-size: .4rem;
    font-weight: 500;
}
.cart-item{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: .426667rem .533333rem;
    padding: 4.266667vw 5.333333vw;
    font-size: .4rem;
    color: #333;
}
.pay-way{
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.pay-text{
    color: #2395ff;
    font-weight: 500;
}
.cart-group{
    padding: 0 .533333rem;
    padding: 0 5.333333vw;
}
.cart-group-h3{
    padding: .426667rem 0;
    padding: 4.266667vw 0;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-items: center;
    align-items: center;
    position: relative;
    z-index: 1;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.cart-group-h3-span1{
    font-size: .453333rem;
    line-height: 1;
    font-weight: 700;
}
.cart-group-h3-span1,.cart-group-h3-span2{
    display: inline-block;
    vertical-align: middle;
}
.cart-group-h3-span2{
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    font-size: .346667rem;
    line-height: 1.15;
}
.cart-group-ul1{
    margin-top: .066667rem;
    margin-top: .666667vw;
    color: #333;
    font-size: .346667rem;
}
.cart-group-ul1 li{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    width: 100%;
    padding: .32rem 0;
    padding: 3.2vw 0;
    border-bottom: 1px dotted #eee;
    font-size: .373333rem;
    color: inherit;
}
.cart-group-ul1-img{
    width: .96rem;
    width: 9.6vw;
    height: .96rem;
    height: 9.6vw;
}
.cart-group-ul1 li .cart-group-ul1-div{
    margin-left: .213333rem;
    margin-left: 2.133333vw;
    overflow: hidden;
    -webkit-flex: 9;
    flex: 9;
}
.cart-group-ul1 li .cart-group-ul1-p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.cart-group-ul1 li .cart-group-ul1-span1{
    -webkit-flex: 1;
    flex: 1;
    text-align: right;
    font-size: .32rem;
}
.cart-group-ul1 li .cart-group-ul1-span2{
    min-width: 1.6rem;
    min-width: 16vw;
    color: #bbb;
    font-size: .426667rem;
    text-decoration: line-through;
    text-align: right;
}
.cart-group-ul1 li .cart-group-ul1-span3{
    font-size: .426667rem;
    -webkit-flex: 3;
    flex: 3;
    text-align: right;
    white-space: nowrap;
}
.cart-group-ul1-span4{
    font-size: .32rem;
    position: relative;
    left: 1vw;
}
.cart-group-ul2{
    font-size: .373333rem;
}
.cart-group-ul2 li{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    border-bottom: 1px dotted #fff;
    padding: .426667rem 0;
    padding: 4.266667vw 0;
}
.cart-group-ul2-span1{
    display: inline-block;
    margin-right: .32rem;
    margin-right: 3.2vw;
    padding: 0 .106667rem;
    padding: 0 1.066667vw;
    height: .373333rem;
    height: 3.733333vw;
    border-radius: 1px;
    vertical-align: middle;
    overflow: hidden;
}
.mini-tag{
    position: relative;
    font-size: .266667rem;
    color: transparent;
    white-space: nowrap;
}
.cart-group-ul2-span2,.cart-group-ul2-span3{
    font-size: .533333rem;
    font-weight: 500;
    line-height: 1;
    text-align: center;
}
.mini-tag-span{
    position: absolute;
    left: 0;
    top: 0;
    right: -100%;
    bottom: -100%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: .533333rem;
}
.cart-group-ul2-span4{
    display: inline-block;
    vertical-align: middle;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.cart-group-ul2-div1{
    font-size: .426667rem;
}
.cart-group-ul2-span5{
    font-size: .32rem;
    position: relative;
    left: 1vw;
}
.cart-group-ul2-span2{
    color: #8395ae;
    border: 2px solid rgba(131,149,174,.34);
    background-color: rgba(149,168,193,.14);
}
.cart-group-ul2-span3{
    color: #fff;
    background-color: #60acf4;
}
.cart-group-ul2-div2{
    display: -webkit-flex;
    display: flex;
    overflow: hidden;
    -webkit-align-items: center;
    align-items: center;
}
.cart-group-ul2-div3{
    font-size: .426667rem;
    color: #ff4a07;
}
.cart-group-ul2-span6{
    position: relative;
    left: 3vw;
}
.cart-item{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding: .426667rem .533333rem;
    padding: 4.266667vw 5.333333vw;
    font-size: .4rem;
    color: #333;
}
.cart-item:not(:first-child){
    border-top: 1px solid #f2f2f2;
}
.hongbao-1{
    display: -webkit-flex;
    display: flex;
    padding: .426667rem 0;
    padding: 4.266667vw 0;
    border-top-width: 0!important;
    border-bottom-width: 0!important;
    overflow: hidden;
}
.hongbao-h3{
    display: inline;
    font-size: .373333rem;
    font-weight: 500;
    color: #333;
}
.text-ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.hongbao-1 span{
    font-size: .346667rem;
    font-weight: 400;
    line-height: 1;
    color: #bbb;
}
.cart-item .cartitem-right{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    color: #bbb;
    font-size: .346667rem;
    max-width: 6.933333rem;
    max-width: 69.333333vw;
}
.hongbao-span1{
    position: relative;
    color: transparent!important;
    white-space: nowrap;
    display: inline-block;
    height: .48rem;
    height: 4.8vw;
    min-width: 1.52rem;
    min-width: 15.2vw;
    left: 2vw;
}
.hongbao-span1::before{
    content: attr(content);
    position: absolute;
    top: 0;
    left: 0;
    padding: .16rem .186667rem .16rem .16rem;
    padding: 1.6vw 1.866667vw 1.6vw 1.6vw;
    font-size: .64rem;
    line-height: 1;
    color: #fff;
    white-space: nowrap;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-image: linear-gradient(106deg,#ff7417,#ff3c15);
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.hongbao-svg1{
    margin-left: .066667rem;
    margin-left: .666667vw;
}
.cart-item svg{
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    width: .32rem;
    width: 3.2vw;
    height: .32rem;
    height: 3.2vw;
}
.cart-group-div1{
    padding: .4rem 0 .48rem;
    padding: 4vw 0 4.8vw;
}
.cart-group-div2{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    font-size: .373333rem;
    color: #333;
}
.cart-group-div2 .cart-group-div3{
    text-align: right;
}
.cart-group-div2 .cart-group-div3 a{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    color: #bbb;
    font-size: .346667rem;
}
.cart-group-div2 .cart-group-div3 span{
    margin-right: .053333rem;
    margin-right: .533333vw;
}
.cart-group-div2 .cart-group-div3 svg{
    padding-right: .053333rem;
    padding-right: .533333vw;
    width: .373333rem;
    width: 3.733333vw;
    height: .373333rem;
    height: 3.733333vw;
}
.cart-group-div2 .cart-group-span1{
    font-size: .586667rem;
    font-weight: 500;
}
.cart-group-div1{
    border-top: 1px solid #f2f2f2;
}
.action-bar{
    height: 1.173333rem;
    height: 11.733333vw;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #3c3c3c;
    z-index: 2;
}
.action-bar span{
    color: #fff;
    font-size: .48rem;
    line-height: 1.173333rem;
    line-height: 11.733333vw;
    padding-left: .266667rem;
    padding-left: 2.666667vw;
    vertical-align: middle;
}
.action-bar .submitbtn{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background: #00e067;
    min-width: 2.8rem;
    min-width: 28vw;
    padding: 0 .133333rem;
    padding: 0 1.333333vw;
    border: none;
    color: #fff;
    font-size: .453333rem;
}
</style>