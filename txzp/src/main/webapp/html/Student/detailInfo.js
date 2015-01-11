 //序列化表单的插件
(function ($) {
    $.fn.serializeJson = function () {
        var serializeObj = {};
        $(this.serializeArray()).each(function () {
            serializeObj[this.name] = this.value;
        });
        return serializeObj;
    };
})(jQuery);

$(document).ready(function(){
	
	
	 var initApartmentListData=function(){
	       var appartmentListData = {

	           list: [
	               {id: 1, name: '组织部', age: 22, mail: 'anne@domain.com'},
	               {id: 2, name: 'Amelie', age: 24, mail: 'amelie@domain.com'},
	               {id: 3, name: 'Polly', age: 18, mail: 'polly@domain.com'},
	               {id: 4, name: 'Alice', age: 26, mail: 'alice@domain.com'},
	               {id: 5, name: 'Martha', age: 25, mail: 'martha@domain.com'}
	           ]
	       };

	       
	       $.ajax({
	   	    type : "get",
	   	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
	   	    url : '/txzp/apartmentController/getApartmentList.do',
	   	    async : false,
	   	    data:{dependenceId:0},
	   	    dataType : 'json',
	   	    success : function(msg) {
	   	        if(msg.result ==true){
	   	            appartmentListData.list= msg.apartmentList;
	   	        }else{
	   	            alert(msg.message);
	   	        }
	   	    },error: function(msg){
	   	        alert("网络超时！");
	   	    }
	   	  });
	       
	       var appartmentTemplate= '{#foreach $T.list as record}' +
	           '<option value={$T.record.apartId}>{$T.record.apartName}</option>'+
	           '{#/for}';
	       
	       $('#appartmentList').setTemplate( appartmentTemplate);
	       $('#appartmentList').processTemplate(appartmentListData);
	       //下拉框2
	       $('#List2').setTemplate( appartmentTemplate);
	       $('#List2').processTemplate(appartmentListData);
	   }
	
 
  
  
     //得到url参数id
   var GetQueryString= function (name) {
         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
         var r = window.location.search.substr(1).match(reg);
         if(r!=null)return  unescape(r[2]); return null;
     }
   //获得部门id
   var appartmentId=GetQueryString("id");
   //参数data为ajax请求的数据
   var initData=function(data){

         var data = {
               detail:{
            	 name:'组织部',
            	 ministerBig: '1',
                 ministerSmall:"2",
                 departmentInfo:"3。1976年10月中央决定恢复成立。",
                 requirement:"4央宣传部是中共中央主管意识形态方面工作的综合职能部门。" +
                     "1924年5月，中央正式决定分设宣传、组织、工农等部，罗章龙为中央宣传部部长。" +
                     "“文化大革命”期间被取消。1976年10月中央决定恢复成立。",
                 deadLine:"2015.1.10"}
         };
         
       $.ajax({
       type : "get",
       contentType : "application/x-www-form-urlencoded;charset=UTF-8",
       url : '/txzp/apartmentController/getApartmentById.do',
       async : false,
       data : {
    	   apartId:appartmentId
       },
       dataType : 'json',
       success : function(msg) {
           if(msg.result ==true){
                data.detail=msg.apartment;
             }else{
               alert(msg.message);
           }
       },error: function(msg){
           alert("网络超时！");
       }
   });
         
         
         $('#name').text(data.detail.apartment.apartName);
         $('#ministerBig').text(data.detail.name1);//? 没有该字段
         $('#ministerSmall').text(data.detail.name2+data.detail.name3);//?
         $('#basicInfo').text(data.detail.apartment.apartInfo);
         $('#requireInfo').text(data.detail.apartment.apartRequire);
         $('#deadLine').text(data.detail.apartment.apartDeadline);



     }

     //当前部门详细信息数据
     initData();
     //提交表单时动态拉去部门列表数据
     initApartmentListData();

     $("#applicationForm").bind("submit", function (e) {
         e.preventDefault();
         var formData=$(this).serializeJson();
         console.log(formData);
         $.ajax({
				type : "post",
				contentType : "application/x-www-form-urlencoded;charset=UTF-8",
				url : '/txzp/applicationController/insertApplicationInfo.do',
				async : false,
				data : formData,
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
     });

    $("#applicationForm1").bind("submit", function (e) {
        e.preventDefault();
        var formData=$(this).serializeJson();
        console.log(formData);
        $.ajax({
			type : "post",
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			url : '/txzp/applicationController/insertApplicationInfo.do',
			async : false,
			data : formData,
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
    });

 });


//     $.ajax({
//         type : "get",
//         contentType : "application/x-www-form-urlencoded;charset=UTF-8",
//         url : '/txzp/userController/loginUser.do',
//         async : false,
//         data : {
//            id:appartmentId
//         },
//         dataType : 'json',
//         success : function(msg) {
//             if(msg.result ==true){
//                 alert("success");
//                 //渲染数据
//                 //。。。。。
//                initData();
//             }else{
//                 alert(msg.message);
//             }
//         },error: function(msg){
//             alert("网络超时！");
//         }
//     });