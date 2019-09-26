<template>
    <div class="tmpl">
        <div class="category-wrap">
            <ul class="category-wrap-ul">
                <li class="category-wrap-li selected" @click="titleLiClick($event)">全部</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">面食粥点</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">简餐便当</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">汉堡披萨</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">香锅冒菜</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">小吃炸串</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">地方菜系</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">日韩料理</li>
                <li class="category-wrap-li" @click="titleLiClick($event)">轻食简餐</li>
            </ul>
            <div class="category-wrap-div">
                <svg class="category-wrap-svg" @click="open()">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down">
                        <svg viewBox="0 0 26 26" id="drop-down" width="100%" height="100%"><path fill="#FFF" d="M13.086 17.627L3.219 7.76a1.131 1.131 0 0 0-1.6 1.6l10.667 10.667a1.131 1.131 0 0 0 1.6 0L24.553 9.36a1.131 1.131 0 0 0-1.6-1.6l-9.867 9.867z"></path></svg>
                    </use>
                </svg>
            </div>
        </div>
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
                    <a href="javascript:;" class="filter-nav" @click="filterNavClick($event)"><span>会员领红包</span></a>
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
        <div class="filtermodal" style="display: none;"></div>
        <section class="shoplist">
            <section class="shop-wrap" v-for="(item,i) of storeList" :key="i" @click="toDetail($event)">
                <input type="hidden" name="id" :value="item.id"/>
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
        <section class="filter-category">
            <div class="top">
                <h3 class="title">请选择分类</h3>
                <button class="close" @click="close()"></button>
            </div>
            <div class="filter-scroller">
                <ul class="menu main-menu">
                    <li class="menu-item menu-item--main active" @click="mainMenuItemClick($event)" v-for="(item,i) of categoryList" :key="i">
                        <span class="menu-name">{{item.big_category}}</span>
                        <span :count="item.total" class="count">{{item.total}}</span>
                    </li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">快餐便当</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">特色菜系</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">全球美食</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">小吃夜宵</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">甜品饮品</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">商店超市</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">鲜花绿植</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">医药健康</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">早餐</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">午餐</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">下午茶</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">晚餐</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--main" @click="mainMenuItemClick($event)"><span class="menu-name">夜宵</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu" v-for="(item1,i) of categoryList" :key="i">
                    <li class="menu-item menu-item--sub active" @click="subMenuItemClick($event)">
                        <span class="menu-name">全部</span>
                        <span :count="item1.total" class="count">{{item1.total}}</span>
                    </li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)" v-for="(item2,i) of item1.small_category" :key="i">
                        <span class="menu-name">{{item2.small_category_name}}</span>
                        <span :count="item2.number" class="count">{{item2.number}}</span>
                    </li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">快餐便当1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">快餐便当2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">快餐便当3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">快餐便当4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">快餐便当5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">快餐便当6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">特色菜系1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">特色菜系2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">特色菜系3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">特色菜系4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">特色菜系5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">特色菜系6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">全球美食1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">全球美食2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">全球美食3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">全球美食4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">全球美食5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">全球美食6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">小吃夜宵1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">小吃夜宵2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">小吃夜宵3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">小吃夜宵4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">小吃夜宵5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">小吃夜宵6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">甜品饮品1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">甜品饮品2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">甜品饮品3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">甜品饮品4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">甜品饮品5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">甜品饮品6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">商店超市1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">商店超市2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">商店超市3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">商店超市4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">商店超市5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">商店超市6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">鲜花绿植1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">鲜花绿植2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">鲜花绿植3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">鲜花绿植4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">鲜花绿植5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">鲜花绿植6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">医药健康1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">医药健康2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">医药健康3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">医药健康4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">医药健康5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">医药健康6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">早餐1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">早餐2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">早餐3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">早餐4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">早餐5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">早餐6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">午餐1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">午餐2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">午餐3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">午餐4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">午餐5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">午餐6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">下午茶1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">下午茶2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">下午茶3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">下午茶4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">下午茶5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">下午茶6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">晚餐1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">晚餐2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">晚餐3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">晚餐4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">晚餐5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">晚餐6</span><span count="0" class="count">0</span></li>
                </ul>
                <ul class="menu submenu">
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">夜宵1</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">夜宵2</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">夜宵3</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">夜宵4</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">夜宵5</span><span count="0" class="count">0</span></li>
                    <li class="menu-item menu-item--sub" @click="subMenuItemClick($event)"><span class="menu-name">夜宵6</span><span count="0" class="count">0</span></li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isClick:false,
            storeList:'',
            scrollTop:0,
            categoryList:''
        }
    },
    methods:{
        titleLiClick(event){
            $(".category-wrap-li.selected").removeClass("selected");
            $(event.currentTarget).addClass("selected");
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
                //打开$(".filter-sort")
                $(".filter-sort").addClass("open");
                //给$(".filter-nav:eq(0)")添加样式open
                $(event.currentTarget).addClass("open");
                //显示遮蔽层
                $(".filtermodal").show();
                //如果$(".filter-sort")渲染完毕点击$(".filter-nav:eq(0)")关闭$(".filter-sort")去除$(".filter-nav:eq(0)")的open类,隐藏遮蔽层
                if($(".filter-sort").css("opacity")==1){
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
        filterNavMoreClick(event){
            if($(".filter-more").css("opacity")==1){
                $(".filter-more").removeClass("open");
                $(".filter-nav-more").removeClass("open");
                $(".filtermodal").hide();
            }else{
                $(".filter-more").addClass("open");
                $(event.currentTarget).addClass("open");
                $(".filtermodal").show();
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
        mainMenuItemClick(event){
            $(".menu-item--main.active").removeClass("active");
            $(event.currentTarget).addClass("active");
            var index=$(".menu-item--main.active").index();
            $(".submenu").hide();
            $(".submenu:eq("+index+")").show();
        },
        close(){
            document.documentElement.scrollTop=this.scrollTop;
            $(".filter-category").removeClass("open");
            $(".filtermodal").hide();
            document.documentElement.style.overflow='scroll';
            $(".submenu").hide();
        },
        open(){
            this.scrollTop=document.documentElement.scrollTop;
            document.documentElement.scrollTop=0;
            var index=$(".menu-item--main.active").index();
            $(".submenu:eq("+index+")").show();
            $(".filter-category").addClass("open");
            $(".filtermodal").show();
            document.documentElement.style.overflow='hidden';
        },
        subMenuItemClick(event){
            $(".menu-item--sub.active").removeClass("active");
            $(event.currentTarget).addClass("active");
            $(".filter-category").removeClass("open");
            $(".filtermodal").hide();
            var index=$(event.currentTarget).parent().index()-1;
            var big_category=$(".main-menu").children(".menu-item:eq("+index+")").children(".menu-name").text();
            this.$axios.get("http://localhost:3000/storeList/getByCategory?category="+$(event.currentTarget).children(".menu-name").text()+"&big_category="+big_category).
            then(res=>{this.storeList=res.data});
            document.documentElement.style.overflow='scroll';
        },
        toDetail(event){
            this.$router.push({name:"Detail",params:{id:$(event.currentTarget).children("input[type='hidden']").val()}});
        }
    },
    mounted(){
        this.bodyClickListener=(e)=>{
            //如果$(".filter-sort")是open状态
            if($(".filter-sort").hasClass("open")){
                $(".filter-sort").removeClass("open");
                $(".filter-nav:eq(0)").removeClass("open");
                $(".filtermodal").hide();
            }
            if($(".filter-more").hasClass("open")&&!$(e.target).isChildAndSelfOf(".filter-more")){
                $(".filter-more").removeClass("open");
                $(".filter-nav-more").removeClass("open");
                $(".filtermodal").hide();
            }
        }
    },
    beforeMount(){
        if(!this.isShow){
            this.$axios.get("http://localhost:3000/storeList?big_category=美食").then(res=>{
                this.storeList=res.data;
            });
        }
    },
    created(){
        this.$axios.get("http://localhost:3000/category").then(res=>{
            this.categoryList=res.data;
        });
    }
}
</script>
<style scoped>
.category-wrap{
    position: sticky;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    z-index: 101;
    top: 0;
}
.category-wrap-ul{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 1.066667rem;
    height: 10.666667vw;
    padding-left: .4rem;
    padding-left: 4vw;
    padding-bottom: .133333rem;
    padding-bottom: 1.333333vw;
    overflow-x: scroll;
    white-space: nowrap;
}
.category-wrap-ul::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.category-wrap-li{
    display: inline-block;
    margin-right: .746667rem;
    margin-right: 7.466667vw;
    padding: .346667rem 0 .16rem;
    padding: 3.466667vw 0 1.6vw;
    font-size: .373333rem;
    line-height: 1;
    color: #fff;
    opacity: .7;
}
.category-wrap-li.selected{
    font-weight: 700;
    border-bottom: .053333rem solid #fff;
    border-bottom: .533333vw solid #fff;
    opacity: 1;
}
.category-wrap-div{
    position: relative;
    width: 1.2rem;
    width: 12vw;
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
}
.category-wrap-svg{
    width: .346667rem;
    width: 3.466667vw;
    height: .346667rem;
    height: 3.466667vw;
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
.filter-nav_icon{
    width: .346667rem;
    width: 3.466667vw;
    height: .293333rem;
    height: 2.933333vw;
    margin-right: .053333rem;
    margin-right: .533333vw;
}
.home-filter{
    position: -webkit-sticky;
    position: sticky;
    z-index: 100;
    top: 10.666667vw;
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
.shoplist{
    background-color: #fff;
}


.filter-category{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60vh;
    z-index: 200;
    padding-bottom: 0;
    color: #666;
    visibility: hidden;
    opacity: 0;
    background: #f9f9f9;
}
.filter-category.open{
    visibility: visible;
    opacity: 1;
}
.top{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    padding: 0 .2rem 0 .4rem;
    padding: 0 2vw 0 4vw;
    height: 1.066667rem;
    height: 10.666667vw;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.title{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: .373333rem;
    font-weight: 700;
    color: #333;
}
.close{
    -webkit-appearance: none;
    outline: none;
    background: url("../assets/images/foodList/1.png");
    width: .4rem;
    width: 4vw;
    height: .4rem;
    height: 4vw;
    background-size: 100%;
    margin-right: 2vw;
}
.filter-scroller{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    border-top: 1px solid #eee;
    background-color: #fff;
}
.menu{
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}
.main-menu{
    width: 3.466667rem;
    width: 34.666667vw;
    background-color: #fcfcfc;
}
.menu-item{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 1.28rem;
    height: 12.8vw;
    line-height: 1.28rem;
    line-height: 12.8vw;
}
.menu-item--main{
    padding-right: .266667rem;
    padding-right: 2.666667vw;
    border-right: 1px solid #f5f5f5;
    border-bottom: .013333rem solid transparent;
    border-bottom: .133333vw solid transparent;
}
.menu-item--main.active{
    background-color: #fff;
    border-right-width: 0;
    border-bottom-color: #f5f5f5;
}
.menu-name{
    font-size: .373333rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: .533333rem;
    height: 5.333333vw;
    line-height: .533333rem;
    line-height: 5.333333vw;
}
.menu-item--main .menu-name{
    position: relative;
    padding-left: .533333rem;
    padding-left: 5.333333vw;
}
.menu-item--main.active .menu-name::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: .106667rem;
    width: 1.066667vw;
    height: .533333rem;
    height: 5.333333vw;
    background-color: #2395ff;
}
.count{
    position: relative;
    width: .8rem;
    width: 8vw;
    height: .373333rem;
    height: 3.733333vw;
    font-size: 0;
    border: 1px solid #eee;
    border-radius: .2rem;
    border-radius: 2vw;
    color: #999;
}
.count::after{
    content: attr(count);
    position: absolute;
    top: 0;
    left: 0;
    width: 1.546667rem;
    width: 15.466667vw;
    color: currentColor;
    font-size: .533333rem;
    line-height: .746667rem;
    line-height: 7.466667vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transform: scale(.5);
    transform: scale(.5);
}
.menu::-webkit-scrollbar{
    width: 0;
    height: 0;
}
.submenu{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 .4rem 0 .56rem;
    padding: 0 4vw 0 5.6vw;
    background: #fff;
    display: none;
}
.menu-item--sub.active{
    font-weight: 700;
}
.menu-item--sub.active .menu-name{
    color: #2395ff;
}
.submenu span{
    vertical-align: middle;
}
.menu-item--sub.active .count{
    background-color: #2395ff;
    border-color: #2395ff;
    color: #fff;
}
</style>