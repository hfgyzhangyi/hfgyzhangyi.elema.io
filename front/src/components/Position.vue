<template>
    <div class="tmpl">
        <div class="profile">
            <div style="position:sticky;top:0px;z-index:1000;">
                <div class="index_1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 33" class="index_1_svg" @click="back()"><path fill-rule="evenodd" d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z" class="path1"></path></svg>
                    <div class="index_1_div">选择收货地址</div>
                </div>
            </div>
            <div class="index_2">
                <div class="index_2_div1">
                    <span class="index_2_span1">选择城市</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index_2_svg1"><path fill="#333" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
                </div>
                <div class="index_2_div2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="index_2_svg2"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
                    <input type="search" placeholder="请输入地址" class="index_2_input1" v-model="position">
                </div>
            </div>
            <section>
                <div class="address-cell" v-for="(item,i) of position_list" :key="i">
                    <div class="address-cell-div1" @click="positionSelected($event)">
                        <p><span class="address-cell-div1-span1"><span>{{position}}</span>{{item.address_name.slice(position.length)}}</span><span class="address-cell-div1-span2"></span></p>
                        <p class="address-cell-div1-p1">{{item.address}}</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            position:'',
            position_list:''
        }
    },
    watch:{
        position:function(val,oldVal){
            this.$axios.get("http://localhost:3000/position",{params:{address_name:val}}).then(res=>{this.position_list=res.data;});
        }
    },
    methods:{
        positionSelected(event){
            window.sessionStorage.setItem("position",$(event.currentTarget).find(".address-cell-div1-span1").text());
            window.sessionStorage.setItem("address",$(event.currentTarget).children(".address-cell-div1-p1").text());
            this.$router.push({name:'Home'});
        },
        back(){
            this.$router.push({name:"Home"});
        }
    }
}
</script>
<style scoped>
.profile{
    height: 100vh;
    background-color: #F4F4F4;
}
.profile::before,.profile::after{
    display: table;
    content: "";
}
.index_1{
    position: relative;
    width: 100%;
    color: #fff;
    background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    text-align: center;
    font-size: .32rem;
}
.index_1_svg{
    position: absolute;
    left: .333333rem;
    left: 3.333333vw;
    top: .333333rem;
    top: 3.333333vw;
    fill: #fff;
    width: .533333rem;
    width: 5.333333vw;
    height: .533333rem;
    height: 5.333333vw;
}
.index_1_div{
    line-height: 1.173333rem;
    line-height: 11.733333vw;
    font-size: .48rem;
}
.index_2{
    background-color: #fff;
}
.index_2,.index_2_div1{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.index_2_div1{
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: .4rem;
    padding-left: 4vw;
}
.index_2_span1{
    font-size: .32rem;
    background: #fff;
    width: 1.066667rem;
    width: 10.666667vw;
    color: #333;
    margin-right: .133333rem;
    margin-right: 1.333333vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}
.index_2_div2{
    position: relative;
    padding: .266667rem .4rem;
    padding: 2.666667vw 4vw;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.index_2_svg1{
    width: .16rem;
    width: 1.6vw;
    height: .16rem;
    height: 1.6vw;
}
.index_2_svg2{
    position: absolute;
    width: .373333rem;
    width: 3.733333vw;
    height: .373333rem;
    height: 3.733333vw;
    left: .586667rem;
    left: 5.866667vw;
    top: .56rem;
    top: 5.6vw;
}
.index_2_input1{
    font-size: .346667rem;
    line-height: .48rem;
    line-height: 4.8vw;
}
.index_2_input1{
    width: 100%;
    height: .96rem;
    height: 9.6vw;
    color: #999;
    border-radius: .026667rem;
    border-radius: .266667vw;
    padding: .24rem .48rem .24rem .666667rem;
    padding: 2.4vw 4.8vw 2.4vw 6.666667vw;
    background: #f2f2f2;
    -webkit-appearance: none;
}
.address-cell{
    font-size: .32rem;
    background-color: #fff;
    padding: .293333rem .4rem;
    padding: 2.933333vw 4vw;
    color: #2a2a2a;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.address-cell-div1{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.address-cell-div1-span1{
    font-weight: 700;
    font-size: .4rem;
    color: #333;
}
.address-cell-div1-span1 span{
    color: #999;
}
.address-cell-div1-span2{
    margin-left: .133333rem;
    margin-left: 1.333333vw;
    color: #666;
}
.address-cell-div1-p1{
    color: #333;
    font-size: .32rem;
    line-height: .453333rem;
    line-height: 4.533333vw;
    margin-top: .053333rem;
    margin-top: .533333vw;
}
.address-cell+.address-cell{
    border-top: 1px solid #eee;
}
</style>