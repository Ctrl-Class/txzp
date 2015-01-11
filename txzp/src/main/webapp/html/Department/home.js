/**
 * Created by Administrator on 2015/1/9 0009.
 */
$(document).ready(function () {

    var initData =function(){

        //数据
        var data = {
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
    	    data:{apartId:1},//当前部门id???
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
        
        
        $('#name').text(data.detail.apartment.apartName);
        $('#ministerBig').text(data.detail.name1); 
        $('#ministerSmall').text(data.detail.name2+data.detail.name3); 
        $('#basicInfo').text(data.detail.apartment.apartInfo);
        $('#requireInfo').text(data.detail.apartment.apartRequire);
        $('#deadLine').text(data.detail.apartment.apartDeadline);
        
    }

    //加载部门详情数据
    initData();

  $("#submit").click(function(){
	  var AppartNames=$("#editAppartName").val();
      var apartInfo=$("#basicInfoInput").text();
      var apartRequire=$("#requireInfoInput").text();
      var apartDeadline=$("#deadLineInput").text();
      
      //？？？
      if(basic!=''&&require!=''&&deadLine!='')
      {
    	  $.ajax({
      	    type : "post",
      	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
      	    url : '/txzp/apartmentController/updateApartmentInfo.do',
      	    async : false,
      	    data:{apartId:id,apartName:AppartNames,apartRequire:apartRequire,apartManagerUserid,apartDeadline:apartDeadline,apartInfo:apartInfo}, //用户id设置
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

      }
  })

});
//$.ajax({
//    type : "post",
//    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
//    url : '/txzp/userController/loginUser.do',
//    async : false,
//
//    dataType : 'json',
//    success : function(msg) {
//        if(msg.result ==true){
//            alert("success");
//        }else{
//            alert(msg.message);
//        }
//    },error: function(msg){
//        alert("网络超时！");
//    }
//});