<template>
    <div class="tmpl">
        <div class="header">
            <div class="header_d1">
                <div class="header_d2">
                    <router-link :to="{name:'Position'}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="svg1"><path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
                        <span class="span1">正在定位...</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="svg2"><path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="search">
            <router-link class="content" :to="{name:'Login'}" @click.native="showListOrLogin($event)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path>
                </svg>
                <span>搜索饿了么商家、商品名称</span>
            </router-link>
        </div>
        <div class="mint-swipe foodentry">
            <div class="mint-swipe-items-wrap">
                <div class="mint-swipe-item is-active" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
                    <router-link :to="{name:'FoodList'}">
                        <div class="container">
                            <img src="../assets/images/home/1.jpg"/>
                        </div>
                        <span class="title">美食</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/2.jpg"/>
                        </div>
                        <span class="title">大牌惠吃</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/3.jpg"/>
                        </div>
                        <span class="title">商超便利</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/4.jpg"/>
                        </div>
                        <span class="title">水果</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/5.jpg"/>
                        </div>
                        <span class="title">医药健康</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/6.jpg"/>
                        </div>
                        <span class="title">浪漫鲜花</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/7.jpg"/>
                        </div>
                        <span class="title">跑腿代购</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/8.jpg"/>
                        </div>
                        <span class="title">汉堡披萨</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/9.jpg"/>
                        </div>
                        <span class="title">厨房生鲜</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/10.jpg"/>
                        </div>
                        <span class="title">甜品饮品</span>
                    </router-link>
                </div>
                <div class="mint-swipe-item" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/11.jpg"/>
                        </div>
                        <span class="title">速食简餐</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/12.jpg"/>
                        </div>
                        <span class="title">地方小吃</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/13.jpg"/>
                        </div>
                        <span class="title">大牌惠吃</span>
                    </router-link>
                    <router-link :to="{name:''}">
                        <div class="container">
                            <img src="../assets/images/home/14.jpg"/>
                        </div>
                        <span class="title">速食简餐</span>
                    </router-link>
                </div>
            </div>
            <div class="mint-swipe-indicators">
                <div class="mint-swipe-indicator is-active"></div>
                <div class="mint-swipe-indicator"></div>
            </div>
        </div>
        <div class="recommend_wrap">
            <section class="recommend_sec">
                <div class="recommend_d1">
                    <div class="recommend_d2">
                        <h3 class="recommend_h3">品质套餐</h3>
                        <div class="recommend_d3">搭配齐全吃得好</div>
                        <div class="recommend_d4">立即抢购&nbsp;></div>
                        <img src="../assets/images/home/15.jpg"/>
                    </div>
                </div>
            </section>
        </div>
        <div class="filtermodal" style="display: none;"></div>
        <div id="shoplist-title" class="shoplist-title">推荐商家</div>
        <div class="home-filter">
            <aside class="filter" style="top: 0px;">
                <div class="filter-header">
                    <a href="javascript:;" class="filter-nav" @click="filterNavClick($event)">
                        综合排序
                        <svg viewBox="0 0 72 32" class="dropdown-icon">
                            <path d="M36 32l36-32h-72z"></path>
                        </svg>
                    </a>
                    <a href="javascript:;" class="filter-nav" @click="filterNavClick($event)"><span>距离最近</span></a>
                    <a href="javascript:;" class="filter-nav" @click="filterNavClick($event)"><span>品质联盟</span></a>
                    <a href="javascript:;" class="filter-nav-more" @click="filterNavMoreClick($event)">
                        <span>筛选</span>
                        <svg class="filter-nav-more__icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more-filter">
                                <svg viewBox="0 0 26 26" id="more-filter" width="100%" height="100%"><path d="M9.001 15.009V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.981l7.788-10.01a1 1 0 0 0-1.578-1.228l-8 10.28a1 1 0 0 0-.21.615V22h-4v-7.324a1 1 0 0 0-.2-.6L4.001 5h14a1 1 0 0 0 0-2H2a1 1 0 0 0-.8 1.6L9 15.009z"></path></svg>
                            </use>
                        </svg>
                    </a>
                </div>
                <section class="filter-extend filter-sort">
                    <ul>
                        <li class="" @click="filterSortClick($event)">
                            <span>综合排序</span>
                            <img src="../assets/images/home/17.png" alt="综合排序" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>好评优先</span>
                            <img src="../assets/images/home/17.png" alt="好评优先" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>销量最高</span>
                            <img src="../assets/images/home/17.png" alt="销量最高" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>起送价最低</span>
                            <img src="../assets/images/home/17.png" alt="起送价最低" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>配送最快</span>
                            <img src="../assets/images/home/17.png" alt="配送最快" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>配送费最低</span>
                            <img src="../assets/images/home/17.png" alt="配送费最低" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>人均从低到高</span>
                            <img src="../assets/images/home/17.png" alt="人均从低到高" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>人均从高到低</span>
                            <img src="../assets/images/home/17.png" alt="人均从高到低" class="selected">
                        </li>
                        <li class="" @click="filterSortClick($event)">
                            <span>通用排序</span>
                            <img src="../assets/images/home/17.png" alt="通用排序" class="selected">
                        </li>
                    </ul>
                </section>
                <section class="filter-extend filter-more">
                    <div class="morefilter1">
                        <dl>
                            <dt>商家服务 (可多选)</dt>
                            <dd>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <img class="morefilter_3" src="../assets/images/home/18.jpg">
                                        <span>蜂鸟专送</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <img class="morefilter_3" src="../assets/images/home/19.jpg">
                                        <span>品牌商家</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <img class="morefilter_3" src="../assets/images/home/20.jpg">
                                        <span>新店</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <img class="morefilter_3" src="../assets/images/home/21.jpg">
                                        <span>食安保</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <img class="morefilter_3" src="../assets/images/home/22.jpg">
                                        <span>开发票</span>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>优惠活动 (单选)</dt>
                            <dd>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>首单立减</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>门店新客立减</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>满减优惠</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>下单返红包</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>进店领红包</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>配送费优惠</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>赠品优惠</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>特价商品</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>品质联盟红包</span>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>人均消费</dt>
                            <dd>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>¥20以下</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>¥20 - ¥40</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>¥40 - ¥60</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>¥60 - ¥80</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>¥80 - ¥100</span>
                                    </div>
                                </div>
                                <div class="morefilter_1" @click="morefilter_1Click($event)">
                                    <div class="morefilter_2">
                                        <span>¥100以上</span>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                    <div class="morefilter2">
                        <span class="morefilter2_span1" @click="morefilter2Span1Click()">清空</span>
                        <span class="morefilter2_span2" @click="morefilter2Span2Click()">确定</span>
                    </div>
                </section>
            </aside>
        </div>
        <section class="shoplist" v-if="!isShow">
            <section class="shop-wrap" v-for="(item,i) of storeList" :key="i">
                <div class="shop-wrap-div1">
                    <div class="image-wrap">
                        <img :src="require('../assets/images/home/'+item.store_pic)"/>
                    </div>
                    <div class="main-wrap">
                        <section class="main-wrap-title">
                            <h3 class="main-wrap-title-h3">
                                <span>{{item.store_name}}</span>
                            </h3>
                        </section>
                        <section class="main-wrap-star">
                            <div class="main-wrap-star-div">
                                <img :src="item.estimate==4.7?require('../assets/images/home/star4.7.png'):require('../assets/images/home/star4.9.png')" width="54" height="10"/>
                                <span>{{item.estimate}}</span>
                                <span>月售{{item.sales}}单</span>
                            </div>
                        </section>
                        <section class="main-wrap-bottom">
                            <div class="main-wrap-bottom-div1"><span>¥{{item.low_pay}}起送</span><span>配送费¥{{item.distribution_fee}}</span></div>
                            <div class="main-wrap-bottom-div2"><span>1.08km</span><span>26分钟</span></div>
                        </section>
                    </div>
                </div>
                <div class="shop-wrap-div2">
                    <section class="tag-wrap">
                        <span v-for="(tag,i) of item.tag" :key="i">{{tag}}</span>
                    </section>
                    <section class="discount-wrap">
                        <div class="discount-wrap-div1">
                            <div class="discount-wrap-div1-row">
                                <span class="discount-icon-wrap"><span class="discount-icon" style="background-color:rgb(240, 115, 115);">减</span></span>
                                <span class="discount-desc">{{item.discount1}}</span>
                            </div>
                            <div class="discount-wrap-div1-row">
                                <span class="discount-icon-wrap"><span class="discount-icon" style="background-color:rgb(240, 115, 115);">折</span></span>
                                <span class="discount-desc">{{item.discount2}}</span>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </section>
        <section class="NoDataTip-wrapper" v-if="isShow">
            <img src="../assets/images/home/16.png">
            <h3>没有结果</h3>
            <p>登录后查看更多商家</p>
            <button @click="login()">登录</button>
        </section>
        <div class="mb"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            startPoint:0,
            disX:0,
            canDo:true,
            clientWidth:0,
            startTime:0,
            isClick:false,
            isShow:true,
            storeList:''
        }
    },
    methods:{
        touchstart:function(event){
            this.clientWidth=document.body.clientWidth;
            if(this.canDo){
                this.startTime=new Date().getTime();
                this.startPoint=event.changedTouches[0].pageX;
            }
        },
        touchmove:function(event){
            if(this.canDo){
                var elem1=$(event.currentTarget);
                var elem2=$(event.currentTarget).siblings(".mint-swipe-item");
                var currPoint=event.changedTouches[0].pageX;
                this.disX = currPoint-this.startPoint;
                elem1.css("transform","translate3d("+this.disX+"px,0px,0px)");
                if(this.disX>0){
                    elem2.show();
                    elem2.css("transform","translate3d(-"+(this.clientWidth-this.disX)+"px,0px,0px)");
                }else{
                    elem2.show();
                    elem2.css("transform","translate3d("+(this.clientWidth-Math.abs(this.disX))+"px,0px,0px)");
                }
            }
        },
        touchend:function(event){
            if(this.canDo){
                if(this.disX==0){
                    return;
                }
                this.canDo=false;
                let _this=this;
                var elem1=$(event.currentTarget);
                var elem2=$(event.currentTarget).siblings(".mint-swipe-item");
                var time=new Date().getTime()-this.startTime;
                if(time>300){
                    var ms=0;
                    let flag=true;
                    if(this.disX>0){
                        ms=(this.clientWidth-this.disX)/(this.clientWidth/2)*500;
                    }else{
                        ms=(this.clientWidth-Math.abs(this.disX))/(this.clientWidth/2)*500;
                    }
                    elem1.css("transition","all "+ms+"ms");
                    elem2.css("transition","all "+ms+"ms");
                    setTimeout(function(){
                        if(_this.disX>0){
                            if(_this.disX<=_this.clientWidth/2){
                                elem1.css("transform","translate3d(0px,0px,0px)");
                                elem2.css("transform","translate3d(-"+_this.clientWidth+"px,0px,0px)");
                            }else{
                                elem1.css("transform","translate3d("+_this.clientWidth+"px,0px,0px)");
                                elem2.css("transform","translate3d(0px,0px,0px)");
                                flag=false;
                            }
                        }else{
                            if(_this.disX>=-_this.clientWidth/2){
                                elem1.css("transform","translate3d(0px,0px,0px)");
                                elem2.css("transform","translate3d("+_this.clientWidth+"px,0px,0px)");
                            }else{
                                elem1.css("transform","translate3d(-"+_this.clientWidth+"px,0px,0px)");
                                elem2.css("transform","translate3d(0px,0px,0px)");
                                flag=false;
                            }
                        }
                        setTimeout(function(){
                            elem1.css("transition","all 0ms");
                            elem2.css("transition","all 0ms");
                            if(!flag){
                                elem2.addClass("is-active");
                                elem1.removeClass("is-active");
                                elem1.hide();
                            }else{
                                elem2.hide();
                            }
                            $(".mint-swipe-indicator.is-active").removeClass("is-active");
                            $(".mint-swipe-indicator:eq("+$('.mint-swipe-item.is-active').index()+")").addClass("is-active");
                            _this.disX=0;
                            _this.canDo=true;
                        },ms);
                    },100);
                }else{
                    if(this.disX>0){
                        elem1.css("transition","all 500ms");
                        elem2.css("transition","all 500ms");
                        setTimeout(function(){
                            elem1.css("transform","translate3d("+_this.clientWidth+"px,0px,0px)");
                            elem2.css("transform","translate3d(0px,0px,0px)");
                            setTimeout(function(){
                                elem1.css("transition","all 0ms");
                                elem2.css("transition","all 0ms");
                                elem2.addClass("is-active");
                                elem1.removeClass("is-active");
                                elem1.hide();
                                $(".mint-swipe-indicator.is-active").removeClass("is-active");
                                $(".mint-swipe-indicator:eq("+$('.mint-swipe-item.is-active').index()+")").addClass("is-active");
                                _this.disX=0;
                                _this.canDo=true;
                            },500);
                        },100);
                    }else{
                        elem1.css("transition","all 500ms");
                        elem2.css("transition","all 500ms");
                        setTimeout(function(){
                            elem1.css("transform","translate3d(-"+_this.clientWidth+"px,0px,0px)");
                            elem2.css("transform","translate3d(0px,0px,0px)");
                            setTimeout(function(){
                                elem1.css("transition","all 0ms");
                                elem2.css("transition","all 0ms");
                                elem2.addClass("is-active");
                                elem1.removeClass("is-active");
                                elem1.hide();
                                $(".mint-swipe-indicator.is-active").removeClass("is-active");
                                $(".mint-swipe-indicator:eq("+$('.mint-swipe-item.is-active').index()+")").addClass("is-active");
                                _this.disX=0;
                                _this.canDo=true;
                            },500);
                        },100);
                    }
                }
            }
        },
        filterNavClick(event){
            //由于点击span无法渲染元素,所以只能将span标签去掉,父元素内html拼接获得,先取得svg的outerHTML
            var svg_html=$(".filter-nav:eq(0)").children("svg").prop("outerHTML");
            if($(event.currentTarget).index()==0){
                //如果$(".filter-nav:eq(0)")文本等于选项li下的span文本,给选项li添加active类
                var lis=$(".filter-sort ul li");
                for(var li of lis){
                    if($(li).children("span").text()==$(".filter-nav:eq(0)").text().trim()&&this.isClick){
                        $(li).addClass("active");
                        break;
                    }
                }
                //隐藏position不是sticky的元素
                $(".header").hide();
                $(".mint-swipe").hide();
                $(".recommend_wrap").hide();
                $(".shoplist-title").hide();
                $(".NoDataTip-wrapper").hide();
                //打开$(".filter-sort")
                $(".filter-sort").addClass("open");
                //给$(".filter-nav:eq(0)")添加样式open
                $(event.currentTarget).addClass("open");
                //显示遮蔽层
                $(".filtermodal").show();
                //如果$(".filter-sort")渲染完毕点击$(".filter-nav:eq(0)")关闭$(".filter-sort")去除$(".filter-nav:eq(0)")的open类,隐藏遮蔽层
                if($(".filter-sort").css("opacity")==1){
                    $(".header").show();
                    $(".mint-swipe").show();
                    $(".recommend_wrap").show();
                    $(".shoplist-title").show();
                    $(".NoDataTip-wrapper").show();
                    $(".filter-sort").removeClass("open");
                    $(".filter-nav:eq(0)").removeClass("open");
                    $(".filtermodal").hide();
                }
            }else{
                //如果点击不是$(".filter-nav:eq(0)")则给对象加上active,并且把$(".filter-nav:eq(0)")的html内容重置
                $(".filter-nav.active").removeClass("active");
                $(".filter-sort ul li.active").removeClass("active");
                $(event.currentTarget).addClass("active");
                this.isClick=false;
                $(".filter-nav:eq(0)").html("综合排序"+"&nbsp;"+svg_html);
            }
        },
        filterSortClick(event){
            var svg_html=$(".filter-nav:eq(0)").children("svg").prop("outerHTML");
            //给点击的$(".filter-sort li")加上active类
            $(".filter-sort li.active").removeClass("active");
            $(event.currentTarget).addClass("active");
            //将选中的$(".filter-sort li")下的span标签文本赋给$(".filter-nav:eq(0)")
            $(".filter-nav:eq(0)").html($(event.currentTarget).children("span").text()+"&nbsp;"+svg_html);
            //给$(".filter-nav:eq(0)")添加active类
            $(".filter-nav.active").removeClass("active");
            $(".filter-nav:eq(0)").addClass("active");
            //关闭$(".filter-sort"),移除$(".filter-nav:eq(0)")open类,隐藏遮蔽层
            $(".filter-sort").removeClass("open");
            $(".filter-nav:eq(0)").removeClass("open");
            $(".filtermodal").hide();
            this.isClick=true;
            $(".header").show();
            $(".mint-swipe").show();
            $(".recommend_wrap").show();
            $(".shoplist-title").show();
            $(".NoDataTip-wrapper").show();
        },
        filterNavMoreClick(event){
            if($(".filter-more").css("opacity")==1){
                $(".filter-more").removeClass("open");
                $(".filter-nav-more").removeClass("open");
                $(".filtermodal").hide();
                $(".header").show();
                $(".mint-swipe").show();
                $(".recommend_wrap").show();
                $(".shoplist-title").show();
                $(".NoDataTip-wrapper").show();
            }else{
                //隐藏position不是sticky的元素
                $(".header").hide();
                $(".mint-swipe").hide();
                $(".recommend_wrap").hide();
                $(".shoplist-title").hide();
                $(".NoDataTip-wrapper").hide();
                $(".filter-more").addClass("open");
                $(event.currentTarget).addClass("open");
                $(".filtermodal").show();
            }
        },
        morefilter_1Click(event){
            if($(event.currentTarget).parent().parent().index()==0){
                if(!$(event.currentTarget).hasClass("selected")){
                    $(event.currentTarget).addClass("selected");
                }else{
                    $(event.currentTarget).removeClass("selected");
                }
            }else if($(event.currentTarget).parent().parent().index()==1){
                if(!$(event.currentTarget).hasClass("selected")){
                    $(event.currentTarget).siblings(".selected").removeClass("selected");
                    $(event.currentTarget).addClass("selected");
                }else{
                    $(event.currentTarget).removeClass("selected");
                }
            }else if($(event.currentTarget).parent().parent().index()==2){
                if(!$(event.currentTarget).hasClass("selected")){
                    $(event.currentTarget).siblings(".selected").removeClass("selected");
                    $(event.currentTarget).addClass("selected");
                }else{
                    $(event.currentTarget).removeClass("selected");
                }
            }
            if($(".morefilter1").find(".selected").length>0){
                $(".morefilter2_span1").addClass("enable");
            }else{
                $(".morefilter2_span1").removeClass("enable");
            }
        },
        morefilter2Span1Click(){
            $(".morefilter1").find(".selected").removeClass("selected");
            $(".morefilter2_span1").removeClass("enable");
        },
        morefilter2Span2Click(){
            if($(".morefilter1").find(".selected").length>0){
                $(".filter-nav-more").addClass("active");
            }else{
                $(".filter-nav-more").removeClass("active");
            }
            $(".filter-more").removeClass("open");
            $(".filter-nav-more").removeClass("open");
            $(".filtermodal").hide();
            $(".header").show();
            $(".mint-swipe").show();
            $(".recommend_wrap").show();
            $(".shoplist-title").show();
            $(".NoDataTip-wrapper").show();
        },
        login(){
            this.$router.push({name:"Login"});
        },
        showListOrLogin(event){
            if(window.sessionStorage.getItem("phone_number")!=null){
                this.$router.push({name:"Search"});
            }
        }
    },
    mounted(){
        this.bodyClickListener=(e)=>{
            //如果$(".filter-sort")是open状态
            if($(".filter-sort").hasClass("open")){
                $(".filter-sort").removeClass("open");
                $(".filter-nav:eq(0)").removeClass("open");
                $(".filtermodal").hide();
                $(".header").show();
                $(".mint-swipe").show();
                $(".recommend_wrap").show();
                $(".shoplist-title").show();
                $(".NoDataTip-wrapper").show();
            }
            if($(".filter-more").hasClass("open")&&!$(e.target).isChildAndSelfOf(".filter-more")){
                $(".filter-more").removeClass("open");
                $(".filter-nav-more").removeClass("open");
                $(".filtermodal").hide();
                $(".header").show();
                $(".mint-swipe").show();
                $(".recommend_wrap").show();
                $(".shoplist-title").show();
                $(".NoDataTip-wrapper").show();
            }
        }
        //第三个参数为true,捕获由外到内依次执行各级父元素上的处理函数
        //第三个参数为false,冒泡由内到外依次执行各级父元素上的处理函数
        document.body.addEventListener("click",this.bodyClickListener,true);
        if(window.sessionStorage.getItem("position")!=null){
            $(".span1").text(window.sessionStorage.getItem("position"));
        }
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
    },
    created(){
        if(window.sessionStorage.getItem("phone_number")!=null){
            this.isShow=false;
        }else{
            this.isShow=true;
        }
    },
    beforeMount(){
        if(!this.isShow){
            this.$axios.get("http://localhost:3000/storeList").then(res=>{
                this.storeList=res.data;
            });
        }
    }
}
</script>

<style scoped lang="less">
.header{
    padding: 2.666667vw 3.733333vw 0;
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.header_d1{
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: .92rem;
    height: 9.2vw;
}
.header_d1, .header_d2 a{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.header_d2{
    width: 60%;
    font-weight: 700;
}
.svg1{
    width: .346667rem;
    width: 3.466667vw;
    height: .413333rem;
    height: 4.133333vw;
    fill: #fff;
}
.svg2{
    width: .186667rem;
    width: 1.866667vw;
    height: .093333rem;
    height: .933333vw;
    fill: #fff;
}
.span1{
    margin: 0 .133333rem;
    margin: 0 1.333333vw;
    font-size: .453333rem;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
}
.search{
    position: -webkit-sticky;
    position: sticky;
    z-index: 999;
    top: 0;
    padding: .2rem .373333rem;
    padding: 2vw 3.733333vw;
    margin: -.013333rem 0;
    margin: -.133333vw 0;
}
.search, .search:after, .search:before{
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.search:after, .search:before{
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
}
.search:before{
    top: -1px;
}
.search:after{
    bottom: -1px;
}
.search>.content{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: .96rem;
    height: 9.6vw;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: .026667rem;
    border-radius: .266667vw;
    background: #fff;
    color: #999;
    font-size: .373333rem;
}
.search>.content>svg{
    display: inline-block;
    width: .426667rem;
    width: 4.266667vw;
    height: .426667rem;
    height: 4.266667vw;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
}
.search>.content>span{
    font-family: simsun;
}
.mint-swipe{
	overflow: hidden;
    position: relative;
    height: 100%;
}
.foodentry{
	overflow: hidden;
    height: 4.72rem;
    height: 47.2vw;
    background-color: #fff;
    text-align: center;
}
.mint-swipe-items-wrap{
	overflow: hidden;
    position: relative;
    height: 100%;
}
.mint-swipe-items-wrap{
	-webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.mint-swipe-items-wrap{
	z-index: 2;
}
.mint-swipe-items-wrap>div{
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none;
}
.mint-swipe-items-wrap>div.is-active{
	display: block;
    -webkit-transform: none;
    transform: none;
}
.foodentry a{
    position: relative;
    float: left;
    margin-top: .293333rem;
    margin-top: 2.933333vw;
    width: 20%;
}
.foodentry .container{
    position: relative;
    display: inline-block;
    width: 1.2rem;
    width: 12vw;
    height: 1.2rem;
    height: 12vw;
}
.foodentry .title{
    display: block;
    margin-top: .133333rem;
    margin-top: 1.333333vw;
    color: #666;
    font-size: .32rem;
}
.foodentry img{
    width: 1.066667rem;
    width: 10.666667vw;
    height: 1.066667rem;
    height: 10.666667vw;
    vertical-align: top;
}
.foodentry .container img{
    width: 100%;
    height: 100%;
}
.mint-swipe-indicators{
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.mint-swipe-indicator{
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
    margin: 0 3px;
}
.mint-swipe-indicator.is-active{
    background: #fff;
}
.foodentry .mint-swipe-indicator{
    margin: 0 .066667rem;
    margin: 0 .05vw 0.5vw;
    width: .24rem;
    width: 3.4vw;
    height: .04rem;
    height: .4vw;
    border-radius: 0;
}
.wrapper .mint-swipe-indicator{
    width: .24rem;
    width: 3.4vw;
    height: .04rem;
    height: .4vw;
    border-radius: 0;
}
.foodentry .mint-swipe-indicator.is-active{
    width: .24rem;
    width: 3.4vw;
    background-color: #00a6ff;
}
.foodentry .mint-swipe-indicator.is-active{
    background-color: #00a6ff;
}
.foodentry .mint-swipe-indicator.is-active{
    background-color: #fe7100;
}
.recommend_wrap{
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
    font-size: 0;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
}
.recommend_sec{
    background: #fff;
}
.recommend_d1{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.recommend_d1{
    margin-bottom: .08rem;
    margin-bottom: .8vw;
}
.recommend_d2{
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background: -webkit-gradient(linear,left bottom,left top,color-stop(5%,#f4f4f4),color-stop(95%,#fafafa));
    background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
}
.recommend_d2{
    height: 3.733333rem;
    height: 37.333333vw;
    padding: .32rem 0 0 .4rem;
    padding: 3.2vw 0 0 4vw;
    z-index: 0;
}
.recommend_d2{
    height: 2.933333rem;
    height: 29.333333vw;
}
.recommend_h3{
    font-size: .453333rem;
    font-weight: 700;
    margin-bottom: .133333rem;
    margin-bottom: 1.333333vw;
    color: #333;
}
.recommend_d3{
    font-size: .346667rem;
    color: #777;
    margin-bottom: .24rem;
    margin-bottom: 2.4vw;
}
.recommend_d4{
    font-size: .32rem;
    color: #af8260;
    font-weight: 700;
}
.recommend_d2 img{
    position: absolute;
    right: 0;
    bottom: -.2rem;
    bottom: -2vw;
    width: 3.2rem;
    width: 32vw;
    height: 2.133333rem;
    height: 21.333333vw;
}
.recommend_d2 img{
    top: .24rem;
    top: 2.4vw;
    right: .373333rem;
    right: 3.733333vw;
    width: 3.76rem;
    width: 37.6vw;
    height: 2.506667rem;
    height: 25.066667vw;
}
.shoplist, .shoplist-title{
    background-color: #fff;
}
.shoplist-title{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: .96rem;
    height: 9.6vw;
    font-size: .4rem;
    color: #000;
}
.shoplist-title:after, .shoplist-title:before{
    display: block;
    content: "";
    width: .533333rem;
    width: 5.333333vw;
    height: .026667rem;
    height: .266667vw;
    background-color: #999;
}
.shoplist-title:before{
    margin-right: .346667rem;
    margin-right: 3.466667vw;
}
.shoplist-title:after{
    margin-left: .346667rem;
    margin-left: 3.466667vw;
}
.filter-extend{
    left: 0;
    right: 0;
    top: 1.053333rem;
    top: 10.533333vw;
    border-top: 1px solid #ddd;
    position: absolute;
    max-height: 0;
    background-color: #fff;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    visibility: hidden;
    overflow: auto;
    opacity: 0;
    z-index: 4;
}
.filter-extend.open{
    opacity: 1;
    visibility: visible;
    max-height: 1500%;
}
.filter-sort{
    padding-top: .213333rem;
    padding-top: 2.133333vw;
    padding-bottom: .32rem;
    padding-bottom: 3.2vw;
    font-size: .373333rem;
    color: #333;
}
.filter-sort li{
    position: relative;
    padding-left: .533333rem;
    padding-left: 5.333333vw;
    line-height: 1.066667rem;
    line-height: 10.666667vw;
}
.filter-sort .selected{
    position: absolute;
    right: .373333rem;
    right: 3.733333vw;
    top: 50%;
    width: .4rem;
    width: 4vw;
    height: .4rem;
    height: 4vw;
    display: none;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.filter-sort li.active{
    color: #3190e8;
    font-weight: 700;
}
.filter-sort li.active .selected{
    display: block;
}
.home-filter{
    position: -webkit-sticky;
    position: sticky;
    top: 1.333rem;
    z-index: 100;
}
.filter{
    position: relative;
    line-height: 1.04rem;
    line-height: 10.4vw;
    z-index: 101;
    height: 1.066667rem;
    height: 10.666667vw;
}
.filter-header{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 1.053333rem;
    height: 10.533333vw;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 4;
    background-color: #fff;
}
.filter-nav{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    color: #666;
    position: relative;
    font-size: .373333rem;
    z-index: 101;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.filter-nav .dropdown-icon{
    width: .16rem;
    width: 1.6vw;
    height: .08rem;
    height: .8vw;
    margin-left: .133333rem;
    margin-left: .333333vw;
    margin-bottom: .053333rem;
    margin-bottom: .533333vw;
    fill: #333;
    will-change: transform;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
}
.filter-nav-more__icon{
    margin-left: .053333rem;
    margin-left: .533333vw;
    width: .346667rem;
    width: 3.466667vw;
    height: .346667rem;
    height: 3.466667vw;
    fill: #666;
}
.filter-nav-more{
    width: 2.133333rem;
    width: 21.333333vw;
    height: 1.066667rem;
    height: 10.666667vw;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #666;
    font-size: .373333rem;
    position: relative;
}
.filter-nav.active{
    color: #333;
    font-weight: 700;
}
.filter-nav.open{
    color: #3190e8;
    font-weight: 700;
}
.filter-nav-more.open{
    color: #3190e8;
    font-weight: 700;
}
.filter-nav.open .dropdown-icon{
    fill: currentColor;
}
.NoDataTip-wrapper{
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.NoDataTip-wrapper{
    -webkit-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
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
.NoDataTip-wrapper p{
    margin: 0 0 .333333rem;
    margin: 0 0 3.333333vw;
    color: #999;
    font-size: .306667rem;
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
.filtermodal{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background: rgba(0,0,0,.5);
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    -webkit-backdrop-filter: blur(.133333rem);
    -webkit-backdrop-filter: blur(1.333333vw);
    backdrop-filter: blur(.133333rem);
    backdrop-filter: blur(1.333333vw);
}
.mb{
    margin-bottom: 10vh;
}
.morefilter1{
    overflow: auto;
    height: 100%;
    padding: 0 .266667rem;
    padding: 0 2.666667vw;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    line-height: normal;
}
.morefilter1 dl{
    margin: .266667rem 0;
    margin: 2.666667vw 0;
    overflow: hidden;
}
.morefilter1 dt{
    margin-left: 1%;
    margin-bottom: .2rem;
    margin-bottom: 2vw;
    color: #666;
    font-size: 0.333333rem;
}
.morefilter1 dd{
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #fff;
    position: relative;
}
.morefilter1 dd{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.morefilter_1{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.morefilter_1{
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 31.33%;
    -ms-flex: 0 0 31.33%;
    flex: 0 0 31.33%;
    height: .933333rem;
    height: 9.333333vw;
    font-size: .346667rem;
    margin: .08rem 1%;
    margin: .8vw 1%;
    background: #fafafa;
}
.morefilter_1 .morefilter_2{
    white-space: nowrap;
}
.morefilter_1 .morefilter_3{
    width: .346667rem;
    width: 3.466667vw;
    height: .346667rem;
    height: 3.466667vw;
    vertical-align: middle;
    margin-right: .08rem;
    margin-right: .8vw;
}
.morefilter_1 span{
    margin-left: 2%;
    vertical-align: middle;
}
.morefilter_1.selected{
    font-weight: 700;
    color: #3190e8;
    background-color: #edf5ff;
}
.morefilter2{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fafafa;
    -webkit-box-shadow: 0 -0.026667rem 0.053333rem 0 #ededed;
    -webkit-box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
    box-shadow: 0 -0.026667rem 0.053333rem 0 #ededed;
    box-shadow: 0 -0.266667vw 0.533333vw 0 #ededed;
    line-height: 1.146667rem;
    line-height: 11.466667vw;
}
.morefilter2 .morefilter2_span1{
    font-size: .426667rem;
    text-align: center;
    text-decoration: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.morefilter2 .morefilter2_span1{
    background-color: #fff;
    color: #ddd;
}
.morefilter2 .morefilter2_span1.enable{
    color: #333;
}
.morefilter2 .morefilter2_span2{
    font-size: .426667rem;
    text-align: center;
    text-decoration: none;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.morefilter2 .morefilter2_span2{
    opacity: .5;
    color: #fff;
    background-color: #00d762;
    border: .013333rem solid #00d762;
    border: .133333vw solid #00d762;
}
.morefilter2 .morefilter2_span2{
    opacity: 1;
}
.filter-nav-more.open .filter-nav-more__icon{
    fill: currentColor;
}
.filter-nav-more.active{
    color: #333;
    font-weight: 700;
}
.shop-wrap{
    position: relative;
    border-bottom: .133333vw solid #eee;
    color: #666;
    font-size: .293333rem;
    padding: 4vw 0;
}
.shop-wrap-div1{
    padding: 0 2.666667vw;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: flex-start;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: stretch;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
}
.image-wrap{
    -webkit-flex: none;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 1.733333rem;
    width: 17.333333vw;
    height: 1.733333rem;
    height: 17.333333vw;
}
.main-wrap{
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    -webkit-flex-grow: 1;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-left: 2.666667vw;
    -webkit-flex-direction: column;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
.main-wrap-title{
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.main-wrap-title-h3{
    color: #333;
    font-weight: 700;
    font-size: .4rem;
    overflow: hidden;
}
.main-wrap-title-h3 span{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.main-wrap-star{
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
}
.main-wrap-bottom{
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.main-wrap-bottom-div1 span+span::before{
    margin: 0 .8vw;
    color: #ddd;
    content: "|";
}
.main-wrap-bottom-div2 span+span::before{
    margin: 0 .8vw;
    color: #ddd;
    content: "|";
}
.main-wrap-bottom-div2 span{
    color: #999999;
}
.shop-wrap-div2{
    padding-left: 22.666667vw;
}
.tag-wrap{
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 2.666667vw 2.666667vw 0 0;
}
.tag-wrap span{
    border: 1px solid rgb(221, 221, 221);
    color: rgb(102, 102, 102);
    border-radius: .533333vw;
    padding: 0 2.133333vw;
    font-size: .133333rem;
    margin-right: 1.333333vw;
    margin-bottom: 1.066667vw;
}
.discount-wrap-div1{
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-right: .266667rem;
    padding-right: 2.666667vw;
    overflow: hidden;
}
.discount-wrap-div2{
    padding: .08rem .266667rem 0 0;
    padding: .8vw 2.666667vw 0 0;
    color: #999;
    text-align: right;
    font-size: .266667rem;
    line-height: 1;
}
.discount-wrap-div1-row{
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .293333rem;
    line-height: .48rem;
    line-height: 4.8vw;
}
.discount-wrap-div1-row:nth-child(2){
    margin-top: .066667rem;
    margin-top: .666667vw;
}
.discount-icon-wrap{
    display: inline-block;
    position: relative;
    margin-right: .16rem;
    margin-right: 1.6vw;
    height: .373333rem;
    height: 3.733333vw;
    width: .373333rem;
    width: 3.733333vw;
    vertical-align: middle;
}
.discount-icon{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    height: .746667rem;
    height: 7.466667vw;
    width: .746667rem;
    width: 7.466667vw;
    font-size: .56rem;
    color: #fff;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: .106667rem;
    border-radius: 1.066667vw;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.discount-desc{
    display: inline-block;
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
}
</style>