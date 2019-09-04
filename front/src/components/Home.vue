<template>
    <div class="tmpl">
        <div class="header">
            <div class="header_d1">
                <div class="header_d2">
                    <router-link :to="{}">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="svg1"><path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
                        <span class="span1">上海市人民政府</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="svg2"><path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="search">
            <a class="content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path>
                </svg>
                <span>搜索饿了么商家、商品名称</span>
            </a>
        </div>
        <div class="mint-swipe foodentry">
            <div class="mint-swipe-items-wrap">
                <div class="mint-swipe-item is-active" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)">
                    <router-link :to="{name:'HelloWorld'}">123</router-link>
                    <router-link :to="{name:'HelloWorld'}">123</router-link>
                    <router-link :to="{name:'HelloWorld'}">123</router-link>
                    <router-link :to="{name:'HelloWorld'}">123</router-link>
                    <router-link :to="{name:'HelloWorld'}">123</router-link>
                </div>
                <div class="mint-swipe-item" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)" style="background-color:blue;"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            startPoint:0,
            disX:0,
            canDo:true,
            clientWidth:document.body.clientWidth,
            startTime:0,
            test:true
        }
    },
    methods:{
        touchstart:function(event){
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
                            }else{
                                elem2.hide();
                            }
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
                                _this.disX=0;
                                _this.canDo=true;
                            },500);
                        },100);
                    }
                }
            }
        }
    },
    created(){
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
</style>