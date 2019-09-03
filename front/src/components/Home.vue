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
    </div>
</template>

<script>
export default {
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
</style>