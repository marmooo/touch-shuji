class Kanji{constructor(e){this.list=e,this.dict=this.setDict(this.list)}setDict(e){const t={};for(let n=0;n<e.length;n++)e[n].forEach(e=>{t[e]=n});return t}getGrade(e){const t=Array.from(e).map(e=>{const t=this.dict[e];return t??-1});return Math.max(...t)}}const JISCode1=`
亜
唖
娃
阿
哀
愛
挨
姶
逢
葵
茜
穐
悪
握
渥
旭
葦
芦
鯵
梓
圧
斡
扱
宛
姐
虻
飴
絢
綾
鮎
或
粟
袷
安
庵
按
暗
案
闇
鞍
杏
以
伊
位
依
偉
囲
夷
委
威
尉
惟
意
慰
易
椅
為
畏
異
移
維
緯
胃
萎
衣
謂
違
遺
医
井
亥
域
育
郁
磯
一
壱
溢
逸
稲
茨
芋
鰯
允
印
咽
員
因
姻
引
飲
淫
胤
蔭
院
陰
隠
韻
吋
右
宇
烏
羽
迂
雨
卯
鵜
窺
丑
碓
臼
渦
嘘
唄
欝
蔚
鰻
姥
厩
浦
瓜
閏
噂
云
運
雲
荏
餌
叡
営
嬰
影
映
曳
栄
永
泳
洩
瑛
盈
穎
頴
英
衛
詠
鋭
液
疫
益
駅
悦
謁
越
閲
榎
厭
円
園
堰
奄
宴
延
怨
掩
援
沿
演
炎
焔
煙
燕
猿
縁
艶
苑
薗
遠
鉛
鴛
塩
於
汚
甥
凹
央
奥
往
応
押
旺
横
欧
殴
王
翁
襖
鴬
鴎
黄
岡
沖
荻
億
屋
憶
臆
桶
牡
乙
俺
卸
恩
温
穏
音
下
化
仮
何
伽
価
佳
加
可
嘉
夏
嫁
家
寡
科
暇
果
架
歌
河
火
珂
禍
禾
稼
箇
花
苛
茄
荷
華
菓
蝦
課
嘩
貨
迦
過
霞
蚊
俄
峨
我
牙
画
臥
芽
蛾
賀
雅
餓
駕
介
会
解
回
塊
壊
廻
快
怪
悔
恢
懐
戒
拐
改
魁
晦
械
海
灰
界
皆
絵
芥
蟹
開
階
貝
凱
劾
外
咳
害
崖
慨
概
涯
碍
蓋
街
該
鎧
骸
浬
馨
蛙
垣
柿
蛎
鈎
劃
嚇
各
廓
拡
撹
格
核
殻
獲
確
穫
覚
角
赫
較
郭
閣
隔
革
学
岳
楽
額
顎
掛
笠
樫
橿
梶
鰍
潟
割
喝
恰
括
活
渇
滑
葛
褐
轄
且
鰹
叶
椛
樺
鞄
株
兜
竃
蒲
釜
鎌
噛
鴨
栢
茅
萱
粥
刈
苅
瓦
乾
侃
冠
寒
刊
勘
勧
巻
喚
堪
姦
完
官
寛
干
幹
患
感
慣
憾
換
敢
柑
桓
棺
款
歓
汗
漢
澗
潅
環
甘
監
看
竿
管
簡
緩
缶
翰
肝
艦
莞
観
諌
貫
還
鑑
間
閑
関
陥
韓
館
舘
丸
含
岸
巌
玩
癌
眼
岩
翫
贋
雁
頑
顔
願
企
伎
危
喜
器
基
奇
嬉
寄
岐
希
幾
忌
揮
机
旗
既
期
棋
棄
機
帰
毅
気
汽
畿
祈
季
稀
紀
徽
規
記
貴
起
軌
輝
飢
騎
鬼
亀
偽
儀
妓
宜
戯
技
擬
欺
犠
疑
祇
義
蟻
誼
議
掬
菊
鞠
吉
吃
喫
桔
橘
詰
砧
杵
黍
却
客
脚
虐
逆
丘
久
仇
休
及
吸
宮
弓
急
救
朽
求
汲
泣
灸
球
究
窮
笈
級
糾
給
旧
牛
去
居
巨
拒
拠
挙
渠
虚
許
距
鋸
漁
禦
魚
亨
享
京
供
侠
僑
兇
競
共
凶
協
匡
卿
叫
喬
境
峡
強
彊
怯
恐
恭
挟
教
橋
況
狂
狭
矯
胸
脅
興
蕎
郷
鏡
響
饗
驚
仰
凝
尭
暁
業
局
曲
極
玉
桐
粁
僅
勤
均
巾
錦
斤
欣
欽
琴
禁
禽
筋
緊
芹
菌
衿
襟
謹
近
金
吟
銀
九
倶
句
区
狗
玖
矩
苦
躯
駆
駈
駒
具
愚
虞
喰
空
偶
寓
遇
隅
串
櫛
釧
屑
屈
掘
窟
沓
靴
轡
窪
熊
隈
粂
栗
繰
桑
鍬
勲
君
薫
訓
群
軍
郡
卦
袈
祁
係
傾
刑
兄
啓
圭
珪
型
契
形
径
恵
慶
慧
憩
掲
携
敬
景
桂
渓
畦
稽
系
経
継
繋
罫
茎
荊
蛍
計
詣
警
軽
頚
鶏
芸
迎
鯨
劇
戟
撃
激
隙
桁
傑
欠
決
潔
穴
結
血
訣
月
件
倹
倦
健
兼
券
剣
喧
圏
堅
嫌
建
憲
懸
拳
捲
検
権
牽
犬
献
研
硯
絹
県
肩
見
謙
賢
軒
遣
鍵
険
顕
験
鹸
元
原
厳
幻
弦
減
源
玄
現
絃
舷
言
諺
限
乎
個
古
呼
固
姑
孤
己
庫
弧
戸
故
枯
湖
狐
糊
袴
股
胡
菰
虎
誇
跨
鈷
雇
顧
鼓
五
互
伍
午
呉
吾
娯
後
御
悟
梧
檎
瑚
碁
語
誤
護
醐
乞
鯉
交
佼
侯
候
倖
光
公
功
効
勾
厚
口
向
后
喉
坑
垢
好
孔
孝
宏
工
巧
巷
幸
広
庚
康
弘
恒
慌
抗
拘
控
攻
昂
晃
更
杭
校
梗
構
江
洪
浩
港
溝
甲
皇
硬
稿
糠
紅
紘
絞
綱
耕
考
肯
肱
腔
膏
航
荒
行
衡
講
貢
購
郊
酵
鉱
砿
鋼
閤
降
項
香
高
鴻
剛
劫
号
合
壕
拷
濠
豪
轟
麹
克
刻
告
国
穀
酷
鵠
黒
獄
漉
腰
甑
忽
惚
骨
狛
込
此
頃
今
困
坤
墾
婚
恨
懇
昏
昆
根
梱
混
痕
紺
艮
魂
些
佐
叉
唆
嵯
左
差
査
沙
瑳
砂
詐
鎖
裟
坐
座
挫
債
催
再
最
哉
塞
妻
宰
彩
才
採
栽
歳
済
災
采
犀
砕
砦
祭
斎
細
菜
裁
載
際
剤
在
材
罪
財
冴
坂
阪
堺
榊
肴
咲
崎
埼
碕
鷺
作
削
咋
搾
昨
朔
柵
窄
策
索
錯
桜
鮭
笹
匙
冊
刷
察
拶
撮
擦
札
殺
薩
雑
皐
鯖
捌
錆
鮫
皿
晒
三
傘
参
山
惨
撒
散
桟
燦
珊
産
算
纂
蚕
讃
賛
酸
餐
斬
暫
残
仕
仔
伺
使
刺
司
史
嗣
四
士
始
姉
姿
子
屍
市
師
志
思
指
支
孜
斯
施
旨
枝
止
死
氏
獅
祉
私
糸
紙
紫
肢
脂
至
視
詞
詩
試
誌
諮
資
賜
雌
飼
歯
事
似
侍
児
字
寺
慈
持
時
次
滋
治
爾
璽
痔
磁
示
而
耳
自
蒔
辞
汐
鹿
式
識
鴫
竺
軸
宍
雫
七
叱
執
失
嫉
室
悉
湿
漆
疾
質
実
蔀
篠
偲
柴
芝
屡
蕊
縞
舎
写
射
捨
赦
斜
煮
社
紗
者
謝
車
遮
蛇
邪
借
勺
尺
杓
灼
爵
酌
釈
錫
若
寂
弱
惹
主
取
守
手
朱
殊
狩
珠
種
腫
趣
酒
首
儒
受
呪
寿
授
樹
綬
需
囚
収
周
宗
就
州
修
愁
拾
洲
秀
秋
終
繍
習
臭
舟
蒐
衆
襲
讐
蹴
輯
週
酋
酬
集
醜
什
住
充
十
従
戎
柔
汁
渋
獣
縦
重
銃
叔
夙
宿
淑
祝
縮
粛
塾
熟
出
術
述
俊
峻
春
瞬
竣
舜
駿
准
循
旬
楯
殉
淳
準
潤
盾
純
巡
遵
醇
順
処
初
所
暑
曙
渚
庶
緒
署
書
薯
藷
諸
助
叙
女
序
徐
恕
鋤
除
傷
償
勝
匠
升
召
哨
商
唱
嘗
奨
妾
娼
宵
将
小
少
尚
庄
床
廠
彰
承
抄
招
掌
捷
昇
昌
昭
晶
松
梢
樟
樵
沼
消
渉
湘
焼
焦
照
症
省
硝
礁
祥
称
章
笑
粧
紹
肖
菖
蒋
蕉
衝
裳
訟
証
詔
詳
象
賞
醤
鉦
鍾
鐘
障
鞘
上
丈
丞
乗
冗
剰
城
場
壌
嬢
常
情
擾
条
杖
浄
状
畳
穣
蒸
譲
醸
錠
嘱
埴
飾
拭
植
殖
燭
織
職
色
触
食
蝕
辱
尻
伸
信
侵
唇
娠
寝
審
心
慎
振
新
晋
森
榛
浸
深
申
疹
真
神
秦
紳
臣
芯
薪
親
診
身
辛
進
針
震
人
仁
刃
塵
壬
尋
甚
尽
腎
訊
迅
陣
靭
笥
諏
須
酢
図
厨
逗
吹
垂
帥
推
水
炊
睡
粋
翠
衰
遂
酔
錐
錘
随
瑞
髄
崇
嵩
数
枢
趨
雛
据
杉
椙
菅
頗
雀
裾
澄
摺
寸
世
瀬
畝
是
凄
制
勢
姓
征
性
成
政
整
星
晴
棲
栖
正
清
牲
生
盛
精
聖
声
製
西
誠
誓
請
逝
醒
青
静
斉
税
脆
隻
席
惜
戚
斥
昔
析
石
積
籍
績
脊
責
赤
跡
蹟
碩
切
拙
接
摂
折
設
窃
節
説
雪
絶
舌
蝉
仙
先
千
占
宣
専
尖
川
戦
扇
撰
栓
栴
泉
浅
洗
染
潜
煎
煽
旋
穿
箭
線
繊
羨
腺
舛
船
薦
詮
賎
践
選
遷
銭
銑
閃
鮮
前
善
漸
然
全
禅
繕
膳
糎
噌
塑
岨
措
曾
曽
楚
狙
疏
疎
礎
祖
租
粗
素
組
蘇
訴
阻
遡
鼠
僧
創
双
叢
倉
喪
壮
奏
爽
宋
層
匝
惣
想
捜
掃
挿
掻
操
早
曹
巣
槍
槽
漕
燥
争
痩
相
窓
糟
総
綜
聡
草
荘
葬
蒼
藻
装
走
送
遭
鎗
霜
騒
像
増
憎
臓
蔵
贈
造
促
側
則
即
息
捉
束
測
足
速
俗
属
賊
族
続
卒
袖
其
揃
存
孫
尊
損
村
遜
他
多
太
汰
詑
唾
堕
妥
惰
打
柁
舵
楕
陀
駄
騨
体
堆
対
耐
岱
帯
待
怠
態
戴
替
泰
滞
胎
腿
苔
袋
貸
退
逮
隊
黛
鯛
代
台
大
第
醍
題
鷹
滝
瀧
卓
啄
宅
托
択
拓
沢
濯
琢
託
鐸
濁
諾
茸
凧
蛸
只
叩
但
達
辰
奪
脱
巽
竪
辿
棚
谷
狸
鱈
樽
誰
丹
単
嘆
坦
担
探
旦
歎
淡
湛
炭
短
端
箪
綻
耽
胆
蛋
誕
鍛
団
壇
弾
断
暖
檀
段
男
談
値
知
地
弛
恥
智
池
痴
稚
置
致
蜘
遅
馳
築
畜
竹
筑
蓄
逐
秩
窒
茶
嫡
着
中
仲
宙
忠
抽
昼
柱
注
虫
衷
註
酎
鋳
駐
樗
瀦
猪
苧
著
貯
丁
兆
凋
喋
寵
帖
帳
庁
弔
張
彫
徴
懲
挑
暢
朝
潮
牒
町
眺
聴
脹
腸
蝶
調
諜
超
跳
銚
長
頂
鳥
勅
捗
直
朕
沈
珍
賃
鎮
陳
津
墜
椎
槌
追
鎚
痛
通
塚
栂
掴
槻
佃
漬
柘
辻
蔦
綴
鍔
椿
潰
坪
壷
嬬
紬
爪
吊
釣
鶴
亭
低
停
偵
剃
貞
呈
堤
定
帝
底
庭
廷
弟
悌
抵
挺
提
梯
汀
碇
禎
程
締
艇
訂
諦
蹄
逓
邸
鄭
釘
鼎
泥
摘
擢
敵
滴
的
笛
適
鏑
溺
哲
徹
撤
轍
迭
鉄
典
填
天
展
店
添
纏
甜
貼
転
顛
点
伝
殿
澱
田
電
兎
吐
堵
塗
妬
屠
徒
斗
杜
渡
登
菟
賭
途
都
鍍
砥
砺
努
度
土
奴
怒
倒
党
冬
凍
刀
唐
塔
塘
套
宕
島
嶋
悼
投
搭
東
桃
梼
棟
盗
淘
湯
涛
灯
燈
当
痘
祷
等
答
筒
糖
統
到
董
蕩
藤
討
謄
豆
踏
逃
透
鐙
陶
頭
騰
闘
働
動
同
堂
導
憧
撞
洞
瞳
童
胴
萄
道
銅
峠
鴇
匿
得
徳
涜
特
督
禿
篤
毒
独
読
栃
橡
凸
突
椴
届
鳶
苫
寅
酉
瀞
噸
屯
惇
敦
沌
豚
遁
頓
呑
曇
鈍
奈
那
内
乍
凪
薙
謎
灘
捺
鍋
楢
馴
縄
畷
南
楠
軟
難
汝
二
尼
弐
迩
匂
賑
肉
虹
廿
日
乳
入
如
尿
韮
任
妊
忍
認
濡
禰
祢
寧
葱
猫
熱
年
念
捻
撚
燃
粘
乃
廼
之
埜
嚢
悩
濃
納
能
脳
膿
農
覗
蚤
巴
把
播
覇
杷
波
派
琶
破
婆
罵
芭
馬
俳
廃
拝
排
敗
杯
盃
牌
背
肺
輩
配
倍
培
媒
梅
楳
煤
狽
買
売
賠
陪
這
蝿
秤
矧
萩
伯
剥
博
拍
柏
泊
白
箔
粕
舶
薄
迫
曝
漠
爆
縛
莫
駁
麦
函
箱
硲
箸
肇
筈
櫨
幡
肌
畑
畠
八
鉢
溌
発
醗
髪
伐
罰
抜
筏
閥
鳩
噺
塙
蛤
隼
伴
判
半
反
叛
帆
搬
斑
板
氾
汎
版
犯
班
畔
繁
般
藩
販
範
釆
煩
頒
飯
挽
晩
番
盤
磐
蕃
蛮
匪
卑
否
妃
庇
彼
悲
扉
批
披
斐
比
泌
疲
皮
碑
秘
緋
罷
肥
被
誹
費
避
非
飛
樋
簸
備
尾
微
枇
毘
琵
眉
美
鼻
柊
稗
匹
疋
髭
彦
膝
菱
肘
弼
必
畢
筆
逼
桧
姫
媛
紐
百
謬
俵
彪
標
氷
漂
瓢
票
表
評
豹
廟
描
病
秒
苗
錨
鋲
蒜
蛭
鰭
品
彬
斌
浜
瀕
貧
賓
頻
敏
瓶
不
付
埠
夫
婦
富
冨
布
府
怖
扶
敷
斧
普
浮
父
符
腐
膚
芙
譜
負
賦
赴
阜
附
侮
撫
武
舞
葡
蕪
部
封
楓
風
葺
蕗
伏
副
復
幅
服
福
腹
複
覆
淵
弗
払
沸
仏
物
鮒
分
吻
噴
墳
憤
扮
焚
奮
粉
糞
紛
雰
文
聞
丙
併
兵
塀
幣
平
弊
柄
並
蔽
閉
陛
米
頁
僻
壁
癖
碧
別
瞥
蔑
箆
偏
変
片
篇
編
辺
返
遍
便
勉
娩
弁
鞭
保
舗
鋪
圃
捕
歩
甫
補
輔
穂
募
墓
慕
戊
暮
母
簿
菩
倣
俸
包
呆
報
奉
宝
峰
峯
崩
庖
抱
捧
放
方
朋
法
泡
烹
砲
縫
胞
芳
萌
蓬
蜂
褒
訪
豊
邦
鋒
飽
鳳
鵬
乏
亡
傍
剖
坊
妨
帽
忘
忙
房
暴
望
某
棒
冒
紡
肪
膨
謀
貌
貿
鉾
防
吠
頬
北
僕
卜
墨
撲
朴
牧
睦
穆
釦
勃
没
殆
堀
幌
奔
本
翻
凡
盆
摩
磨
魔
麻
埋
妹
昧
枚
毎
哩
槙
幕
膜
枕
鮪
柾
鱒
桝
亦
俣
又
抹
末
沫
迄
侭
繭
麿
万
慢
満
漫
蔓
味
未
魅
巳
箕
岬
密
蜜
湊
蓑
稔
脈
妙
粍
民
眠
務
夢
無
牟
矛
霧
鵡
椋
婿
娘
冥
名
命
明
盟
迷
銘
鳴
姪
牝
滅
免
棉
綿
緬
面
麺
摸
模
茂
妄
孟
毛
猛
盲
網
耗
蒙
儲
木
黙
目
杢
勿
餅
尤
戻
籾
貰
問
悶
紋
門
匁
也
冶
夜
爺
耶
野
弥
矢
厄
役
約
薬
訳
躍
靖
柳
薮
鑓
愉
愈
油
癒
諭
輸
唯
佑
優
勇
友
宥
幽
悠
憂
揖
有
柚
湧
涌
猶
猷
由
祐
裕
誘
遊
邑
郵
雄
融
夕
予
余
与
誉
輿
預
傭
幼
妖
容
庸
揚
揺
擁
曜
楊
様
洋
溶
熔
用
窯
羊
耀
葉
蓉
要
謡
踊
遥
陽
養
慾
抑
欲
沃
浴
翌
翼
淀
羅
螺
裸
来
莱
頼
雷
洛
絡
落
酪
乱
卵
嵐
欄
濫
藍
蘭
覧
利
吏
履
李
梨
理
璃
痢
裏
裡
里
離
陸
律
率
立
葎
掠
略
劉
流
溜
琉
留
硫
粒
隆
竜
龍
侶
慮
旅
虜
了
亮
僚
両
凌
寮
料
梁
涼
猟
療
瞭
稜
糧
良
諒
遼
量
陵
領
力
緑
倫
厘
林
淋
燐
琳
臨
輪
隣
鱗
麟
瑠
塁
涙
累
類
令
伶
例
冷
励
嶺
怜
玲
礼
苓
鈴
隷
零
霊
麗
齢
暦
歴
列
劣
烈
裂
廉
恋
憐
漣
煉
簾
練
聯
蓮
連
錬
呂
魯
櫓
炉
賂
路
露
労
婁
廊
弄
朗
楼
榔
浪
漏
牢
狼
篭
老
聾
蝋
郎
六
麓
禄
肋
録
論
倭
和
話
歪
賄
脇
惑
枠
鷲
亙
亘
鰐
詫
藁
蕨
椀
湾
碗
腕
`.trim().split(`
`),JISCode2=`
弌
丐
丕
个
丱
丶
丼
丿
乂
乖
乘
亂
亅
豫
亊
舒
弍
于
亞
亟
亠
亢
亰
亳
亶
从
仍
仄
仆
仂
仗
仞
仭
仟
价
伉
佚
估
佛
佝
佗
佇
佶
侈
侏
侘
佻
佩
佰
侑
佯
來
侖
儘
俔
俟
俎
俘
俛
俑
俚
俐
俤
俥
倚
倨
倔
倪
倥
倅
伜
俶
倡
倩
倬
俾
俯
們
倆
偃
假
會
偕
偐
偈
做
偖
偬
偸
傀
傚
傅
傴
傲
僉
僊
傳
僂
僖
僞
僥
僭
僣
僮
價
僵
儉
儁
儂
儖
儕
儔
儚
儡
儺
儷
儼
儻
儿
兀
兒
兌
兔
兢
竸
兩
兪
兮
冀
冂
囘
册
冉
冏
冑
冓
冕
冖
冤
冦
冢
冩
冪
冫
决
冱
冲
冰
况
冽
凅
凉
凛
几
處
凩
凭
凰
凵
凾
刄
刋
刔
刎
刧
刪
刮
刳
刹
剏
剄
剋
剌
剞
剔
剪
剴
剩
剳
剿
剽
劍
劔
劒
剱
劈
劑
辨
辧
劬
劭
劼
劵
勁
勍
勗
勞
勣
勦
飭
勠
勳
勵
勸
勹
匆
匈
甸
匍
匐
匏
匕
匚
匣
匯
匱
匳
匸
區
卆
卅
丗
卉
卍
凖
卞
卩
卮
夘
卻
卷
厂
厖
厠
厦
厥
厮
厰
厶
參
簒
雙
叟
曼
燮
叮
叨
叭
叺
吁
吽
呀
听
吭
吼
吮
吶
吩
吝
呎
咏
呵
咎
呟
呱
呷
呰
咒
呻
咀
呶
咄
咐
咆
哇
咢
咸
咥
咬
哄
哈
咨
咫
哂
咤
咾
咼
哘
哥
哦
唏
唔
哽
哮
哭
哺
哢
唹
啀
啣
啌
售
啜
啅
啖
啗
唸
唳
啝
喙
喀
咯
喊
喟
啻
啾
喘
喞
單
啼
喃
喩
喇
喨
嗚
嗅
嗟
嗄
嗜
嗤
嗔
嘔
嗷
嘖
嗾
嗽
嘛
嗹
噎
噐
營
嘴
嘶
嘲
嘸
噫
噤
嘯
噬
噪
嚆
嚀
嚊
嚠
嚔
嚏
嚥
嚮
嚶
嚴
囂
嚼
囁
囃
囀
囈
囎
囑
囓
囗
囮
囹
圀
囿
圄
圉
圈
國
圍
圓
團
圖
嗇
圜
圦
圷
圸
坎
圻
址
坏
坩
埀
垈
坡
坿
垉
垓
垠
垳
垤
垪
垰
埃
埆
埔
埒
埓
堊
埖
埣
堋
堙
堝
塲
堡
塢
塋
塰
毀
塒
堽
塹
墅
墹
墟
墫
墺
壞
墻
墸
墮
壅
壓
壑
壗
壙
壘
壥
壜
壤
壟
壯
壺
壹
壻
壼
壽
夂
夊
夐
夛
梦
夥
夬
夭
夲
夸
夾
竒
奕
奐
奎
奚
奘
奢
奠
奧
奬
奩
奸
妁
妝
佞
侫
妣
妲
姆
姨
姜
妍
姙
姚
娥
娟
娑
娜
娉
娚
婀
婬
婉
娵
娶
婢
婪
媚
媼
媾
嫋
嫂
媽
嫣
嫗
嫦
嫩
嫖
嫺
嫻
嬌
嬋
嬖
嬲
嫐
嬪
嬶
嬾
孃
孅
孀
孑
孕
孚
孛
孥
孩
孰
孳
孵
學
斈
孺
宀
它
宦
宸
寃
寇
寉
寔
寐
寤
實
寢
寞
寥
寫
寰
寶
寳
尅
將
專
對
尓
尠
尢
尨
尸
尹
屁
屆
屎
屓
屐
屏
孱
屬
屮
乢
屶
屹
岌
岑
岔
妛
岫
岻
岶
岼
岷
峅
岾
峇
峙
峩
峽
峺
峭
嶌
峪
崋
崕
崗
嵜
崟
崛
崑
崔
崢
崚
崙
崘
嵌
嵒
嵎
嵋
嵬
嵳
嵶
嶇
嶄
嶂
嶢
嶝
嶬
嶮
嶽
嶐
嶷
嶼
巉
巍
巓
巒
巖
巛
巫
已
巵
帋
帚
帙
帑
帛
帶
帷
幄
幃
幀
幎
幗
幔
幟
幢
幤
幇
幵
并
幺
麼
广
庠
廁
廂
廈
廐
廏
廖
廣
廝
廚
廛
廢
廡
廨
廩
廬
廱
廳
廰
廴
廸
廾
弃
弉
彝
彜
弋
弑
弖
弩
弭
弸
彁
彈
彌
彎
弯
彑
彖
彗
彙
彡
彭
彳
彷
徃
徂
彿
徊
很
徑
徇
從
徙
徘
徠
徨
徭
徼
忖
忻
忤
忸
忱
忝
悳
忿
怡
恠
怙
怐
怩
怎
怱
怛
怕
怫
怦
怏
怺
恚
恁
恪
恷
恟
恊
恆
恍
恣
恃
恤
恂
恬
恫
恙
悁
悍
惧
悃
悚
悄
悛
悖
悗
悒
悧
悋
惡
悸
惠
惓
悴
忰
悽
惆
悵
惘
慍
愕
愆
惶
惷
愀
惴
惺
愃
愡
惻
惱
愍
愎
慇
愾
愨
愧
慊
愿
愼
愬
愴
愽
慂
慄
慳
慷
慘
慙
慚
慫
慴
慯
慥
慱
慟
慝
慓
慵
憙
憖
憇
憬
憔
憚
憊
憑
憫
憮
懌
懊
應
懷
懈
懃
懆
憺
懋
罹
懍
懦
懣
懶
懺
懴
懿
懽
懼
懾
戀
戈
戉
戍
戌
戔
戛
戞
戡
截
戮
戰
戲
戳
扁
扎
扞
扣
扛
扠
扨
扼
抂
抉
找
抒
抓
抖
拔
抃
抔
拗
拑
抻
拏
拿
拆
擔
拈
拜
拌
拊
拂
拇
抛
拉
挌
拮
拱
挧
挂
挈
拯
拵
捐
挾
捍
搜
捏
掖
掎
掀
掫
捶
掣
掏
掉
掟
掵
捫
捩
掾
揩
揀
揆
揣
揉
插
揶
揄
搖
搴
搆
搓
搦
搶
攝
搗
搨
搏
摧
摯
摶
摎
攪
撕
撓
撥
撩
撈
撼
據
擒
擅
擇
撻
擘
擂
擱
擧
舉
擠
擡
抬
擣
擯
攬
擶
擴
擲
擺
攀
擽
攘
攜
攅
攤
攣
攫
攴
攵
攷
收
攸
畋
效
敖
敕
敍
敘
敞
敝
敲
數
斂
斃
變
斛
斟
斫
斷
旃
旆
旁
旄
旌
旒
旛
旙
无
旡
旱
杲
昊
昃
旻
杳
昵
昶
昴
昜
晏
晄
晉
晁
晞
晝
晤
晧
晨
晟
晢
晰
暃
暈
暎
暉
暄
暘
暝
曁
暹
曉
暾
暼
曄
暸
曖
曚
曠
昿
曦
曩
曰
曵
曷
朏
朖
朞
朦
朧
霸
朮
朿
朶
杁
朸
朷
杆
杞
杠
杙
杣
杤
枉
杰
枩
杼
杪
枌
枋
枦
枡
枅
枷
柯
枴
柬
枳
柩
枸
柤
柞
柝
柢
柮
枹
柎
柆
柧
檜
栞
框
栩
桀
桍
栲
桎
梳
栫
桙
档
桷
桿
梟
梏
梭
梔
條
梛
梃
檮
梹
桴
梵
梠
梺
椏
梍
桾
椁
棊
椈
棘
椢
椦
棡
椌
棍
棔
棧
棕
椶
椒
椄
棗
棣
椥
棹
棠
棯
椨
椪
椚
椣
椡
棆
楹
楷
楜
楸
楫
楔
楾
楮
椹
楴
椽
楙
椰
楡
楞
楝
榁
楪
榲
榮
槐
榿
槁
槓
榾
槎
寨
槊
槝
榻
槃
榧
樮
榑
榠
榜
榕
榴
槞
槨
樂
樛
槿
權
槹
槲
槧
樅
榱
樞
槭
樔
槫
樊
樒
櫁
樣
樓
橄
樌
橲
樶
橸
橇
橢
橙
橦
橈
樸
樢
檐
檍
檠
檄
檢
檣
檗
蘗
檻
櫃
櫂
檸
檳
檬
櫞
櫑
櫟
檪
櫚
櫪
櫻
欅
蘖
櫺
欒
欖
鬱
欟
欸
欷
盜
欹
飮
歇
歃
歉
歐
歙
歔
歛
歟
歡
歸
歹
歿
殀
殄
殃
殍
殘
殕
殞
殤
殪
殫
殯
殲
殱
殳
殷
殼
毆
毋
毓
毟
毬
毫
毳
毯
麾
氈
氓
气
氛
氤
氣
汞
汕
汢
汪
沂
沍
沚
沁
沛
汾
汨
汳
沒
沐
泄
泱
泓
沽
泗
泅
泝
沮
沱
沾
沺
泛
泯
泙
泪
洟
衍
洶
洫
洽
洸
洙
洵
洳
洒
洌
浣
涓
浤
浚
浹
浙
涎
涕
濤
涅
淹
渕
渊
涵
淇
淦
涸
淆
淬
淞
淌
淨
淒
淅
淺
淙
淤
淕
淪
淮
渭
湮
渮
渙
湲
湟
渾
渣
湫
渫
湶
湍
渟
湃
渺
湎
渤
滿
渝
游
溂
溪
溘
滉
溷
滓
溽
溯
滄
溲
滔
滕
溏
溥
滂
溟
潁
漑
灌
滬
滸
滾
漿
滲
漱
滯
漲
滌
漾
漓
滷
澆
潺
潸
澁
澀
潯
潛
濳
潭
澂
潼
潘
澎
澑
濂
潦
澳
澣
澡
澤
澹
濆
澪
濟
濕
濬
濔
濘
濱
濮
濛
瀉
瀋
濺
瀑
瀁
瀏
濾
瀛
瀚
潴
瀝
瀘
瀟
瀰
瀾
瀲
灑
灣
炙
炒
炯
烱
炬
炸
炳
炮
烟
烋
烝
烙
焉
烽
焜
焙
煥
煕
熈
煦
煢
煌
煖
煬
熏
燻
熄
熕
熨
熬
燗
熹
熾
燒
燉
燔
燎
燠
燬
燧
燵
燼
燹
燿
爍
爐
爛
爨
爭
爬
爰
爲
爻
爼
爿
牀
牆
牋
牘
牴
牾
犂
犁
犇
犒
犖
犢
犧
犹
犲
狃
狆
狄
狎
狒
狢
狠
狡
狹
狷
倏
猗
猊
猜
猖
猝
猴
猯
猩
猥
猾
獎
獏
默
獗
獪
獨
獰
獸
獵
獻
獺
珈
玳
珎
玻
珀
珥
珮
珞
璢
琅
瑯
琥
珸
琲
琺
瑕
琿
瑟
瑙
瑁
瑜
瑩
瑰
瑣
瑪
瑶
瑾
璋
璞
璧
瓊
瓏
瓔
珱
瓠
瓣
瓧
瓩
瓮
瓲
瓰
瓱
瓸
瓷
甄
甃
甅
甌
甎
甍
甕
甓
甞
甦
甬
甼
畄
畍
畊
畉
畛
畆
畚
畩
畤
畧
畫
畭
畸
當
疆
疇
畴
疊
疉
疂
疔
疚
疝
疥
疣
痂
疳
痃
疵
疽
疸
疼
疱
痍
痊
痒
痙
痣
痞
痾
痿
痼
瘁
痰
痺
痲
痳
瘋
瘍
瘉
瘟
瘧
瘠
瘡
瘢
瘤
瘴
瘰
瘻
癇
癈
癆
癜
癘
癡
癢
癨
癩
癪
癧
癬
癰
癲
癶
癸
發
皀
皃
皈
皋
皎
皖
皓
皙
皚
皰
皴
皸
皹
皺
盂
盍
盖
盒
盞
盡
盥
盧
盪
蘯
盻
眈
眇
眄
眩
眤
眞
眥
眦
眛
眷
眸
睇
睚
睨
睫
睛
睥
睿
睾
睹
瞎
瞋
瞑
瞠
瞞
瞰
瞶
瞹
瞿
瞼
瞽
瞻
矇
矍
矗
矚
矜
矣
矮
矼
砌
砒
礦
砠
礪
硅
碎
硴
碆
硼
碚
碌
碣
碵
碪
碯
磑
磆
磋
磔
碾
碼
磅
磊
磬
磧
磚
磽
磴
礇
礒
礑
礙
礬
礫
祀
祠
祗
祟
祚
祕
祓
祺
祿
禊
禝
禧
齋
禪
禮
禳
禹
禺
秉
秕
秧
秬
秡
秣
稈
稍
稘
稙
稠
稟
禀
稱
稻
稾
稷
穃
穗
穉
穡
穢
穩
龝
穰
穹
穽
窈
窗
窕
窘
窖
窩
竈
窰
窶
竅
竄
窿
邃
竇
竊
竍
竏
竕
竓
站
竚
竝
竡
竢
竦
竭
竰
笂
笏
笊
笆
笳
笘
笙
笞
笵
笨
笶
筐
筺
笄
筍
笋
筌
筅
筵
筥
筴
筧
筰
筱
筬
筮
箝
箘
箟
箍
箜
箚
箋
箒
箏
筝
箙
篋
篁
篌
篏
箴
篆
篝
篩
簑
簔
篦
篥
籠
簀
簇
簓
篳
篷
簗
簍
篶
簣
簧
簪
簟
簷
簫
簽
籌
籃
籔
籏
籀
籐
籘
籟
籤
籖
籥
籬
籵
粃
粐
粤
粭
粢
粫
粡
粨
粳
粲
粱
粮
粹
粽
糀
糅
糂
糘
糒
糜
糢
鬻
糯
糲
糴
糶
糺
紆
紂
紜
紕
紊
絅
絋
紮
紲
紿
紵
絆
絳
絖
絎
絲
絨
絮
絏
絣
經
綉
絛
綏
絽
綛
綺
綮
綣
綵
緇
綽
綫
總
綢
綯
緜
綸
綟
綰
緘
緝
緤
緞
緻
緲
緡
縅
縊
縣
縡
縒
縱
縟
縉
縋
縢
繆
繦
縻
縵
縹
繃
縷
縲
縺
繧
繝
繖
繞
繙
繚
繹
繪
繩
繼
繻
纃
緕
繽
辮
繿
纈
纉
續
纒
纐
纓
纔
纖
纎
纛
纜
缸
缺
罅
罌
罍
罎
罐
网
罕
罔
罘
罟
罠
罨
罩
罧
罸
羂
羆
羃
羈
羇
羌
羔
羞
羝
羚
羣
羯
羲
羹
羮
羶
羸
譱
翅
翆
翊
翕
翔
翡
翦
翩
翳
翹
飜
耆
耄
耋
耒
耘
耙
耜
耡
耨
耿
耻
聊
聆
聒
聘
聚
聟
聢
聨
聳
聲
聰
聶
聹
聽
聿
肄
肆
肅
肛
肓
肚
肭
冐
肬
胛
胥
胙
胝
胄
胚
胖
脉
胯
胱
脛
脩
脣
脯
腋
隋
腆
脾
腓
腑
胼
腱
腮
腥
腦
腴
膃
膈
膊
膀
膂
膠
膕
膤
膣
腟
膓
膩
膰
膵
膾
膸
膽
臀
臂
膺
臉
臍
臑
臙
臘
臈
臚
臟
臠
臧
臺
臻
臾
舁
舂
舅
與
舊
舍
舐
舖
舩
舫
舸
舳
艀
艙
艘
艝
艚
艟
艤
艢
艨
艪
艫
舮
艱
艷
艸
艾
芍
芒
芫
芟
芻
芬
苡
苣
苟
苒
苴
苳
苺
莓
范
苻
苹
苞
茆
苜
茉
苙
茵
茴
茖
茲
茱
荀
茹
荐
荅
茯
茫
茗
茘
莅
莚
莪
莟
莢
莖
茣
莎
莇
莊
荼
莵
荳
荵
莠
莉
莨
菴
萓
菫
菎
菽
萃
菘
萋
菁
菷
萇
菠
菲
萍
萢
萠
莽
萸
蔆
菻
葭
萪
萼
蕚
蒄
葷
葫
蒭
葮
蒂
葩
葆
萬
葯
葹
萵
蓊
葢
蒹
蒿
蒟
蓙
蓍
蒻
蓚
蓐
蓁
蓆
蓖
蒡
蔡
蓿
蓴
蔗
蔘
蔬
蔟
蔕
蔔
蓼
蕀
蕣
蕘
蕈
蕁
蘂
蕋
蕕
薀
薤
薈
薑
薊
薨
蕭
薔
薛
藪
薇
薜
蕷
蕾
薐
藉
薺
藏
薹
藐
藕
藝
藥
藜
藹
蘊
蘓
蘋
藾
藺
蘆
蘢
蘚
蘰
蘿
虍
乕
虔
號
虧
虱
蚓
蚣
蚩
蚪
蚋
蚌
蚶
蚯
蛄
蛆
蚰
蛉
蠣
蚫
蛔
蛞
蛩
蛬
蛟
蛛
蛯
蜒
蜆
蜈
蜀
蜃
蛻
蜑
蜉
蜍
蛹
蜊
蜴
蜿
蜷
蜻
蜥
蜩
蜚
蝠
蝟
蝸
蝌
蝎
蝴
蝗
蝨
蝮
蝙
蝓
蝣
蝪
蠅
螢
螟
螂
螯
蟋
螽
蟀
蟐
雖
螫
蟄
螳
蟇
蟆
螻
蟯
蟲
蟠
蠏
蠍
蟾
蟶
蟷
蠎
蟒
蠑
蠖
蠕
蠢
蠡
蠱
蠶
蠹
蠧
蠻
衄
衂
衒
衙
衞
衢
衫
袁
衾
袞
衵
衽
袵
衲
袂
袗
袒
袮
袙
袢
袍
袤
袰
袿
袱
裃
裄
裔
裘
裙
裝
裹
褂
裼
裴
裨
裲
褄
褌
褊
褓
襃
褞
褥
褪
褫
襁
襄
褻
褶
褸
襌
褝
襠
襞
襦
襤
襭
襪
襯
襴
襷
襾
覃
覈
覊
覓
覘
覡
覩
覦
覬
覯
覲
覺
覽
覿
觀
觚
觜
觝
觧
觴
觸
訃
訖
訐
訌
訛
訝
訥
訶
詁
詛
詒
詆
詈
詼
詭
詬
詢
誅
誂
誄
誨
誡
誑
誥
誦
誚
誣
諄
諍
諂
諚
諫
諳
諧
諤
諱
謔
諠
諢
諷
諞
諛
謌
謇
謚
諡
謖
謐
謗
謠
謳
鞫
謦
謫
謾
謨
譁
譌
譏
譎
證
譖
譛
譚
譫
譟
譬
譯
譴
譽
讀
讌
讎
讒
讓
讖
讙
讚
谺
豁
谿
豈
豌
豎
豐
豕
豢
豬
豸
豺
貂
貉
貅
貊
貍
貎
貔
豼
貘
戝
貭
貪
貽
貲
貳
貮
貶
賈
賁
賤
賣
賚
賽
賺
賻
贄
贅
贊
贇
贏
贍
贐
齎
贓
賍
贔
贖
赧
赭
赱
赳
趁
趙
跂
趾
趺
跏
跚
跖
跌
跛
跋
跪
跫
跟
跣
跼
踈
踉
跿
踝
踞
踐
踟
蹂
踵
踰
踴
蹊
蹇
蹉
蹌
蹐
蹈
蹙
蹤
蹠
踪
蹣
蹕
蹶
蹲
蹼
躁
躇
躅
躄
躋
躊
躓
躑
躔
躙
躪
躡
躬
躰
軆
躱
躾
軅
軈
軋
軛
軣
軼
軻
軫
軾
輊
輅
輕
輒
輙
輓
輜
輟
輛
輌
輦
輳
輻
輹
轅
轂
輾
轌
轉
轆
轎
轗
轜
轢
轣
轤
辜
辟
辣
辭
辯
辷
迚
迥
迢
迪
迯
邇
迴
逅
迹
迺
逑
逕
逡
逍
逞
逖
逋
逧
逶
逵
逹
迸
遏
遐
遑
遒
逎
遉
逾
遖
遘
遞
遨
遯
遶
隨
遲
邂
遽
邁
邀
邊
邉
邏
邨
邯
邱
邵
郢
郤
扈
郛
鄂
鄒
鄙
鄲
鄰
酊
酖
酘
酣
酥
酩
酳
酲
醋
醉
醂
醢
醫
醯
醪
醵
醴
醺
釀
釁
釉
釋
釐
釖
釟
釡
釛
釼
釵
釶
鈞
釿
鈔
鈬
鈕
鈑
鉞
鉗
鉅
鉉
鉤
鉈
銕
鈿
鉋
鉐
銜
銖
銓
銛
鉚
鋏
銹
銷
鋩
錏
鋺
鍄
錮
錙
錢
錚
錣
錺
錵
錻
鍜
鍠
鍼
鍮
鍖
鎰
鎬
鎭
鎔
鎹
鏖
鏗
鏨
鏥
鏘
鏃
鏝
鏐
鏈
鏤
鐚
鐔
鐓
鐃
鐇
鐐
鐶
鐫
鐵
鐡
鐺
鑁
鑒
鑄
鑛
鑠
鑢
鑞
鑪
鈩
鑰
鑵
鑷
鑽
鑚
鑼
鑾
钁
鑿
閂
閇
閊
閔
閖
閘
閙
閠
閨
閧
閭
閼
閻
閹
閾
闊
濶
闃
闍
闌
闕
闔
闖
關
闡
闥
闢
阡
阨
阮
阯
陂
陌
陏
陋
陷
陜
陞
陝
陟
陦
陲
陬
隍
隘
隕
隗
險
隧
隱
隲
隰
隴
隶
隸
隹
雎
雋
雉
雍
襍
雜
霍
雕
雹
霄
霆
霈
霓
霎
霑
霏
霖
霙
霤
霪
霰
霹
霽
霾
靄
靆
靈
靂
靉
靜
靠
靤
靦
靨
勒
靫
靱
靹
鞅
靼
鞁
靺
鞆
鞋
鞏
鞐
鞜
鞨
鞦
鞣
鞳
鞴
韃
韆
韈
韋
韜
韭
齏
韲
竟
韶
韵
頏
頌
頸
頤
頡
頷
頽
顆
顏
顋
顫
顯
顰
顱
顴
顳
颪
颯
颱
颶
飄
飃
飆
飩
飫
餃
餉
餒
餔
餘
餡
餝
餞
餤
餠
餬
餮
餽
餾
饂
饉
饅
饐
饋
饑
饒
饌
饕
馗
馘
馥
馭
馮
馼
駟
駛
駝
駘
駑
駭
駮
駱
駲
駻
駸
騁
騏
騅
駢
騙
騫
騷
驅
驂
驀
驃
騾
驕
驍
驛
驗
驟
驢
驥
驤
驩
驫
驪
骭
骰
骼
髀
髏
髑
髓
體
髞
髟
髢
髣
髦
髯
髫
髮
髴
髱
髷
髻
鬆
鬘
鬚
鬟
鬢
鬣
鬥
鬧
鬨
鬩
鬪
鬮
鬯
鬲
魄
魃
魏
魍
魎
魑
魘
魴
鮓
鮃
鮑
鮖
鮗
鮟
鮠
鮨
鮴
鯀
鯊
鮹
鯆
鯏
鯑
鯒
鯣
鯢
鯤
鯔
鯡
鰺
鯲
鯱
鯰
鰕
鰔
鰉
鰓
鰌
鰆
鰈
鰒
鰊
鰄
鰮
鰛
鰥
鰤
鰡
鰰
鱇
鰲
鱆
鰾
鱚
鱠
鱧
鱶
鱸
鳧
鳬
鳰
鴉
鴈
鳫
鴃
鴆
鴪
鴦
鶯
鴣
鴟
鵄
鴕
鴒
鵁
鴿
鴾
鵆
鵈
鵝
鵞
鵤
鵑
鵐
鵙
鵲
鶉
鶇
鶫
鵯
鵺
鶚
鶤
鶩
鶲
鷄
鷁
鶻
鶸
鶺
鷆
鷏
鷂
鷙
鷓
鷸
鷦
鷭
鷯
鷽
鸚
鸛
鸞
鹵
鹹
鹽
麁
麈
麋
麌
麒
麕
麑
麝
麥
麩
麸
麪
麭
靡
黌
黎
黏
黐
黔
黜
點
黝
黠
黥
黨
黯
黴
黶
黷
黹
黻
黼
黽
鼇
鼈
皷
鼕
鼡
鼬
鼾
齊
齒
齔
齣
齟
齠
齡
齦
齧
齬
齪
齷
齲
齶
龕
龜
龠
堯
槇
遙
瑤
凜
熙
`.trim().split(`
`);`
俱
𠀋
㐂
丨
丯
丰
亍
仡
份
仿
伃
伋
你
佈
佉
佖
佟
佪
佬
佾
侊
侔
侗
侮
俉
俠
倁
倂
倎
倘
倧
倮
偀
倻
偁
傔
僌
僲
僐
僦
僧
儆
儃
儋
儞
儵
兊
免
兕
兗
㒵
冝
凃
凊
凞
凢
凮
刁
㓛
刓
刕
剉
剗
剡
劓
勈
勉
勌
勐
勖
勛
勤
勰
勻
匀
匇
匜
卑
卡
卣
卽
厓
厝
厲
吒
吧
呍
咜
呫
呴
呿
咈
咖
咡
咩
哆
哿
唎
唫
唵
啐
啞
喁
喆
喎
喝
喭
嗎
嘆
嘈
嘎
嘻
噉
噶
噦
器
噯
噱
噲
嚙
嚞
嚩
嚬
嚳
囉
囊
圊
𡈽
圡
圯
圳
圴
坰
坷
坼
垜
﨏
𡌛
垸
埇
埈
埏
埤
埭
埵
埶
埿
堉
塚
塡
塤
塀
塼
墉
增
墨
墩
𡑮
壒
壎
壔
壚
壠
壩
夌
虁
奝
奭
妋
妒
妤
姃
姒
姝
娓
娣
婧
婭
婷
婾
媄
媞
媧
嫄
𡢽
嬙
嬥
剝
𠮟
孁
孖
孽
宓
寘
寬
尒
尞
尣
尫
㞍
屢
層
屮
𡚴
屺
岏
岟
岣
岪
岺
峋
峐
峒
峴
𡸴
㟢
崍
崧
﨑
嵆
嵇
嵓
嵊
嵭
嶁
嶠
嶤
嶧
嶸
巋
吞
噓
巢
帔
帘
幘
幞
庾
廊
廋
廹
开
异
弇
弝
弣
弴
弶
弽
彀
彅
彔
彘
彤
彧
彽
徉
徜
徧
徯
徵
德
忉
忞
忡
忩
怍
怔
怘
怳
怵
恇
悔
悝
悞
惋
惔
惕
惝
惸
愜
愫
愰
愷
慨
憍
憎
憼
憹
懲
戢
戾
扃
扖
扚
扯
抅
拄
拖
拼
挊
挘
挹
捃
捥
捼
揥
揭
揵
搐
搔
搢
摹
摑
摠
摭
擎
撾
撿
擄
擊
擐
擷
擻
攢
攩
敏
敧
斝
既
昀
昉
昕
昞
昺
昢
昤
昫
昰
昱
昳
曻
晈
晌
𣇄
晙
晚
晡
晥
晳
晷
晸
暍
暑
暠
暲
暻
曆
曈
㬢
曛
曨
曺
朓
朗
朳
杦
杇
杈
杻
极
枓
枘
枛
枻
柹
柀
柗
柼
栁
桒
栝
栬
栱
桛
桲
桵
梅
梣
梥
梲
棈
棐
棨
棭
棰
棱
棼
椊
楉
𣗄
椵
楂
楗
楣
楤
楨
榀
﨔
榥
榭
槏
㮶
㯃
槢
槩
槪
槵
槶
樏
樕
𣜿
樻
樾
橅
橐
橖
橛
橫
橳
𣝣
檉
檔
檝
檞
檥
櫤
櫧
㰏
欄
欛
欞
欬
欵
歆
歖
歠
步
歧
歷
殂
殩
殭
殺
每
毖
毗
毿
氅
氐
氳
汙
汜
沪
汴
汶
沅
沆
沘
沜
泻
泆
泔
泠
泫
泮
𣳾
洄
洎
洮
洱
洹
洿
浘
浥
海
涂
涇
涉
涔
涪
涬
涿
淄
淖
淚
淛
淝
淼
渚
渴
湄
湜
湞
溫
溱
滁
滇
滎
漐
漚
漢
漪
漯
漳
潑
潙
潞
潡
潢
潾
澈
澌
澍
澔
澠
澧
澶
澼
濇
濊
濹
濰
濵
瀅
瀆
瀨
灊
灝
灞
灎
灤
灵
炅
炤
炫
炷
烔
烘
烤
焏
焫
焞
焠
焮
焰
煆
煇
煑
煮
煒
煜
煠
煨
凞
熅
熇
熒
燁
熺
燄
燾
爀
爕
牕
牖
㸿
犍
犛
犾
狀
狻
𤟱
猧
猨
猪
獐
獦
獼
玕
玟
玠
玢
玦
玫
珉
珏
珖
珙
珣
珩
琇
琊
琚
琛
琢
琦
琨
琪
琫
琬
琮
琯
琰
瑄
瑆
瑇
瑋
瑗
瑢
瑫
瑭
璆
璇
璉
璘
璜
璟
璣
璐
璦
璨
璩
璵
璿
瓈
瓉
瓚
瓿
甁
甗
甯
畯
畹
疒
㽲
痎
痤
瘀
瘂
瘈
瘕
瘖
瘙
瘞
瘭
瘵
癃
癋
癤
癥
癭
癯
癱
皁
皛
皝
皞
皦
皪
皶
盅
盌
盎
盔
盦
盱
盼
眊
眙
眴
眶
睆
睍
睎
睜
睟
睢
睺
瞀
瞔
瞪
矠
砭
𥒎
硃
硎
硏
硑
硨
确
碑
碰
𥔎
碭
磤
磲
礀
磷
礜
礮
礱
礴
社
祉
祅
祆
祈
祐
祖
祜
祝
神
祥
祹
禍
禎
福
禘
禱
禸
秈
秊
𥝱
秔
秞
秫
秭
稃
穀
稹
穝
穭
突
窅
窠
𥧄
窳
窻
竎
竫
竽
笒
笭
笻
筇
筎
筠
筭
筯
筲
箞
節
篗
篙
簁
簱
簞
簠
簳
簶
䉤
𥶡
籙
籭
籹
粏
粔
粠
粼
糕
糙
糝
紇
紈
紓
紝
紣
紱
絁
絈
絓
絜
絺
綃
綋
綠
綦
緂
緌
緖
緣
練
縨
縈
縑
縕
繁
繇
繒
繡
纊
纍
罇
署
羑
羗
羿
翎
翛
翟
翬
翮
翺
者
耔
耦
耵
耷
耼
胊
胗
胠
胳
脘
腊
腠
腧
腨
腭
膻
臊
臏
臗
臭
䑓
䑛
艠
艴
𦫿
芎
芡
芣
芤
芩
芮
芷
芾
芿
苆
苕
苽
苾
茀
茁
荢
茢
茭
茺
荃
荇
荑
荕
荽
莆
莒
莘
莧
莩
莿
菀
菇
菏
菑
菡
菪
萁
萆
萊
著
葈
葟
葰
葳
蒅
蒞
蒯
蒴
蒺
蓀
蓂
𦹀
蔲
蔞
蔣
蔯
蕙
蕤
﨟
薭
蕺
薌
薏
薢
薰
藋
藎
藭
蘒
藿
蘄
蘅
蘐
𧃴
蘘
蘩
蘸
虗
虛
虜
虢
䖝
虬
虵
蚘
蚸
蛺
蛼
蛽
蜋
蝱
螇
螈
螬
螭
螵
䗪
蟖
蟬
蠆
蠊
蠐
蠔
蠟
袘
袪
裊
裎
𧚄
裵
褜
褐
褘
褙
褚
褧
褰
褲
褹
襀
覔
視
觔
觥
觶
訒
訕
訢
訷
詇
詎
詝
詡
詵
詹
誧
諐
諟
諴
諶
諸
謁
謹
譆
譔
譙
譩
讝
豉
豨
賓
賡
賴
賸
賾
贈
贒
贛
趯
跎
跑
跗
踠
踣
踽
蹰
蹻
𨉷
軀
䡄
軺
輞
輭
輶
轔
𨏍
辦
辵
迤
迨
迮
逈
逭
逸
邈
邕
邗
邙
邛
邢
邳
邾
郄
郅
郇
郗
郝
郞
郯
郴
都
鄔
鄕
鄖
鄢
鄣
鄧
鄯
鄱
鄴
鄽
酈
酛
醃
醞
醬
醱
醼
釗
釻
釤
釥
釭
釱
鈇
鈐
鈸
鈹
鈺
鈼
鉀
鉃
鉏
鉸
銈
鋂
鋋
鋌
鋓
鋠
鋿
錄
錟
錡
錥
鍈
鍉
鍊
鍤
鍥
鍪
鍰
鎛
鎣
鎺
鏆
鏞
鏟
鐄
鏽
鐳
鑊
鑣
鑫
鑱
鑲
閎
閟
閦
閩
閬
閶
閽
闋
闐
闓
䦰
闚
闞
陘
隄
隆
隝
隤
隥
雒
雞
難
雩
雯
霳
霻
靍
靎
靏
靚
靮
靳
鞕
鞮
鞺
韁
韉
韞
韛
韴
響
頊
頞
頫
頰
頻
顒
顓
顖
顗
顙
顚
類
顥
顬
颺
飈
飧
饘
馞
騂
騃
騤
騭
騮
騸
驊
驎
驒
骶
髁
髃
髎
髖
髹
鬂
鬈
鬠
䰗
鬭
魞
魹
魦
魲
魵
鮄
鮊
鮏
鮞
鮧
鯁
鯎
鯥
鯸
鯽
鰀
鰣
鱁
鱏
鱐
鱓
鱣
鱥
鱷
鴝
鴞
鵃
鵇
鵒
鵣
鵰
鵼
鶊
鶖
鷀
鶬
鶼
鷗
𪆐
鷧
鸇
鸕
鹼
麞
麤
麬
麯
麴
麵
黃
黑
鼐
鼹
齗
龐
龔
龗
龢
姸
屛
幷
瘦
繫
`.trim().split(`
`),`
𠂉
丂
丏
丒
丩
丫
丮
乀
乇
么
𠂢
乑
㐆
𠂤
乚
乩
亝
㐬
㐮
亹
亻
𠆢
亼
仃
仈
仐
仫
仚
仱
仵
伀
伖
佤
伷
伾
佔
佘
𠈓
佷
佸
佺
佽
侂
侅
侒
侚
俦
侲
侾
俅
俋
俏
俒
㑪
俲
倀
倐
倓
倜
倞
倢
㑨
偂
偆
偎
偓
偗
偣
偦
偪
偰
傣
傈
傒
傓
傕
傖
傜
傪
𠌫
傱
傺
傻
僄
僇
僳
𠎁
僎
𠍱
僔
僙
僡
僩
㒒
儈
𠏹
儗
儛
𠑊
兠
𠔉
关
冃
冋
㒼
冘
冣
冭
㓇
冼
𠗖
𠘨
凳
凴
刂
划
刖
𠝏
剕
剜
剬
剷
劄
劂
𠠇
劘
𠠺
劤
劦
劯
劺
劻
勊
㔟
勑
𠢹
勷
匊
匋
匤
匵
匾
卂
𠥼
𠦝
卧
卬
卺
厤
厴
𠫓
厷
叀
𠬝
㕝
㕞
叕
叚
㕣
叴
叵
呕
吤
吨
㕮
呃
呢
呦
呬
咊
咍
咕
咠
咦
咭
咮
咷
咺
咿
哃
𠵅
哬
哯
哱
哳
唀
唁
唉
唼
啁
㖦
啇
啊
㖨
啠
啡
啤
𠷡
啽
喂
喈
喑
㗅
嗒
𠺕
𠹭
喿
嗉
嗌
嗑
嗝
㗚
嗢
𠹤
嗩
嘨
𠽟
嘇
嘐
嘰
嘷
㗴
嘽
嘿
噀
噇
噞
噠
噭
㘅
嚈
嚌
嚕
嚚
嚝
嚨
嚭
嚲
囅
囍
囟
囨
囶
囷
𡈁
圕
圣
𡉕
圩
𡉻
坅
坆
坌
坍
𡉴
坨
坯
坳
坴
坵
坻
𡋤
𡋗
垬
垚
垝
垞
垨
埗
𡋽
埌
𡌶
𡍄
埞
埦
埰
㙊
埸
埻
埽
堄
堞
堠
堧
堲
堹
𡏄
塉
塌
塧
墊
墋
墍
墏
墐
墔
墝
墪
墱
𡑭
壃
壍
壢
壳
壴
夅
夆
夋
复
夔
夤
𡗗
㚑
夽
㚙
奆
㚖
𦰩
奛
奟
𡙇
奵
奶
奼
妟
妮
妼
姈
姍
姞
姣
姤
姧
姮
𡜆
𡝂
㛏
娌
娍
娗
娧
娭
婕
婥
婺
媋
媜
媟
媠
媢
媱
媳
媵
媺
媿
嫚
嫜
嫠
嫥
嫰
嫮
嫵
嬀
嬈
嬗
嬴
嬭
孌
孒
孨
孯
孼
孿
宁
宄
𡧃
宖
宬
㝡
寀
㝢
寎
寖
㝬
㝫
寱
寽
㝵
尃
尩
尰
𡱖
屟
屣
屧
屨
屩
屰
𡴭
𡵅
屼
𡵸
𡵢
岈
岊
㟁
𡶡
𡶜
岠
岢
岦
岧
𡶒
岭
岵
𡶷
峉
𡷠
𡸳
崆
崐
崫
崝
崠
崤
崦
崱
崹
嵂
㟨
嵡
嵪
㟴
嵰
𡼞
㟽
嶈
㠀
嶒
嶔
嶗
嶙
嶰
嶲
嶴
𡽶
嶹
巑
巗
巘
巠
𡿺
巤
巩
㠯
帀
㠶
帒
帕
㡀
帟
帮
帾
幉
㡜
幖
㡡
幫
幬
幭
幮
𢅻
庥
庪
庬
庹
庿
廆
廒
廙
𢌞
廽
弈
弎
弜
𢎭
弞
彇
彣
彲
彾
徏
徢
徤
徸
忄
㣺
忇
忋
忒
忓
忔
忢
忮
忯
忳
忼
㤗
怗
怢
怤
㤚
恌
恿
悊
悕
您
𢛳
悰
悱
悾
惈
惙
惛
惮
惲
惵
愐
愒
愓
愙
愞
愺
㥯
慁
慆
慠
慼
𢡛
憒
憓
憗
憘
憥
憨
憭
𢢫
懕
懝
懟
懵
𢦏
戕
戣
戩
扆
扌
扑
扒
扡
扤
扻
扭
扳
抙
抦
拕
𢪸
拽
挃
挍
挐
𢭏
𢭐
挲
挵
挻
挼
捁
捄
捎
𢭆
捙
𢰝
𢮦
捬
掄
掙
𢰤
掔
掽
揷
揔
揕
揜
揠
揫
揬
揲
搉
搞
搥
搩
搯
摚
摛
摝
摳
摽
撇
撑
撝
撟
擋
擌
擕
擗
𢷡
擤
擥
擿
攄
㩮
攏
攔
攖
㩳
攞
攲
敄
敔
敫
敺
斁
斄
斅
斊
斲
斵
斸
斿
旂
旉
旔
㫖
旲
旹
旼
昄
昈
昡
昪
晅
晑
晎
㫪
𣇃
晗
晛
晣
𣇵
𣆶
晪
晫
晬
晭
晻
暀
暐
暒
暙
㬎
暭
暱
暵
㬚
暿
㬜
曬
㫗
朁
朅
朒
𣍲
朙
𣏓
𣏒
杌
杍
杔
杝
𣏐
𣏤
𣏕
杴
杶
𣏚
枒
𣏟
荣
栐
枰
枲
柃
柈
柒
柙
柛
柰
柷
𣑊
𣑑
𣑋
栘
栟
栭
𣑥
栳
栻
栾
桄
桅
桉
桌
桕
桗
㭷
桫
桮
桺
桼
梂
梐
梖
㭭
梘
梙
梚
梜
梪
梫
梴
梻
棻
𣓤
𣕚
﨓
棃
棅
棌
棏
棖
棙
棤
棥
棬
棷
椃
椇
㮇
㮈
𣖔
椻
㮍
楆
楩
楬
楲
楺
楿
榒
㮤
榖
榘
榦
榰
榷
榺
榼
槀
槑
槖
𣘹
𣙇
樰
𣘸
𣘺
槣
槮
槯
槳
㯍
槴
槾
樑
樚
樝
𣜜
樲
樳
樴
樿
橆
橉
橺
橎
橒
橤
𣜌
橾
檃
檋
㯰
檑
檟
檡
𣝤
檫
檽
櫆
櫔
櫐
櫜
櫝
𣟿
𣟧
櫬
櫱
櫲
櫳
櫽
𣠤
欋
欏
欐
欑
𣠽
欗
㰦
欯
歊
歘
歬
歵
歺
殁
殛
殮
𣪘
殽
殾
毇
毈
毉
毚
毦
毧
毮
毱
氂
氊
氎
氵
氶
氺
𣱿
氿
汍
汛
汭
沄
沉
㳃
沔
沕
沗
沭
泂
泐
㳒
泖
泚
泜
泩
泬
泭
𣴀
洀
洊
洤
洦
洧
汧
洯
洼
浛
浞
浠
浰
涀
涁
涊
涍
涑
涘
𣵀
渗
𣷺
𣷹
𣷓
涫
涮
涴
淂
洴
淈
淎
淏
淐
淟
淩
淶
渶
渞
渢
渧
㴑
渲
渼
湈
湉
湋
湌
湏
湑
湓
湔
湗
湣
㴞
溓
溧
溴
溿
滃
滊
滙
漵
滫
滹
滻
漊
漌
漘
漥
漶
漼
𣽾
潒
潗
潚
潠
潨
澘
潽
澐
澖
澾
澟
澥
澯
㵤
澵
濈
濉
濚
濞
濩
𤂖
濼
瀀
瀇
瀊
瀣
𤄃
瀹
瀺
瀼
灃
灇
灋
㶚
灔
灥
灩
灬
灮
灶
灾
炁
炆
炕
炗
炻
𤇆
炟
炱
𤇾
烬
烊
烑
烓
烜
焃
焄
焆
焇
焈
焌
㷀
焯
焱
煐
煊
煓
煞
㷔
熖
熀
熛
熠
熢
熮
熯
熳
𤎼
燋
燓
燙
燜
爇
㸅
爫
爫
爴
爸
爹
丬
牂
牓
牗
牣
𤘩
牮
牯
牸
牿
犎
𤚥
犭
犮
犰
犱
狁
㹠
狌
㹦
㹨
狳
狺
猇
猒
猘
猙
㺃
猹
猬
猱
猳
猽
獒
㺔
獫
獬
𤢖
獮
獯
獱
獷
玁
玅
玊
玔
玘
玜
玞
玥
玨
玵
玷
玹
玼
玿
珅
珋
珡
珧
珹
琓
珺
琁
琤
琱
琹
瑓
瑀
瑃
瑍
瑒
瑝
瑱
璁
璅
璈
𤩍
璒
璗
璙
璠
璡
璥
璪
璫
璹
璻
璺
瓖
瓘
瓞
瓯
瓫
𤭖
瓺
𤭯
甠
甤
甪
㽗
𤰖
甽
甾
畀
畈
畎
畐
畒
畬
畲
畱
畺
畽
畾
疁
𤴔
疌
㽵
疢
㽷
疰
疷
疿
痀
痆
痏
痓
痝
痟
痠
痧
痬
痮
痱
痹
瘃
瘘
瘇
瘏
㾮
𤸎
瘓
瘛
瘜
𤸷
瘥
瘨
瘼
瘳
𤹪
㿉
癁
𤺋
癉
癕
㿗
癮
皕
皜
皡
皠
皧
皨
皯
𥁊
盉
𥁕
盨
盬
𥄢
眗
眚
眭
眵
𥆩
䀹
𥇥
𥇍
睘
睠
睪
𥈞
睲
睼
睽
𥉌
䁘
瞚
瞟
瞢
瞤
瞩
矞
矟
矤
矦
矪
矬
䂓
矰
矴
矻
𥐮
砅
砆
砉
砍
砙
砡
砬
硇
硤
硪
𥓙
碊
碔
碤
碝
碞
碟
碻
磈
磌
磎
磕
磠
磡
磦
磹
磺
磻
磾
𥖧
礐
礛
礰
礥
礻
祊
祘
祛
䄅
祧
祲
禔
禕
禖
禛
禡
禩
禴
离
秂
秇
秌
种
秖
䅈
𥞩
𥞴
䅏
稊
稑
稕
稛
稞
䅣
稭
稸
穇
穌
穖
穙
穜
穟
穠
穧
穪
穵
穸
窂
窊
窐
窣
窬
𥧔
䆴
窹
窼
窾
䆿
竌
竑
竧
竨
竴
𥫤
𥫣
笇
𥫱
笽
笧
笪
笮
笯
笱
䇦
䇳
筿
筁
䇮
筕
筹
筤
筦
筩
筳
𥮲
䈇
箐
箑
箛
䈎
箯
箵
箼
篅
篊
𥱋
𥱤
篔
篖
篚
篪
篰
簃
簋
簎
簏
簦
籅
籊
籑
籗
籞
籡
籩
籮
籯
籰
𥸮
𥹖
𥹥
粦
𥹢
粶
粷
粿
𥻘
糄
𥻂
糈
糍
𥻨
糗
𥼣
糦
糫
𥽜
糵
紃
紉
䋆
紒
紞
𥿠
𥿔
紽
紾
絀
絇
𦀌
𥿻
䋖
絙
絚
絪
絰
䋝
絿
𦀗
綆
綈
綌
綗
𦁠
綝
綧
綪
綶
綷
緀
緗
緙
緦
緱
緹
䌂
𦃭
縉
縐
縗
縝
縠
縧
縬
繅
繳
繵
繾
纆
纇
䌫
纑
纘
纚
䍃
缼
缻
缾
罃
罄
罏
㓁
𦉰
罒
𦊆
罡
罣
罤
罭
罽
罾
𦍌
羐
养
𣴎
羖
羜
羭
𦐂
翃
翏
翣
翥
翯
翲
耂
耊
耈
耎
耑
耖
耤
耬
耰
聃
聦
聱
聵
聻
肙
肜
肤
肧
肸
𦙾
胅
胕
胘
胦
𦚰
脍
胵
胻
䏮
脵
脖
脞
䏰
脤
脧
脬
𦜝
脽
䐈
腩
䐗
膁
䐜
膄
膅
䐢
膘
膲
臁
臃
臖
臛
𦣝
臤
𦣪
臬
𦥑
臽
臿
𦥯
舄
𦧝
舙
舡
舢
𦨞
舲
舴
舼
艆
艉
艅
𦩘
艋
䑶
艏
䑺
艗
𦪌
艜
艣
𦪷
艹
艹
艹
䒑
艽
艿
芃
芊
芓
芧
芨
芲
芴
芺
芼
苢
苨
苷
茇
茈
茌
荔
茛
茝
茰
茼
荄
荗
䒾
荿
䓔
䒳
莍
莔
莕
莛
莝
菉
菐
菔
菝
菥
菹
萏
萑
萕
𦱳
萗
萹
葊
葏
葑
葒
葙
葚
葜
𦳝
葥
葶
葸
葼
蒁
䔍
蓜
蒗
蒦
蒾
䔈
蓎
蓏
蓓
𦹥
蓧
蓪
蓯
蓰
蓱
蓺
蓽
蔌
蔛
蔤
蔥
蔫
蔴
蕏
蕯
䔥
䕃
蔾
蕑
蕓
蕞
蕡
蕢
𦾔
蕻
蕽
蕿
薁
薆
薓
薝
薟
𦿸
𦿶
𦿷
薷
薼
藇
藊
藘
藙
藟
藡
藦
藶
蘀
蘑
蘞
蘡
蘤
蘧
𧄍
蘹
蘼
𧄹
虀
蘒
虓
虖
虯
虷
虺
蚇
蚉
蚍
蚑
蚜
蚝
蚨
﨡
蚱
蚳
蛁
蛃
蛑
蛕
蛗
蛣
蛦
䖸
蜅
蜇
蜎
蜐
蜓
蜙
蜟
蜡
蜣
蜱
蜺
蜾
蝀
蝃
蝑
蝘
蝤
蝥
蝲
蝼
𧏛
𧏚
螧
螉
螋
螓
螠
𧏾
䗥
螾
𧐐
蟁
蟎
蟵
蟟
𧑉
蟣
蟥
蟦
蟪
蟫
蟭
蠁
蠃
蠋
蠓
蠨
蠮
蠲
蠼
䘏
衊
衘
衟
衤
𧘕
𧘔
衩
𧘱
衯
袠
袼
袽
袾
裀
裒
𧚓
裑
裓
裛
裰
裱
䙁
褁
𧜎
褷
𧜣
襂
襅
襉
𧝒
䙥
襢
覀
覉
覐
覟
覰
覷
觖
觘
觫
䚡
觱
觳
觽
觿
䚯
訑
訔
𧦅
訡
訵
訾
詅
詍
詘
誮
誐
誷
誾
諗
諼
𧪄
謊
謅
謍
謜
謟
謭
譃
䜌
譑
譞
譶
譿
讁
讋
讔
讕
讜
讞
谹
𧮳
谽
𧮾
𧯇
豅
豇
豏
豔
豗
豩
豭
豳
𧲸
貓
貒
貙
䝤
貛
貤
賖
賕
賙
𧶠
賰
賱
𧸐
贉
贎
赬
趄
趕
趦
𧾷
跆
跈
跙
跬
踌
䟽
跽
踆
𨂊
踔
踖
踡
踢
踧
𨂻
䠖
踶
踹
蹋
蹔
蹢
蹬
蹭
蹯
躘
躞
躮
躳
躵
躶
躻
𨊂
軑
軔
䡎
軹
𨋳
輀
輈
輗
輫
轀
轊
轘
𨐌
辤
辴
辶
辶
𨑕
迁
迆
﨤
迊
迍
迓
迕
迠
迱
迵
迻
适
逌
逷
𨕫
遃
遄
遝
𨗈
𨗉
邅
邌
邐
阝
邡
䢵
邰
邶
郃
郈
𨛗
郜
郟
𨛺
郶
郲
鄀
郫
郾
郿
鄄
鄆
鄘
鄜
鄞
鄷
鄹
鄺
酆
酇
酗
酙
酡
酤
酴
酹
醅
醎
醨
醮
醳
醶
釃
釄
釚
𨥉
𨥆
釬
釮
鈁
鈊
鈖
鈗
𨥫
鈳
鉂
鉇
鉊
鉎
鉑
鉖
鉙
鉠
鉡
鉥
鉧
鉨
𨦇
𨦈
鉼
鉽
鉿
銉
銍
銗
銙
銟
銧
銫
𨦺
𨦻
銲
銿
鋀
鋆
鋎
鋐
鋗
鋙
鋥
鋧
錑
𨨞
𨨩
鋷
鋹
鋻
錂
錍
錕
錝
錞
錧
錩
𨩱
𨩃
鍇
鍑
鍗
鍚
鍫
鍱
鍳
鎡
𨪙
𨫍
鎈
鎋
鎏
鎞
鏵
𨫤
𨫝
鏱
鏁
鏇
鏜
鏢
鏧
鐉
鐏
鐖
鐗
鏻
鐲
鐴
鐻
鑅
𨯁
𨯯
鑭
鑯
镸
镹
閆
閌
閍
𨴐
閫
閴
𨵱
闈
𨷻
𨸟
阬
阳
阴
𨸶
阼
陁
陡
𨺉
隂
𨻫
隚
𨼲
䧧
隩
隯
隳
隺
隽
䧺
𨿸
雘
雚
雝
䨄
霔
霣
䨩
霶
靁
靇
靕
靗
靛
靪
𩊠
𩊱
鞖
鞚
鞞
鞢
鞱
鞲
鞾
韌
韑
韔
韘
韙
韡
韱
頄
頍
頎
頔
頖
䪼
𩒐
頣
頲
頳
頥
顇
顦
颫
颭
颰
𩗏
颷
颸
颻
颼
颿
飂
飇
飋
飠
𩙿
飡
飣
飥
飪
飰
飱
飳
餈
䬻
𩛰
餖
餗
𩜙
餚
餛
餜
𩝐
餱
餲
餳
餺
餻
餼
饀
饁
饆
饍
饎
饜
饟
饠
馣
馦
馹
馽
馿
駃
駉
駔
駙
駞
𩣆
駰
駹
駼
騊
騑
騖
騚
騠
騱
騶
驄
驌
驘
䯂
骯
䯊
骷
䯒
骹
𩩲
髆
髐
髒
髕
䯨
髜
髠
髥
髩
鬃
鬌
鬐
鬒
鬖
鬜
鬫
鬳
鬽
䰠
魋
魣
魥
魫
魬
魳
魶
魷
鮦
鮬
鮱
𩷛
𩸽
鮲
鮸
鮾
鯇
鯳
鯘
鯝
鯧
鯪
鯫
鯯
鯮
𩸕
鯺
𩺊
鯷
𩹉
鰖
鰘
鰙
鰚
鰝
鰢
鰧
鰩
鰪
𩻄
鰱
鰶
鰷
鱅
鱜
𩻩
鱉
鱊
𩻛
鱔
鱘
鱛
鱝
鱟
鱩
鱪
鱫
鱭
鱮
鱰
鱲
鱵
鱺
鳦
鳲
鴋
鴂
𩿎
鴑
鴗
鴘
𪀯
䳄
𪀚
鴲
䳑
鵂
鵊
鵟
鵢
𪃹
鵩
鵫
𪂂
鵳
鵶
鵷
鵾
鶄
鶍
鶙
鶡
鶿
鶵
鶹
鶽
鷃
鷇
鷉
鷖
鷚
鷟
鷠
鷣
鷴
䴇
鸊
鸂
鸍
鸙
鸜
鸝
鹻
𢈘
麀
麅
麛
麨
𪎌
麽
𪐷
黟
黧
黮
黿
鼂
䵷
鼃
鼗
鼙
鼯
鼷
鼺
鼽
齁
齅
齆
齓
齕
齘
𪗱
齝
𪘂
齩
𪘚
齭
齰
齵
𪚲
`.trim().split(`
`);const JKAT10=Array.from("一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六"),JKAT9=Array.from("引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話"),JKAT8=Array.from("悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和"),JKAT7=Array.from("愛案以衣位茨印英栄媛塩岡億加果貨課芽賀改械害街各覚潟完官管関観願岐希季旗器機議求泣給挙漁共協鏡競極熊訓軍郡群径景芸欠結建健験固功好香候康佐差菜最埼材崎昨札刷察参産散残氏司試児治滋辞鹿失借種周祝順初松笑唱焼照城縄臣信井成省清静席積折節説浅戦選然争倉巣束側続卒孫帯隊達単置仲沖兆低底的典伝徒努灯働特徳栃奈梨熱念敗梅博阪飯飛必票標不夫付府阜富副兵別辺変便包法望牧末満未民無約勇要養浴利陸良料量輪類令冷例連老労録"),JKAT6=Array.from("圧囲移因永営衛易益液演応往桜可仮価河過快解格確額刊幹慣眼紀基寄規喜技義逆久旧救居許境均禁句型経潔件険検限現減故個護効厚耕航鉱構興講告混査再災妻採際在財罪殺雑酸賛士支史志枝師資飼示似識質舎謝授修述術準序招証象賞条状常情織職制性政勢精製税責績接設絶祖素総造像増則測属率損貸態団断築貯張停提程適統堂銅導得毒独任燃能破犯判版比肥非費備評貧布婦武復複仏粉編弁保墓報豊防貿暴脈務夢迷綿輸余容略留領歴"),JKAT5=Array.from("胃異遺域宇映延沿恩我灰拡革閣割株干巻看簡危机揮貴疑吸供胸郷勤筋系敬警劇激穴券絹権憲源厳己呼誤后孝皇紅降鋼刻穀骨困砂座済裁策冊蚕至私姿視詞誌磁射捨尺若樹収宗就衆従縦縮熟純処署諸除承将傷障蒸針仁垂推寸盛聖誠舌宣専泉洗染銭善奏窓創装層操蔵臓存尊退宅担探誕段暖値宙忠著庁頂腸潮賃痛敵展討党糖届難乳認納脳派拝背肺俳班晩否批秘俵腹奮並陛閉片補暮宝訪亡忘棒枚幕密盟模訳郵優預幼欲翌乱卵覧裏律臨朗論"),JKAT4=Array.from("侵獣紫項兼況輝較援握振瞬雌稿剣狭儀獲煙扱浸旬執豪軒恐戯刈鉛依寝巡芝込圏響詰甘縁威慎盾斜婚堅驚却汗汚為震召煮鎖遣仰脚乾押偉薪床釈彩玄駆及勧奥違尽沼寂歳枯屈丘歓憶維陣称朱載誇掘朽監菓緯尋紹狩剤鼓繰巨環暇壱吹詳趣咲互恵拠鑑箇芋是丈需惨抗傾距含雅陰姓畳舟旨攻継御奇介隠征殖秀伺更迎凶祈戒影跡飾襲刺恒撃叫鬼皆鋭占触柔脂荒肩狂幾壊越麗腰漫柄微薄稲滴淡扇暦踊妙壁匹爆踏添嘆鮮劣謡眠捕描髪闘殿端訴烈翼矛舗浜抜胴吐弾僧恋雷霧抱敏罰峠途恥燥露頼娘峰怖般突渡致騒郎絡茂砲浮販鈍奴遅贈惑欄猛忙普搬曇怒蓄即腕離網坊腐範弐到跳俗粒黙肪敷繁悩逃徴耐慮紋冒膚盤濃倒澄替療躍傍賦彼杯唐沈沢隣雄帽舞疲輩桃珍拓涙与凡幅被拍透抵濁隷誉盆払避泊盗堤脱齢溶慢噴尾迫塔摘丹"),JKAT3=Array.from("婿譲殊削拘憩喫貫餓哀請嘱寿搾郊鶏虐喚怪慰斥辱潤錯控鯨虚換悔詠隻伸遵撮慌倹峡敢塊悦惜辛如擦硬賢脅緩慨閲籍審徐暫絞幻凝企該炎摂炊匠祉綱孤斤忌概宴潜粋昇施酵弧緊軌郭欧繕衰掌諮克雇愚既隔殴阻酔晶侍獄顧偶棋穫乙措遂焦慈恨娯遇棄岳卸粗穂衝軸紺悟刑騎掛穏礎随鐘疾魂孔契欺滑佳双髄冗湿墾巧啓犠肝架桑瀬嬢赦債甲掲菊冠華掃牲錠邪催坑携吉勘嫁励幽乏伏縛訂胆葬零誘妨覆伐締鍛遭霊憂房紛帆哲壇憎裂揚某墳伴斗稚促廉揺膨癖畔塗畜賊錬擁謀募藩凍窒怠炉抑墨慕蛮陶抽胎浪裸没簿卑痘鋳袋廊濫翻芳碑匿駐逮楼吏魔邦泌篤彫滞漏隆埋奉姫豚超滝湾了膜胞漂尿聴択猟又倣苗粘陳卓陵魅崩赴婆鎮託糧滅飽符排墜諾厘免縫封陪帝奪"),JKAT2s=Array.from("詔殉儒栽肯薫擬且寡亜奨循囚斎侯茎糾缶稼尉彰庶臭索洪渓窮陥蚊逸償緒愁酢貢蛍拒患拐姻礁叙酬桟溝慶享堪懐韻浄升醜傘衡傑挟棺劾畝剰抄汁肢購嫌恭款涯浦壌肖充嗣拷献矯閑垣疫醸尚渋賜剛謙暁寛核謁津宵銃璽酷繭菌憾殻猿唇症叔漆昆顕琴還嚇凹娠祥淑遮懇懸謹艦括翁紳渉粛蛇唆弦襟頑喝虞診訟塾酌詐呉吟飢渇渦刃硝俊爵砕碁隅宜褐禍迅粧准珠宰江勲偽轄靴寮悠堀憤煩尼艇挑霜践甚倫猶奔丙頒妊泥眺藻遷帥累裕麻併妃忍迭釣妥薦睡塁融摩塀披寧徹懲堕繊枢戻庸磨幣扉把撤勅惰禅崇鈴窯抹弊罷覇悼朕駄漸据賄羅岬偏猫廃搭塚泰租杉枠酪銘遍賓培棟漬濯疎斉痢妄泡頻媒筒坪但塑逝履盲俸瓶賠謄呈棚壮誓柳耗褒扶伯騰廷痴荘析竜厄剖附舶洞邸逐捜拙硫愉紡譜漠督亭秩挿窃虜諭朴侮肌凸貞嫡曹仙涼癒僕沸鉢屯逓衷喪栓僚唯撲雰閥軟偵弔槽旋"),JKAT2=Array.from("羞拶傲拳僅鎌楷唄挨蹴斬駒鍵錦韓潰鬱曖憧恣頃舷惧玩諧怨宛拭摯痕股串伎崖艶嵐尻餌沙虎窟亀蓋旺畏芯叱𠮟挫錮詣毀骸臆萎腎嫉采勾憬畿柿俺椅須腫塞梗稽臼顎苛彙裾呪柵喉隙嗅葛牙咽凄袖刹乞桁巾釜瓦淫賂沃蜜璧箸貪爪戴遡醒弄拉冥蔑氾丼鶴誰曽脊籠辣麺哺汎那諦旦爽戚麓藍冶蜂斑謎溺綻痩煎脇璃弥貌眉鍋塡緻踪羨慄闇頰膝匂妬酎捉腺侶喩睦肘虹賭貼遜詮瞭湧勃訃捻藤嘲汰箋瑠妖昧蔽罵瞳捗唾膳呂瘍枕餅剝頓椎堆狙");function setDict(e){const t={};for(let n=0;n<e.length;n++)e[n].forEach(e=>{t[e]=n});return t}function setJoyoDict(){const e=[JKAT10,JKAT9,JKAT8,JKAT7,JKAT6,JKAT5,JKAT4,JKAT3,JKAT2s,JKAT2];return setDict(e)}function setJKAT1s(){const e=[];return JISCode1.forEach(t=>{t in joyoDict===!1&&e.push(t)}),e}function setJKAT1(){const e=[];return JISCode2.forEach(t=>{t in joyoDict===!1&&e.push(t)}),e}const joyoDict=setJoyoDict(),JKAT1s=setJKAT1s(),JKAT1=setJKAT1(),JKAT=[JKAT10,JKAT9,JKAT8,JKAT7,JKAT6,JKAT5,JKAT4,JKAT3,JKAT2s,JKAT2,JKAT1s,JKAT1],jkat=new Kanji(JKAT),dirNames=["小1","小2","小3","小4","小5","小6","中2","中3","高校","常用","準1級","1級"];let kanjis="",level=2,prevCanvasSize,canvasSize=140,maxWidth=4;window.innerWidth>768&&(canvasSize=280,maxWidth=8);const animCJKDir="/animCJK",audioContext=new AudioContext,audioBufferCache={};loadAudio("stupid","/touch-shuji/mp3/stupid5.mp3"),loadAudio("correct","/touch-shuji/mp3/correct3.mp3"),loadAudio("correctAll","/touch-shuji/mp3/correct1.mp3"),loadAudio("incorrect","/touch-shuji/mp3/incorrect1.mp3"),loadConfig();function getDictUrl(e){const n="https://marmooo.github.io",t=jkat.getGrade(e);return t<0?null:n+"/kanji-dict/"+dirNames[t]+"/"+e+"/"}function loadConfig(){localStorage.getItem("darkMode")==1&&document.documentElement.setAttribute("data-bs-theme","dark"),localStorage.getItem("hint")==1&&(document.getElementById("hint").textContent="EASY"),localStorage.getItem("touch-shuji-level")&&(level=parseInt(localStorage.getItem("touch-shuji-level")))}function toggleDarkMode(){localStorage.getItem("darkMode")==1?(localStorage.setItem("darkMode",0),document.documentElement.setAttribute("data-bs-theme","light"),boxes.forEach(e=>{[...e.shadowRoot.querySelectorAll("object, canvas")].forEach(e=>{e.removeAttribute("style")})})):(localStorage.setItem("darkMode",1),document.documentElement.setAttribute("data-bs-theme","dark"),boxes.forEach(e=>{[...e.shadowRoot.querySelectorAll("object, canvas")].forEach(e=>{e.setAttribute("style","filter: invert(1) hue-rotate(180deg);")})}))}function toggleHint(e){localStorage.getItem("hint")==1?(localStorage.setItem("hint",0),e.target.textContent="HARD"):(localStorage.setItem("hint",1),e.target.textContent="EASY"),toggleAllStroke()}function toggleScroll(){const e=document.getElementById("scrollable"),t=document.getElementById("pinned");e.classList.contains("d-none")?(document.removeEventListener("touchstart",scrollEvent,{passive:!1}),document.removeEventListener("touchmove",scrollEvent,{passive:!1}),e.classList.remove("d-none"),t.classList.add("d-none")):(document.addEventListener("touchstart",scrollEvent,{passive:!1}),document.addEventListener("touchmove",scrollEvent,{passive:!1}),e.classList.add("d-none"),t.classList.remove("d-none"))}async function playAudio(e,t){const s=await loadAudio(e,audioBufferCache[e]),n=audioContext.createBufferSource();if(n.buffer=s,t){const e=audioContext.createGain();e.gain.value=t,e.connect(audioContext.destination),n.connect(e),n.start()}else n.connect(audioContext.destination),n.start()}async function loadAudio(e,t){if(audioBufferCache[e])return audioBufferCache[e];const s=await fetch(t),o=await s.arrayBuffer(),n=await audioContext.decodeAudioData(o);return audioBufferCache[e]=n,n}function unlockAudio(){audioContext.resume()}class ProblemBox extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[globalCSS];const e=document.getElementById("problem-box").content.cloneNode(!0);this.shadowRoot.appendChild(e)}}customElements.define("problem-box",ProblemBox);class TehonBox extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[globalCSS];const e=document.getElementById("tehon-box").content.cloneNode(!0);this.shadowRoot.appendChild(e),document.documentElement.getAttribute("data-bs-theme")=="dark"&&[...this.shadowRoot.querySelectorAll("object")].forEach(e=>{e.setAttribute("style","filter: invert(1) hue-rotate(180deg);")})}}customElements.define("tehon-box",TehonBox);class TegakiBox extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.adoptedStyleSheets=[globalCSS];const e=document.getElementById("tegaki-box").content.cloneNode(!0);if(window.innerWidth>768){const t=e.querySelector("canvas");t.setAttribute("width",canvasSize),t.setAttribute("height",canvasSize)}this.shadowRoot.appendChild(e),document.documentElement.getAttribute("data-bs-theme")=="dark"&&[...this.shadowRoot.querySelectorAll("object, canvas")].forEach(e=>{e.setAttribute("style","filter: invert(1) hue-rotate(180deg);")})}}customElements.define("tegaki-box",TegakiBox);function getKakusu(e,t){const n="z"+t+"d",s=e.contentDocument.querySelectorAll('[id^="'+n+'"]'),o=[...s].map(e=>e.getAttribute("id")),i=o.map(e=>/[a-z]/.test(e.slice(-1))?e.slice(0,-1):e);return new Set(i).size}const alphabets="abcefghijklmnopqrstuvwxyz".split("");function getKakuPaths(e,t,n){const s="z"+t+"d"+n,o=e.querySelectorAll('[id="'+s+'"]');if(o.length!=0)return[...o];const i=[];for(let t=0;t<alphabets.length;t++){const n=e.querySelectorAll('[id="'+s+alphabets[t]+'"]');i.push(...n)}return i}function getTehonCanvas(e,t,n,s){return new Promise(o=>{const a=e.contentDocument.cloneNode(!0);for(let e=1;e<=n;e++){const o=getKakuPaths(a,t,e);s!=e?o.forEach(e=>e.remove()):o.forEach(e=>{e.setAttribute("stroke","black")})}const r=a.documentElement.outerHTML,c=new Blob([r],{type:"image/svg+xml"}),l=URL.createObjectURL(c),i=new Image;i.src=l,i.onload=()=>{const e=document.createElement("canvas");e.width=canvasSize,e.height=canvasSize;const t=e.getContext("2d",{alpha:!1});t.drawImage(i,0,0,canvasSize,canvasSize),o(e)}})}const specials=["20043","21450","27665","29995","30001","30002","30003","30011","31899","37325","37340"];function getKanjiDir(e,t){return/[ぁ-んァ-ヶ]/.test(e)?"svgsKana":specials.includes(t)?"svgsJaSpecial":"svgsJa"}function toKanjiId(e){const t=e.codePointAt(0).toString(10);return("00000"+t).slice(-5)}function loadSVG(e,t,n,s,o){let a;o?a=new TegakiBox:a=new TehonBox,boxes.push(a);const i=a.shadowRoot.querySelector("object"),r=`${animCJKDir}/${getKanjiDir(e,t)}/${t}.svg`;return i.setAttribute("alt",e),i.setAttribute("data",r),i.setAttribute("data-id",t),i.setAttribute("data-pos",s),o&&(i.onload=initTegakiSVG),n.appendChild(a),i}function showKanjiScore(e,t,n,s,o,i,a){e=Math.floor(e),playAudio(e>=80?"correct":"incorrect"),n.classList.remove("d-none"),n.textContent=e;for(let e=0;e<a;e++)changePathColor(e+1,s,i,"black");for(let e=0;e<a;e++)(!t[e][0]||t[e][0]<80)&&changePathColor(e+1,s,i,"red");localStorage.getItem("hint")!=1&&changeAllColor(o,i,"lightgray")}function getKanjiScores(e,t,n,s,o,i){return Promise.all(e).then(e=>{let a=0,r=0;return e.forEach(e=>{const[n,t]=e;a+=n*t,r+=t}),a/=r,showKanjiScore(a,e,t,n,s,o,i),a})}function getProblemScores(e,t,n,s){const o=[];return n.forEach((n,i)=>{const a=n.dataset.id,r=getKakusu(n,a),c=parseInt(n.dataset.pos),l=s[i].toData();let d=0;if(l.length!=0){const s=t.children[c].shadowRoot.querySelector("object"),o=e.children[c].shadowRoot.querySelector(".score"),i=getKakuScores(l,n,a,r);d=getKanjiScores(i,o,s,n,a,r)}o[i]=d}),Promise.all(o)}function setScoringButton(e,t,n,s,o,i){const a=e.shadowRoot.querySelector(".scoring");a.addEventListener("click",()=>{getProblemScores(t,n,s,o).then(t=>{if(t.every(e=>e>=80)){e.shadowRoot.querySelector(".guard").style.height="100%";const t=e.nextElementSibling;if(t){t.shadowRoot.querySelector(".guard").style.height="0";const e=document.getElementById("header").offsetHeight,n=t.getBoundingClientRect().top+document.documentElement.scrollTop-e;window.scrollTo({top:n,behavior:"smooth"})}else document.removeEventListener("touchstart",scrollEvent,{passive:!1}),document.removeEventListener("touchmove",scrollEvent,{passive:!1})}let n=localStorage.getItem("touch-shuji");if(n){let e=!1;t.forEach((t,s)=>{t<40&&(n=n.replace(i[s],""),e=!0)}),e&&localStorage.setItem("touch-shuji",n)}})})}function setSignaturePad(e){const t=e.parentNode.querySelector("canvas"),n=new SignaturePad(t,{minWidth:.1,maxWidth,penColor:"black",throttle:0,minDistance:0,velocityFilterWeight:0});return n}function setEraser(e,t,n,s,o){const i=s.getRootNode().host,a=[...t.children].findIndex(e=>e==i),r=n.children[a].shadowRoot.querySelector(".eraser");r.onclick=()=>{const n=e.toData();n&&e.clear();const i=parseInt(s.dataset.pos),a=t.children[i].shadowRoot.querySelector(".score");a.classList.add("d-none"),localStorage.getItem("hint")!=1&&changeAllColor(s,o,"none")}}function setDict1(e,t,n){const i=parseInt(t.dataset.pos),s=e.children[i].shadowRoot.querySelector(".dict"),o=getDictUrl(n);o?s.href=o:s.classList.add("d-none")}function loadProblem(e){const[s,c]=e.split("|"),o=new ProblemBox,t=o.shadowRoot,l=t.querySelector(".info");l.textContent=c;const d=t.querySelector(".search");d.href="https://www.google.com/search?q="+s+"とは";const r=[],i=[],n=t.querySelector(".tehon"),a=t.querySelector(".tegaki");return s.split("").forEach((e,t)=>{const o=toKanjiId(e);loadSVG(e,o,n,t,!1);const s=loadSVG(e,o,a,t,!0),c=setSignaturePad(s);r.push(s),i.push(c),setEraser(c,a,n,s,o),setDict1(n,s,e)}),setScoringButton(o,a,n,r,i,s),document.getElementById("problems").appendChild(o),i}function resizeTegakiContents(e){e.forEach(e=>{const n=e.canvas;n.setAttribute("width",canvasSize),n.setAttribute("height",canvasSize);const t=e.toData();if(t.length>0){if(e.maxWidth=maxWidth,prevCanvasSize<canvasSize)for(let e=0;e<t.length;e++)for(let n=0;n<t[e].length;n++)t[e][n].x/=2,t[e][n].y/=2;else for(let e=0;e<t.length;e++)for(let n=0;n<t[e].length;n++)t[e][n].x/=2,t[e][n].y/=2;e.fromData(t)}})}function loadDrill(e){let t=[];e.forEach(e=>{const n=loadProblem(e);t=t.concat(n)}),window.onresize=()=>{prevCanvasSize=canvasSize,window.innerWidth>=768?(canvasSize=280,maxWidth=8):(canvasSize=140,maxWidth=4),prevCanvasSize!=canvasSize&&resizeTegakiContents(t)}}function setStrokeWidth(e){return window.innerWidth>768?20+12/e:10+6/e}function toggleAllStroke(){const e=document.getElementById("problems").children;for(const t of e){const n=t.shadowRoot.querySelector(".tegaki").children;for(const t of n){const e=t.shadowRoot.querySelector("object"),s=e.dataset.id;toggleStroke(e,s)}}}function toggleStroke(e,t){const n="z"+t+"d",s=e.contentDocument.querySelectorAll('[id^="'+n+'"]');[...s].forEach(e=>{localStorage.getItem("hint")!=1?(e.style.fill="none",e.setAttribute("stroke","none")):(e.style.fill="lightgray",e.setAttribute("stroke","lightgray")),e.setAttribute("stroke-width",128)})}function changeAllColor(e,t,n){const s="z"+t+"d",o=e.contentDocument.querySelectorAll('[id^="'+s+'"]');[...o].forEach(e=>{e.style.fill=n})}function changePathColor(e,t,n,s){removeAnimations(t);const o=getKakuPaths(t.contentDocument,n,e);o.forEach(e=>{e.style.fill=s})}function countNoTransparent(e){let t=0;for(let n=3;n<e.length;n+=4)e[n]!=0&&(t+=1);return t}function getInclusionCount(e,t){for(let n=3;n<e.length;n+=4)t[n]!=0&&(e[n]=0);const n=countNoTransparent(e);return n}function getScoringFactor(e){switch(e){case 0:return.5**2;case 1:return.6**2;case 2:return.7**2;case 3:return.8**2;case 4:return.9**2;default:return.7**2}}function calcKakuScore(e,t,n){let o=1-Math.abs((t-e)/t);o>1&&(o=1);let i=(e-n)/e;i>1&&(i=1);let s=o*i*100/getScoringFactor(level);return s<0&&(s=0),s>100&&(s=100),isNaN(s)&&(s=0),s}function getKakuScores(e,t,n,s){const o=setStrokeWidth(s),i=new Array(s);for(let a=0;a<s;a++)i[a]=new Promise(i=>{if(e[a]){e[a].minWidth=o,e[a].maxWidth=o;const r=document.createElement("canvas");r.setAttribute("width",canvasSize),r.setAttribute("height",canvasSize);const l=r.getContext("2d",{alpha:!1}),d=new SignaturePad(r,{minWidth:o,maxWidth:o,penColor:"black"});d.fromData([e[a]]);const c=l.getImageData(0,0,canvasSize,canvasSize).data,u=countNoTransparent(c);getTehonCanvas(t,n,s,a+1).then(e=>{const t=e.getContext("2d",{alpha:!1}).getImageData(0,0,canvasSize,canvasSize).data,n=countNoTransparent(t),s=getInclusionCount(c,t),o=calcKakuScore(u,n,s);i([o,n])})}else getTehonCanvas(t,n,s,a+1).then(e=>{const t=e.getContext("2d",{alpha:!1}).getImageData(0,0,canvasSize,canvasSize).data,n=countNoTransparent(t);i([0,n])})});return i}function removeAnimations(e){const t=e.contentDocument.querySelectorAll("path[clip-path]");[...t].forEach(e=>{e.remove()})}function initTegakiSVG(e){const t=e.target,n=t.dataset.id;removeAnimations(t),toggleStroke(t,n)}function report(){const e=[],n=document.getElementById("problems").children;for(let t=0;t<n.length;t++){const s=n[t].shadowRoot.querySelector(".tegaki").children;for(let t=0;t<s.length;t++){const n=s[t].shadowRoot.querySelector(".score").textContent;e.push(parseInt(n))}}let t=0;for(let n=0;n<e.length;n++)t+=e[n];if(t/=e.length,t>=80){playAudio("correctAll");let e=localStorage.getItem("touch-shuji");e?(kanjis.split("").forEach(t=>{e.includes(t)||(e+=t)}),localStorage.setItem("touch-shuji",e)):localStorage.setItem("touch-shuji",kanjis),document.getElementById("report").classList.add("d-none"),document.getElementById("correctReport").classList.remove("d-none"),setTimeout(()=>{location.href="/touch-shuji/"},3e3)}else playAudio("stupid"),document.getElementById("report").classList.add("d-none"),document.getElementById("incorrectReport").classList.remove("d-none"),setTimeout(()=>{document.getElementById("report").classList.remove("d-none"),document.getElementById("incorrectReport").classList.add("d-none")},6e3)}function shuffle(e){for(let t=e.length;1<t;t--){const n=Math.floor(Math.random()*t);[e[n],e[t-1]]=[e[t-1],e[n]]}return e}function fetchJson(e){return new Promise(t=>{fetch(`/touch-shuji/data/${e+1}.json`).then(e=>e.json()).then(e=>t(e))})}async function fetchJsons(e){const t=new Array(10);for(let n=0;n<e.length;n++)await fetchJson(e[n]).then(s=>{t[e[n]]=s});return t}function initQuery(){const n=5,s=new URLSearchParams(location.search);kanjis=s.get("q")||"学";const e=[],t=[],o=new Array(10);Array.from(kanjis).forEach(n=>{const s=jkat.getGrade(n);s>=0&&(e.push(n),t.push(s),o[s]=!0)}),fetchJsons([...new Set(t)]).then(s=>{let o=[];if(e.length==1){const i=e[0],a=t[0];o=[s[a][i].shift()],o=o.concat(shuffle(s[a][i]).slice(0,n))}else e.forEach((e,n)=>{const i=t[n],a=s[i][e].slice(1);o=o.concat(shuffle(a)[0])});loadDrill(o),document.getElementById("problems").children[0].shadowRoot.querySelector(".guard").style.height="0"})}function scrollEvent(e){["MAIN","PROBLEM-BOX","A","BUTTON","path"].includes(e.target.tagName)||e.preventDefault()}function getGlobalCSS(){let e="";for(const t of document.styleSheets)try{for(const n of t.cssRules)e+=n.cssText}catch{}const t=new CSSStyleSheet;return t.replaceSync(e),t}const boxes=[],globalCSS=getGlobalCSS();initQuery(),document.getElementById("toggleDarkMode").onclick=toggleDarkMode,document.getElementById("hint").onclick=toggleHint,document.getElementById("toggleScroll").onclick=toggleScroll,document.getElementById("reportButton").onclick=report,document.addEventListener("click",unlockAudio,{once:!0,useCapture:!0})