<template>
    <div class="tmpl">
        <div class="profile">
            <section>
                <div class="profile_1">
                    <div class="index_1" style="width:60px;height:60px;">
                        <img src="../assets/images/mine/1.png">
                    </div>
                    <div class="profile_1_div1">
                        <p class="profile_1_p1">登录/注册</p>
                        <p class="profile_1_p2">
                            <svg fill="#fff">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile">
                                    <svg viewBox="0 0 655 1024" id="mobile" width="100%" height="100%"><path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path></svg>
                                </use>
                            </svg>
                            <span>登录后享受更多特权</span>
                        </p>
                    </div>
                    <span class="profile_1_span1">
                        <svg fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
                                <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                            </use>
                        </svg>
                    </span>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.profile{
    min-height: 100vh;
}
.profile_1{
    display: -webkit-flex;
    display: flex;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: .666667rem .4rem;
    padding: 6.666667vw 4vw;
    color: #fff;
    -webkit-align-items: center;
    align-items: center;
}
.index_1{
    border-radius: 50%;
}
.index_1 img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.profile_1_div1{
    overflow: hidden;
    margin-left: .48rem;
    margin-left: 4.8vw;
    -webkit-flex-grow: 1;
    flex-grow: 1;
}
.profile_1_p1{
    font-size: .56rem;
    margin-bottom: .213333rem;
    margin-bottom: 2.133333vw;
    font-weight: 700;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.profile_1_p2{
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    font-size: .32rem;
}
.profile_1_p2 svg{
    margin-right: .066667rem;
    margin-right: .666667vw;
    width: .186667rem;
    width: 1.866667vw;
    height: .293333rem;
    height: 2.933333vw;
}
.profile_1_div1 p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.profile_1_span1 svg{
    width: .266667rem;
    width: 2.666667vw;
    height: .56rem;
    height: 5.6vw;
}
</style>