//显示从者技能详情
$("btnShowSkills").onclick = function () {
    showSkillsWin();
}

//关闭从者技能详情
$("btnClose").onclick = function () {
    hideSkillsWin();
}

//查询
$("txtWord").oninput = function () {
    search();
}
$("btnSearch").onclick = function () {
    search();
}

function search() {
    //清空从者数据数组
    servants.length = 0;
    //重置计数器
    id = 0;
    //重新初始化从者数据数组
    intialData();
    //过滤关键词特殊字符
    word = filterStr2($("txtWord").value);
    //根据关键词查询匹配结果
    servants = servants.filter(contains);
    //更新数组序号
    var tmpServants = new Array();
    for (var i = 0; i < servants.length; i++) {
        tmpServants[servants[i].id] = servants[i];
    }
    servants = tmpServants;

    $("ddlChooseServant").length = 0;
    if (word == "") {
        $("ddlChooseServant").options.add(new Option("|----------------------请选择从者-------------------------|", -1));
    }
    intialServantList();
    $("ddlChooseServant").onchange();
}


//跳转到茹西教王的理想鄉
$("btnRedirectKazemai").onclick = function () {
    redirectLink('https://kazemai.github.io/fgo-vz/svtData.html?no=');
}
//跳转到wiki
$("btnRedirectWiki").onclick = function () {
    redirectLink('http://fgowiki.com/guide/petdetail/');
}
//跳转页面
function redirectLink(link) {
    var id = $("ddlChooseServant").value;
    if (id != "-1" && id != "") {
        window.location =link+ servants[id].servantNo;
    }
    else {
        alert("请选择从者");
    }
}