$(()=>{
	$.get("header.html").then(data=>{
		$(".header").html(data)
	})
	$.get("footer.html").then(data2=>{
		$(".footer").html(data2)
	})
})
$(()=>{
	$("#register").click(function(){
		var uname=$("#uname").val()
		var upwd=$("#upwd").val()
		var cupwd=$("#cupwd").val()
		if(upwd!==cupwd){
			$("#cupwd").next().html("两次输入内容不一致")
			return
		}
		$.post("/users/signup",{uname,upwd},function(result){
			if(result.ok==1){
				alert("注册成功")
				$("#uname").val("")
				$("#upwd").val("")
				$("#cupwd").val("")
			}else{
				alert("注册失败")
			}
		})
	})

	
})