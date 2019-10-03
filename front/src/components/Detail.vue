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
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            data:''
        }
    },
    methods:{
        back(){
            history.go(-1);
        }
    },
    beforeCreate(){
        var id=this.$route.params.id;
        this.$axios.get("http://localhost:3000/detail?id="+id).then(res=>{this.data=res.data});
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
</style>