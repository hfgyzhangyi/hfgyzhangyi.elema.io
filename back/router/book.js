const pool=require("../pool.js");
const express=require("express");
const PAGESIZE=5;
var router=express.Router();
function getDate(){
	var date=new Date();
	var date_str="";
	date_str+=date.getFullYear()+"-";
	date_str+=(date.getMonth()+1)+"-";
	date_str+=date.getDate()+" ";
	date_str+=(date.getHours()<10?"0"+date.getHours():date.getHours())+":";
	date_str+=(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes())+":";
	date_str+=date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();
	return date_str;
}
function getDateAdd(){
	var date=new Date();
	var date_str="";
	date.setMinutes(date.getMinutes()+30);
	date_str+=(date.getHours()<10?"0"+date.getHours():date.getHours())+":";
	date_str+=(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes());
	return date_str;
}
router.get("/",(req,res)=>{
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var sql="select sum(number) as count,store_id from book where store_id=? and state=? and phone_number=?";
	pool.query(sql,[store_id,2,phone_number],(err,result)=>{
		var number=result[0]["count"];
		var store_id=result[0]["store_id"];
		res.send({number:number,store_id:store_id});
	});
});
router.get("/arrearage",(req,res)=>{
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var sql="select * from book where store_id=? and state=? and phone_number=?";
	pool.query(sql,[store_id,2,phone_number],(err,result)=>{
		res.send(result);
	});
});
router.get("/payInit",async (req,res)=>{
	var sql1="select * from book where store_id=? and state=? and phone_number=?";
	var sql2="select pic_name from dishes where store_id=? and name=?";
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var time=getDateAdd();
	var total=0;
	var result1=await query(sql1,[store_id,2,phone_number]);
	for(var i=result1.length-1;i>=0;i--){
		total+=parseFloat(result1[i].price)*parseInt(result1[i].number);
		if(result1[i].name=="辣度选择"){
			result1.splice(i,1);
		}else{
			var result2=await query(sql2,[store_id,result1[i].name]);
			result1[i]["pic_name"]=result2[0]["pic_name"];
		}
	}
	res.send({"data":result1,"time":time,"total":total});
});
router.get("/pay",(req,res)=>{
	var sql="update book set state=?,date=? where store_id=? and state=? and phone_number=?";
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var date=getDate();
	pool.query(sql,[1,date,store_id,2,phone_number],(err,result)=>{
		res.send("ok");
	});
});
router.get("/getBookList",async (req,res)=>{
	var sql1="select distinct date from book where phone_number=? and state=? order by date desc";
	var phone_number=req.query.phone_number;
	var pageNow=req.query.pageNow;
	var result1=await query(sql1,[phone_number,1]);
	var dates=[];
	var response=[];
	for(var date of result1){
		dates.push(date["date"]);
	}
	var sql2="select * from book where phone_number=? and date=? and state=?";
	for(var date of dates){
		var result2=await query(sql2,[phone_number,date,1]);
		var name="";
		var name_arr=[];
		var total=0;
		var count=0;
		var store_id=0;
		var obj={};
		for(var data of result2){
			if(data.name!="辣度选择"){
				count+=data.number;
				name_arr.push(data.name);
			}
			total+=parseFloat(data.price)*parseFloat(data.number);
			if(store_id==0){
				store_id=data.store_id;
			}
		}
		var sql3="select * from search_store where store_index=?";
		var result3=await query(sql3,[store_id]);
		obj["count"]=count;
		obj["name"]=name_arr.join(",");
		obj["time"]=date;
		obj["total"]=total.toFixed(1);
		obj["pic_name"]=result3[0].short_pic;
		obj["shop_name"]=result3[0].store_name;
		obj["store_id"]=store_id;
		response.push(obj);
	}
	res.send(response);
});
router.get("/modify",async (req,res)=>{
	var dishes=JSON.parse(req.query.dishes);
	var store_id=req.query.store_id;
	var phone_number=req.query.phone_number;
	var date=getDate();
	var sql1="delete from book where store_id=? and state=? and phone_number=?";
	var sql2="insert into book(name,number,must,info,price,store_id,phone_number,state,date) values(?,?,?,?,?,?,?,?,?)";
	await query(sql1,[store_id,2,phone_number]);
	for(var key in dishes){
		var name=dishes[key].name;
		var number=dishes[key].number;
		var must=dishes[key].must==null?false:dishes[key].must;
		var info="";
		var price=(parseFloat(dishes[key].price)/parseInt(dishes[key].number)).toFixed(1);
		var state=2;
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
		await query(sql2,[name,number,must,info,price,store_id,phone_number,state,date]);
	}
	res.send("ok");
});
let query=function(sql,values){
  return new Promise((resolve,reject)=>{
    pool.getConnection(function(err,connection){
      if(err){
        reject(err);
      }else{
        connection.query(sql,values,(err,rows)=>{
          if(err){
            reject(err);
          }else{
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};
module.exports=router;