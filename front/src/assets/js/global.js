(function(win,doc){
    change();
    function change(){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth*32/320+"px";
    }
    win.addEventListener('resize',change,false);
    win.addEventListener('orientationchange',change,false);
    //win.onbeforeunload=function(){
        //this.localStorage.setItem("navTabIndex","首页");
    //}
    window.addEventListener("popstate", function(e){
        if(window.sessionStorage.getItem("navTabIndex")=="首页"){
            $(".mint-tab-item:eq(0)").find("img").attr("src",require("../images/Tabber_1_2.png"));
            $(".mint-tab-item:eq(0)").addClass("is-selected");
        }else if(window.sessionStorage.getItem("navTabIndex")=="发现"){
            $(".mint-tab-item:eq(1)").find("img").attr("src",require("../images/Tabber_2_2.png"));
            $(".mint-tab-item:eq(1)").addClass("is-selected");
        }else if(window.sessionStorage.getItem("navTabIndex")=="订单"){
            $(".mint-tab-item:eq(2)").find("img").attr("src",require("../images/Tabber_3_2.png"));
            $(".mint-tab-item:eq(2)").addClass("is-selected");
        }else if(window.sessionStorage.getItem("navTabIndex")=="我的"){
            $(".mint-tab-item:eq(3)").find("img").attr("src",require("../images/Tabber_4_2.png"));
            $(".mint-tab-item:eq(3)").addClass("is-selected");
        }
    },false);
    jQuery.fn.isChildOf=function(b){
        return (this.parents(b).length>0);
    }
    jQuery.fn.isChildAndSelfOf=function(b){
        return (this.closest(b).length>0);
    };
})(window,document);