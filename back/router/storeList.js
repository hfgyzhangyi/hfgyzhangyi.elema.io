const pool=require("../pool.js");
const express=require("express");
const PAGESIZE=10;
var router=express.Router();
router.get("/",(req,res)=>{
	var sql="select * from store limit ?,?";
	var pageNow=req.query.pageNow==null?1:req.query.pageNow;
	pool.query(sql,[(pageNow-1)*PAGESIZE,PAGESIZE],(err,result)=>{
		for(var i=0;i<result.length;i++){
			result[i]["tag"]=result[i]["tag"].split(",");
		}
		res.send(result);
	});
});
module.exports=router;