window.onload=function(){
//	获取文本框
	var text=document.querySelectorAll("input");
//	alert(text.length)
//获取提交按钮	
	var sbmit=document.querySelector("input[type='submit']")
	sbmit.onclick=function(){
		if(text[0].value!=""&&text[1].value!=""&&text[2].value!=""&&text[2].value!=text[1].value){
			alert("两次密码不一致")
			text[2].value="";
			return false;
		}
		else{
			alert("注册成功！")
			return false;
		}
	}
}

function more(){
	alert("点着好玩吧！");
}