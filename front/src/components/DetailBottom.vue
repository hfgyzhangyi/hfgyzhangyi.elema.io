<template>
    <footer class="cartview-cartview">
        <div class="cartview-cartbody" style="z-index:11;display:none;">
            <section class="discount-tip-discountTip">
                <span style="color: #333333;">还差</span>
                <span style="color: #FF5339;">{{low_pay}}</span>
                <span style="color: #333333;">元起送</span>
            </section>
        </div>
        <div class="bottomNav-cartfooter" style="z-index:11;">
            <span class="bottomNav-carticon bottomNav-empty"></span>
            <div class="bottomNav-cartInfo">
                <p class="bottomNav-carttotal">
                    <span class="bottomNav-carttotalOriginal">未选购商品</span>
                </p>
                <p class="bottomNav-cartdelivery">另需配送费3.5元</p>
            </div>
            <a href="javascript:;" class="submit-btn-submitbutton submit-btn-disabled">
                <small>下单前请选必选品</small>
            </a>
        </div>
    </footer>
</template>
<script>
export default {
    name:'detail-bottom',
    props:["low_pay"],
    data(){
        return{
            dishes:{}
        }
    },
    created(){
        this.bus.$on("add_dish",this.add.bind(this));
        this.bus.$on("del_dish",this.del.bind(this));
        this.bus.$on("update_dish",this.update.bind(this));
    },
    methods:{
        add(key,dish){
            this.dishes[key]=dish;
        },
        del(key){
            delete this.dishes[key];
        },
        update(){
            var count1=0;
            var total=0;
            var flag=false;
            var mustItems=this.checkMustSelectItems();
            var countMustItems=0;
            for(var key in this.dishes){
                count1++;
                total+=parseFloat(this.dishes[key].price);
                if(mustItems.indexOf(key)>=0){
                    countMustItems++;
                }
            }
            if(mustItems.length==0||mustItems.length==countMustItems){
                flag=true;
            }
            total=total.toFixed(1);
            //判断总价与最低配送价格的关系
            if(parseFloat(this.low_pay)-total>0){
                $(".discount-tip-discountTip").children("span:eq(0)").text("还差");
                $(".discount-tip-discountTip").children("span:eq(1)").text((parseFloat(this.low_pay)-total).toFixed(1));
                $(".discount-tip-discountTip").children("span:eq(2)").text("元起送");
                $(".cartview-cartbody").show();
                //判断必选项辣度选择是否存在
                if(flag){
                    $(".submit-btn-submitbutton").children("small").text("还差"+(parseFloat(this.low_pay)-total).toFixed(1)+"元起送");
                    $(".submit-btn-submitbutton").addClass("submit-btn-disabled");
                }else{
                    $(".submit-btn-submitbutton").children("small").text("下单前请选必选品");
                    $(".submit-btn-submitbutton").addClass("submit-btn-disabled");
                }
            }else{
                $(".discount-tip-discountTip").children("span:eq(0)").text("");
                $(".discount-tip-discountTip").children("span:eq(2)").text("");
                //判断必选项辣度选择是否存在
                if(flag){
                    $(".discount-tip-discountTip").children("span:eq(1)").text("可以提交订单");
                    $(".submit-btn-submitbutton").children("small").text("去结算");
                    $(".submit-btn-submitbutton").removeClass("submit-btn-disabled");
                }else{
                    $(".discount-tip-discountTip").children("span:eq(1)").text("请选必选品");
                    $(".submit-btn-submitbutton").children("small").text("下单前请选必选品");
                    $(".submit-btn-submitbutton").addClass("submit-btn-disabled");
                }
            }
            //有dish并且小红圆点没有出现的场合
            if($(".bottomNav-carticon").children("span").length==0&&count1==1){
                $(".bottomNav-carticon").append($("<span>"+1+"</span>"));
                $(".bottomNav-carticon").addClass("bottomNav-carticon-change");
                $(".bottomNav-carticon").removeClass("bottomNav-empty");
                return;
            }
            //有选择dish的场合
            if(count1==0){
                $(".bottomNav-carticon").children("span").remove();
                $(".bottomNav-carticon").removeClass("bottomNav-carticon-change");
                $(".bottomNav-carticon").addClass("bottomNav-empty");
                $(".cartview-cartbody").hide();
                return;
            }
            //获取dish总数
            var count2=0;
            for(var k in this.dishes){
                count2+=parseInt(this.dishes[k].number);
            }
            $(".bottomNav-carticon").children("span").text(count2);
        },
        checkMustSelectItems(){
            var titles=$(".menucategory-categoryName");
            for(var i=0;i<titles.length;i++){
                if($(titles[i]).text().indexOf("必选品")>=0){
                    var mustItems=$(titles[i]).text().slice($(titles[i]).text().indexOf("必选品")+4,-1).split(",");
                    return mustItems;
                }
            }
            return [];
        }
    }
}
</script>
<style scoped>
.cartview-cartview{
    font-size: .426667rem;
}
.bottomNav-cartfooter{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 2.106667rem;
    padding-left: 21.066667vw;
    background-color: rgba(61,61,63,1);
    -webkit-backdrop-filter: blur(.266667rem);
    -webkit-backdrop-filter: blur(2.666667vw);
    height: 1.28rem;
    height: 12.8vw;
}
.bottomNav-carticon.bottomNav-empty{
    background-image: radial-gradient(circle,#363636 .626667rem,#444 0);
    background-image: radial-gradient(circle,#363636 6.266667vw,#444 0);
}
.bottomNav-carticon{
    position: absolute;
    left: .32rem;
    left: 3.2vw;
    bottom: .2rem;
    bottom: 2vw;
    width: 1.333333rem;
    width: 13.333333vw;
    height: 1.333333rem;
    height: 13.333333vw;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #3190e8;
    border: .133333rem solid #444;
    border: 1.333333vw solid #444;
    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);
    box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
    will-change: transform;
}
.bottomNav-carticon::before{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: .6rem;
    background-size: 6vw;
    background: url('../assets/images/detail-bottom/shopping-cart_1.png') no-repeat center center;
    content: "";
}
.bottomNav-carticon-change::before{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: .6rem;
    background-size: 6vw;
    background: url('../assets/images/detail-bottom/shopping-cart_2.png') no-repeat center center;
    content: "";
}
.bottomNav-cartInfo{
    -webkit-flex: 1;
    flex: 1;
}
.bottomNav-carttotal{
    font-size: .48rem;
    line-height: normal;
    color: #fff;
}
.bottomNav-carttotalOriginal{
    font-size: .7em;
    color: #999;
}
.bottomNav-cartdelivery{
    color: #999;
    font-size: .266667rem;
}
.submit-btn-submitbutton{
    height: 100%;
    width: 2.8rem;
    width: 28vw;
    background-color: #38ca73;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: .4rem;
    font-weight: 700;
    -webkit-user-select: none;
    user-select: none;
    line-height: 1.28rem;
    line-height: 12.8vw;
    word-break: keep-all;
}
.submit-btn-submitbutton.submit-btn-disabled{
    background-color: #535356;
}
.submit-btn-submitbutton small{
    font-size: .293333rem;
    display: block;
}
.bottomNav-carticon>>>span{
    position: absolute;
    right: -.12rem;
    right: -1.2vw;
    top: -.133333rem;
    top: -1.333333vw;
    line-height: 1;
    background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
    color: #fff;
    border-radius: .32rem;
    border-radius: 3.2vw;
    padding: .053333rem .133333rem;
    padding: .533333vw 1.333333vw;
    font-size: .266667rem;
}
.cartview-cartbody{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease,-webkit-transform .3s ease;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    bottom: calc(1.813333rem - 1px);
    bottom: calc(18.133333vw - 1px);
}
.discount-tip-discountTip{
    background-color: #fffad6;
    border-top: .013333rem solid #f9e8a3;
    border-top: .133333vw solid #f9e8a3;
    opacity: .96;
    line-height: .533333rem;
    line-height: 5.333333vw;
    font-size: .266667rem;
    text-align: center;
}
</style>