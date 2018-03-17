var wei= {
    //甄宓
    1: {
        hid: 01,
        hname: "甄宓",
        hdw:"敏捷",
        zdlx:"近战",
        star: 8,
        stroy:"近来我时常做一个梦，梦中的我蛇尾人身，披五色仙衣徜徉在洛水之上。旖旎洛水，谦雅风致，我用洛水神力帮助两岸百姓和过往渡船的商客，无忧无虑过了千年。 梦里的我救下了一个男子。他风姿绰约，才情满腹，他为我画画，为我吟诗，让我知晓了世间最美的情丝。他临走前和我许下三生誓言，说定会骑白马、铺红妆，回到洛水之滨与我成亲。他走后，我日夜期盼，等待了百年，终敌不过相思，封印了洛水神力，进入俗世寻找他。 这一世，我是甄家最美的小姐，被黄金家族袁熙强占为妻，受百般侮辱。我恨袁熙，恨他将战乱带到我的家乡，恨他在曹军席卷之时抛弃我独自逃走，我发誓，我要亲手杀了他！那时我躲在厅中瑟瑟发抖，听见曹军占领府邸，无助等待即将到来的战俘命运，直到一双手将我扶起。 “这般洛水惊鸿的美貌，真是不愧我多年的精心安排。” 我时常听人惊叹我的美貌，可从这样冰冷阴鹜的人口中说出来，却只觉悚然。曹丕为了逼我重新找回力量，将我押进暗夜的水牢中，使我承受极刑之苦。此后无数个日夜里，我受尽暗夜非人的折磨。我的痛苦被无限放大，终于解开了洛神封印，心中却被怒火和仇恨充斥。我变成了洛水女妖丑陋的模样，成为暗夜的一颗棋子。 所幸那段黑暗的时光里，我尚拥有着一丝的温暖。曹植有着和梦中男子一样明亮的双眸，冰冷得没有温度，却温柔似水，我认出了那双眸子。曾经就是这样一双眼眸，温柔地凝视我，在洛水之滨和我许下三世誓约。可如今那眼里尽是陌生，如今我是丑陋的洛水女妖，我庆幸他认不得如今的我，庆幸洛神在他心中还是那个美好的洛神。而我，我要变得强大，要走出这个不见天日的暗夜。我要复仇，要把曾经承受的痛苦加倍奉还给自私的人类！ 月上三更，我起身往白狼山的方向走去。我潜身疾行在山间，冰凉的月光抚在周身，如同这几年黑暗之中唯一的光亮，如同那双冰冷又温柔的手。待我复仇归来，定会唤醒他的记忆，带他离开这个丑陋的魔族。白狼山顶近在眼前，微弱的烛火却诡异地随着溅了三尺的血悄悄熄灭。 无论如何，袁熙的命只是一个开始，我要让世人都知道，洛水女妖的复仇之门，正在缓缓开启。",
        heroimg:"img/hero/sm/wei01.jpg",
        md:"img/hero/md/zhenfu.jpg",
        attr:"49-61",
        hj:"4.5",
        speed:"310",
        ll:"23+2.2",
        mj:"25+2.8",
        zl:"20+1.6",
        jn1:{
            mc:"凌波微布",
            fs:"及时使用",
            js:"隐身加速并造成持续伤害",
            flxh:"60/70/80/90点",
            lqsj:"21/19/17/15秒",
            dj:{
                1:"增加8%的移动速度",
                2:"增加12%的移动速度",
                3:"增加16%的移动速度",
                4:"增加20%的移动速度"
                }
        },
        jn2:{
            mc:"轻云蔽月",
            fs:"单体指向性",
            js:"冲到目标身后造成伤害并减速",
            flxh:"80点",
            lqsj:"18/16/14/12秒",
            dj:{
                1:"造成75点伤害",
                2:"造成125点伤害",
                3:"造成175点伤害",
                4:"造成225点伤害"
            }
        },
        jn3:{
            mc:"流风回雪",
            fs:"被动效果",
            js:"多次攻击后造成倍击",
            flxh:"-",
            lqsj:"-",
            dj:{
                1:"造成1.4倍伤害",
                2:"造成1.8倍伤害",
                3:"造成2.2倍伤害",
                4:"造成2.6倍伤害"
            }
        },
        jn4:{
            mc:"洛河妖姬",
            fs:"及时使用",
            js:"变身提高能力并获得额外技能",
            flxh:"100/150/200/280点",
            lqsj:"55秒",
            dj:{
                1:"增加300点生命值和8点/秒的生命回复速度",
                2:"增加450点生命值和16点/秒的生命回复速度",
                3:"增加600点生命值和24点/秒的生命回复速度",
                4:"增加800点生命值和32点/秒的生命回复速度"
            }
        },
        xytj:{
            yl:{
                img:"img/hero/sx/shuxing.jpg",
                mc:"提升各方面能力！",
                xq:"增加6点全属性和4点主属性"
            },
            gd:{
                img:"img/hero/sx/shuxing.jpg",
                mc:"能获得更高体质！",
                xq:"提高5点所有属性及8点主属性"
            },
            sgz:{
                img:"img/hero/sx/sudu.jpg",
                mc:"身法*速度！",
                xq:"提高20%攻击速度与8%移动速度"
            }
        },
        yytf:{
            10:["+25攻击力","+175生命值"],
            15:["+10%吸血","+35%攻击速度"],
            20:["+22敏捷","-15%冷却时间"],
            25:["+0.4流风回雪暴击","+50洛河妖姬生命回复"]
        },
        tjjd:{
            jn1:{img:"img/hero/jn/zhenfu01.jpg",jd:[1,3,5,7]},
            jn2:{img:"img/hero/jn/zhenfu02.jpg",jd:[2,13,14,17]},
            jn3:{img:"img/hero/jn/zhenfu03.jpg",jd:[4,8,9,12]},
            jn4:{img:"img/hero/jn/zhenfu04.jpg",jd:[6,11,16]}
        },
        yxzj:{cc:5,sw:85,js:83,zg:65,mvp:5,bd:80,jq:97,sl:90}
    },
    //甄宓完


    //曹操
        2: {
            hid: 02,
            hname: "曹操",
            hdw:"智力",
            zdlx:"近战",
            star: 6,
            stroy:"“真龙已死，黑暗临世。腐朽的王朝将化与虚空，吾所创之神州，将与力量和秩序同在！” ——曹操 沧海之上，山岛狰狞竦立，不禁让人联想起昔年遥远的回忆。 中平年间，汉末朝政被黄巾军搅得危如累卵，官宦无所作为、民众苦不聊生。处于北方的魔族也倍受打击，大统旁落，岌岌可危。彼时的曹操没有忠诚的部下，没有卞玉儿的妖狐之力和锋锐的暗夜组织，他只有一个没落的魔族嫡系的血统，和被异魔族董卓取代的魔君之位。他曾经狂妄地反抗堕落的王朝，曾经无畏暴政棒打权贵，为魔族大统不惜深入贼穴刺杀董卓。他半生疏狂，欲用自己的力量拯救他的魔族，却终被魔族所驱逐。 流离在外的曹操被自己的种族所遗弃。他愤怒、不可置信，他以魔族为信仰，但这信仰却将他遗弃，他坚持了半生的执念轰然崩塌。他终于明白，他要做的不是拯救，而是创造！推翻这个腐朽的乱世，用黑暗的力量，才能重新创造一个有序而强大的世界。力量，才是所有人应该崇尚的永恒的信仰！ 他联合了隐居已久的异魔族，利用卞氏的妖狐之力培养起神秘的暗夜组织；他求贤若渴，招揽了魔族所有年轻的谋士，收纳了无数英勇的战士，一张隐形的网逐渐在魔族地域上铺展开来。随后数十年，他挟天子以令不臣，征袁术，擒吕布，灭袁绍，伐刘表，逐乌丸，直到此时，他临海而歌。 回忆起当年种种，反倒倍感痛快。若非当年经历，如今他或许早已迷失于权势富贵，沉沦在庸人的褒贬之中。 如今的曹操已不是当年那个被魔族驱逐的少年，他指挥千军万马，为众多忠臣所追随，他统治北方无尽的疆土，控制着整个幽冥魔族。可是，他感到了孤独。是的，在郭奉孝病逝之后，这种蚀心沁骨的孤独更为显著。在他心里，奉孝是他的良师，他的益友，他最亲近和信任的知己。但他知道，拥有着无上野心的魔族尊者，不需要，也不能拥有这样普通而平凡的情感。 孤独，才是一代魔君永恒而忠诚的追随者。 自古王者，有几人能被世人理解，有谁能在史书中万世涤清？何况，他要的是颠覆这虚伪的王朝，是推翻所有的压迫与制约，他要所有人都拥有与腐朽对抗的力量！在此之前，任何褒贬不一的评论，任何虚无的情感，都无法阻止他。他将创造的是一个崭新的世界，力量和黑暗才是永恒的王。 黑云压城，迷雾暗涌，在黑暗深处爆发的，将是一个有序而强大的全新大陆。",
            heroimg:"img/hero/sm/wei02.jpg",
            md:"img/hero/md/caocao.jpg",
            attr:"54-58",
            hj:"4.8",
            speed:"300",
            ll:"24+2.45",
            mj:"20+1.8",
            zl:"24+2.6",
            jn1:{
                mc:"黑暗*出鞘",
                fs:"单体指向性",
                js:"对目标造成伤害并减速",
                flxh:"80/90/100/110点",
                lqsj:"9秒",
                dj:{
                    1:"造成100点的伤害，降低30%攻击速度和44%移动速度",
                    2:"造成160点的伤害，降低40%攻击速度和44%移动速度",
                    3:"造成220点的伤害，降低50%攻击速度和44%移动速度",
                    4:"造成220点的伤害，降低50%攻击速度和44%移动速度"
                }
            },
            jn2:{
                mc:"黑暗*霸气",
                fs:"区域指向性",
                js:"造成范围伤害",
                flxh:"100/110/120/130点",
                lqsj:"24/20/16/12秒",
                dj:{
                    1:"造成100~190点的伤害",
                    2:"造成150~280点的伤害",
                    3:"造成200~370点的伤害",
                    4:"造成250~460点的伤害"
                }
            },
            jn3:{
                mc:"黑暗*降临",
                fs:"即时使用",
                js:"攻击附加额外伤害并提升攻击距离",
                flxh:"80点",
                lqsj:"50/40/30/20秒",
                dj:{
                    1:"攻击造成30点伤害",
                    2:"攻击造成45点伤害",
                    3:"攻击造成60点伤害",
                    4:"攻击造成75点伤害"
                }
            },
            jn4:{
                mc:"黑暗*魔王",
                fs:"区域指向性",
                js:"对前方敌人造成伤害并眩晕",
                flxh:"200/300/400/450点",
                lqsj:"100/75秒",
                dj:{
                    1:"造成300点伤害",
                    2:"造成400点伤害",
                    3:"造成500点伤害",
                    4:"造成600点伤害"
                }
            },
            xytj:{
                yl:{
                    img:"img/hero/sx/fashang.jpg",
                    mc:"技能更有威力！",
                    xq:"增加8%技能加成，忽视目标20%法术抗性"
                },
                gd:{
                    img:"img/hero/sx/lengque.jpg",
                    mc:"更快地使用技能！",
                    xq:"技能冷却时间缩短15%，提高3点/秒法力回复"
                },
                sgz:{
                    img:"img/hero/sx/huilan.jpg",
                    mc:"秘技*施法！",
                    xq:"降低10%技能冷却，增加10点智力，提高10%技能加成"
                }
            },
            yytf:{
                10:["+12智力","+175生命值"],
                15:["+30%攻击速度","+100黑暗霸气伤害"],
                20:["+50攻击力","+10%技能加成"],
                25:["+4秒黑暗降临持续时间","-4秒黑暗出鞘冷却时间"]
            },
            tjjd:{
                jn1:{img:"img/hero/jn/caocao01.jpg",jd:[1,8,9,11]},
                jn2:{img:"img/hero/jn/caocao02.jpg",jd:[2,3,5,7]},
                jn3:{img:"img/hero/jn/caocao03.jpg",jd:[4,12,13,17]},
                jn4:{img:"img/hero/jn/caocao04.jpg",jd:[6,14,16]}
            },
            yxzj:{cc:15,sw:95,js:98,zg:83,mvp:5,bd:95,jq:99,sl:89}
        },
    //曹操完


    //郭奉孝
    3: {
        hid: 03,
        hname: "郭嘉",
        hdw:"智力",
        zdlx:"远程",
        star: 4,
        stroy:"郭嘉，魔族之中唯一一位万世不灭的天命妖星，是曹操最信爱的谋士智将。他手持“七星天命杖”，手杖一挥可召唤地府陨星砸向敌军，陨石落处冻尸无数；身穿“琉璃星斗衫”，衣衫环绕冰霜妖气，可化作寒冰护体，保护友军免受乱刀之险；当他举行地府礼赞，可瞬间吞噬身边士卒灵魂，化作无尽法力供己所用；随他一震，周身冰霜妖气轰向敌军，凡被寒气击中者顷刻冻结成冰，命丧黄泉。郭嘉英年早逝，但妖灵气息却在多年后从地府归来，重投魔族麾下，曹操欣喜若狂，魔族如虎添翼，其不灭之气势震慑着人神二族。",
        heroimg:"img/hero/sm/wei03.jpg",
        md:"img/hero/md/guojia.jpg",
        attr:"39-58",
        hj:"2.38",
        speed:"295",
        ll:"22+1.65",
        mj:"17+2",
        zl:"20+3.25",
        jn1:{
            mc:"天落碎星流",
            fs:"区域指向性",
            js:"造成范围伤害减速并延迟晕眩",
            flxh:"100/125/150/175点",
            lqsj:"10秒",
            dj:{
                1:"每次造成55点的伤害",
                2:"每次造成90点的伤害",
                3:"每次造成125点的伤害",
                4:"每次造成160点的伤害"
            }
        },
        jn2:{
            mc:"冰霜妖气",
            fs:"单体指向性",
            js:"提供护盾并使攻击者减速",
            flxh:"60点",
            lqsj:"12秒",
            dj:{
                1:"吸收（自身等级*15+90）点伤害，提升20点护甲",
                2:"吸收（自身等级*15+150）点伤害，提升30点护甲",
                3:"吸收（自身等级*15+210）点伤害，提升40点护甲",
                4:"吸收（自身等级*15+270）点伤害，提升50点护甲"
            }
        },
        jn3:{
            mc:"地府礼赞",
            fs:"区域指向性",
            js:"吞噬目标法力值并使其法术易伤",
            flxh:"0点",
            lqsj:"28/24/20/16秒",
            dj:{
                1:"至少摄取40的法力值",
                2:"至少摄取70的法力值",
                3:"至少摄取100的法力值",
                4:"至少摄取130的法力值"
            }
        },
        jn4:{
            mc:"天命流星乱舞",
            fs:"单体指向性",
            js:"对多个单位造成弹射伤害",
            flxh:"200/325/500/650点",
            lqsj:"120/100/60/50秒",
            dj:{
                1:"造成280点的伤害",
                2:"造成370点的伤害",
                3:"造成460点的伤害",
                4:"造成550点的伤害"
            }
        },
        xytj:{
            yl:{
                img:"img/hero/sx/fashang.jpg",
                mc:"技能更有威力！",
                xq:"增加8%技能加成，忽视目标20%法术抗性"
            },
            gd:{
                img:"img/hero/sx/lengque.jpg",
                mc:"更快地使用技能！",
                xq:"技能冷却时间缩短15%，提高3点/秒法力回复"
            },
            sgz:{
                img:"img/hero/sx/huilan.jpg",
                mc:"秘技*施法！",
                xq:"降低10%技能冷却，增加10点智力，提高10%技能加成"
            }
        },
        yytf:{
            10:["+175生命值","+20金钱每10秒"],
            15:["+20智力","+25移动速度"],
            20:["+10%技能加成","+1秒冰霜妖气持续时间"],
            25:["+1天落碎星流储能","-15%冷却时间"]
        },
        tjjd:{
            jn1:{img:"img/hero/jn/guojia01.jpg",jd:[1,3,5,7]},
            jn2:{img:"img/hero/jn/guojia02.jpg",jd:[2,8,9,12]},
            jn3:{img:"img/hero/jn/guojia03.jpg",jd:[4,13,14,17]},
            jn4:{img:"img/hero/jn/guojia04.jpg",jd:[6,11,16]}
        },
        yxzj:{cc:10,sw:95,js:82,zg:82,mvp:3,bd:81,jq:99,sl:89}
    },
    //郭嘉完


    //张辽
    4: {
        hid: 04,
        hname: "张辽",
        hdw:"力量",
        zdlx:"近战",
        star: 3,
        stroy:"斗神战魔张辽，魔族五子良将之首，乃魔族之中最为嗜斗的勇猛战将。他的“战魔刀”锋锐无比，通过聚集战魔斗气舞动万千刀光，横扫千军；张辽攻守兼备，手持一顶“斗神盾”，坚固厚实，更可作凶器使用，猛击对手可令其身首异处，立刻毙命；作为鬼域战将，张辽流有魔神之血，他的肌肤刚硬无比，即使受伤也能在很短时间内快速痊愈；魔神之血在张辽愈战愈勇时还能使他变成真正的“斗神战魔”，拥有永无止境的疯狂战斗力。张辽对曹操忠心耿耿，为魔族建功立业，在魔族之中受万人敬仰，是人、神二族十分头痛的强大对手。",
        heroimg:"img/hero/sm/wei04.jpg",
        md:"img/hero/md/zhangliao.jpg",
        attr:"48-54",
        hj:"5.94",
        speed:"315",
        ll:"23+2.9",
        mj:"21+2.2",
        zl:"17+1.7",
        jn1:{
            mc:"战魔狂刀",
            fs:"区域单位",
            js:"造成范围伤害并回复生命",
            flxh:"110点",
            lqsj:"10/9/8/7秒",
            dj:{
                1:"造成80点伤害",
                2:"造成140点伤害",
                3:"造成200点伤害",
                4:"造成260点伤害"
            }
        },
        jn2:{
            mc:"斗神盾击",
            fs:"区域指向性",
            js:"偷取护甲，短距离位移",
            flxh:"40/50/60/70点",
            lqsj:"9秒",
            dj:{
                1:"造成(20+护甲值*2)点伤害",
                2:"造成(40+护甲值*4)点伤害",
                3:"造成(60+护甲值*6)点伤害",
                4:"造成(80+护甲值*8)点伤害"
            }
        },
        jn3:{
            mc:"魔神血统",
            fs:"被动效果",
            js:"提升护甲或攻击速度",
            flxh:"-",
            lqsj:"9秒",
            dj:{
                1:"提升1点护甲值，提升20%攻击攻速",
                2:"提升1.5点护甲值，提升40%攻击速度",
                3:"提升2点护甲值，提升60%攻击速度",
                4:"提升2.5点护甲值，提升80%攻击速度"
            }
        },
        jn4:{
            mc:"斗神战魔",
            fs:"区域指向性",
            js:"切换为远程变身并提升输出能力",
            flxh:"120/140/160/180点",
            lqsj:"45/40/35/30秒",
            dj:{
                1:"造成100点伤害，增加40点攻击力",
                2:"造成150点伤害，增加70点攻击力",
                3:"造成200点伤害，增加100点攻击力",
                4:"造成250点伤害，增加140点攻击力"
            }
        },
        xytj:{
            yl:{
                img:"img/hero/sx/shuxing.jpg",
                mc:"提升各方面能力！",
                xq:"增加6点全属性和4点主属性"
            },
            gd:{
                img:"img/hero/sx/shuxing.jpg",
                mc:"能获得更高体质！",
                xq:"提高5点所有属性及8点主属性"
            },
            sgz:{
                img:"img/hero/sx/sudu.jpg",
                mc:"身法*速度！",
                xq:"提高20%攻击速度与8%移动速度"
            }
        },
        yytf:{
            10:["+300法力值","+7力量"],
            15:["+12法术抗性","+25移动速度"],
            20:["+10所有属性","+65%战魔狂刀吸血"],
            25:["+55%攻击速度","+20%闪避"]
        },
        tjjd:{
            jn1:{img:"img/hero/jn/zhangliao01.jpg",jd:[2,3,5,7]},
            jn2:{img:"img/hero/jn/zhangliao02.jpg",jd:[1,8,9,12]},
            jn3:{img:"img/hero/jn/zhangliao03.jpg",jd:[4,13,14,17]},
            jn4:{img:"img/hero/jn/zhangliao04.jpg",jd:[6,11,16]}
        },
        yxzj:{cc:6,sw:90,js:82,zg:80,mvp:3,bd:81,jq:99,sl:92}
    },
    //张辽完
    //夏侯惇
    5: {
        hid: 05,
        hname: "夏侯惇",
        hdw:"力量",
        zdlx:"近战",
        star: 2,
        stroy:"夏侯惇，魔族黑暗骑士团统领，嗜好饮血惯常杀戮，是令人望而生畏的大魔头。夏侯惇作战勇猛，喜好吸取敌人体内邪气，让泣血长枪笼罩在邪气之中，挥洒间叫敌人承受致命一击，他全力掷出长枪时，可使中枪者肝胆俱裂，严重者立即身亡；作为黑暗骑士团统领，他手下兵马万千，当他运用邪恶之力召唤自身幻象时，足以以假乱真，令人难分真假；身上易魄甲与胯下魍魉马融于大气之中可令他神出鬼没地制造幻象出现于敌军身旁，令人防不胜防。夏侯惇与其族弟夏侯渊一生誓死追随黑暗霸主曹操左右，为魔族一统天下霸业铲平道路。",
        heroimg:"img/hero/sm/wei05.jpg",
        md:"img/hero/md/xiahoudun.jpg",
        attr:"51-81",
        hj:"5.24",
        speed:"325",
        ll:"29+3",
        mj:"16+2.1",
        zl:"18+1.2",
        jn1:{
            mc:"黑暗泣血枪",
            fs:"单体指向性",
            js:"单体伤害并眩晕",
            flxh:"130点",
            lqsj:"10秒",
            dj:{
                1:"随机造成1-2秒的晕眩和1-150点的伤害",
                2:"随机造成1-3秒的晕眩和51-200点的伤害",
                3:"随机造成1-4秒的晕眩和101-250点的伤害",
                4:"随机造成2-4秒的晕眩和151-300点的伤害"
            }
        },
        jn2:{
            mc:"黑暗突袭",
            fs:"单体指向性",
            js:"突击至目标身边造成伤害",
            flxh:"90点",
            lqsj:"20/16/13/10秒",
            dj:{
                1:"造成30点伤害",
                2:"造成60点伤害",
                3:"造成90点伤害",
                4:"造成120点伤害"
            }
        },
        jn3:{
            mc:"黑暗暴击 ",
            fs:"被动效果",
            js:"几率造成倍击",
            flxh:"-",
            lqsj:"-",
            dj:{
                1:"随机造成1.1-1.5倍的伤害",
                2:"随机造成1.1-2倍的伤害",
                3:"随机造成1.1-2.5倍的伤害",
                4:"随机造成1.1-3倍的伤害"
            }
        },
        jn4:{
            mc:"黑暗骑士军团",
            fs:"即时使用",
            js:"召唤幻影协助战斗",
            flxh:"100/150/200/275点",
            lqsj:"110/55/秒",
            dj:{
                1:"幻象攻击造成40%伤害",
                2:"幻象攻击造成50%伤害",
                3:"幻象攻击造成60%伤害",
                4:"幻象攻击造成70%伤害"
            }
        },
        xytj:{
            yl:{
                img:"img/hero/sx/shuqiang.jpg",
                mc:"提升各方面能力！",
                xq:"增加6点全属性和4点主属性"
            },
            gd:{
                img:"img/hero/sx/shuqiang.jpg",
                mc:"能获得更高体质！",
                xq:"提高5点所有属性及8点主属性"
            },
            sgz:{
                img:"img/hero/sx/sudu.jpg",
                mc:"身法*速度！",
                xq:"提高20%攻击速度与8%移动速度"
            }
        },
        yytf:{
            10:["+20移动速度","+20金钱每10秒"],
            15:["+10力量","+35%攻击速度"],
            20:["+10所有属性","+10%吸血"],
            25:["+1倍黑暗暴击伤害上限","-20%冷却时间"]
        },
        tjjd:{
            jn1:{img:"img/hero/jn/xiahoudun01.jpg",jd:[1,3,5,7]},
            jn2:{img:"img/hero/jn/xiahoudun02.jpg",jd:[2,8,9,12]},
            jn3:{img:"img/hero/jn/xiahoudun03.jpg",jd:[4,13,14,17]},
            jn4:{img:"img/hero/jn/xiahoudun04.jpg",jd:[6,11,16]}
        },
        yxzj:{cc:4,sw:97,js:86,zg:78,mvp:4,bd:85,jq:100,sl:88}
    },//夏侯惇完
    //典韦
    6: {
        hid: 06,
        hname: "典韦",
        hdw:"力量",
        zdlx:"近战",
        star: 3,
        stroy:"凶蚩尤典韦，曹操手下最为霸道凶猛的悍将，是曹操最贴身的护卫，其逐虎过涧，邪力无穷，乃魔族中少有的猛将。他舞动“蚩尤鬼斧”，挥洒蚩尤邪魔之力，让周围敌军仿佛深受乱斧之苦，更能使山崩地裂之势的刀劲如猛虎咆哮般向敌军轰去，使敌军大乱阵脚死伤无数；典韦震天怒吼，可将邪魔之力注入友军体内，令全军热血沸腾；典韦还能利用邪魔之力，召唤蚩尤重生，将敌人千军万马牵扯一起，再给以猛烈一震，无数敌军将应声而倒，溃不成军。典韦乃曹操得意护身猛将，多次救曹操于生死间，乃魔族中无与伦比的邪魔将士。",
        heroimg:"img/hero/sm/wei06.jpg",
        md:"img/hero/md/dianwei.jpg",
        attr:"51-63",
        hj:"5.38",
        speed:"315",
        ll:"25+2.85",
        mj:"17+1.8",
        zl:"19+1.65",
        jn1:{
            mc:"虎咆斩",
            fs:"区域单位",
            js:"直线范围伤害",
            flxh:"90点",
            lqsj:"6秒",
            dj:{
                1:"造成（60+普通攻击*50%）点伤害",
                2:"造成（120+普通攻击*60%）点伤害",
                3:"造成（180+普通攻击*70%）点伤害",
                4:"造成（240+普通攻击*80%）点伤害"
            }
        },
        jn2:{
            mc:"凶暴",
            fs:"单体指向性",
            js:"提升目标攻击力",
            flxh:"30点",
            lqsj:"10秒",
            dj:{
                1:"提升20%的基础攻击力",
                2:"提升40%的基础攻击力",
                3:"提升60%的基础攻击力",
                4:"提升80%的基础攻击力"
            }
        },
        jn3:{
            mc:"霸刀",
            fs:"被动效果",
            js:"前方范围分裂伤害",
            flxh:"-",
            lqsj:"-",
            dj:{
                1:"12%的分裂伤害",
                2:"25%的分裂伤害",
                3:"37%的分裂伤害",
                4:"50%的分裂伤害"
            }
        },
        jn4:{
            mc:"蚩尤噬神",
            fs:"即时使用",
            js:"聚拢范围内敌人造成伤害并眩晕",
            flxh:"100/175/250/325点",
            lqsj:"100/95/90/85秒",
            dj:{
                1:"造成200点伤害",
                2:"造成300点伤害",
                3:"造成400点伤害",
                4:"造成500点伤害"
            }
        },
        xytj:{
            yl:{
                img:"img/hero/sx/shuqiang.jpg",
                mc:"提升各方面能力！",
                xq:"增加6点全属性和4点主属性"
            },
            gd:{
                img:"img/hero/sx/shuqiang.jpg",
                mc:"能获得更高体质！",
                xq:"提高5点所有属性及8点主属性"
            },
            sgz:{
                img:"img/hero/sx/huixue.jpg",
                mc:"防御*潜力！",
                xq:"提升5点护甲,生命低于25%时清除负面状态并在4.5秒内提高75%主属性的生命恢复"
            }
        },
        yytf:{
            10:["+60虎咆斩基础伤害","+25%攻击速度"],
            15:["+12力量","+6护甲"],
            20:["+40移动速度","+10所有属性"],
            25:["+20%凶暴基础攻击力","+25蚩尤弑神作用范围"]
        },
        tjjd:{
            jn1:{img:"img/hero/jn/dianwei01.jpg",jd:[2,3,5,7]},
            jn2:{img:"img/hero/jn/dianwei02.jpg",jd:[1,4,14,17]},
            jn3:{img:"img/hero/jn/dianwei03.jpg",jd:[8,9,12,13]},
            jn4:{img:"img/hero/jn/dianwei04.jpg",jd:[6,11,16]}
        },
        yxzj:{cc:8,sw:90,js:80,zg:78,mvp:2,bd:87,jq:100,sl:90}
    },
}