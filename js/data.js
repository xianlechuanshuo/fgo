var servants = new Array();
var id = 0;
function intialData() {
    //----------------------------------Saber---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Saber", "亚瑟・潘德拉贡〔Prototype〕", "Arthur Pendragon〔Prototype〕", "地", 12465, 13975, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "阿尔提拉", "Artila", "人", 12343, 13907, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Saber", "沖田総司", "Okita Souji", "人", 12068, 13225, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 2, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "宫本武藏", "Miyamoto Musashi", "人", 12037, 13635, 600, 800, 900, 950, 1000, 20, 30, 40, 50, 60, "TreasurePowerBuff", 1.5);
    intialServant("Saber", "莫德雷德", "Mordred", "地", 11723, 14680, 400, 500, 550, 575, 600, 180, 190, 200, 210, 220, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "尼禄・克劳狄乌斯〔花嫁〕", "Nero Claudius（Bride)", "人", 11607, 14248, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "阿尔托莉雅·潘德拉贡", "Altria Pendragon", "地", 11221, 15150, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "两仪式", "Ryougi Shiki（Saber)", "人", 10721, 15453, 450, 600, 675, 712.5, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 0, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 6 });

    /******************************************4星********************************************************************/
    intialServant("Saber", "弗兰肯斯坦", "Frankenstein2", "地", 10335, 13262, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -3, cardBuff:"2|12", fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Alter〕", "Altria Pendragon（Alter)", "人", 10248, 11589, 450, 550, 600, 625, 650, 0, 0, 0, 0, 0, "", 1.5);


    intialServant("Saber", "高文", "Gawain", "地", 10173, 11419, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "兰斯洛特", "Lancelot", "地", 9949, 11589, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "伊丽莎白・巴陶里〔勇者〕", "Erzsebet Bathory（Brave)", "地", 9899, 11248, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "罗摩", "Rama", "天", 9854, 11993, 600, 800, 900, 950, 1000, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Saber", "铃鹿御前", "Suzuka Gozen", "天", 9544, 11753, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Saber", "尼禄・克劳狄乌斯", "Nero Claudius", "人", 9449, 11753, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "齐格弗里德", "Siegfried", "地", 8181, 14165, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Lily〕", "Altria Pendragon（Lily)", "地", 7726, 10623, 300, 450, 525, 562.5, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });


    /******************************************3星及以下********************************************************************/
    intialServant("Saber", "贝狄威尔", "Bedwyr", "星", 7627, 9595, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Saber", "盖乌斯・尤里乌斯・凯撒", "Gaius Julius Caesar", "人", 7497, 9595, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Saber", "弗格斯・马克・罗伊", "Fergus Mac Roich", "地", 7460, 9786, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });


    //----------------------------------Archer---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Archer", "阿周那", "Arjuna", "天", 12342, 13230, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 10 });
    intialServant("Archer", "吉尔伽美什", "Gilgamesh", "天", 12280, 13097, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 11 });
    intialServant("Archer", "伊修塔尔", "Ishtar", "天", 12252, 13965, 300, 400, 450, 475, 500, 20, 30, 40, 50, 60, "TreasureSpecialCardPowerAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 225, critialPowerBuff: 10 });
    intialServant("Archer", "尼古拉・特斯拉", "Nikola Tesla", "星", 11781, 13825, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "詹姆斯·莫里亚蒂", "James Moriarty", "人", 11781, 13685, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 11 });
    intialServant("Archer", "阿尔托莉雅・潘德拉贡〔Archer〕", "Altria Pendragon2", "地", 11276, 14553, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "俄里翁", "Orion", "天", 11107, 14553, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 11 });

    /******************************************4星********************************************************************/
    intialServant("Archer", "克洛伊·冯·爱因兹贝伦", "Chloe・von・Einzbern", "天", 9845, 10914, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "特里斯坦", "Tristan", "地", 9735, 11637, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "织田信长", "Oda Nobunaga", "人", 9494, 11637, 300, 400, 450, 475, 500, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "安妮・伯妮&玛丽・里德", "Anne Bonny&Mary Read2", "人", 9446, 11521, 600, 800, 900, 950, 1000, 600, 600, 600, 600, 600, "TreasureSpecialRemainHpAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "卫宫", "Emiya", "人", 9398, 11521, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "卫宫〔Alter〕", "Emiya〔Alter〕", "人", 8996, 12250, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "阿塔兰忒", "Atalanta", "地", 8633, 12476, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });



    /******************************************3星及以下********************************************************************/
    intialServant("Archer", "大卫", "David", "天", 7736, 8643, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "幼吉尔", "Child Gil", "天", 7696, 8731, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 10 });
    intialServant("Archer", "尤瑞艾莉", "Euryale", "天", 7032, 9506, 1200, 1200, 1200, 1200, 1200, 250, 250, 250, 250, 250, "TreasureSpecialAttack", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 300, critialPowerBuff: 11 });
    intialServant("Archer", "俵藤太", "Tawara Toda", "人", 7032, 9800, 300, 400, 450, 475, 500, 50, 62, 75, 87, 100, "TreasureSpecialAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Archer", "比利小子", "Billy the Kid", "人", 6890, 9506, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 7, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "罗宾汉", "Robin Hood", "人", 6715, 10187, 900, 1200, 1350, 1425, 1500, 200, 212.5, 225, 237.5, 250, "TreasureSpecialAttack", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Archer", "阿拉什", "Arash", "地", 5816, 7122, 800, 1000, 1100, 1150, 1200, 0, 200, 400, 600, 800, "TreasureSpecialExplosionAttack", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 6 });

    //----------------------------------Lancer---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Lancer", "迦尔纳", "Karna", "天", 11976, 13632, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Lancer", "布伦希尔德", "Brynhildr", "天", 11432, 14825, 800, 1000, 1100, 1150, 1200, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 100, critialPowerBuff: 0 });
    intialServant("Lancer", "斯卡哈", "Scathach", "星", 11375, 14825, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Lancer", "阿尔托莉雅・潘德拉贡〔Lancer〕", "Altria Pendragon(Lancer)", "天", 10995, 15606, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "恩奇都", "Enkidu", "天", 10780, 15300, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "玉藻前", "Tamamo no Mae2", "天", 10726, 15147, 600, 800, 900, 950, 1000, 150, 162, 175, 187, 200, "TreasureSpecialAttack", 1.5, { cardColor: -2, cardBuff: "10|10", fixedDamageBuff: 230, critialPowerBuff: 0 });

    /******************************************4星********************************************************************/
    intialServant("Lancer", "阿尔托莉雅・潘德拉贡〔Alter〕", "Altria Pendragon（Alter)2", "天", 9968, 11761, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "神枪 李书文", "Li Shu Wen", "人", 9653, 11360, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Lancer", "贞德・Alter・Santa・Lily", "Jeanne d'Arc・Alter・Santa・Lily", "人", 9261, 11870, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "伊丽莎白・巴陶里", "Erzsebet Bathory", "人", 9122, 11870, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "清姬", "Kiyohime2", "地", 8936, 11870, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "芬恩・麦克库尔", "Fionn mac Cumhaill", "天", 8930, 12750, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 125, critialPowerBuff: 0 });
    intialServant("Lancer", "弗拉德三世〔Extra〕", "Vlad III(Extra)", "地", 8775, 13005, 600, 800, 900, 950, 1000, 150, 162, 175, 187, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Lancer", "美杜莎〔Lancer〕", "Medusa(Lancer)", "地", 8253, 13119, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 250, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Lancer", "库・丘林", "Cu Chulainn", "天", 7239, 9593, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Lancer", "罗穆路斯", "Romulus", "星", 7239, 9883, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Lancer", "库・丘林〔Prototype〕", "Cu Chulainn（Prototype)", "天", 7082, 10098, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Lancer", "豹人", "Jaguar Man", "地", 7022, 9593, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 2, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "赫克托耳", "Hector", "人", 6928, 10200, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Lancer", "迪尔姆德・奥迪纳", "Diarmuid Ua Duibhne", "地", 6877, 10098, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);



    //----------------------------------Rider---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Rider", "魁札尔·科亚特尔", "Quetzalcoatl", "天", 12001, 12960, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 12, fixedDamageBuff: 300, critialPowerBuff: 0 });
    intialServant("Rider", "奥兹曼迪亚斯", "Ozymandias", "天", 11971, 12830, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Rider", "伊斯坎达尔", "Iskandar", "人", 11560, 13219, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Rider", "弗朗西斯・德雷克", "Francis Drake", "星", 11326, 12830, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "女王梅芙", "Medb", "地", 10296, 13968, 800, 1000, 1100, 1150, 1200, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************4星********************************************************************/
    intialServant("Rider", "坂田金时", "Sakata Kintoki2", "地", 9819, 10800, 1200, 1600, 1800, 1900, 2000, 10, 30, 50, 70, 90, "TreasureSpecialCardPowerAttack", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Rider", "伊修塔尔", "Ishtar2", "天", 9603, 10692, 600, 800, 900, 950, 1000, 20, 30, 40, 50, 60, "TreasureSpecialCardPowerAttack", 0.8, { cardColor: 0.8, cardBuff: 12, fixedDamageBuff: 225, critialPowerBuff: 10 });

    intialServant("Rider", "阿尔托莉雅・潘德拉贡〔Santa Alter〕", "Altria Pendragon（Santa Alter)", "人", 9258, 11286, 450, 550, 600, 625, 650, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "莫德雷德", "Mordred2", "地", 9212, 11400, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 5, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "安妮・伯妮&玛丽・里德", "Anne Bonny&Mary Read", "人", 9029, 11286, 1600, 2000, 2200, 2300, 2400, 1200, 1600, 1800, 1900, 2000, "TreasureSpecialRemainHpAttack", 0.8);
    intialServant("Rider", "阿斯托尔福", "Astolfo", "地", 8937, 11172, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Rider", "玛丽・安托瓦内特", "Marie Antoinette", "人", 8293, 12348, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "马大", "Marthe", "人", 8014, 13068, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 11.5, fixedDamageBuff: 150, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Rider", "亚历山大", "Alexander", "人", 7356, 8640, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 10, fixedDamageBuff: 100, critialPowerBuff: 0 });
    intialServant("Rider", "美杜莎", "Medusa", "地", 7200, 8937, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 95, critialPowerBuff: 6 });
    intialServant("Rider", "牛若丸", "Ushiwakamaru", "人", 7076, 9028, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 11, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "克里斯托弗·哥伦布", "Cristoforo Colombo", "人", 6552, 9600, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Rider", "爱德华・蒂奇", "Edward Teach", "人", 6188, 7907, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Rider", "圣乔治", "Georgius", "人", 5236, 9200, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });

    //----------------------------------Caster---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Caster", "玄奘三蔵", "Genjou Sanzou", "人", 11658, 12965, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 12, fixedDamageBuff: 125, critialPowerBuff: 0 });
    intialServant("Caster", "尼禄・克劳狄乌斯", "Nero Claudius2", "人", 10857, 13685, 300, 400, 450, 475, 500, 20, 30, 40, 50, 60, "TreasurePowerBuff", 1.5, { cardColor: -2, cardBuff: "8|11", fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Caster", "伊莉雅斯菲尔", "Illyasviel", "人", 10857, 13825, 600, 800, 900, 950, 1000, 20, 35, 50, 65, 80, "TreasureSpecialCardPowerAttack", 1.5);
    intialServant("Caster", "莱昂纳多・达・芬奇", "Leonardo da Vinci", "星", 10598, 14259, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "诸葛孔明〔艾尔梅洛伊二世〕", "El-Melloi II", "人", 10598, 14259, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "山鲁佐德", "Scheherazade", "人", 9212, 15846, 450, 600, 675, 712, 750, 200, 225, 250, 275, 300, "TreasureSpecialAttack", 1, { cardColor: 1, cardBuff: 11.5, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************4星********************************************************************/
    intialServant("Caster", "尼托克丽丝", "Nitocris", "地", 9060, 11288, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Caster", "玛丽・安托瓦内特", "Marie Antoinette2", "人", 9060, 11404, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "童谣", "Nursery Rhyme", "人", 8629, 11882, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "海伦娜・布拉瓦茨基", "Helena Blavatsky", "人", 8629, 11882, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "伊丽莎白・巴陶里〔万圣节〕", "Erzsebet Bathory（Halloween)", "人", 8616, 11404, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "吉尔伽美什〔Caster〕", "Gilgamesh(Caster)", "人", 8460, 12005, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Caster", "托马斯・爱迪生", "Thomas Edison", "人", 7952, 11882, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 4, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Caster", "美狄亚", "Medea", "地", 7418, 8643, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "杰罗尼莫", "Geronimo", "人", 6857, 9123, 400, 550, 625, 662.5, 700, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "梅菲斯托费勒斯", "Mephistopheles", "地", 6839, 9216, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 7, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "冯・霍恩海姆・帕拉塞尔苏斯", "Von Hohenheim Paracelsus", "人", 6711, 9506, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "库・丘林", "Cu Chulainn2", "天", 6580, 9604, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Caster", "吉尔・德・雷", "Gilles de Rais2", "人", 6514, 9506, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Caster", "查尔斯・巴贝奇", "Charles Babbage", "人", 5996, 10887, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Caster", "威廉・莎士比亚", "William Shakespeare", "人", 5798, 8080, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });


    //----------------------------------Assassin---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Assassin", "酒吞童子", "Shuten Doji", "地", 11993, 12825, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Assassin", "“山之翁”", "Yama no okina", "人", 11848, 13338, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });
    intialServant("Assassin", "谜之女主角X", "Mysterious Heroine X", "星", 11761, 12696, 1600, 2000, 2200, 2300, 2400, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 0.8, { cardColor: 0.8, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Assassin", "开膛手杰克", "Jack the Ripper", "地", 11557, 12696, 1400, 1800, 2000, 2100, 2200, 50, 62.5, 75, 87.5, 100, "SpecialAttackPowerBuff", 0.8);
    intialServant("Assassin", "克利奥帕特拉", "Cleopatra", "人", 11088, 13402, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 125, critialPowerBuff: 0 });


    /******************************************4星********************************************************************/
    intialServant("Assassin", "尼托克丽丝", "Nitocris2", "天", 9737, 12737, 450, 600, 675, 712.5, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 185, critialPowerBuff: 0 });

    intialServant("Assassin", "卡米拉", "Carmilla", "地", 9408, 10473, 600, 800, 900, 950, 1000, 120, 132.5, 145, 157.5, 170, "TreasureSpecialAttack", 1.5);
    intialServant("Assassin", "斯卡哈", "Scathach2", "星", 9049, 11168, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "武则天", "Wu Ze Tian", "人", 8981, 10942, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "卫宫〔Assassin〕", "Emiya（Assassin)", "人", 8958, 11168, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Assassin", "两仪式〔Assassin〕", "Ryougi Shiki（Assassin)", "人", 8867, 11055, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Assassin", "燕青", "Yan Qing", "人", 8661, 11637, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 0.8, cardBuff: 5, fixedDamageBuff: 0, critialPowerBuff: 5 });

    /******************************************3星及以下********************************************************************/
    intialServant("Assassin", "荆轲", "Jing Ke", "人", 7207, 8293, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "风魔小太郎", "Fuuma Koutarou", "人", 7091, 8844, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "百貌的哈桑", "Hassan of Hundred Faces", "人", 6686, 9310, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "静谧的哈桑", "Hassan of Serenity", "人", 6636, 9310, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Assassin", "咒腕的哈桑", "Hassan of the Cursed Arm", "人", 6280, 7594, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "佐佐木小次郎", "Sasaki Koujirou", "人", 5735, 6220, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Assassin", "歌剧魅影", "Phantom of the Opera", "地", 5654, 8393, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Assassin", "夏尔・亨利・桑松", "Charles Henri Sanson", "人", 5456, 8309, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 1.5);

    //----------------------------------Berserker---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Berserker", "库・丘林〔Alter〕", "Cu Chulainn（Alter)", "地", 12805, 12210, 600, 800, 900, 950, 1000, 30, 40, 50, 60, 70, "TreasureSpecialAtkPowerAttack", 1.5, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Berserker", "坂田金时", "Sakata Kintoki", "人", 12712, 12150, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 2, fixedDamageBuff: 125, critialPowerBuff: 0 });
    intialServant("Berserker", "土方岁三", "Hijikata Toshizou", "人", 12089, 12028, 600, 800, 900, 950, 1000, 600, 800, 900, 950, 1000, "TreasureSpecialRemainHpAttack", 1.5, { cardColor: 1.5, cardBuff: 5, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "源赖光", "Minamoto Yorimitsu", "天", 11556, 13500, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -3, cardBuff: "12|11", fixedDamageBuff: 150, critialPowerBuff: 0 });
    intialServant("Berserker", "弗拉德三世", "Vlad III", "地", 11499, 13770, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "谜之女主角X〔Alter〕", "Mysterious Heroine X〔Alter〕", "星", 11113, 14175, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************4星********************************************************************/
    intialServant("Berserker", "赫拉克勒斯", "Hercules", "天", 10655, 10327, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 200, critialPowerBuff: 0 });
    intialServant("Berserker", "彭忒西勒亚", "Penthesilea", "地", 10502, 10175, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 175, critialPowerBuff: 0 });
    intialServant("Berserker", "兰斯洛特", "Lancelot2", "地", 10477, 10327, 600, 800, 900, 950, 1000, 10, 15, 20, 25, 30, "TreasureSpecialAtkPowerAttack", 0.8, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "贝奥武夫", "Beowulf", "地", 10247, 10327, 700, 900, 1000, 1050, 1100, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 1, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "织田信长", "Oda Nobunaga2", "人", 10146, 10023, 600, 800, 900, 950, 1000, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });


    intialServant("Berserker", "茨木童子", "Ibaraki Doji", "地", 9636, 10954, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "弗兰肯斯坦", "Frankenstein", "地", 9441, 10687, 900, 1100, 1200, 1250, 1300, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 1.5, cardBuff: 4, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "玉藻猫", "Tamamo Cat", "地", 9026, 11458, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8, { cardColor: 1.5, cardBuff: 6, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "茶茶", "Cha Cha", "人", 8945, 11025, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 3, fixedDamageBuff: 0, critialPowerBuff: 0 });

    /******************************************3星及以下********************************************************************/
    intialServant("Berserker", "吕布奉先", "Lu Bu Feng Xian", "人", 8119, 8302, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "大流士三世", "Darius III", "人", 7608, 8763, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "清姬", "Kiyohime", "地", 6644, 9166, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "血斧埃里克", "Eric Bloodaxe", "人", 6290, 7688, 300, 400, 450, 475, 500, 30, 35, 40, 45, 50, "TreasureSpecialAtkPowerAttack", 1.5, { cardColor: 1.5, cardBuff: 8, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "保罗•班扬", "Paul Bunyan", "地", 6044, 6196, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 4, fixedDamageBuff: 0, critialPowerBuff: 0 });
    intialServant("Berserker", "斯巴达克斯", "Spartacus", "人", 5073, 7722, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5, { cardColor: 1.5, cardBuff: 12, fixedDamageBuff: 0, critialPowerBuff: 0 });

    //----------------------------------Ruler---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Ruler", "天草四郎", "Shirou Kotomine", "人", 10972, 14107, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);

    /******************************************4星********************************************************************/
    intialServant("Ruler", "马大", "Marthe2", "人", 9546, 11250, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);


    //----------------------------------Avenger---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Avenger", "贞德〔Alter〕", "Jeanne d'Arc（Alter)", "人", 13244, 11761, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });
    intialServant("Avenger", "岩窟王 爱德蒙・唐泰斯", "Edmond Dantes", "人", 12641, 12177, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });

    /******************************************4星********************************************************************/
    intialServant("Avenger", "戈尔贡", "Gorgon", "地", 10706, 10197, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 6 });
    intialServant("Avenger", "海森・罗伯", "Hyesons Robert", "地", 10628, 9949, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 8 });

    //----------------------------------MoonCancer---------------------------------------------------------------------//
    /******************************************4星********************************************************************/
    intialServant("MoonCancer", "BB", "BB", "人", 8197, 13643, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1, { cardColor: 1, cardBuff: 10, fixedDamageBuff: 0, critialPowerBuff: 0 });

    //----------------------------------Altergo---------------------------------------------------------------------//
    /******************************************5星********************************************************************/
    intialServant("Altergo", "梅尔特莉莉丝（溶解莉莉丝）", "Meltlilith", "地", 11692, 13402, 1200, 1600, 1800, 1900, 2000, 10, 15, 20, 25, 30, "TreasureSpecialCardPowerAttack", 0.8, { cardColor: 0.8, cardBuff: 8, fixedDamageBuff: 225, critialPowerBuff: 10 });
    intialServant("Altergo", "杀生院祈荒", "Sesshouin Kiara", "兽", 11668, 14606, 450, 600, 675, 712, 750, 0, 0, 0, 0, 0, "", 1, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 0, critialPowerBuff: 10 });

    /******************************************4星********************************************************************/
    intialServant("Altergo", "帕森莉普（热情迷唇）", "Passionlip", "地", 10299, 10901, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5, { cardColor: -1, cardBuff: 0, fixedDamageBuff: 200, critialPowerBuff: 6 });

}



/**
* 初始化从者数据
* @param {String} career 职介
* @param {String} name 从者名
* @param {String} eName 从者英文名
* @param {String} camp 阵营
* @param {Number} atk ATK
* @param {Number} hp HP
* @param {Number} tl1 1宝倍率
* @param {Number} tl2 2宝倍率
* @param {Number} tl3 3宝倍率
* @param {Number} tl4 4宝倍率
* @param {Number} tl5 5宝倍率
* @param {Number} oc1 100 OC
* @param {Number} oc2 200 OC
* @param {Number} oc3 300 OC
* @param {Number} oc4 400 OC
* @param {Number} oc5 500 OC
* @param {String} type 特攻类型，目前有以下8种
*    TreasureSpecialAttack：宝具特攻
*    SpecialAttackPowerBuff：特攻威力Buff，比如杰克女性特攻
*    ""：无特攻
*    TreasureSpecialRemainHpAttack：双子宝具特攻
*    TreasureSpecialExplosionAttack：自爆弓宝具特攻
*    TreasureSpecialCardPowerAttack：R金时OC绿魔放
*    TreasureSpecialAtkPowerAttack：B兰OC加攻
*    TreasurePowerBuff：宫本半藏OC宝具威力提升
* @param {Number} cardColor 卡牌倍率(B卡：1.5，A卡：1，Q卡：0.8)
* @param {Object} careerSkill 职介技能(比如狂化EX、神性Debuff) 
*    cardColor: 0.8(Quick)，1(Arts)，1.5(Buster)，0(All)，-1(None)，-2(Quick和Arts)，-3(Buster和Quick)
*    cardBuff: 10(卡牌Buff), 
*    fixedDamageBuff: 0(神性Debuff), 
*    critialPowerBuff: 0(暴击威力Buff)
*/
function intialServant(career, name, eName, camp, atk, hp, tl1, tl2, tl3, tl4, tl5, oc1, oc2, oc3, oc4, oc5, type, cardColor, careerSkill) {
    id++;
    var tl = new Array();
    tl["tl1"] = tl1;
    tl["tl2"] = tl2;
    tl["tl3"] = tl3;
    tl["tl4"] = tl4;
    tl["tl5"] = tl5;

    var oc = new Array();
    oc["oc1"] = oc1;
    oc["oc2"] = oc2;
    oc["oc3"] = oc3;
    oc["oc4"] = oc4;
    oc["oc5"] = oc5;

    oc["type"] = type;

    var model = {
        id: id,
        career: career,
        name: name,
        eName: eName,
        camp: camp,
        atk: atk,
        hp: hp,
        tl: tl,
        oc: oc,
        cardColor: cardColor,
        careerSkill: careerSkill
    }

    servants[id] = model;
}

