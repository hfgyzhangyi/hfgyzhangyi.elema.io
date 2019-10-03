const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
	var id=req.query.id;
	var sql="select * from store where id=?";
	pool.query(sql,[id],(err,result)=>{
		result[0]["discount3"]=result[0]["discount3"].split("，");
		res.send(result);
	});
});
module.exports=router;