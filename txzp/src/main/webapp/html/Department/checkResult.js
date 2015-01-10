$(document).ready(function () {

    var initData=function(){
        //数据
        var data = {
            name: 'User list',
            list_id: 4,
            table: [
                {id: 1, names: 'Anne', class: 22, num: '20122436'},
                {id: 2, names: 'Amelie', class: 24, num: 'amelie@domain.com'},
                {id: 3, names: 'Polly', class: 18, num: 'polly@domain.com'},
                {id: 4, names: 'Alice', class: 26, num: 'alice@domain.com'},
                {id: 5, names: 'Martha', class: 25, num: 'mar  tha@domain.com'}
            ]
        };
        //模板
        var template = '{#foreach $T.table as record}' +
            '<tr>'+
            '<td class="col-sm-2"> {$T.record.id}  </td>' +
            '<td class="col-sm-2"> {$T.record.names}</td>'+
            '<td class="col-sm-2"> {$T.record.class}</td>'+
            '<td class="col-sm-2">{$T.record.num}</td>'+
            '</tr>'+
            '{#/for}';
        //渲染模板
        $('#studentList tbody').setTemplate(template);
        $('#studentList tbody').processTemplate(data);
    }

    //加载通过列表数据
    initData();

    $("#publishBtn").click(function(){
        //提交ajax申请 发布  ？？


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