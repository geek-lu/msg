$(()=>{
    var myChart = echarts.init(document.getElementById('zjt'),"walden");
    myChart.setOption({
        series : [
            {
                name: '英雄战绩图',
                type: 'pie',
                radius: '65%',
                data:[
                    {value:20, name:'出场'},
                    {value:5, name:'mvp'},
                    {value:35, name:'击杀'},
                    {value:40, name:'助攻'},
                    {value:80, name:'死亡'},
                    {value:100, name:'金钱'},
                    {value:80, name:'补刀'},
                    {value:96, name:'胜率'}
                ]
            }
        ]
    })
})

//切换窗
$(()=>{
    $(".jntitle>a").on("mouseover",function(){
        var $this = $(this)
        $this.addClass("hover").siblings("a").removeClass("hover")
        var n=$this.index()
        $(`.jndiv>div:eq(${n})`).show().siblings().hide()
    })
})

//第二个切换窗
$(()=>{
    $(".czlb>div:first-child>a").on("mouseover",function(){
        var $this = $(this)
        $this.addClass("hover1").siblings("a").removeClass("hover1")
        var n=$this.index()
        $(`.czlb>.tjczdiv:eq(${n})`).show().siblings(".tjczdiv").hide()
    })
})