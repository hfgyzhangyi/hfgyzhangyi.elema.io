<template>
  <div class="tmpl">
        <div v-for="(item,i) of data" :key="i">
            <div class="app">
                <div class="index1">
                    <nav class="index1_nav">
                        <a href="javascript:;" class="index1_back" @click="back()"></a>
                    </nav>
                    <div class="detail-wrap">
                        <div class="index1_1">
                            <span class="mini-tag">
                            品牌
                            <span class="mini-tag-span">品牌</span>
                            </span>
                            <img :src="require('../assets/images/home/'+item.store_pic)" class="index1_img"/>
                        </div>
                        <div class="index1_2">
                            <h2 class="index1_2_h2">
                                <span class="index1_2_span">{{item.store_name}}</span>
                                <i class="index1_2_i"></i>
                            </h2>
                            <div class="index1_2_div">
                                <span class="index1_2_div_span">评价{{item.estimate}}</span>
                                <span class="index1_2_div_span">月售{{item.sales}}单</span>
                                <span class="index1_2_div_span">蜂鸟快送约34分钟</span>
                            </div>
                        </div>
                        <div class="index1_3">
                            <div class="index1_3_div1 index1_3_div1_other1">
                                <p class="index1_3_p1">
                                    <span class="index1_3_span">
                                        <small>¥</small>
                                        4
                                    </span>
                                    <span>
                                        无门槛
                                    </span>
                                </p>
                                <p class="index1_3_p2">领取</p>
                            </div>
                            <div class="index1_3_div1">
                                <p class="index1_3_p1">
                                    共
                                    <span class="index1_3_span">
                                        <small>¥</small>23
                                    </span>
                                    <span>
                                        店铺
                                    </span>
                                </p>
                                <p class="index1_3_p2">领取</p>
                            </div>
                        </div>
                        <div class="index1_4">
                            <div class="index1_4_div">
                                <ul>
                                    <li class="item" style="color: rgb(255, 75, 51); background-color: rgb(255, 255, 255); border: 1px solid rgb(255, 201, 193);" v-for="(discount,i) of item.discount3" :key="i">{{discount}}</li>
                                </ul>
                            </div>
                        </div>
                        <p class="announcement">{{item.announcement}}</p>
                    </div>
                </div>
            </div>
            <div id="shoptab" style="position: sticky; top: 0px;">
                <div class="shop-tab-wrap">
                    <div class="shop-tab-div shop-tab-focus" @click="clickShopTab($event)">
                        <p class="shop-tab-p">
                            点餐
                            <span class="shop-tab-span" style="background-color: rgb(35, 149, 255);"></span>
                        </p>
                    </div>
                    <div class="shop-tab-div" @click="clickShopTab($event)">
                        <p class="shop-tab-p">
                            评价
                            <span class="shop-tab-span" style="background-color: rgb(35, 149, 255);"></span>
                        </p>
                    </div>
                    <div class="shop-tab-div" @click="clickShopTab($event)">
                        <p class="shop-tab-p">
                            商家
                            <span class="shop-tab-span" style="background-color: rgb(35, 149, 255);"></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="book info">
                <div class="book_index">
                    <div class="menuview">
                        <div class="menuviewMain">
                            <main class="main">
                                <div class="menucategory menuNav">
                                    <ul class="menucategory-categoryWrapper">
                                        <li class="menucategory-categoryItem" v-for="(category,h) of category_list" :key="h" :class="h==0?'menucategory-active':''" @click="clickCategory($event)">
                                            <img class="menucategory-categoryIcon" v-if="category.category=='必选品(辣度选择)'" src="../assets/images/detail/19.jpg"/>
                                            <img class="menucategory-categoryIcon" v-else-if="category.category=='热销'" src="../assets/images/detail/20.jpg"/>
                                            <img class="menucategory-categoryIcon" v-else-if="category.category=='折扣同享'" src="../assets/images/detail/21.jpg"/>
                                            <span class="menucategory-categoryName">{{category.category}}</span>
                                        </li>
                                    </ul>
                                </div>
                                <ul class="container menuview-menuList" id="container">
                                    <my-li-1 v-for="(dish,z) of dishes_list" :key="z" :id="dish.id" :category="dish.category" :pic_name="dish.pic_name" :des="dish.des" :sales="dish.sales" :original_price="dish.original_price" :low_number="dish.low_number" :feedback_rate="dish.feedback_rate">
                                        <template slot="name">{{dish.name}}</template>
                                        <template slot="price">{{dish.price}}</template>
                                    </my-li-1>
                                </ul>
                                <div>
                                    <div class="specpanel-mask" style="display:none;" @click="clickSpecpanelMask($event)"></div>
                                    <div class="specpanel-root" style="display:none;">
                                        <div class="specpanel-main">
                                            <a href="javascript:;" class="specpanel-close" @click="closeSpecpanel($event)"></a>
                                            <div class="specpanel-header">
                                                <img class="specpanel-pic" src="../assets/images/detail/4.jpg">
                                                <div class="specpanel-info">
                                                    <p class="specpanel-name">辣度选择</p>
                                                    <p class="specpanel-total">已选：不辣！不辣！/要餐具</p>
                                                    <p class="specpanel-price" style="color: rgb(255, 83, 57);">
                                                        <small>¥</small>0
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="specpanel-body">
                                                <div>
                                                    <p class="specpanel-colTitle">规格</p>
                                                    <div class="specpanel-colBody">
                                                        <span class="panel-item-item panel-item-active" @click="panelItemClick($event)">不辣！不辣！</span>
                                                        <span class="panel-item-item" @click="panelItemClick($event)">微辣！微辣！</span>
                                                        <span class="panel-item-item" @click="panelItemClick($event)">中辣！中辣！</span>
                                                        <span class="panel-item-item" @click="panelItemClick($event)">重辣！重辣！</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p class="specpanel-colTitle">餐具选择</p>
                                                    <div class="specpanel-colBody">
                                                        <span class="panel-item-item panel-item-active" @click="panelItemClick($event)">要餐具</span>
                                                        <span class="panel-item-item" @click="panelItemClick($event)">环保单(不要餐具)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="specpanel-doneBtn" @click="clickSpecpanelBtn($event)" style="background-color: rgb(35, 149, 255);">选好了</button>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <div class="appraise info" style="display:none;">
                <div class="appraise-wrap">
                    <ul>
                        <li class="appraise-li" v-for="(appraise,j) of appraise_list" :key="j">
                            <div class="comment-block">
                                <div class="sculpture-div-other1 sculpture-div" style="width: 30px; height: 30px;">
                                    <span style="background-size: 30px;background-position: 0px 60px;"></span>
                                </div>
                                <div class="content-div">
                                    <div class="content-div-div1">
                                        <h3 class="content-div-div1-h3">{{appraise.name}}</h3>
                                        <small class="content-div-div1-small">{{appraise.time}}</small>
                                    </div>
                                    <div class="content-div-div2">
                                        <div class="Rating-wrapper">
                                            <div class="Rating-gray">
                                                <img :src="appraise.estimate==4.7?require('../assets/images/home/star4.7.png'):require('../assets/images/home/star4.9.png')">
                                            </div>
                                        </div>
                                        <span class="content-div-div2-span" style="color: rgb(255, 96, 0);">
                                            超赞
                                        </span>
                                    </div>
                                    <div class="content-div-div3">
                                        {{appraise.comment}}
                                    </div>
                                    <div class="content-div-div4">
                                        {{appraise.response}}
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shop-info info" style="display:none;">
                <section class="section">
                    <h3 class="section-title">配送信息</h3>
                    <div class="delivery">
                        <div>
                            <span>由蜂鸟快送提供配送，约34分钟送达，距离1.0km</span>
                        </div>
                        <div>配送费￥3.5</div>
                    </div>
                </section>
                <section class="section">
                    <h3 class="section-title">商家服务</h3>
                    <div class="activity">
                        <div class="activity-div activity-div-other1">
                            <span class="activity-mini-tag activity-mini-tag-other1" style="border: 1px solid rgb(153, 153, 153);">
                                赔
                                <span class="activity-mini-tag-inner activity-mini-tag-inner-other1" style="color: rgb(153, 153, 153);">赔</span>
                            </span>
                            <span class="activity-text">商家原因导致订单取消，赔付代金券</span>
                        </div>
                        <div class="activity-div activity-div-other1">
                            <span class="activity-mini-tag activity-mini-tag-other1" style="border: 1px solid rgb(153, 153, 153);">
                                保
                                <span class="activity-mini-tag-inner activity-mini-tag-inner-other1" style="color: rgb(153, 153, 153);">保</span>
                            </span>
                            <span class="activity-text">该商户食品安全已由国泰产险承担，食品安全有保障</span>
                        </div>
                        <div class="activity-div activity-div-other1">
                            <span class="activity-mini-tag activity-mini-tag-other1" style="border: 1px solid rgb(153, 153, 153);">
                                票
                                <span class="activity-mini-tag-inner activity-mini-tag-inner-other1" style="color: rgb(153, 153, 153);">票</span>
                            </span>
                            <span class="activity-text">该商家支持开发票，开票订单金额100.00元起，请在下单时填写好发票抬头</span>
                        </div>
                    </div>
                </section>
                <div>
                    <section class="section">
                        <h3 class="section-title">商家信息</h3>
                        <ul class="detail-ul">
                            <li>{{item.info}}</li>
                            <li>
                                <span>品类</span>
                                <span>{{item.category}}</span>
                            </li>
                            <li>
                                <span>商家电话</span>
                                <span class="detail-span">
                                    <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#phone"><svg viewBox="0 0 16 16" id="phone" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M-286-743H89V467h-375z"></path><path fill="#00A6FF" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0zm-3.287 3.613a.424.424 0 0 1-.29.343c-.853.272-3.123-.733-4.883-2.486-1.76-1.753-2.769-4.014-2.496-4.865a.425.425 0 0 1 .344-.288l1.88-.312h.002l.015-.003c.085-.013.177.034.229.115.148.236.524.902.827 1.437.197.35.361.64.403.706.086.138.077.301-.02.399l-.8.796a.723.723 0 0 0 0 1.025l.61.607a.73.73 0 0 0 1.029 0l.799-.796c.098-.098.262-.106.4-.02l2.043 1.27a.397.397 0 0 1 .191.385l-.283 1.687z"></path></g></svg></use></svg>
                                    <span>联系商家</span>
                                </span>
                            </li>
                            <li>
                                <span>地址</span>
                                <span>{{item.store_address}}</span>
                            </li>
                            <li>
                                <span>营业时间</span>
                                <span>16:00-03:00</span>
                            </li>
                        </ul>
                    </section>
                    <section class="section">
                        <a href="javascript:;" class="section-title">营业资质</a>
                    </section>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            data:'',
            appraise_list:'',
            category_list:'',
            dishes_list:'',
            store_id:0
        }
    },
    methods:{
        back(){
            history.go(-1);
        },
        clickShopTab(event){
            var index1=$(event.currentTarget).index();
            var index2=$(".shop-tab-focus").index();
            $(".shop-tab-focus").removeClass("shop-tab-focus");
            $(event.currentTarget).addClass("shop-tab-focus");
            if(index1==0&&index1!=index2){
                $(".info").hide();
                $(".book").show();
                document.documentElement.scrollTop=0;
            }else if(index1==1&&index1!=index2){
                $(".info").hide();
                $(".appraise").show();
                document.documentElement.scrollTop=0;
            }else if(index1==2&&index1!=index2){
                $(".info").hide();
                $(".shop-info").show();
                document.documentElement.scrollTop=0;
            }
        },
        clickCategory(event){
            $("#container").unbind("scroll",this.scroll);
            $(".menucategory-active").removeClass("menucategory-active");
            $(event.currentTarget).addClass("menucategory-active");
            var text=$(event.currentTarget).children(".menucategory-categoryName").text();
            if(text=="必选品(辣度选择)"){
                text="辣度选择";
            }
            var c_top=$("#"+text).position().top;
            var f_scrollTop=$(".container").scrollTop();
            if(c_top<0){
                $(".container").animate({scrollTop:c_top+(f_scrollTop-11)},100,function(){
                    $("#container").bind("scroll",this.scroll);
                });
            }else{
                $(".container").animate({scrollTop:(c_top-11)+f_scrollTop},100,function(){
                    $("#container").bind("scroll",this.scroll);
                });
            }
        },
        closeSpecpanel(event){
            $(".specpanel-root").hide();
            $(".specpanel-mask").hide();
            $(".specpanel-root").animate({"height":"0px"},0);
            $("#shoptab").css("zIndex",5);
        },
        clickSpecpanelMask(event){
            $(".specpanel-root").hide();
            $(".specpanel-mask").hide();
            $(".specpanel-root").animate({"height":"0px"},0);
            $("#shoptab").css("zIndex",5);
        },
        panelItemClick(event){
            if($(event.currentTarget).parent().siblings(".specpanel-colTitle").text()=="规格"){
                $(".panel-item-active:eq(0)").removeClass("panel-item-active");
                $(event.currentTarget).addClass("panel-item-active");
            }else{
                $(".panel-item-active:eq(1)").removeClass("panel-item-active");
                $(event.currentTarget).addClass("panel-item-active");
            }
            $(".specpanel-total").text("已选："+$(".panel-item-active:eq(0)").text()+"/"+$(".panel-item-active:eq(1)").text());
        },
        clickSpecpanelBtn(event){
            $(".specpanel-root").hide();
            $(".specpanel-mask").hide();
            $(".specpanel-root").animate({"height":"0px"},0);
            $("#shoptab").css("zIndex",5);
        },
        scroll(){
            for(var i=0;i<this.category_list.length;i++){
                var category=this.category_list[i].category;
                if(category=="必选品(辣度选择)"){
                    category="辣度选择";
                }
                //标题相对于父元素顶部距离
                var top1=$("#"+category).position().top;
                //列表中同一分类最后一个li相对于父元素顶部距离
                var top2=$("input[data-category='"+this.category_list[i].category+"']").last().parent().parent().position().top+115;
                if(top1<0&&top2>0){
                    $(".menucategory-active").removeClass("menucategory-active");
                    $(".menucategory-categoryItem:eq("+i+")").addClass("menucategory-active");
                    break;
                }
            }
        }
    },
    beforeCreate(){
        this.store_id=this.$route.params.id;
        this.$axios.get("http://localhost:3000/detail?id="+this.store_id).then(res=>{this.data=res.data});
        this.$axios.get("http://localhost:3000/appraise?store_id="+this.store_id).then(res=>{this.appraise_list=res.data});
        this.$axios.get("http://localhost:3000/detail/getCategory?store_id="+this.store_id).then(res=>this.category_list=res.data);
        this.$axios.get("http://localhost:3000/detail/getDishes?store_id="+this.store_id).then(res=>{
            this.dishes_list=res.data;
            setTimeout(function(){
                var inputs=$(".container").children("li").find("input[name=category]");
                var temp_category="";
                for(var i=0;i<inputs.length;i++){
                    if(i==0){
                        temp_category=inputs[0].value;
                        $("<strong id='"+temp_category+"' style='margin-right:.133333rem;margin-right:1.333333vw;font-weight:700;font-size:.32rem;color:#666;-webkit-flex:none;flex:none;padding-left:.266667rem;padding-left:2.666667vw;'>"+temp_category+"</strong>").insertBefore($(inputs[0]).parent().parent());
                        continue;
                    }else{
                        if(inputs[i].value!=temp_category){
                            temp_category=inputs[i].value;
                            if(temp_category=="必选品(辣度选择)"){
                                temp_category="辣度选择";
                            }
                            $("<strong id='"+temp_category+"' style='margin-right:.133333rem;margin-right:1.333333vw;font-weight:700;font-size:.32rem;color:#666;-webkit-flex:none;flex:none;padding-left:.266667rem;padding-left:2.666667vw;'>"+temp_category+"</strong>").insertBefore($(inputs[i]).parent().parent());
                            continue;
                        }
                    }
                }
            },150);
        });
    },
    mounted(){
        setTimeout(()=>{
            $("#container").bind("scroll",this.scroll);
        },150);
    }
}
</script>
<style scoped>
.app{
    position: relative;
}
.index1{
    color: #333;
    font-size: .293333rem;
    background-color: #fff;
    padding-top: 2.666667rem;
    padding-top: 26.666667vw;
}
.index1_nav{
    background-image:url('../assets/images/detail/nav.jpg');
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: .106667rem .266667rem 0;
    padding: 1.066667vw 2.666667vw 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: justify;
    align-items: justify;
    top: 0;
    height: 2.666667rem;
    height: 26.666667vw;
    position: absolute;
    left: 0;
    right: 0;
}
.index1_nav::before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
}
.index1_back{
    margin-top: .133333rem;
    margin-top: 1.333333vw;
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    width: .32rem;
    width: 3.2vw;
    height: .32rem;
    height: 3.2vw;
    display: inline-block;
    border-bottom: .053333rem solid #fff;
    border-bottom: .533333vw solid #fff;
    border-left: .053333rem solid #fff;
    border-left: .533333vw solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.detail-wrap{
    padding: .8rem 0 0;
    padding: 8vw 0 0;
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
}
.index1_1{
    width: 2rem;
    width: 20vw;
    height: 2rem;
    height: 20vw;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1rem;
    margin-left: -10vw;
    margin-top: -1.6rem;
    margin-top: -16vw;
}
.mini-tag{
    position: relative;
    font-size: .266667rem;
    color: transparent;
    white-space: nowrap;
}
.mini-tag{
    position: absolute!important;
    top: 0;
    left: 0;
    border-top-left-radius: .08rem;
    border-top-left-radius: .8vw;
    border-bottom-right-radius: .08rem;
    border-bottom-right-radius: .8vw;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    width: .586667rem;
    width: 5.866667vw;
    height: .32rem;
    height: 3.2vw;
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
.mini-tag-span{
    color: #6f3f15;
    font-weight: 700;
    font-size: .48rem!important;
}
.index1_img{
    width: 100%;
    height: 100%;
    border-radius: .08rem;
    border-radius: .8vw;
    box-shadow: 0 0 0.04rem 0 rgba(0,0,0,.2);
    box-shadow: 0 0 0.4vw 0 rgba(0,0,0,.2);
}
.index1_2{
    -webkit-flex: 1;
    flex: 1;
    width: 7.2rem;
    width: 72vw;
}
.index1_2_h2{
    font-size: .546667rem;
    font-weight: 700;
    white-space: nowrap;
    position: relative;
    padding-right: .266667rem;
    padding-right: 2.666667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.index1_2_span{
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
}
.index1_2_i{
    width: .4rem;
    width: 4vw;
    position: relative;
    height: .653333rem;
    height: 6.533333vw;
}
.index1_2_i::after{
    content: "";
    border-style: solid;
    border-width: .146667rem 0 .146667rem .173333rem;
    border-width: 1.466667vw 0 1.466667vw 1.733333vw;
    border-color: transparent transparent transparent rgba(0,0,0,.67);
    position: absolute;
    left: .16rem;
    left: 1.6vw;
    top: .213333rem;
    top: 2.133333vw;
}
.index1_2_div{
    white-space: nowrap;
    height: .32rem;
    height: 3.2vw;
    margin-top: .173333rem;
    margin-top: 1.733333vw;
    font-size: .293333rem;
    color: #666;
    text-align: center;
}
.index1_2_div_span:not(:last-child):after{
    content: " \B7 ";
    opacity: .2;
}
.index1_3{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    margin: .213333rem auto 0;
    margin: 2.133333vw auto 0;
    width: 8rem;
    width: 80vw;
}
.index1_3_div1{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    position: relative;
    padding-left: .2rem;
    padding-left: 2vw;
    height: .64rem;
    height: 6.4vw;
    width: 3.84rem;
    width: 38.4vw;
    background: #fff4f4;
    color: #5c1603;
    font-size: .293333rem;
}
.index1_3_div1.index1_3_div1_other1{
    color: #594519;
    background: #ffe578;
}
.index1_3_div1::before{
    bottom: -1px;
    border-bottom: none;
    border-radius: .133333rem .133333rem 0 0;
    border-radius: 1.333333vw 1.333333vw 0 0;
}
.index1_3_div1::after, .index1_3_div1::before{
    content: "";
    position: absolute;
    right: .933333rem;
    right: 9.333333vw;
    width: .133333rem;
    width: 1.333333vw;
    height: .066667rem;
    height: .666667vw;
    background: #fff;
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
}
.index1_3_div1::after{
    top: -1px;
    border-top: none;
    border-radius: 0 0 .133333rem .133333rem;
    border-radius: 0 0 1.333333vw 1.333333vw;
}
.index1_3_div1:not(:first-child){
    margin-left: .32rem;
    margin-left: 3.2vw;
}
.index1_3_p1{
    -webkit-flex: 1;
    flex: 1;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
}
.index1_3_span{
    font-size: .426667rem;
    font-weight: 700;
    margin: 0 .266667rem 0 .133333rem;
    margin: 0 2.666667vw 0 1.333333vw;
}
.index1_3_span small{
    font-size: .32rem;
    margin-right: .026667rem;
    margin-right: .266667vw;
}
.index1_3_p2{
    text-align: center;
    width: .933333rem;
    width: 9.333333vw;
    color: #594519;
}
.index1_4{
    width: 8rem;
    width: 80vw;
    font-size: .293333rem;
    display: -webkit-flex;
    display: flex;
    color: #333;
    margin: .32rem auto 0;
    margin: 3.2vw auto 0;
    -webkit-align-items: center;
    align-items: center;
}
.index1_4_div{
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
}
.item{
    display: inline-block;
    padding: 0 .106667rem;
    padding: 0 1.066667vw;
    height: .4rem;
    height: 4vw;
    line-height: .4rem;
    line-height: 4vw;
    margin: .066667rem;
    margin: .666667vw;
    font-size: .32rem;
    border-radius: .026667rem;
    border-radius: .266667vw;
    background-color: #fff;
}
.announcement{
    width: 8rem;
    width: 80vw;
    font-size: .293333rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .226667rem auto .266667rem;
    margin: 2.266667vw auto 2.666667vw;
    padding: 0;
    white-space: nowrap;
}
.shop-tab-wrap{
    line-height: 1.066667rem;
    line-height: 10.666667vw;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
}
.shop-tab-div{
    position: relative;
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    font-size: .4rem;
    color: #666;
    border-bottom: 1px solid #ebebeb;
}
.shop-tab-focus .shop-tab-p{
    display: inline-block;
    position: relative;
    color: #333;
    font-weight: 700;
}
.shop-tab-focus .shop-tab-span{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: .053333rem;
    height: .533333vw;
    background-color: #2395ff;
}
.shop-info{
    background-color: #f5f5f5;
    font-size: .346667rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.shop-info .section{
    margin-bottom: .266667rem;
    margin-bottom: 2.666667vw;
    padding: .426667rem .4rem .4rem;
    padding: 4.266667vw 4vw 4vw;
    font-size: .346667rem;
    background-color: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
}
.shop-info .section-title{
    color: #000;
    font-weight: 700;
    font-size: .4rem;
    line-height: .56rem;
    line-height: 5.6vw;
}
.delivery{
    margin-top: .426667rem;
    margin-top: 4.266667vw;
}
.delivery>div{
    margin-bottom: .186667rem;
    margin-bottom: 1.866667vw;
}
.activity{
    margin-top: .426667rem;
    margin-top: 4.266667vw;
}
.activity-div{
    display: -webkit-flex;
    display: flex;
    font-size: .346667rem;
    -webkit-align-items: center;
    align-items: center;
}
.activity-div-other1{
    margin-bottom: .306667rem;
    margin-bottom: 3.066667vw;
}
.activity-mini-tag{
    position: relative;
    font-size: .266667rem;
    color: transparent;
    white-space: nowrap;
}
.activity-mini-tag-other1{
    margin-right: .16rem;
    margin-right: 1.6vw;
    font-size: .24rem;
    padding: .053333rem .12rem;
    padding: .533333vw 1.2vw;
    height: .346667rem;
    height: 3.466667vw;
    display: inline-block;
    box-sizing: border-box;
    border-radius: .026667rem;
    border-radius: .266667vw;
}
.activity-div-other1 .activity-mini-tag-other1{
    height: .426667rem;
    height: 4.266667vw;
    padding: .053333rem .16rem;
    padding: .533333vw 1.6vw;
}
.activity-mini-tag-inner{
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
.activity-mini-tag-inner-other1{
    font-size: .48rem!important;
    color: #fff;
}
.activity-div-other1 .activity-mini-tag-inner-other1{
    font-size: .64rem!important;
}
.activity-text{
    -webkit-flex: 1;
    flex: 1;
    font-size: .293333rem;
    font-size: .346667rem;
    line-height: 1.38;
}
.detail-ul li{
    display: -webkit-flex;
    display: flex;
    padding: .4rem .4rem .4rem 0;
    padding: 4vw 4vw 4vw 0;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-align-items: center;
    align-items: center;
    margin-right: -.4rem;
    margin-right: -4vw;
}
.detail-ul li:not(:first-child){
    border-top: 1px solid #ddd;
}
.detail-ul li>span:first-child{
    font-weight: 700;
    color: #333;
}
.detail-ul li>span:last-child{
    max-width: 6.666667rem;
    max-width: 66.666667vw;
    text-align: right;
}
.detail-span{
    display: -webkit-flex;
    display: flex;
    color: #00a6ff;
    -webkit-align-items: center;
    align-items: center;
}
.detail-span svg{
    width: .5rem;
    height: .5rem;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
}
.appraise-wrap{
    background-color: #fff;
    padding: .266667rem .32rem 0;
    padding: 2.666667vw 3.2vw 0;
    font-size: .36rem;
}
.appraise-li{
    padding: .4rem 0 .32rem;
    padding: 4vw 0 3.2vw;
    border-bottom: .013333rem solid #eee;
    border-bottom: .133333vw solid #eee;
}
.comment-block{
    position: relative;
    padding-left: 1.066667rem;
    padding-left: 10.666667vw;
}
.sculpture-div-other1{
    border-radius: 50%;
}
.sculpture-div{
    position: absolute;
    top: 0;
    left: 0;
    width: .8rem;
    width: 8vw;
    height: .8rem;
    height: 8vw;
    border-radius: 50%;
}
.sculpture-div-other1>img, .sculpture-div-other1>span{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.sculpture-div-other1>span{
    display: inline-block;
    background: url("../assets/images/detail/sculpture.png");
}
.content-div{
    font-size: .346667rem;
}
.content-div-div1{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
.content-div-div1-h3{
    font-size: .346667rem;
    margin-top: 0;
    color: #333;
    margin-right: .16rem;
    margin-right: 1.6vw;
}
.content-div-div1-small{
    font-size: .293333rem;
    color: #999;
}
.content-div-div2{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    margin: .16rem 0 .053333rem;
    margin: 1.6vw 0 .533333vw;
}
.Rating-wrapper{
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.Rating-gray{
    display: -webkit-flex;
    display: flex;
}
.Rating-gray img{
    width: 1.493333rem;
    width: 14.933333vw;
    height: .266667rem;
    height: 2.666667vw;
    -webkit-flex: none;
    flex: none;
    max-width: none;
}
.content-div-div2-span{
    font-size: .293333rem;
    margin-left: .106667rem;
    margin-left: 1.066667vw;
}
.content-div-div3{
    color: #333;
    font-size: .373333rem;
    word-break: break-word;
    margin: .213333rem 0;
    margin: 2.133333vw 0;
}
.content-div-div4{
    position: relative;
    margin: .266667rem 0;
    margin: 2.666667vw 0;
    padding: .266667rem;
    padding: 2.666667vw;
    background: #f3f3f3;
    border-radius: .106667rem;
    border-radius: 1.066667vw;
}
.content-div-div4::after{
    content: " ";
    position: absolute;
    bottom: 100%;
    left: .4rem;
    left: 4vw;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 .213333rem .213333rem;
    border-width: 0 2.133333vw 2.133333vw;
    border-color: transparent transparent #f3f3f3;
}
.book_index{
    position: relative;
    z-index: 3;
}
.menuview{
    height: 100%;
    box-sizing: border-box;
}
.menuviewMain{
    height: 100%;
    padding-bottom: 1.28rem;
    padding-bottom: 12.8vw;
    background-color: #fff;
}
.main{
    display: -webkit-flex;
    display: flex;
    height: 100%;
}
.menuNav{
    width: 2.053333rem;
    width: 20.533333vw;
    height: 100%;
}
.menucategory{
    overflow-y: auto;
    height: 100%;
    background-color: #f8f8f8;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 1.066667rem;
    padding-bottom: 10.666667vw;
}
.menuview .menucategory-categoryWrapper{
    -webkit-flex: none;
    flex: none;
    position: relative;
    z-index: 0;
    height: 441px;
}
.menucategory::-webkit-scrollbar{
    width: 0px;
    height: 0px;
}
.menucategory-categoryItem{
    position: relative;
    padding: .466667rem .2rem;
    padding: 4.666667vw 2vw;
    font-size: .32rem;
    color: #666;
}
.menucategory-categoryName{
    line-height: 1.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
}
.menucategory-categoryIcon{
    width: .346667rem;
    width: 3.466667vw;
    height: .346667rem;
    height: 3.466667vw;
    vertical-align: top;
    margin-right: .08rem;
    margin-right: .8vw;
    max-width: 100%;
}
.menucategory-categoryItem.menucategory-active{
    color: #333;
    background-color: #fff;
}
.container{
    position: relative;
    height: 100%;
}
.menuview-menuList{
    height: 100%;
    width: 7.946667rem;
    width: 79.466667vw;
    overflow-y: auto;
    height: 480px;
}
.menuview-menuList::-webkit-scrollbar{
    width: 0px;
    height: 0px;
}
.specpanel-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.4);
    z-index: 10;
}
#shoptab{
    z-index: 5;
}
.specpanel-root{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 14;
    background: #fff;
}
.specpanel-main{
    position: relative;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    padding: .426667rem;
    padding: 4.266667vw;
    height: 100%;
}
.specpanel-close{
    display: block;
    position: absolute;
    top: .4rem;
    top: 4vw;
    right: .4rem;
    right: 4vw;
    width: .466667rem;
    width: 4.666667vw;
    height: .466667rem;
    height: 4.666667vw;
    background: url("../assets/images/detail/close.png") no-repeat;
    background-size: cover;
}
.specpanel-header{
    padding-bottom: .533333rem;
    padding-bottom: 5.333333vw;
    display: -webkit-flex;
    display: flex;
}
.specpanel-pic{
    -webkit-flex: none;
    flex: none;
    width: 2.533333rem;
    width: 25.333333vw;
    height: 2.533333rem;
    height: 25.333333vw;
    max-width: 100%;
}
.specpanel-info{
    padding-left: .266667rem;
    padding-left: 2.666667vw;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
}
.specpanel-name{
    color: #333;
    font-size: .453333rem;
    font-weight: 700;
    max-width: 5.333333rem;
    max-width: 53.333333vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
}
.specpanel-total{
    -webkit-flex: 1;
    flex: 1;
    color: #666;
    font-size: .293333rem;
}
.specpanel-price{
    font-size: .64rem;
    color: #2396ff;
    font-weight: 500;
}
.specpanel-body{
    -webkit-flex: 1;
    flex: 1;
    overflow-y: hidden;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}
.specpanel-colTitle{
    color: #666;
    font-size: .373333rem;
    margin-bottom: .32rem;
    margin-bottom: 3.2vw;
}
.specpanel-colBody{
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0 -.24rem;
    margin: 0 -2.4vw;
}
.panel-item-item{
    display: inline-block;
    min-width: 2.773333rem;
    min-width: 27.733333vw;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
    min-height: .853333rem;
    min-height: 8.533333vw;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-color: #f5f5f5;
    color: #333;
    font-size: .346667rem;
    text-align: center;
    margin: 0 .213333rem .32rem;
    margin: 0 2.133333vw 3.2vw;
    line-height: .853333rem;
    line-height: 8.533333vw;
}
.panel-item-item.panel-item-active{
    color: #2396ff;
    font-weight: 700;
    background-color: rgba(35,150,255,.2);
}
.specpanel-doneBtn{
    width: 100%;
    height: 1.066667rem;
    height: 10.666667vw;
    color: #fff;
    font-size: .426667rem;
    font-weight: 700;
    border-radius: .053333rem;
    border-radius: .533333vw;
    background-color: #2396ff;
}
</style>