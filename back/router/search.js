const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
router.get("/",(req,res)=>{
	var store_name=req.query.store_name;
	var sql="select store_name,store_address,estimate,short_pic from store where store_name like ?";
	pool.query(sql,["%"+store_name+"%"],(err,result)=>{
		for(var i=0;i<result.length;i++){
			var result_store_name=result[i]["store_name"];
			var index=result_store_name.indexOf(store_name);
			if(index==0)
				result[i]["store_name"]="<span class='g-highlight'>"+store_name+"</span>"+result_store_name.slice(store_name.length);
			else
				result[i]["store_name"]=result_store_name.slice(0,index)+"<span class='g-highlight'>"+store_name+"</span>"+result_store_name.slice(index+store_name.length);
		}
		res.send(result);
	});
});
module.exports=router;