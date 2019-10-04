const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
	var id=req.query.store_id;
	var sql="select * from appraise where store_id=?";
	pool.query(sql,[id],(err,result)=>{
		res.send(result);
	});
});
module.exports=router;