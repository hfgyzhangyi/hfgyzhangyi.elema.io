const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
    var address_name=req.query.address_name;
	var sql="select address_name,address from position_list where address_name like ?";
	if(address_name==""){
		address_name=" ";
	}
	pool.query(sql,["%"+address_name+"%"],(err,result)=>{
		res.send(result);
	});
});
module.exports=router;