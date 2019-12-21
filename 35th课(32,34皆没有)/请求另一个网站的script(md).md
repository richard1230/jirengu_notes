[TOC]
## 耦合
彼此之间关系太紧密(这叫耦合):耦合不好,需要解耦!
![34955270.png](请求另一个网站的script(md)_files/34955270.png)
第一个网站的前端代码:
![35680704.png](请求另一个网站的script(md)_files/35680704.png)
![36231258.png](请求另一个网站的script(md)_files/36231258.png)

第二个网站的后端代码:
![35731270.png](请求另一个网站的script(md)_files/35731270.png)

点击打钱之后：
![35801835.png](请求另一个网站的script(md)_files/35801835.png)
点击确定之后:
![35840649.png](请求另一个网站的script(md)_files/35840649.png)
![35919784.png](请求另一个网站的script(md)_files/35919784.png)
## jsonp
![36458418.png](请求另一个网站的script(md)_files/36458418.png)

下面这是原来的代码(返回字符串),上面是改变之后(变成了一个对象,为jsonp)
![36535301.png](请求另一个网站的script(md)_files/36535301.png)

### jsonp的定义
JSONP
请求方：frank.com 的前端程序员（浏览器）
响应方：jack.com 的后端程序员（服务器）
请求方动态创建 script，src 指向响应方，同时传一个查询参数 ?callbackName=yyy
响应方根据查询参数callbackName，构造形如yyy.call(undefined, '你要的数据')yyy('你要的数据')
这样的响应
浏览器接收到响应，浏览器就会执行 yyy.call(undefined, '你要的数据')
那么请求方就知道了他要的数据
这就是 JSONP

约定：
callbackName -> callback
yyy ->函数+ 随机数:  frank12312312312321325()
$.ajax({
url: "http://jack.com:8002/pay",
dataType: "jsonp",
success: function( response ) {
if(response === 'success'){
amount.innerText = amount.innerText - 1
}
}
})

$.jsonp()
注意:这里和AJAX没有任何关系

## 表单
![46108343.png](请求另一个网站的script(md)_files/46108343.png)

![46319714.png](请求另一个网站的script(md)_files/46319714.png)
### get请求
![46437335.png](请求另一个网站的script(md)_files/46437335.png)

![48117448.png](请求另一个网站的script(md)_files/48117448.png)
### post方法:
![48410552.png](请求另一个网站的script(md)_files/48410552.png)
![48271846.png](请求另一个网站的script(md)_files/48271846.png)
刚刚提交的数据:
![48314794.png](请求另一个网站的script(md)_files/48314794.png) 

![48518889.png](请求另一个网站的script(md)_files/48518889.png)

