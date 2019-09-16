const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
router.post("/",(req,res)=>{
	var phone_number=req.body.phone_number;
	var code=req.body.code;
	var sql="select user_name,phone_number,real_name,address from users where phone_number=?";
	if(code=="123456"){
		pool.query(sql,[phone_number],(err,result)=>{
			if(result==""){
				res.send("err2");
			}else{
				res.send(result);
			}
		});
	}else{
		res.send("err1");
	}
});
module.exports=router;