/**
 * Created by sf on 2018/8/3.
 */
var areaArr = []

var trackHost = 'https://segmentfault.com';
var viewApi = trackHost + '/ad/track/view'
var clickApi = trackHost + '/ad/track/click'

function ajax(opt) {
    opt = opt || {};//opt以数组方式存参，如果参数不存在就为空。
    opt.method = opt.method.toUpperCase() || 'POST';//转为大写失败，就转为POST
    opt.url = opt.url || '';//检查URL是否为空
    opt.async = opt.async || true;//是否异步
    opt.data = opt.data || null;//是否发送参数，如POST、GET发送参数
    opt.success = opt.success || function () {}; //成功后处理方式
    var xmlHttp = null;//定义1个空变量
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();//如果XMLHttpRequest存在就新建，IE大于9&&非IE有效
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');//用于低版本IE
    }
    var params = [];//定义1个空数组
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);//将opt里的data存到push里
    }
    var postData = params.join('&');//追加个& params
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);//开始请求
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');//发送头信息，与表单里的一样。
        xmlHttp.send(postData);//发送POST数据
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url, opt.async);//GET请求
        xmlHttp.send(null);//发送空数据
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {//readyState有5个状态，可以百度一下看看都有什么。当请求完成，并且返回数据成功
            opt.success(xmlHttp.responseText);//返回成功的数据
        }
    };
}

var sTitle="";
window.SFGridAd = {};
SFGridAd.d = function(o) {
    sTitle = o.getAttribute('stitle');
    document.getElementById("gridMapHoverBox").style.display = "block"
}

SFGridAd.e = function(o) {
    sTitle = "";
    document.getElementById("gridMapHoverBox").style.display = "none"
}

SFGridAd.c = function(id) {

    var clickApi2 = clickApi + '?id=' + id

    ajax({url: clickApi2, method: 'GET'})
};

// 这里 data 需要注入
[{"id":"1750000020969688","user_id":"1030000020966033","box_ad_id":"0","started":"1573574400","ended":"1574784000","cycles":"2","status":"0","banner":"\/221\/152\/2211526547-5dc9365169cc5","link":"https:\/\/mp.weixin.qq.com\/s\/fmJX_lImuNsmX_0nd69guQ","title":"\u6211\u4eec\u662f\u4e00\u4e2a\u57fa\u4e8e\u533a\u5757\u94fe\u7684\u4efb\u52a1\u7cfb\u7edf\uff0c\u6211\u4eec\u662f\u8fd0\u884c\u5728\u4ee5\u592a\u574a\u4e0a\u7684\u4f17\u5305dapp","area_info":{"area":"L1:N1","height":"17","width":"51","left":"187","top":"0","pos":{"rowTop":1,"rowBottom":1,"columnLeft":12,"columnRight":14},"size":3},"created":"1573464842","modified":"1573467735"},{"id":"1750000020994504","user_id":"1030000012314877","box_ad_id":"0","started":"1573747200","ended":"1576166400","cycles":"4","status":"0","banner":"\/216\/415\/2164151708-5dcc15e47bcff","link":"http:\/\/www.zzsgzn.com\/?sf","title":"\u4e13\u4e1a\u7684.net\u7c7b\u5e93SDK\uff0c\u63a5\u53e3\u7b80\u5355\uff0c\u529f\u80fd\u5f3a\u5927\uff0c\u63d0\u4f9b\u6280\u672f\u652f\u6301\uff0c\u514d\u8d39\u4e0b\u8f7d\u8bd5\u7528","area_info":{"area":"G1:G1","height":"17","width":"17","left":"102","top":"0","pos":{"rowTop":1,"rowBottom":1,"columnLeft":7,"columnRight":7},"size":1},"created":"1573655811","modified":"1573656217"},{"id":"1750000020999651","user_id":"1030000020998916","box_ad_id":"0","started":"1573747200","ended":"1574352000","cycles":"1","status":"0","banner":"\/211\/806\/2118067275-5dccecff9d54a","link":"https:\/\/developer.aliyun.com\/article\/718700?utm_content=g_1000087482","title":"\u963f\u91cc\u8d44\u6df1\u4e13\u5bb6\u804c\u4e1a\u751f\u6daf\u771f\u5207\u4f53\u4f1a\uff0c\u6280\u672f\u4eba\u6210\u957f\u624b\u518c","area_info":{"area":"F7:I8","height":"34","width":"68","left":"85","top":"102","pos":{"rowTop":7,"rowBottom":8,"columnLeft":6,"columnRight":9},"size":8},"created":"1573710750","modified":"1573711163"},{"id":"1750000021029639","user_id":"1030000021028074","box_ad_id":"0","started":"1574092800","ended":"1574697600","cycles":"1","status":"0","banner":"\/428\/191\/4281911895-5dcf9f3ba86b9","link":"https:\/\/www.bt.cn\/?invite_code=MV9wcGJuaWI=","title":"\u8fd0\u7ef4\u8981\u9ad8\u6548\uff0c\u88c5\u5b9d\u5854\uff0c\u4e00\u952e\u7ba1\u7406\u670d\u52a1\u5668\u3002","area_info":{"area":"A3:O5","height":"51","width":"255","left":"0","top":"34","pos":{"rowTop":3,"rowBottom":5,"columnLeft":1,"columnRight":15},"size":45},"created":"1573886953","modified":"1573887895"},{"id":"1750000021033368","user_id":"1030000011325091","box_ad_id":"0","started":"1574092800","ended":"1575302400","cycles":"2","status":"0","banner":"\/282\/276\/2822760954-5dd0d7377a5f6","link":"http:\/\/www.stdfly.com\/index.html","title":"\u4e1c\u5c0f\u5e97, \u6559\u4f60\u73a9\u8f6c\u4eac\u4e1c\u5b98\u65b9\u7ea2\u5305","area_info":{"area":"D1:D1","height":"17","width":"17","left":"51","top":"0","pos":{"rowTop":1,"rowBottom":1,"columnLeft":4,"columnRight":4},"size":1},"created":"1573966715","modified":"1573967674"},{"id":"1750000021056173","user_id":"1030000009386138","box_ad_id":"0","started":"1574179200","ended":"1574784000","cycles":"1","status":"0","banner":"\/314\/725\/314725064-5dd3c683aa1b0","link":"https:\/\/github.com\/haizlin\/fe-interview","title":"\u524d\u7aef\u9762\u8bd5\u5f00\u6e90\u9879\u76ee\uff1a\u4e16\u4e0a\u6700\u5168\u7684\u524d\u7aef\u9762\u8bd5\u9898\uff081500+\uff09\uff0c\u6bcf\u65e5\u66f4\u65b0","area_info":{"area":"O8:O8","height":"17","width":"17","left":"238","top":"119","pos":{"rowTop":8,"rowBottom":8,"columnLeft":15,"columnRight":15},"size":1},"created":"1574157706","modified":"1574160149"}].forEach(function(item) {
    var html = '<area shape="rect" ' +
        'target="_blank" ' +
        'onmouseover="SFGridAd.d(this)" ' +
        'onmouseout="SFGridAd.e(this)" ' +
        'onclick="SFGridAd.c(' + item.id + ')" ' +
        'coords="' + item.area_info.left + ',' + item.area_info.top + ',' + ((+item.area_info.left)+(+item.area_info.width)) + ',' + ((+item.area_info.top)+(+item.area_info.height)) + '" ' +
        'href="' + item.link + '" ' +
        'stitle="' + item.title + '" />'

    areaArr.push(html)
})

document.getElementById('gridsMap').innerHTML = areaArr.join('')

document.getElementById('gridsMap').onmousemove = function(e) {
    var pos = getMousePos(e)

    document.getElementById("gridMapHoverBox").style.left = pos.x + 20 + 'px'
    document.getElementById("gridMapHoverBox").style.top = pos.y + 20 + 'px'

    document.getElementById("gridMapHoverBox").innerHTML = sTitle
}

// 增加 view 统计
setTimeout(function() {
    isShow = document.querySelector('img[src^="https://static.segmentfault.com/sponsor"]').clientHeight > 0
    if (isShow) ajax({url: viewApi, method: 'GET'})
}, 0)

function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
}
