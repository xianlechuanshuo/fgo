var servants = new Array();
var id = 0;
function intialData() {
    //----------------------------------Saber---------------------------------------------------------------------//
    intialServant("Saber", "阿尔托莉雅·潘德拉贡", 11221, 15150, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Alter〕", 10248, 11589, 450, 550, 600, 625, 650, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "阿尔托莉雅·潘德拉贡〔Lily〕", 7726, 10623, 300, 450, 525, 562.5, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "尼禄・克劳狄乌斯", 9449, 11753, 600, 750, 825, 862.5, 900, 0, 0, 0, 0, 0, "", 1);
    intialServant("Saber", "齐格弗里德", 8181, 14165, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Saber", "盖乌斯・尤里乌斯・凯撒", 7497, 9595, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Saber", "阿尔提拉", 12343, 13907, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "沖田総司", 12068, 13225, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Saber", "弗格斯・马克・罗伊", 7460, 9786, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "莫德雷德", 11723, 14680, 400, 500, 550, 575, 600, 180, 190, 200, 210, 220, "TreasureSpecialAttack", 1.5);
    intialServant("Saber", "尼禄・克劳狄乌斯〔花嫁〕", 11607, 14248, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1);
    intialServant("Saber", "两仪式", 10721, 15453, 450, 600, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1);
    intialServant("Saber", "罗摩", 9854, 11993, 600, 800, 900, 950, 1000, 150, 162.5, 175, 187.5, 200, "", 1.5);
    intialServant("Saber", "兰斯洛特", 9949, 11589, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Saber", "高文", 10173, 11419, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "贝狄威尔", 7627, 9595, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "伊丽莎白・巴陶里〔勇者〕", 9899, 11248, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "宫本武藏", 12037, 136355, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "亚瑟・潘德拉贡〔Prototype〕", 12465, 13975, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Saber", "铃鹿御前", 9544, 11753, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);

    //----------------------------------Archer---------------------------------------------------------------------//
    intialServant("Archer", "卫宫", 9398, 11521, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "吉尔伽美什", 12280, 13097, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "罗宾汉", 6715, 10187, 900, 1200, 1350, 1425, 1500, 200, 212.5, 225, 237.5, 250, "TreasureSpecialAttack", 1);
    intialServant("Archer", "阿塔兰忒", 8633, 12476, 800, 1000, 1100, 1150, 1200, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Archer", "尤瑞艾莉", 7032, 9506, 1200, 1200, 1200, 1200, 1200, 250, 250, 250, 250, 250, "TreasureSpecialAttack", 1);
    intialServant("Archer", "阿拉什", 5816, 7122, 800, 1000, 1100, 1150, 1200, 0, 200, 400, 600, 800, "TreasureSpecialExplosionAttack", 1.5);
    intialServant("Archer", "俄里翁", 11107, 14553, 1200, 1500, 1650, 1725, 1800, 0, 0, 0, 0, 0, "", 1);
    intialServant("Archer", "大卫", 7736, 8643, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "织田信长", 9494, 11637, 300, 400, 450, 475, 500, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "尼古拉・特斯拉", 11781, 13825, 400, 500, 550, 575, 600, 150, 162.5, 175, 187.5, 200, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "阿周那", 12342, 13230, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "幼吉尔", 7696, 8731, 400, 500, 550, 575, 600, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "比利小子", 6890, 9506, 1600, 2000, 2200, 2300, 2400, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Archer", "特里斯坦", 9735, 11637, 1200, 1600, 1800, 1900, 2000, 0, 0, 0, 0, 0, "", 0.8);
    intialServant("Archer", "俵藤太", 7032, 9800, 300, 400, 450, 475, 500, 50, 62, 75, 87, 100, "TreasureSpecialAttack", 1.5);
    intialServant("Archer", "阿尔托莉雅・潘德拉贡〔Archer〕", 11276, 14553, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Archer", "安妮・伯妮&玛丽・里德", 9446, 11521, 600, 800, 900, 950, 1000, 600, 600, 600, 600, 600, "TreasureSpecialRemainHpAttack", 1.5);
    intialServant("Archer", "克洛伊·冯·爱因兹贝伦", 9845, 10914, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);
    intialServant("Archer", "伊修塔尔", 12252, 13965, 300, 400, 450, 475, 500, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "詹姆斯·莫里亚蒂", 11781, 13685, 600, 800, 900, 950, 1000, 0, 0, 0, 0, 0, "", 1.5);
    intialServant("Archer", "卫宫〔Alter〕", 8996, 12250, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);

    //----------------------------------Lancer---------------------------------------------------------------------//
    intialServant("Lancer", "库・丘林", 8996, 12250, 900, 1200, 1350, 1425, 1500, 0, 0, 0, 0, 0, "", 1);


    //----------------------------------Rider---------------------------------------------------------------------//

    intialServant("Rider", "安妮・伯妮&玛丽・里德", 9029, 11286, 1600, 2000, 2200, 2300, 2400, 1200, 1600, 1800, 1900, 2000, "TreasureSpecialRemainHpAttack", 0.8);

}

function intialServant(career, name, atk, hp, tl1, tl2, tl3, tl4, tl5, oc1, oc2, oc3, oc4, oc5, type, cardColor) {
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
    /*
    TreasureSpecialAttack：宝具特攻
    SpecialAttackPowerBuff：特攻威力Buff
    ""：无特攻
    TreasureSpecialRemainHpAttack：双子宝具特攻
    TreasureSpecialExplosionAttack：自爆弓宝具特攻
    */
    oc["type"] = type;

    var model = {
        id: id,
        career: career,
        name: name,
        atk: atk,
        hp: hp,
        tl: tl,
        oc: oc,
        cardColor: cardColor
    }

    servants[id] = model;
}

