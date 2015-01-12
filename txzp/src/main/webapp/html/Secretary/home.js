$(document).ready(function () {



    var fillAppartmentList=function(){
        //数据
        var studentUniondata = {
            name: 'User list',
            list_id: 4,
            table: [
                {id: 1, name: 'Anne', age: 22, mail: 'anne@domain.com'},
                {id: 2, name: 'Amelie', age: 24, mail: 'amelie@domain.com'},
                {id: 3, name: 'Polly', age: 18, mail: 'polly@domain.com'},
                {id: 4, name: 'Alice', age: 26, mail: 'alice@domain.com'},
                {id: 5, name: 'Martha', age: 25, mail: 'martha@domain.com'}
            ]
        };

        var youthLeagueCommitteedata = {
            name: 'User list',
            list_id: 4,
            table: [
                {id: 6, name: 'lili', age: 22, mail: 'anne@domain.com'},
                {id: 7, name: '组织部', age: 24, mail: 'amelie@domain.com'},
                {id: 8, name: '生活部', age: 18, mail: 'polly@domain.com'},
                {id: 9, name: '素拓部', age: 26, mail: 'alice@domain.com'},
                {id: 10, name: '科技部', age: 25, mail: 'martha@domain.com'},
                {id: 11, name: '组织部', age: 24, mail: 'amelie@domain.com'},
                {id: 12, name: '生活部', age: 18, mail: 'polly@domain.com'},
                {id: 13, name: '素拓部', age: 26, mail: 'alice@domain.com'}

            ]
        };
     
    	$.ajax({
    	    type : "get",
    	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
    	    url : '/txzp/apartmentController/getApartmentList.do',
    	    async : false,
    	    data:{dependenceId:2},
    	    dataType : 'json',
    	    success : function(msg) {
    	        if(msg.result ==true){
    	            
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
            '<tr class="col-lg-offset-2 col-md-8">'+
            '<td class="col-md-3"> {$T.record.apartId} </td>'+
            '<td class="col-md-4">{$T.record.apartName}</td >'+
            '<td class="col-md-2">'+
            ' <input num="{$T.record.apartId}"  type="button" name="deleteBtn" class="btn btn-primary" value="删除"> '+
            '<a href="editAppartInfo.html?id={$T.record.apartId}"  class="btn btn-primary" role="button">编辑</a>'+
             '</td>'+
            '</tr>'+
            '{#/for}';


        //渲染模板
        $('#studentUnion table').setTemplate(template);
        $('#studentUnion table').processTemplate(studentUniondata);

        $('#youthLeagueCommittee table').setTemplate(template);
        $('#youthLeagueCommittee table').processTemplate(youthLeagueCommitteedata);

        //

    }

    //加载部门列表数据
    fillAppartmentList();

    //添加部门
    $("#submit").click(function(){

        var apartName= $("#editappartName").val();
        var  apartInfo= $("#editbasicInfoInput").val();
        var  apartRequire= $("#editrequireInfoInput").val();
        var  apartDeadline= $("#editdeadLineInput").val();
        var apartDependence=$("input[name='appdepend'][checked]").val();
       if(apartName!=null&&apartInfo!=null&&apartRequire!=null&&apartDependence!=null)
          {  //ajax提交
        	$.ajax({
        	    type : "get",
        	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
        	    url : '/txzp/apartmentController/insertApartmentInfo.do',
        	    async : false,
        	    data:{apartName:apartName,apartRequire:apartRequire, apartDeadline:apartDeadline,apartInfo:apartInfo,apartDependence:apartDependence},//??用户设置 此时只有一个userid
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

    
    
    

    //删除部门

    $("input[name='deleteBtn']").each(function(){

        $(this).click(function () {
            var id=$(this).attr("num");
            //删除该id 部门
              $.ajax({
        	    type : "get",
        	    contentType : "application/x-www-form-urlencoded;charset=UTF-8",
        	    url : '/txzp/apartmentController/deleteApartmentInfo.do',
        	    async : false,
        	    data:{apartId:id}, 
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