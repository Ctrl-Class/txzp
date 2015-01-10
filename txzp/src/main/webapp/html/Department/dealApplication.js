/**
 * Created by Administrator on 2015/1/9 0009.
 */
$(document).ready(function () {
    //数据
    var data = {
        detail:{total: '11',
            current:"1",
            name:"王麻子",
            sex:"男",
            class:"软件1203",
            num:"20122231",
            tel:"6089110",
            QQ:"1234567",
            hobbit:"爱好",
            specialty:"特长"
        }
    };
    $('#totalNum').text(data.detail.total);
    $('#currentNum').text(data.detail.current);
    $('#name').text(data.detail.name);
    $('#sex').text(data.detail.sex);
    $('#class').text(data.detail.class);
    $('#num').text(data.detail.num);
    $('#tel').text(data.detail.tel);
    $('#QQ').text(data.detail.QQ);
    $('#hobbit').text(data.detail.hobbit);
    $('#specialty').text(data.detail.specialty);

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