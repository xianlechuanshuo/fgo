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