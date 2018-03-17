$(()=>{
	$.get("header.html").then(data=>{
		$(".header").html(data)
	})
	$.get("footer.html").then(data2=>{
		$(".footer").html(data2)
	})
})
