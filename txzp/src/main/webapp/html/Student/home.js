
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

$(document).ready(function () {


    var initData=function(){
        //数据
    	
    	  var studentUniondata = {
    	             table: [
    	                {id: 1, name: 'Anne', age: 22, mail: 'anne@domain.com'},
    	                {id: 2, name: 'Amelie', age: 24, mail: 'amelie@domain.com'},
    	                {id: 3, name: 'Polly', age: 18, mail: 'polly@domain.com'},
    	                {id: 4, name: 'Alice', age: 26, mail: 'alice@domain.com'},
    	                {id: 5, name: 'Martha', age: 25, mail: 'martha@domain.com'}
    	            ]
    	        };
    	        var youthLeagueCommitteedata = {
    	             table: [
    	                {id: 1, name: 'lili', age: 22, mail: 'anne@domain.com'},
    	                {id: 2, name: '组织部', age: 24, mail: 'amelie@domain.com'},
    	                {id: 3, name: '生活部', age: 18, mail: 'polly@domain.com'},
    	                {id: 4, name: '素拓部', age: 26, mail: 'alice@domain.com'},
    	                {id: 5, name: '科技部', age: 25, mail: 'martha@domain.com'},
    	                {id: 2, name: '组织部', age: 24, mail: 'amelie@domain.com'},
    	                {id: 3, name: '生活部', age: 18, mail: 'polly@domain.com'},
    	                {id: 4, name: '素拓部', age: 26, mail: 'alice@domain.com'}

    	            ]
    	        };
    	
    	//请求部门列表
    	$.ajax({
    	    type : "get",
    	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
    	    url : '/txzp/apartmentController/getApartmentList.do',
    	    async : false,
    	    data:{dependenceId:2},
    	    dataType : 'json',
    	    success : function(msg) {
    	        if(msg.result ==true){
    	            alert("success");
    	            studentUniondata.table= msg.apartmentList;
    	        }else{
    	            alert(msg.message);
    	        }
    	    },error: function(msg){
    	        alert("网络超时！");
    	    }
    	  });
    	 
    	$.ajax({
    	    type : "get",
    	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
    	    url : '/txzp/apartmentController/getApartmentList.do',
    	    async : false,
    	    data:{dependenceId : 1},
    	    dataType : 'json',
    	    success : function(msg) {
    	        if(msg.result ==true){
    	            alert("success");
    	            youthLeagueCommitteedata.table= msg.apartmentList;
    	        }else{
    	            alert(msg.message);
    	        }
    	    },error: function(msg){
    	        alert("网络超时！");
    	    }
    	  });
    	
      
        //模板
        var template = '{#foreach $T.table as record}' +
            '<div class="col-sm-6 col-md-4">' +
            '<div class="thumbnail well">' +
            ' <div class="caption">' +
            '<center>' +
            '<h2>{$T.record.apartName}</h2><br/>' +
            '<a href="detailInfo.html?id={$T.record.apartId}"  class="btn btn-primary" role="button">查看部门</a>' +
            '</center>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '{#/for}';


        //渲染模板
        $('#studentUnion').setTemplate( template);
        $('#studentUnion').processTemplate(studentUniondata);

        $('#youthLeagueCommittee').setTemplate(template);
        $('#youthLeagueCommittee').processTemplate(youthLeagueCommitteedata);

    }

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
   	            alert("success");
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
   }

    //加载部门数据块
    initData();
    
    
    //加载select下拉框部门列表数据
    $("#submitApplication").click(function(){
    	 
    	initApartmentListData();
    })
    //提交申请表单
    $("#applicationForm").bind("submit", function (e) {
          e.preventDefault();
          var formData=$(this).serializeJson();
            console.log(formData);
    });
});

 


  


