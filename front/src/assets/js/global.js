(function(win,doc){
    change();
    function change(){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth*32/320+"px";
    }
    win.addEventListener('resize',change,false);
    win.addEventListener('orientationchange',change,false);
    win.onbeforeunload=function(){
        this.localStorage.setItem("navTabIndex","首页");
    }
    jQuery.fn.isChildOf=function(b){
        return (this.parents(b).length>0);
    }
    jQuery.fn.isChildAndSelfOf=function(b){
        return (this.closest(b).length>0);
    };
})(window,document);