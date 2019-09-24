const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
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
router.get("/",async (req,res)=>{
	var sql_getBigCategory="select distinct big_category from category";
	var sql_getSmallCategory="select small_category from category where big_category=?";
	var sql_getSmallCategoryNumber="select count(*) as count from store where category=?";
	var res_arr=[];
	let rows1=await query(sql_getBigCategory);
	var obj_big={};
	var total=0;
	for(var i=0;i<rows1.length;i++){
		total=0;
		obj_big=new Object();
		obj_big["big_category"]=rows1[i].big_category;
		obj_big["small_category"]=[];
		var obj_small={};
		let rows2=await query(sql_getSmallCategory,[rows1[i].big_category]);
		for(var i=0;i<rows2.length;i++){
			obj_small=new Object();
			obj_small["small_category_name"]=rows2[i].small_category;
			let rows3=await query(sql_getSmallCategoryNumber,[rows2[i].small_category]);
			obj_small["number"]=rows3[0].count;
			total+=rows3[0].count;
			obj_big["small_category"].push(obj_small);
		}
		obj_big["total"]=total;
		res_arr.push(obj_big);
	}
	res.send(res_arr);
});
module.exports=router;