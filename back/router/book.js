const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
function getDate(){
	var date=new Date();
	var date_str="";
	date_str+=date.getFullYear()+"-";
	date_str+=(date.getMonth()+1)+"-";
	date_str+=date.getDate()+" ";
	date_str+=date.getHours()+":";
	date_str+=date.getMinutes()+":";
	date_str+=date.getSeconds();
	return date_str;
}
router.get("/",(req,res)=>{
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var sql="select sum(number) as count,store_id from book where store_id=? and state=? and phone_number=?";
	pool.query(sql,[store_id,0,phone_number],(err,result)=>{
		var number=result[0]["count"];
		var store_id=result[0]["store_id"];
		res.send({number:number,store_id:store_id});
	});
});
router.get("/arrearage",(req,res)=>{
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var sql="select * from book where store_id=? and state=? and phone_number=?";
	pool.query(sql,[store_id,0,phone_number],(err,result)=>{
		res.send(result);
	});
});
router.get("/modify",(req,res)=>{
	var dishes=JSON.parse(req.query.dishes);
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var date=getDate();
	var sql1="delete from book where store_id=? and state=? and phone_number=?";
	var sql2="insert into book(name,number,must,info,price,store_id,phone_number,state,date) values(?,?,?,?,?,?,?,?,?)";
	pool.query(sql1,[store_id,0,phone_number],(err,result)=>{
		for(var key in dishes){
			var name=dishes[key].name;
			var number=dishes[key].number;
			var must=dishes[key].must==null?false:dishes[key].must;
			var info="";
			var price=(parseFloat(dishes[key].price)/parseInt(dishes[key].number)).toFixed(1);
			var state=0;
			if(must==true){
				if(key=="辣度选择"){
					if(name=="不辣！不辣！"){
						info="0";
					}else if(name=="微辣！微辣！"){
						info="1";
					}else if(name=="中辣！中辣！"){
						info="2";
					}else{
						info="3";
					}
					if(dishes[key].info=="要餐具"){
						info+="/0";
					}else{
						info+="/1";
					}
					name=key;
				}
			}
			pool.query(sql2,[name,number,must,info,price,store_id,phone_number,state,date],(err,result)=>{
				return;
			});
		}
	});
});
module.exports=router;