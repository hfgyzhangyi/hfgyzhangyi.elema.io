const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
	var id=req.query.id;
	var sql="select * from store where id=?";
	pool.query(sql,[id],(err,result)=>{
		if(result!=""){
			result[0]["discount3"]=result[0]["discount3"].split("，");
			res.send(result);
		}else{
			res.send(null);
		}
	});
});
router.get("/getCategory",(req,res)=>{
	var store_id=req.query.store_id;
	var sql="select distinct category from dishes where store_id=?";
	pool.query(sql,[store_id],(err,result)=>{
		if(result!=""){
			res.send(result);
		}else{
			res.send(null);
		}
	});
});
router.get("/getDishes",(req,res)=>{
	var store_id=req.query.store_id;
	var sql="select * from dishes where store_id=?";
	pool.query(sql,[store_id],(err,result)=>{
		if(result!=""){
			res.send(result);
		}else{
			res.send(null);
		}
	});
});
module.exports=router;