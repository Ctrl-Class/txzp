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
    var loadData=function(){
        //数据
        var data = {

            application: [
                {id: 1, names: '组织部', status: '通过',stuName:'1',stuNo:'1',stuClass:'1',stuTel:'1',stuqq:'',stuSex:'男', stuLike:' 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时',stuGood:' 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时' },
                {id: 2, names: '科技部', status: '未通过',stuName:'1',stuNo:'1',stuClass:'1',stuTel:'1',stuqq:'',stuSex:'男', stuLike:'2',stuGood:'2' },
                {id: 3, names: '生活部', status: '通过',stuName:'1',stuNo:'1',stuClass:'1',stuTel:'1',stuqq:'',stuSex:'', stuLike:'3',stuGood:'3' },
                {id: 4, names: '学习部', status: '通过',stuName:'1',stuNo:'1',stuClass:'1',stuTel:'1',stuqq:'',stuSex:'', stuLike:'4',stuGood:'4' },
                {id: 5, names: '组织部', status: '通过',stuName:'1',stuNo:'1',stuClass:'1',stuTel:'1',stuqq:'',stuSex:'', stuLike:'5',stuGood:'5' },
                {id: 6, names: '组织部', status: '通过',stuName:'1',stuNo:'1',stuClass:'1',stuTel:'1',stuqq:'',stuSex:'', stuLike:'6',stuGood:'6' },
            ]
        };
       $.ajax({
      type : "post",
      contentType : "application/x-www-form-urlencoded;charset=UTF-8",
      url : '/txzp/applicationController/getApplicationByUserId.do',
      async : false,
      data:{userId:2},
      dataType : 'json',
      success : function(msg) {
          if(msg.result ==true){
              alert("success");
              data.application =msg.applicationList; 
          }else{
              alert(msg.message);
          }
      },error: function(msg){
          alert("网络超时！");
      }
    });
     
        //模板
        var template = '{#foreach $T.application as record}' +
            '<tr　>'+
            '<td class="col-sm-2">{$T.record.appId}</td>' +
            '<td class="col-sm-2">{$T.record.apartName}</td>' +
            '<td class="col-sm-2">{$T.record.appState}</td>'+
            '<td class="col-sm-2">' +
            '<button type="button" id="{$T.record.appId}"  class="btn btn-primary " data-toggle="modal" data-target="#myModal">'+
            '查看详情'+
            '</button>'+
            '</td>'+
            ' </tr>' +
            '{#/for}';
        //渲染模板
        $('#application tbody').setTemplate(template);
        $('#application tbody').processTemplate(data);
        $("button").click(function(){
           
            for(var i=0;i<data.application.length;i++)
            	{
            	if(data.application[i].appId==this.id)
            	{
            		 fillData(data.application[i]);
            		 break;
            	}
             	}
            
        });

          var fillData= function (application) {
            $('#appartmentName').text( application.apartName);///??没有部门名称，只有部门id
            $('#status').text( application.appState);
            $('#stuName').text( application.appName);
            $('#stuqq').text( application.appQq);
            $('#stuNo').text( application.appStunum);
            $('#stuTel').text( application.appTel);
            $('#stuClass').text( application.appClassname);
            $('#stuSex').text( application.appSex);
            $('#stuLike').text( application.appLike);
            $('#stuGood').text( application.appGood);
        }
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
   
  //加载下拉框部门列表数据
    
    $("#submitApplication").click(function(){
   	 
    	initApartmentListData();
    })
       //加载申请表状态数据
     loadData();
     //提交申请表单
    $("#applicationForm").bind("submit", function (e) {
          e.preventDefault();
          var formData=$(this).serializeJson();
            console.log(formData);
            $.ajax({
				type : "post",
				contentType : "application/x-www-form-urlencoded;charset=UTF-8",
				url : '/txzp/applicationController/insertApplicationInfo.do',
				async : false,
				data :{appApartmenid: "1",appClassname: "信安1201",appGood: "开始书写  ",appLike: "                            开始书写   ",appName: "li",appQq: "827519353",appSex: "男",appStunum: "20122333",appTel: "12032323242"} ,
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