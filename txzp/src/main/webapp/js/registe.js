function checkName(){
	var username = $("#userName").val();
	if(username == "")
		return false;
	if(username.length >= 10){
		$("#usernameDiv").attr("class","form-group has-error has-feedback");
		$("#resultName").attr("class","glyphicon glyphicon-remove form-control-feedback");
		$("#userName").attr("placeholder","用户名长度不得超过10位");
		$("#userName").val("");
		return false;
	}else{
		var result = findUserByName(username);
		return result;
	}
}

function findUserByName(username){
	var bool = true;
	$.ajax({
		type : "post",
		contentType : "application/x-www-form-urlencoded;charset=UTF-8",
		url : '/txzp/userController/findUserByName.do',
		async : false,
		data : {
			username:username,
		},
		dataType : 'json',
		success : function(msg) {
			
			if(msg.result == true){	
				
				$("#usernameDiv").attr("class","form-group has-success has-feedback");
				$("#resultName").attr("class","glyphicon glyphicon-ok form-control-feedback");
				bool = true;
			}else{
				$("#usernameDiv").attr("class","form-group has-error has-feedback");
				$("#resultName").attr("class","glyphicon glyphicon-remove form-control-feedback");
				$("#userName").attr("placeholder","用户名已被注册");
				$("#userName").val("");
				bool = false;
			}
		},error: function(msg){
		    alert("网络超时！");
		    bool = false;
		}
	});
	return bool;
}

function checkPassword(){
	var password = $("#newpassWord").val();
	var repassword = $("#repassWord").val();
	if(password.length > 16 ||  password.length < 6){
		$("#passwordDiv").attr("class","form-group has-error has-feedback");
		$("#resultPassword").attr("class","glyphicon glyphicon-remove form-control-feedback");
		$("#newpassWord").val("");
		$("#newpassWord").attr("placeholder","密码长度不得低于6位，不得超过16位");
		return false;
	}
	if(password != repassword){
		$("#passwordDiv").attr("class","form-group has-success has-feedback");
		$("#resultPassword").attr("class","glyphicon glyphicon-ok form-control-feedback");
		if(repassword == "")
			return false;
		$("#repasswordDiv").attr("class","form-group has-error has-feedback");
		$("#resultRePassword").attr("class","glyphicon glyphicon-remove form-control-feedback");
		return false;
	}
	$("#passwordDiv").attr("class","form-group has-success has-feedback");
	$("#resultPassword").attr("class","glyphicon glyphicon-ok form-control-feedback");
	$("#repasswordDiv").attr("class","form-group has-success has-feedback");
	$("#resultRePassword").attr("class","glyphicon glyphicon-ok form-control-feedback");
	return true;
}


function creatNewUser(){
	var flag1 = checkPassword();
	var flag2 = checkName();
	if(flag1 && flag2){
		var username = $("#userName").val();
		var password = $("#newpassWord").val();
		$.ajax({
			type : "post",
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			url : '/txzp/userController/createNewUser.do',
			async : false,
			data : {
				username:username,
				password:password
			},
			dataType : 'json',
			success : function(msg) {
				alert(msg.message);
			},error: function(msg){
			    alert("网络超时！");
			}
		});
		$("#regist").modal("hide");
	}
	
}

