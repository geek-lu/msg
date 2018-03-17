//侧边导航手风琴
$(()=>{
var cblis=document.querySelectorAll(".middle_daohang>.cbmain>li")
for(var cbli of cblis){
	cbli.onclick=function(){
		var div=this.children[1]
		if(div.className!="open")
			div.className="open"
		else
			div.className="close"
		
	}
}
})






//main里轮播图
$(()=>{
	$ul=$(".main_first>.box>ul")
	var move=0,width=425
	setInterval(()=>{
		move++
		$ul.animate({
			left:-width*move
		},500,()=>{
			if(move==4){
				$ul.css("left",0)
				move=0 	
			}
		})
		},5000)
});


//2楼小图片
$(()=>{
	$(".main_second>.right_pic>ul>li").hover(
	function(){	
		var $this=$(this)
		$this.children("a").css("backgroundPositionX","-90px")
		$this.children(".dot").css("left","182px")
		$this.siblings().children(".dot").css("left","12px")
		$this.siblings().children("a").css("backgroundPositionX","0px")
		},
	function(){
		$(".main_second>.right_pic>ul>li>a").css("backgroundPositionX","0px")
		$(".main_second>.right_pic>ul>li>.dot").css("left","12px")
	}
	)
})




//切换窗
$(()=>{
	$(".tab>p").on("mouseover","a",function(){
		var $this = $(this)
		$this.css("color","lightblue").siblings().css("color","white")
		var n=$this.index()
		$(`.tab_infor:eq(${n})`).show().siblings().hide()
	})
})


$(()=>{
	$(".main>.main_third>.gdk>.gdk_top").on("mouseover",".a",function(){
		var $this =$(this)
		$this.addClass("onmouse").siblings("a").removeClass("onmouse")
		var n=$this.index()
		$(`.show_list:eq(${n})`).show().siblings(".show_list").hide()
	})
})
$(()=>{
	$(".main>.main_fourd>.gdk2>.gbk2_title").on("mouseover","a",function(){
		var $this =$(this)
		$this.addClass("onmouse").siblings("a").removeClass("onmouse")
		var n=$this.index()
		$(`.main>.main_fourd>.gdk2>.gbk2_list:eq(${n})`).show().siblings(".gbk2_list").hide()
	})
})

//下面英雄框框
$(()=>{
	$(".main_fived>.hero>ul").on("mouseover","li",function(){
		var $this=$(this)
		$this.css("width","212").siblings().css("width","108")
		$this.children().children("img").css("left","0")
		$this.siblings().children().children("img").css("left","-60px")
		$this.children().children("div").css("height","60")
		$this.siblings().children().children("div").css("height","100%")
		$this.children().children().children(".origin").css("left","-180px")
		$this.siblings().children().children().children(".origin").css("left","10px")
		$this.children().children().children(".cover").css("left","10px")
		$this.siblings().children().children().children(".cover").css("left","220px")
		
	})
})
