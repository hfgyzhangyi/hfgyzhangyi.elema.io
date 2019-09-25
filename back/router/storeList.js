const pool=require("../pool.js");
const express=require("express");
const PAGESIZE=10;
var router=express.Router();
router.get("/",(req,res)=>{
	var sql="select * from store";
	var pageNow=req.query.pageNow==null?1:req.query.pageNow;
	var big_category=req.query.big_category;
	if(big_category!=null){
		sql+=" where big_category='"+big_category+"' limit ?,?";
	}else{
		sql+=" limit ?,?";
	}
	pool.query(sql,[(pageNow-1)*PAGESIZE,PAGESIZE],(err,result)=>{
		if(result!=null){
			for(var i=0;i<result.length;i++){
				result[i]["tag"]=result[i]["tag"].split(",");
			}
			res.send(result);
		}else{
			res.send(null);
		}
	});
});
router.get("/getByCategory",(req,res)=>{
	var category=req.query.category;
	var big_category=req.query.big_category;
	var sql="select * from store where big_category='"+big_category+"'";
	if(category!="全部"){
		sql+=" and category='"+category+"'";
	}
	pool.query(sql,null,(err,result)=>{
		if(result!=null){
			for(var i=0;i<result.length;i++){
				result[i]["tag"]=result[i]["tag"].split(",");
			}
			res.send(result);
		}else{
			res.send(null);
		}
	});
});
module.exports=router;