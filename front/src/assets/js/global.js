(function(win,doc){
    change();
    function change(){
        doc.documentElement.style.fontSize=doc.documentElement.clientWidth*30/320+"px";
    }
    win.addEventListener('resize',change,false);
    win.addEventListener('orientationchange',change,false);
})(window,document);