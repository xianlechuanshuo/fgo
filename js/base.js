"use strict";//只有在严格模式下才能使用es6的一些语法
//localStorage只能存储字符串，如果需要存储对象，首先要转化为字符串。利用JSON.stringify()；
var storage = window.localStorage;
if (!storage) {
    alert("请使用支持html5的浏览器!");
}

//显示从者技能详情
$("btnShowSkills").onclick = function () {
    showSkillsWin();
}

$("btnShowMaterials").onclick=function(){
    showMaterialsWin();
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

//双击下载图片
$("showSkillsWin").ondblclick =function(){
    let url= document.querySelector(".skillImg").src;
    downloadFile(url);
}

//显示查询结果
function showResult() {
    showDiv("divResult");
}
//隐藏查询结果
function hidResult() {
    hideDiv("divResult");
}

function showWin(type,ext){
    let id = $("ddlChooseServant").value;
    if (id == "-1") {
        alert("请选择从者");
        return;
    }
    showDiv("showSkillsWin");
    let servant = servants[id];
    let eName = filterStr(servant.eName);
    document.querySelector(".skillImg").src=`images/${type}/${eName}${ext}`;
}

//显示技能图
function showSkillsWin() {
    showWin("Skill",".png")

}
//隐藏技能图
function hideSkillsWin() {
    hideDiv("showSkillsWin");
}
//显示强化素材图
function showMaterialsWin(){
    showWin("Material",".jpg");
}

//查询
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
    if(word[0]=="$"){
        word=word.substr(1);
        servants = servants.filter(containsAttribute);
    }
    else if(word[0]=="#"){
        word=word.substr(1);
        servants = servants.filter(containsCharacteristics);
    }
    else if(word[0]=="@"){
        word=word.substr(1);
        servants = servants.filter(containsCamp);    
    }
    else{
        servants = servants.filter(contains);
    }

    
    
    //更新数组序号
    let tmpServants = [];
    for (let i = 0; i < servants.length; i++) {
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

//点击属性和特性超链接字体
function autoClickSearch(obj){
    $("txtWord").value=obj.dataset.value;
    $("btnSearch").click();
}

//根据关键词查询结果
var word = "";
function contains(servant) {
    return servant.keys.find(check);
}
function containsAttribute(servant) {
    return servant.attributes.find(check);
}
function containsCharacteristics(servant) {
    return servant.characteristics.find(check);
}
function containsCamp(servant){
    return servant.camp==word;
}

function check(key) {
    if (word == "") {
        return true;
    }
    return new RegExp(word, "gi").test(key);//忽略大小写
    //return key.indexOf(word) != -1;
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
    let id = $("ddlChooseServant").value;
    if (id != "-1" && id != "") {
        //window.top.location = link + servants[id].servantNo;
        openTab(link + servants[id].servantNo);
    }
    else {
        alert("请选择从者");
    }
}
//设置本地存储信息
function setStorage() {
    if (storage) {
        //另外，在iPhone/iPad上有时设置setItem()时会出现诡异的QUOTA_EXCEEDED_ERR错误，这时一般在setItem之前，先removeItem()就ok了。
        storage.removeItem("ddlChooseServant");
        storage.setItem("ddlChooseServant", $("ddlChooseServant").value);

        //清除缓存
        storage.removeItem("servants");
    }
}
//加载本地存储信息
//360浏览器不支持es6中的函数参数默认值
function loadStorage(isTreasure) {
    $("ckIsMaxGrail").checked=false;
    if (storage) {
        let id = storage.getItem("ddlChooseServant");
        if (id!=null&&id != "" && id != "-1") {
            $("ddlChooseServant").value = id;
            if (isTreasure) {
                changeOc();
            }
            bindServantData(id);
        }
    }
}

//绑定属性和特性值
function binds(servant,key,id,flag){
    let attributes = servant[key].clone();//数组复制，不影响原数组
    if (attributes instanceof Array && attributes.length > 0) {
        for (let i = 0; i < attributes.length; i++) {
            attributes[i]= `<a href=\"javascript:;\" data-value=\"${flag}${attributes[i]}\" onclick=\"autoClickSearch(this)\">${attributes[i]}</a>`;
        }

        attributes = attributes.join("&nbsp;&nbsp;&nbsp;&nbsp;");
        $(id).innerHTML = attributes;
    }
}

//属性
function bindAttributes(servant) {
    binds(servant,"attributes","spanAttributes","$");
}
//特性  
function bindCharacteristics(servant) {
    binds(servant,"characteristics","spanCharacteristics","#");
}
//加载搜索提示(类似自动完成)
function bindSearchTips(){
    let tips=[],
        tmpCamp,
        tmpAttributes,
        tmpCharacteristics;
    servants.forEach(function(servant){
        tmpCamp=servant.camp;
        tmpAttributes=servant.attributes.clone();
        tmpCharacteristics=servant.characteristics.clone();

        tips.push(`@${tmpCamp}`);

        tmpAttributes.forEach(function(a){
            tips.push(`$${a}`);
        });
    tmpCharacteristics.forEach(function(c){
            tips.push(`#${c}`);
        });
    })
    //去重
    tips=Array.from(new Set(tips));
    //加载属性和特性的搜索提示(类似自动完成)
    let dlTips=$("dlTips");
    tips.forEach(function(t){
        let opt=document.createElement("option");
        opt.value=t;
        dlTips.appendChild(opt);
    })
}