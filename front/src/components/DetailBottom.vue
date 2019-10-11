<template>
    <footer class="cartview-cartview">
        <div class="cartview-cartmask" style="z-index:10;display:none;" @click="closeMask($event)"></div>
        <div class="cartview-cartbody" style="z-index:11;display:none;">
            <section class="discount-tip-discountTip">
                <span style="color: #333333;">还差</span>
                <span style="color: #FF5339;">{{low_pay}}</span>
                <span style="color: #333333;">元起送</span>
            </section>
            <div style="opacity:0;">
                <div class="cartview-cartheader">
                    <div class="cartview-headerText">
                        <span>已选商品</span>
                    </div>
                    <a href="javascript:" class="cartview-cartheaderRemove">
                        <svg>
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15" id="cart-remove" width="100%" height="100%"><g fill="none" fill-rule="evenodd" transform="translate(1)"><path fill="#979797" d="M7.05 15h-5.5c-.303 0-.55-.26-.55-.583V5.091c0-.322.246-.583.55-.583.304 0 .55.26.55.583v8.743h4.95c1.032 0 2-.426 2.728-1.2A4.18 4.18 0 0 0 10.9 9.735l-.03-7.15c0-.323.245-.585.548-.586h.003c.302 0 .548.26.55.58L12 9.732a5.374 5.374 0 0 1-1.442 3.724C9.622 14.451 8.376 15 7.05 15z"></path><path fill="#979797" d="M12.458 3H.542C.242 3 0 2.776 0 2.5S.243 2 .542 2h11.916c.3 0 .542.224.542.5s-.243.5-.542.5"></path><path fill="#979797" d="M5 2h3V1H5v1zm3.464 1H4.536C4.24 3 4 2.776 4 2.5v-2c0-.276.24-.5.536-.5h3.928C8.76 0 9 .224 9 .5v2c0 .276-.24.5-.536.5z" mask="url(#cart-remove_b)"></path></g></svg>
                            </use>
                        </svg>
                        <span @click="clear($event)">清空</span>
                    </a>
                </div>
                <div class="entityList-cartbodyScroller">
                    <ul class="entityList-cartlist">
                        <li class="entityList-entityrow" v-for="(dish,i) in dishes_arr" :key="i">
                            <span class="entityList-entityname">
                                <em class="entityList-name">{{dish.name}}</em>
                                <p class="entityList-entityspecs" v-if="dish.detail!=null">{{dish.detail}}</p>
                            </span>
                            <span class="entityList-entitytotal" style="color:rgb(255, 83, 57);">
                                <span class="entityList-entitytotalDiscount">{{dish.price}}</span>
                            </span>
                            <span class="entityList-entitycartbutton">
                                <span class="cartbutton-entitybutton">
                                    <a href="javascript:" @click="minus($event)">
                                        <svg style="fill: rgb(35, 149, 255);">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add">
                                                <svg viewBox="0 0 44 44" id="cart-add" width="100%" height="100%"><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path></svg>
                                            </use>
                                        </svg>
                                    </a>
                                    <span class="cartbutton-entityquantity">{{dish.number}}</span>
                                    <a href="javascript:" @click="plus($event)">
                                        <svg style="fill: rgb(35, 149, 255);">
                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus">
                                                <svg viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg>
                                            </use>
                                        </svg>
                                    </a>
                                </span>
                            </span>
                        </li>
                    </ul>
                    <div class="entityList-entityrow entityList-packingfee" v-if="hasPackage">
                        <span class="entityList-entityname">餐盒</span>
                        <span class="entityList-entitytotal" style="color: rgb(255, 83, 57);">0.2</span>
                        <span class="entityList-entitycartbutton"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottomNav-cartfooter" style="z-index:11;">
            <span class="bottomNav-carticon bottomNav-empty" @click="showList($event)"></span>
            <div class="bottomNav-cartInfo">
                <p class="bottomNav-carttotal">
                    <span class="bottomNav-carttotalOriginal">未选购商品</span>
                </p>
                <p class="bottomNav-cartdelivery">另需配送费3.5元</p>
            </div>
            <a href="javascript:;" class="submit-btn-submitbutton submit-btn-disabled" @click="submit($event)">
                <small>下单前请选必选品</small>
            </a>
        </div>
    </footer>
</template>
<script>
export default {
    name:'detail-bottom',
    props:["low_pay","store_id"],
    data(){
        return{
            dishes:{},
            dishes_arr:[],
            hasPackage:false
        }
    },
    created(){
        this.bus.$on("init_dish",this.init.bind(this));
        this.bus.$on("add_dish",this.add.bind(this));
        this.bus.$on("del_dish",this.del.bind(this));
        this.bus.$on("update_dish",this.update.bind(this));
        this.bus.$on("modifyBook",this.modifyDatabase.bind(this));
    },
    beforeDestroy(){
        this.bus.$off("init_dish");
        this.bus.$off("add_dish");
        this.bus.$off("del_dish");
        this.bus.$off("update_dish");
        this.bus.$off("modifyBook");
    },
    methods:{
        modifyDatabase(){
            this.$axios.get("http://localhost:3000/book/modify?store_id="+this.store_id+"&dishes="+JSON.stringify(this.dishes)+"&phone_number="+window.sessionStorage.getItem("phone_number")).then(res=>{});
        },
        init(data){
            for(var d of data){
                var obj={};
                if(d.info!=""&&d.name=="辣度选择"&&d.must==1){
                    var spicy=$(".panel-item-active:eq(0)").text();
                    obj={name:spicy};
                    obj["info"]=$(".panel-item-active:eq(1)").text();
                    obj["number"]=1;
                    obj["price"]=0.2;
                    obj["must"]=true;
                    this.dishes["辣度选择"]=obj;
                }else{
                    obj["name"]=d.name;
                    obj["price"]=(parseFloat(d.price)*parseInt(d.number)).toFixed(1);
                    obj["number"]=parseInt(d.number);
                    this.dishes[d.name]=obj;
                }
            }
            this.packObjToArray();
            this.update();
        },
        add(key,dish){
            this.dishes[key]=dish;
            this.packObjToArray();
        },
        del(key){
            delete this.dishes[key];
            this.packObjToArray();
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
                //判断必选项是否存在
                if(flag){
                    $(".submit-btn-submitbutton").children("small").text("还差"+(parseFloat(this.low_pay)-total).toFixed(1)+"元起送");
                    $(".submit-btn-submitbutton").addClass("submit-btn-disabled");
                }else{
                    $(".submit-btn-submitbutton").children("small").text("下单前请选必选品");
                    $(".submit-btn-submitbutton").addClass("submit-btn-disabled");
                }
            }else{
                $(".cartview-cartbody").show();
                $(".discount-tip-discountTip").children("span:eq(0)").text("");
                $(".discount-tip-discountTip").children("span:eq(2)").text("");
                //判断必选项是否存在
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
            //设置total到class="bottomNav-carttotalOriginal"
            if(total>0){
                $(".bottomNav-carttotal").children("span").text("¥"+total);
                $(".bottomNav-carttotal").children("span").removeClass("bottomNav-carttotalOriginal");
            }else{
                $(".bottomNav-carttotal").children("span").text("未选购商品");
                $(".bottomNav-carttotal").children("span").addClass("bottomNav-carttotalOriginal");
            }
            //获取dish总数
            var count2=0;
            for(var k in this.dishes){
                count2+=parseInt(this.dishes[k].number);
            }
            $(".bottomNav-carticon").children("span").text(count2);
            //有dish并且小红圆点没有出现的场合
            if($(".bottomNav-carticon").children("span").length==0&&count1>=1){
                $(".bottomNav-carticon").append($("<span>"+count2+"</span>"));
                $(".bottomNav-carticon").addClass("bottomNav-carticon-change");
                $(".bottomNav-carticon").removeClass("bottomNav-empty");
                return;
            }
            //没有选择dish的场合
            if(count1==0){
                $(".bottomNav-carticon").children("span").remove();
                $(".bottomNav-carticon").removeClass("bottomNav-carticon-change");
                $(".bottomNav-carticon").addClass("bottomNav-empty");
                $(".cartview-cartbody").removeClass("cartview-cartbodyOpen");
                $(".cartview-cartmask").hide();
                $(".discount-tip-discountTip").siblings("div").css("opacity",0);
                $(".cartview-cartbody").hide();
                return;
            }
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
        },
        showList(event){
            if(!$(".cartview-cartbody").hasClass("cartview-cartbodyOpen")){
                var count=0;
                for(var key in this.dishes){
                    if(this.dishes[key].must==true){
                        count+=2;
                    }else{
                        count++;
                    }
                }
                if(count>0){
                    $(".cartview-cartmask").show();
                    $(".discount-tip-discountTip").siblings("div").css("opacity",1);
                    $(".cartview-cartbody").addClass("cartview-cartbodyOpen");
                }
            }else{
                $(".cartview-cartmask").hide();
                $(".discount-tip-discountTip").siblings("div").css("opacity",0);
                $(".cartview-cartbody").removeClass("cartview-cartbodyOpen");
            }
        },
        closeMask(event){
            $(event.currentTarget).hide();
            $(".discount-tip-discountTip").siblings("div").css("opacity",0);
            $(".cartview-cartbody").removeClass("cartview-cartbodyOpen");
        },
        packObjToArray(){
            this.dishes_arr=[];
            var countHasPackage=0;
            for(var key in this.dishes){
                var dish={};
                dish["name"]=this.dishes[key].name;
                if(this.dishes[key].info!=null){
                    dish["detail"]=this.dishes[key].name+"/"+this.dishes[key].info;
                    dish["price"]=0;
                    dish["number"]=1;
                    this.hasPackage=true;
                    countHasPackage++;
                }else{
                    dish["price"]=this.dishes[key].price;
                    dish["number"]=this.dishes[key].number;
                }
                this.dishes_arr.push(dish);
            }
            if(countHasPackage==0){
                this.hasPackage=false;
            }
        },
        submit(event){
            if(!$(".submit-btn-submitbutton").hasClass("submit-btn-disabled")){
                if(window.sessionStorage.getItem("phone_number")==null){
                    this.$toast("请先登录");
                }else{
                    this.modifyDatabase();
                }
            }
        },
        clear(event){
            $(".cartview-cartbody").hide();
            $(".cartview-cartmask").hide();
            $(".discount-tip-discountTip").siblings("div").css("opacity",0);
            $(".cartview-cartbody").removeClass("cartview-cartbodyOpen");
            $(".bottomNav-carticon").children("span").remove();
            $(".bottomNav-carticon").removeClass("bottomNav-carticon-change");
            $(".bottomNav-carticon").addClass("bottomNav-empty");
            this.dishes={};
            this.dishes_arr=[];
            this.hasPackage=false;
            this.bus.$emit("doUpdate_dish");
            $(".discount-tip-discountTip").children("span:eq(0)").text("还差");
            $(".discount-tip-discountTip").children("span:eq(1)").text(this.low_pay);
            $(".discount-tip-discountTip").children("span:eq(2)").text("元起送");
            $(".submit-btn-submitbutton").children("small").text("下单前请选必选品");
            $(".bottomNav-carttotal").children("span").text("未选购商品");
            $(".bottomNav-carttotal").children("span").addClass("bottomNav-carttotalOriginal");
            $(".submit-btn-submitbutton").addClass("submit-btn-disabled");
        },
        plus(event){
            var name=$(event.currentTarget).parent().parent().siblings(".entityList-entityname").children(".entityList-name").text();
            var number=parseInt($(event.currentTarget).siblings(".cartbutton-entityquantity").text());
            if(!this.isSpicy(name)){
                this.modifyDishesAndDishesArray(name,number+1);
                this.bus.$emit("doUpdate_dish",name,number+1);
                this.update();
            }
        },
        minus(event){
            var name=$(event.currentTarget).parent().parent().siblings(".entityList-entityname").children(".entityList-name").text();
            var number=parseInt($(event.currentTarget).siblings(".cartbutton-entityquantity").text());
            if(!this.isSpicy(name)){
                if(number!=1){
                    this.modifyDishesAndDishesArray(name,number-1);
                }else{
                    delete this.dishes[name];
                    this.packObjToArray();
                }
            }else{
                name="辣度选择";
                delete this.dishes["辣度选择"];
                this.packObjToArray();
            }
            this.bus.$emit("doUpdate_dish",name,number-1);
            this.update();
        },
        isSpicy(name){
            var flag=false;
            for(var key in this.dishes){
                if(this.dishes[key].name==name&&this.dishes[key].must==true&&this.dishes[key].info!=null){
                    flag=true;
                    break;
                }
            }
            return flag;
        },
        modifyDishesAndDishesArray(key,number){
            var price=(parseFloat(parseFloat(this.dishes[key].price)/parseInt(this.dishes[key].number))*number).toFixed(1);
            this.dishes[key].price=price;
            this.dishes[key].number=number;
            this.packObjToArray();
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
.cartview-cartheader{
    padding: 0 .4rem;
    padding: 0 4vw;
    border-bottom: .013333rem solid #ddd;
    border-bottom: .133333vw solid #ddd;
    background-color: #eceff1;
    color: #666;
    height: 1.066667rem;
    height: 10.666667vw;
}
.cartview-cartheader{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.cartview-headerText{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-flex: 1;
    flex: 1;
}
.cartview-cartheaderRemove{
    -webkit-flex: none;
    flex: none;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: .4rem;
    padding-left: 4vw;
    color: #666;
    text-decoration: none;
    font-size: .346667rem;
    line-height: .4rem;
    line-height: 4vw;
}
.cartview-cartheaderRemove svg{
    width: .4rem;
    width: 4vw;
    height: .4rem;
    height: 4vw;
    fill: #ddd;
    margin-right: .08rem;
    margin-right: .8vw;
}
.cartview-cartmask{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: .4;
    transition: opacity .3s ease;
}
.cartview-cartbodyOpen{
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    bottom: 1.28rem;
    bottom: 12.8vw;
}
.entityList-cartbodyScroller{
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    max-height: 8rem;
    max-height: 80vw;
}
ul.entityList-cartlist{
    margin: 0;
    padding: 0;
    -webkit-flex: none;
    flex: none;
}
.entityList-entityrow{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding: .2rem .333333rem .2rem 0;
    padding: 2vw 3.333333vw 2vw 0;
    min-height: 1.466667rem;
    min-height: 14.666667vw;
    margin-left: .333333rem;
    margin-left: 3.333333vw;
}
.entityList-entityname{
    -webkit-flex: 5.5;
    flex: 5.5;
    line-height: normal;
}
.entityList-entityname .entityList-name{
    display: inline-block;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    max-width: 4.666667rem;
    max-width: 46.666667vw;
}
.entityList-entityspecs{
    width: 100%;
    line-height: .333333rem;
    line-height: 3.333333vw;
    color: #999;
    font-size: .266667rem;
}
.entityList-entitytotal{
    -webkit-flex: 2.5;
    flex: 2.5;
    color: #ff5339;
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
}
.entityList-entitytotalDiscount:before{
    content: "\A5";
    font-size: .266667rem;
    color: currentColor;
}
.entityList-entitycartbutton{
    -webkit-flex: 3;
    flex: 3;
    text-align: right;
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
.entityList-entityrow{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding: .2rem .333333rem .2rem 0;
    padding: 2vw 3.333333vw 2vw 0;
    min-height: 1.466667rem;
    min-height: 14.666667vw;
    margin-left: .333333rem;
    margin-left: 3.333333vw;
}
.entityList-entityrow.entityList-packingfee{
    border-top: .013333rem solid #eee;
    border-top: .133333vw solid #eee;
}
.entityList-entityname{
    -webkit-flex: 5.5;
    flex: 5.5;
    line-height: normal;
}
.entityList-entitytotal{
    -webkit-flex: 2.5;
    flex: 2.5;
    color: #ff5339;
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
}
.entityList-entitycartbutton{
    -webkit-flex: 3;
    flex: 3;
    text-align: right;
}
.entityList-entityrow:not(:last-child){
    border-bottom: .013333rem solid #eee;
    border-bottom: .133333vw solid #eee;
}
</style>