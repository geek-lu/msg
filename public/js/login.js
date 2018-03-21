$(()=>{
	$('#lbtn').click(function(){
        var uname=$('#lname').val()
        var upwd=$('#lpwd').val()
        if(uname==""){
            alert("用户名不能为空")
            return
        }
        if(upwd==""){
            alert("密码不能为空")
            return
        }
        $.post("/users/signin",{uname,upwd},function(result){
            if(result.ok==1){
                if(confirm("登陆成功，是否跳转主页")){
                    window.location.href="index.html"
                }else{
                    $('#lname').val("")
                    $('#lpwd').val("")
                }
            }else{
                alert(result.msg)
            }
        })
	})
})