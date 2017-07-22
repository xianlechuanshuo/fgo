//根据id获取dom对象
function $(id) {
    return document.getElementById(id);
}
//根据标签获取dom集合
function $$(tagname) {
    return document.getElementsByTagName(tagname);
}

//根据id返回对应控件的value值，并转换为float值
function getFloat(id) {
    return parseFloat($(id).value);
}

//获取下拉列表选中项文本值
function getDdlText(id) {
    var index = $(id).selectedIndex;
    var text = $(id).options[index].text;
    return text;
}

//获取下拉列表选中项的对应属性的值
function getDdlAttrText(id,name) {
    var index = $(id).selectedIndex;
    var text = $(id).options[index].getAttribute(name);
    return text;
}

// 对数组的原型添加remove方法
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
//从大到小排序
function compare(property) {
    return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}
//父容器中，使其自适应内容高度
function resizeWindow() {
    //IE中：document.frames['iframe的name'].document.getElementById('元素的ID');
    //非IE中：window.frames["iContent"].contentWindow.document.getElementById('content')
    //iframe的id与name不能一样
    //var height = window.frames["iContent"].contentWindow ? window.frames["iContent"].contentWindow.document.getElementById('content').offsetHeight : document.frames['iContentN'].document.getElementById('content').offsetHeight;

    //通用方法：通过contentWindow获取到内容页面的高度
    var height = $('iContent').contentWindow.document.getElementById('content').offsetHeight;
    if (iContent) {
        $("iContent").style.height = (height + 80) + "px";
    }
}

//内容页中，使父窗口iContent自适应内容高度
function resizeParentWindow() {
    var height = $("content").offsetHeight;//获取body的高度
    //var iContent = window.parent.frames["iContent"] ;
    //if (iContent) {
    //    iContent.style.height = (height + 60) + "px";
    //}

    //获取到父容器iContent的dom对象
    var iContent = window.parent.document.getElementById('iContent');
    if (iContent) {
        iContent.style.height = (height + 80) + "px";
    }
}

//判断是否拥有某个类
function hasClass(elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

//添加类
function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
    }
}

//移除类
function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}