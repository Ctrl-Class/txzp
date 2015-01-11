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
    	            data.detail= msg.apartmentList;
    	        }else{
    	            alert(msg.message);
    	        }
    	    },error: function(msg){
    	        alert("网络超时！");
    	    }
    	  });
        
        
        $('#ministerBig').text(data.detail.ministerBig);//?无该字段
        $('#ministerSmall').text(data.detail.ministerSmall);//?
        $('#basicInfo').text(data.detail.apartInfo);
        $('#requireInfo').text(data.detail.apartRequire);
        $('#deadLine').text(data.detail.apartDeadline);
    }

    //加载部门详情数据
    initData();

  $("#submit").click(function(){

      var basic=$("#basicInfoInput").text();
      var require=$("#requireInfoInput").text();
      var deadLine=$("#deadLineInput").text();

      //
      if(basic!=''&&require!=''&&deadLine!='')
      {
          //ajax post

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