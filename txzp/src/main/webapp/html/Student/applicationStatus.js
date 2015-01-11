
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
        
        
        
        //模板
        var template = '{#foreach $T.application as record}' +
            '<tr　>'+
            '<td class="col-sm-2">{$T.record.id}</td>' +
            '<td class="col-sm-2">{$T.record.names}</td>' +
            '<td class="col-sm-2">{$T.record.status}</td>'+
            '<td class="col-sm-2">' +
            '<button type="button" id="{$T.record.id}"  class="btn btn-primary " data-toggle="modal" data-target="#myModal">'+
            '查看详情'+
            '</button>'+
            '</td>'+
            ' </tr>' +
            '{#/for}';
        //渲染模板
        $('#application tbody').setTemplate(template);
        $('#application tbody').processTemplate(data);
        $("button").click(function(){
            fillData(this.id-1);
        });

        var fillData= function (id) {
            $('#appartmentName').text(data.application[id].names);
            $('#status').text(data.application[id].status);
            $('#stuName').text(data.application[id].stuName);
            $('#stuqq').text(data.application[id].stuqq);
            $('#stuNo').text(data.application[id].stuNo);
            $('#stuTel').text(data.application[id].stuTel);
            $('#stuClass').text(data.application[id].stuClass);
            $('#stuSex').text(data.application[id].stuSex);
            $('#stuLike').text(data.application[id].stuLike);
            $('#stuGood').text(data.application[id].stuGood);
        }
    }
    var initAppartmentList=function(){
         //部门列表

         var appartmentListData = {

             list: [
                 {id: 1, name: '组织部', age: 22, mail: 'anne@domain.com'},
                 {id: 2, name: 'Amelie', age: 24, mail: 'amelie@domain.com'},
                 {id: 3, name: 'Polly', age: 18, mail: 'polly@domain.com'},
                 {id: 4, name: 'Alice', age: 26, mail: 'alice@domain.com'},
                 {id: 5, name: 'Martha', age: 25, mail: 'martha@domain.com'}
             ]
         };

         var appartmentTemplate= '{#foreach $T.list as record}' +
             '<option value={$T.record.id}>{$T.record.name}</option>'+
             '{#/for}';
         $('#appartmentList').setTemplate( appartmentTemplate);
         $('#appartmentList').processTemplate(appartmentListData);
     }

     //加载下拉框部门列表数据
     initAppartmentList();
     //加载申请表状态数据
     loadData();
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