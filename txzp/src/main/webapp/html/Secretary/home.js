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

        //模板
        var template = '{#foreach $T.table as record}' +
            '<tr class="col-lg-offset-2 col-md-8">'+
            '<td class="col-md-3"> {$T.record.id} </td>'+
            '<td class="col-md-4">{$T.record.name}</td >'+
            '<td class="col-md-2">'+
            ' <input num="{$T.record.id}"  type="button" name="deleteBtn" class="btn btn-primary" value="删除"> '+
             '<input num="{$T.record.id}" type="button"  name="editBtn" class="btn btn-primary" data-toggle="modal" data-target="#myModal2" value="编辑"> '+
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

        var appartmentName= $("#appartName").text();
        var ministerBigName= $("#ministerBig").text();
        var ministerSmallName=  $("#ministerSmall").text();
        var appartAccounts= $("#appartAccount").text();
        var appartpassword=  $("#password").text();

        if(appartmentName!=''&&ministerBigName!=''&&appartAccounts!=''&&appartpassword!='')
        {
            //ajax提交

        }

    })

    //删除部门
    $("input[name='editBtn']").each(function(){

         $(this).click(function () {

             var id=$(this).attr("num");
             //删除该id 部门
            $("#editSubmmit").click(function(){

                var  AppartNames= $("#editAppartName").val();
                var  MinisterBig= $("#editMinisterBig").val();
                var  ministerSmall= $("#editministerSmall").val();
                var  AppartAccount= $("#editAppartAccount").val();
                var  Password= $("#editPassword").val();

                   //提交修改
//                $.ajax({
//
//                });

            })
        })

    })

    //编辑部门

    $("input[name='deleteBtn']").each(function(){

        $(this).click(function () {
            var id=$(this).attr("num");
            //删除该id 部门

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