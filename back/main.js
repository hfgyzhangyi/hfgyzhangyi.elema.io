const express=require("express");
const bodyParser=require("body-parser");
const cookieParser=require("cookie-parser");
const positionRouter=require("./router/position.js");
const loginRouter=require("./router/login.js");
const searchRouter=require("./router/search.js");
const storeListRouter=require("./router/storeList.js");
var session=require("express-session");
var server=express();
server.listen(3000);
server.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	next();
});
server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({
	extended:false
}));
server.use(cookieParser());
server.use(session({
    secret:'test secret',
    resave:true,
    saveUninitialized:true,
    cookie:{maxAge:60*1000*30}
}));
server.use("/position",positionRouter);
server.use("/login",loginRouter);
server.use("/search",searchRouter);
server.use("/storeList",storeListRouter);