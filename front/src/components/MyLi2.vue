<template>
    <li>
        <router-link :to="{name:''}" class="item">
            <input type="hidden" :value="index" name="index"/>
            <div class="ordercard-body">
                <a class="img-a" href="javascript:;">
                    <img :src="require('../assets/images/search/'+pic_name)" class="img"/>
                </a>
                <div class="cardbutton-content">
                    <div class="ordercard-head">
                        <div class="title">
                            <a href="javascript:;">
                                <span class="content">{{shop_name}}</span>
                                <svg>
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
                                        <svg viewBox="0 0 547 987" id="arrow-right" width="100%" height="100%"><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"></path></svg>
                                    </use>
                                </svg>
                            </a>
                            <p class="status">订单已送达</p>
                        </div>
                        <p class="datetime">{{time}}</p>
                    </div>
                    <div class="ordercard-detail">
                        <p class="detail">
                            <span class="productname">{{name}}</span>
                            <span>等{{count}}件商品</span>
                        </p>
                        <p class="price">¥{{total}}</p>
                    </div>
                </div>
            </div>
            <div class="ordercard-bottom">
                <button class="cardbutton red" @click="del($event)">删除订单</button>
                <button class="cardbutton blue">再来一单</button>
            </div>
        </router-link>
    </li>
</template>
<script>
export default {
    name:'my-li-2',
    props:["total","count","time","name","shop_name",'pic_name','index'],
    methods:{
        del(event){
            this.bus.$emit("delete_book",$(event.currentTarget).parent().siblings("input[name='index']").val());
        }
    }
}
</script>
<style scoped>
.item{
    display: block;
    width:100%;
    padding:4vw 0 0 4vw;
    background: #fff;
    margin-top: .266667rem;
    margin-top: 2.666667vw;
}
.ordercard-body{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.ordercard-bottom{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    border-top: 1px solid #eee;
    padding: .266667rem .426667rem;
    padding: 2.666667vw 4.266667vw;
}
.cardbutton{
    padding: .186667rem .266667rem;
    padding: 1.866667vw 2.666667vw;
    font-size: .346667rem;
    border: 1px solid transparent;
    border-radius: .053333rem;
    border-radius: .533333vw;
    margin-left: 2vw;
    background-color: #fff;
}
.red{
    color: #D33C82;
    border-color: #D33C82;
}
.blue{
    color: #2395ff;
    border-color: #2395ff;
}
.img-a{
    position: relative;
    padding-right: .266667rem;
    padding-right: 2.666667vw;
    -webkit-box-flex: 0;
    -webkit-flex: none;
    -ms-flex: none;
    flex: none;
    height: .853333rem;
    height: 8.533333vw;
}
.img{
    border-radius: .053333rem;
    border-radius: .533333vw;
    border: 1px solid #eee;
    width: .853333rem;
    width: 8.533333vw;
}
.cardbutton-content{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.ordercard-head{
    border-bottom: 1px solid #eee;
    padding-right: .346667rem;
    padding-right: 3.466667vw;
    padding-bottom: .266667rem;
    padding-bottom: 2.666667vw;
}
.ordercard-detail{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .4rem .346667rem .4rem 0;
    padding: 4vw 3.466667vw 4vw 0;
}
.detail{
    font-size: .346667rem;
    color: #666;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.productname{
    display: inline-block;
    max-width: 6.133333rem;
    max-width: 61.333333vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 4.266667rem;
    max-width: 42.666667vw;
}
.price{
    -webkit-flex-basis: 1.600000rem;
    -webkit-flex-basis: 16.000000vw;
    -ms-flex-preferred-size: 1.600000rem;
    -ms-flex-preferred-size: 16.000000vw;
    flex-basis: 1.600000rem;
    flex-basis: 16.000000vw;
    text-align: right;
    font-size: .346667rem;
    color: #333;
    font-weight: 700;
}
.datetime{
    font-size: .293333rem;
    color: #999;
}
.title{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.content{
    display: inline-block;
    max-width: 10em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.title a{
    font-size: .426667rem;
    line-height: 1.5em;
    color: #333;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.title a svg{
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    width: .133333rem;
    width: 1.333333vw;
    height: .186667rem;
    height: 1.866667vw;
}
.status{
    font-size: .346667rem;
    text-align: right;
    color: #333;
    max-width: 14em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>