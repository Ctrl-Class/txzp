$(document).ready(function () {

    var initData =function(){
        //数据
        var studentUniondata = {
            //学生会数据
            table: [
                {id: 1, department: 'Anne', total: 30, cross:10,percent:'33%'},
                {id: 1, department: 'Anne', total: 30, cross:10,percent:'33%'},
                {id: 1, department: 'Anne', total: 30, cross:10,percent:'33%'},
                {id: 1, department: 'Anne', total: 30, cross:10,percent:'33%'},
                {id: 1, department: 'Anne', total: 30, cross:10,percent:'33%'}
            ]
        };
        var youthLeagueCommitteedata = {
            //团委数据
            table: [
                {id: 1, department: '1', total: 30, cross:10,percent:'33%'},
                {id: 1, department: '2', total: 30, cross:10,percent:'33%'},
                {id: 1, department: '3', total: 30, cross:10,percent:'33%'},
                {id: 1, department: '4', total: 30, cross:10,percent:'33%'},
                {id: 1, department: '5', total: 30, cross:10,percent:'33%'}
            ]
        }
        //学生会数据模板
        var template = '{#foreach $T.table as record}' +
            '<tr>'+
            '<td> {$T.record.department}</td>' +
            '<td> {$T.record.total}</td>'+
            '<td> {$T.record.cross}</td>'+
            '<td>{$T.record.percent}</td>'+
            '</tr>'+
            '{#/for}';
        //渲染模板
        $('#studentUnion tbody').setTemplate(template);
        $('#studentUnion tbody').processTemplate(studentUniondata);
        $('#youthLeagueCommittee tbody').setTemplate(template);
        $('#youthLeagueCommittee tbody').processTemplate(youthLeagueCommitteedata);

    }

    //加载统计信息列表数据
    initData();
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