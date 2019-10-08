<template>
    <li>
        <div class="fooddetails-root">
            <input type="hidden" name="id" :value="id"/>
            <input type="hidden" name="category" :data-category="category" :value="category"/>
            <span class="fooddetails-logo">
                <img :src="require('../assets/images/detail/'+pic_name)"/>
            </span>
            <section class="fooddetails-info">
                <p class="fooddetails-name">
                    <span class="fooddetails-nameText">
                        <slot name="name"></slot>
                    </span>
                </p>
                <p class="fooddetails-desc" v-if="des!=null">
                    {{des}}
                </p>
                <p class="fooddetails-sales" v-if="sales!=0||feedback_rate!=0">
                    <span v-if="sales!=0">月售{{sales}}份</span>
                    <span v-if="feedback_rate!=0">好评率{{feedback_rate}}%</span>
                </p>
                <span class="salesInfo-price fooddetails-salesInfo" style="color: rgb(255, 83, 57);">
                    <span>
                        <slot name="price"></slot>
                    </span>
                    <del class="salesInfo-originPrice" v-if="original_price!=0">¥{{original_price}}</del>
                </span>
                <div class="fooddetails-button">
                    <span>
                        <span class="cartbutton-minPurchase" v-if="low_number!=1">{{low_number}}份起售</span>
                        <span class="cartbutton-entitybutton">
                            <a href="javascript:;" style="display:none;" @click="minus($event)">
                                <svg style="fill: rgb(35, 149, 255);">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add">
                                        <svg viewBox="0 0 44 44" id="cart-add" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
                                    </use>
                                </svg>
                            </a>
                            <span class="cartbutton-entityquantity" style="display:none;"></span>
                            <a href="javascript:;" @click="plus($event)">
                                <svg style="fill: rgb(35, 149, 255);">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus">
                                        <svg viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
                                    </use>
                                </svg>
                            </a>
                        </span>
                    </span>
                </div>
            </section>
        </div>
    </li>
</template>
<script>
export default {
    name:'my-li-1',
    props:["id","name","pic_name","price","original_price","feedback_rate","sales","des","low_number","category"],
    methods:{
        plus(event){
            if($(event.currentTarget).parent().parent().parent().parent().find(".fooddetails-nameText").text()=="辣度选择"){
                if($(event.currentTarget).prev().text()!="1"){
                    $("#shoptab").css("zIndex",2);
                    $(".panel-item-active").removeClass("panel-item-active");
                    $(".panel-item-item:eq(0)").addClass("panel-item-active");
                    $(".panel-item-item:eq(4)").addClass("panel-item-active");
                    $(".cartview-cartview").hide();
                    $(".specpanel-mask").show();
                    $(".specpanel-root").show();
                    $(".specpanel-root").animate({"height":"146.666667vw"},200);
                }
            }else{
                var number=$(event.currentTarget).siblings(".cartbutton-entityquantity").text();
                if(number==""){
                    if($(event.currentTarget).parent().siblings(".cartbutton-minPurchase").text()!=""){
                        $(event.currentTarget).parent().siblings(".cartbutton-minPurchase").hide();
                    }
                    $(event.currentTarget).siblings(".cartbutton-entityquantity").text("1");
                    $(event.currentTarget).parent().children("a:eq(0)").show();
                    $(event.currentTarget).parent().children("span").show();
                }else{
                    $(event.currentTarget).siblings(".cartbutton-entityquantity").text(parseInt(number)+1);
                }
                var key=$(event.currentTarget).parent().parent().parent().siblings(".fooddetails-name").children(".fooddetails-nameText").text();
                var obj={name:key};
                var number=$(event.currentTarget).siblings(".cartbutton-entityquantity").text();
                var price=$(event.currentTarget).parent().parent().parent().siblings(".salesInfo-price").children("span").text();
                obj["price"]=(parseFloat(price)*parseInt(number)).toFixed(1);
                obj["number"]=number;
                this.bus.$emit("add_dish",key,obj);
                this.bus.$emit("update_dish");
            }
        },
        minus(event){
            var number=$(event.currentTarget).siblings(".cartbutton-entityquantity").text();
            if(number=="1"){
                if($(event.currentTarget).parent().siblings(".cartbutton-minPurchase").text()!=""){
                    $(event.currentTarget).parent().siblings(".cartbutton-minPurchase").show();
                }
                $(event.currentTarget).siblings(".cartbutton-entityquantity").text("");
                $(event.currentTarget).parent().children("a:eq(0)").hide();
                $(event.currentTarget).parent().children("span").hide();
            }else{
                $(event.currentTarget).siblings(".cartbutton-entityquantity").text(parseInt(number)-1);
            }
            var key=$(event.currentTarget).parent().parent().parent().siblings(".fooddetails-name").children(".fooddetails-nameText").text();
            var obj={name:key};
            var number=$(event.currentTarget).siblings(".cartbutton-entityquantity").text();
            var price=$(event.currentTarget).parent().parent().parent().siblings(".salesInfo-price").children("span").text();
            obj["price"]=(parseFloat(price)*parseInt(number)).toFixed(1);
            obj["number"]=number;
            if(number==0||key=="辣度选择"){
                this.bus.$emit("del_dish",key);
                this.bus.$emit("update_dish");
            }else{
                this.bus.$emit("add_dish",key,obj);
                this.bus.$emit("update_dish");
            }
        }
    }
}
</script>
<style scoped>
li{
    list-style: none;
    position: relative;
    margin: 0;
    min-height: 3.066667rem;
    min-height: 30.666667vw;
    padding-left: .266667rem;
    padding-left: 2.666667vw;
}
.fooddetails-root{
    padding: .266667rem 0;
    padding: 2.666667vw 0;
    margin-bottom: .013333rem;
    margin-bottom: .133333vw;
    display: -webkit-flex;
    display: flex;
    min-height: 2.746667rem;
    min-height: 27.466667vw;
    position: relative;
}
.fooddetails-logo{
    width: 2.533333rem;
    width: 25.333333vw;
    height: 2.533333rem;
    height: 25.333333vw;
    -webkit-flex: none;
    flex: none;
    margin-right: .266667rem;
    margin-right: 2.666667vw;
    position: relative;
}
.fooddetails-logo img{
    width: 100%;
    border-radius: .053333rem;
    border-radius: .533333vw;
}
.fooddetails-info{
    -webkit-flex: 1;
    flex: 1;
    position: relative;
    padding-bottom: .666667rem;
    padding-bottom: 6.666667vw;
    padding-right: .4rem;
    padding-right: 4vw;
}
.fooddetails-name{
    position: relative;
    padding-right: .4rem;
    padding-right: 4vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: start;
    align-items: start;
}
.fooddetails-nameText{
    font-weight: 700;
    overflow: hidden;
    font-size: .4rem;
    white-space: nowrap;
    width: 4rem;
    width: 40vw;
    text-overflow: ellipsis;
}
.fooddetails-desc{
    margin: .133333rem 0;
    margin: 1.333333vw 0;
    font-size: .266667rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 4.266667rem;
    width: 42.666667vw;
}
.fooddetails-salesInfo{
    position: absolute;
    bottom: 0;
}
.salesInfo-price{
    font-size: .4rem;
    line-height: .426667rem;
    line-height: 4.266667vw;
    color: #ff5339;
    padding-bottom: .093333rem;
    padding-bottom: .933333vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: baseline;
    align-items: baseline;
}
.salesInfo-price span:first-child, .salesInfo-price:before{
    margin-right: .026667rem;
    margin-right: .266667vw;
}
.salesInfo-price:before{
    content: "\A5";
    font-size: .373333rem;
    display: inline-block;
}
.fooddetails-button{
    position: absolute;
    right: .4rem;
    right: 4vw;
    bottom: .066667rem;
    bottom: .666667vw;
}
.cartbutton-entitybutton{
    display: -webkit-inline-flex;
    display: inline-flex;
    font-size: .346667rem;
    -webkit-align-items: center;
    align-items: center;
}
.cartbutton-entitybutton a{
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
}
.cartbutton-entitybutton svg{
    width: .586667rem;
    width: 5.866667vw;
    height: .586667rem;
    height: 5.866667vw;
    vertical-align: middle;
    fill: #2396ff;
}
.fooddetails-sales{
    margin: .173333rem 0!important;
    margin: 1.733333vw 0!important;
    color: #999;
    font-size: .266667rem;
    line-height: 1;
    min-height: 1em;
}
.fooddetails-sales span{
    vertical-align: middle;
}
.fooddetails-sales>span:not(:first-child){
    margin-left: .106667rem;
    margin-left: 1.066667vw;
    vertical-align: middle;
}
.salesInfo-originPrice{
    font-size: .32rem;
    color: #999;
    margin-left: .16rem;
    margin-left: 1.6vw;
}
.cartbutton-minPurchase{
    font-size: .266667rem;
    color: #666;
}
.cartbutton-entityquantity{
    display: inline-block;
    text-align: center;
    color: rgba(0,0,0,.87);
    vertical-align: middle;
    font-size: .373333rem;
    width: .693333rem;
    width: 6.933333vw;
    overflow: hidden;
}
</style>