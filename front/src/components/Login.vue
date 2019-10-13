<template>
    <div class="tmpl">
        <div class="app">
            <div class="login-header">
                <img src="../assets/images/login/1.png"/>
            </div>
            <div>
                <form class="messageLogin">
                    <section class="messageLogin_sec1">
                        <input type="tel" maxlength="11" placeholder="手机号">
                        <button disabled="disabled" class="CountButton-3e-kd" ubt-click="101161">获取验证码</button>
                    </section>
                    <section class="messageLogin_sec1">
                        <input type="tel" maxlength="8" placeholder="验证码">
                    </section>
                    <section class="messageLogin_sec2">
                        新用户登录即自动注册，并表示已同意
                        <a href="javascript:;">《用户服务协议》</a>
                        和
                        <a href="javascript:;">《隐私权政策》</a>
                    </section>
                    <button class="SubmitButton" @click="checkLogin($event)">登录</button>
                </form>
                <a href="javascript:;" class="about_us">关于我们</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        checkLogin(event){
            event.preventDefault();
            this.$axios.post("http://localhost:3000/login",
            "phone_number="+$(".messageLogin").find("input:eq(0)").val()+
            "&code="+$(".messageLogin").find("input:eq(1)").val()).then(res=>{
                if(res.data=="err1"){
                    this.$toast("验证码错误");
                }else if(res.data=="err2"){
                    this.$toast("手机号未注册");
                }else{
                    window.sessionStorage.setItem("user_name",res.data[0].user_name);
                    window.sessionStorage.setItem("phone_number",res.data[0].phone_number);
                    window.sessionStorage.setItem("real_name",res.data[0].real_name);
                    window.sessionStorage.setItem("address",res.data[0].address);
                    if(window.sessionStorage.getItem("navTabIndex")=="首页"){
                        this.$router.push({name:'Home'});
                    }else if(window.sessionStorage.getItem("navTabIndex")=="发现"){
                        this.$router.push({name:'Find'});
                    }else if(window.sessionStorage.getItem("navTabIndex")=="订单"){
                        this.$router.push({name:'Book'});
                    }else if(window.sessionStorage.getItem("navTabIndex")=="我的"){
                        this.$router.push({name:'Mine'});
                    }
                }
            });
        }
    },
    created(){
        if(window.sessionStorage.getItem("phone_number")!=null){
            if(window.sessionStorage.getItem("navTabIndex")=="首页"){
                this.$router.push({name:'Home'});
            }else if(window.sessionStorage.getItem("navTabIndex")=="发现"){
                this.$router.push({name:'Find'});
            }else if(window.sessionStorage.getItem("navTabIndex")=="订单"){
                this.$router.push({name:'Book'});
            }else if(window.sessionStorage.getItem("navTabIndex")=="我的"){
                this.$router.push({name:'Mine'});
            }
        }
    }
}
</script>
<style scoped>
.tmpl{
    width: 100%;
    height: 100vh;
}
.tmpl{
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
}
.tmpl{
    -webkit-align-items: center;
    align-items: center;
}
@media (max-width: 768px){
    .tmpl{
        height: auto;
        min-height: 100%;
        padding-top: 40px;
    }
}
.app{
    width: 300px;
    height: 100%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
}
@media (max-width: 768px){
    .app{
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
    }
}
.app>div:last-child{
    min-height: 296px;
}
.login-header{
    text-align: center;
}
.login-header img{
    height: 56px;
}
.messageLogin{
    margin-top: 16px;
}
.messageLogin_sec1{
    position: relative;
    margin-bottom: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
}
.messageLogin_sec1>*{
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 10px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.messageLogin_sec1>input{
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none;
}
.CountButton-3e-kd{
    padding: 0;
    border-radius: 6px;
    color: #2395ff;
    background: transparent;
    text-align: center;
    font-size: 14px;
}
.CountButton-3e-kd[disabled]{
    color: #ccc;
}
.messageLogin_sec2{
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
}
.messageLogin_sec2 a{
    color: #2395ff;
}
.SubmitButton{
    display: block;
    width: 100%;
    height: 42px;
    margin-top: 30px;
    border-radius: 4px;
    background: #4cd96f;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    line-height: 42px;
}
.about_us{
    display: none;
    margin-top: 20px;
    text-align: center;
    color: #999;
}
@media (max-width: 768px){
    .about_us{
        display: block;
        font-size: 0.32rem;
    }
}
</style>