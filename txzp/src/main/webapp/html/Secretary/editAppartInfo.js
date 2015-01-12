
$(document).ready(function () {
//编辑部门
	 var GetQueryString= function (name) {
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
     }
   //获得部门id
   var appartmentId=GetQueryString("id");
	
   var data;
   var initData=function(){
	   
	     data = {
	           //minister：部长
	           detail:{ministerBig: '张三',
	               ministerSmall:"王麻子",
	               departmentInfo:"中共中央宣传部是中共中央主管意识形态方面工作的综合职能部门。" +
	                   "1924年5月，中央正式决定分设宣传、组织、工农等部，罗章龙为中央宣传部部长。" +
	                   "“文化大革命”期间被取消。1976年10月中央决定恢复成立。",
	               requirement:"中共中央宣传部是中共中央主管意识形态方面工作的综合职能部门。" +
	                   "1924年5月，中央正式决定分设宣传、组织、工农等部，罗章龙为中央宣传部部长。" +
	                   "“文化大革命”期间被取消。1976年10月中央决定恢复成立。",
	               deadLine:"2015.2.20"}
	       };
	   
	   $.ajax({
	    type : "get",
	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
	    url : '/txzp/apartmentController/getApartmentById.do',
	    async : false,
	    data:{apartId:appartmentId},//当前部门id???
	    dataType : 'json',
	    success : function(msg) {
	        if(msg.result ==true){
	            alert("success");
	            data.detail= msg.apartment;
	        }else{
	            alert(msg.message);
	        }
	    },error: function(msg){
	        alert("网络超时！");
	    }
	  });
	   
	   $('#editAppartName').val(data.detail.apartment.apartName);
	  // $('#ministerBig').text(data.detail.name1); 
	  // $('#ministerSmall').text(data.detail.name2+data.detail.name3); 
	   $('#basicInfoInput').val(data.detail.apartment.apartInfo);
	   $('#requireInfoInput').val(data.detail.apartment.apartRequire);
	   $('#deadLineInput').val(data.detail.apartment.apartDeadline);
	 
   }
   
   //显示初始数据
   initData();
  
   //    
   $("#editSubmmit").click(function(){
	 
	var apartName= $('#editAppartName').val();
	var apartRequire= $('#requireInfoInput').val();
	//?
	//var apartManagerUserid  
	var apartDeadline=$('#deadLineInput').val();
	var apartInfo=$('#basicInfoInput').val();
	var apartDependence=data.detail.apartment.apartDependence;
	 $.ajax({
		    type : "post",
		    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
		    url : '/txzp/apartmentController/updateApartmentInfo.do',
		    async : false,
		    data:{apartId:appartmentId,apartName:apartName,apartRequire:apartRequire,apartManagerUserid:apartManagerUserid,apartDeadline:apartDeadline,apartInfo:apartInfo,apartDependence:apartDependence},//当前部门id???
		    dataType : 'json',
		    success : function(msg) {
		        if(msg.result ==true){
		            alert("success");
		           
		        }else{
		            alert(msg.message);
		        }
		    },error: function(msg){
		        alert("网络超时！");
		    }
		  });
	 
	 
   })
    
});