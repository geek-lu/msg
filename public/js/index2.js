$(()=>{
$(".zyyxjj>.shangceng>.sclf>ul>li").click(e=>{
    $tar=$(e.target)
    var n=$tar.index()
    $(`.zyyxjj>.shangceng>.scrt:eq(${n})`).show().siblings(".scrt").hide()
    var src= $(`.zyyxjj>.shangceng>.scrt:eq(${n})>img`).attr('src')
    src=src.split('-')[1].toString()
    $('.zyyxjj').css('backgroundImage',`url(img/index/${src}.jpg)`)
})
})