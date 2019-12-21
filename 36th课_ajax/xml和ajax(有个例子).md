[TOC]

笔记:
https://xiedaimala.com/tasks/62169911-890d-4048-8d32-a393fdf16d2e/text_tutorials/c6dc435a-843a-4a31-be20-d73565233c54
## 一个简单的ajax的demo:
![84542350.png](xml和ajax(有个例子)_files/84542350.png)
### 三个文件:
index.html:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>首页</title>
<!--06-JSON发送请求-->
</head>


<body>
<button id="myButton">点我</button>
<script src="main.js"></script>
</body>
</html>


```

main.js:
```
/**
* Created by Administrator on 2018/1/15 0015.
*/
myButton.addEventListener('click',(e)=>{
debugger
console.log("-------------")
console.log(e)
let request = new XMLHttpRequest()
request.onreadystatechange = ()=>{
debugger
if(request.readyState === 4){
console.log('请求响应都完毕了')

if(request.status >= 200 && request.status <300){
debugger
console.log('说明请求成功')
console.log(typeof request.responseText)
console.log(request.responseText)

let string = request.responseText
//把符合JSON语法的字符串转换成JS对应的值
let object = window.JSON.parse(string)
console.log(typeof object)
console.log(object)
console.log('object.note')
console.log(object.note)
console.log('object.from')
console.log(object.from)
}else if(request.status >= 400){
console.log('说明请求失败')
}
}
}
request.open('GET','/xxx') //配置request
request.send()
})

```

server.js:
```
var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 8888;

var server = http.createServer(function(request,response){
var temp = url.parse(request.url,true)
var path = temp.pathname
var query = temp.query
var method = request.method

//从这里开始看，上面不要看

if(path === '/'){ //如果用户请求的是/路径
let string = fs.readFileSync('./index.html')
response.statusCode = 200
response.setHeader('Content-Type','text/html;charset=utf-8')
response.write(string)
response.end()
}else if(path ==='/main.js'){
let string = fs.readFileSync('./main.js','utf-8')
response.statusCode = 200
response.setHeader('Content-Type','text/javascript;charset=utf-8')
response.write(string)
response.end()
//主要是这里
}else if(path='xxx'){
debugger
response.statusCode = 200
response.setHeader('Content-Type','text/xml')
//符合JSON语法的字符串
response.write(`
{
"note":{
"to":"小谷",
"from":"方方",
"heading":"打招呼",
"content":"hi"
}
}
`)
response.end()
}else{
response.statusCode = 404
response.setHeader('Content-Type','text/html;charset=utf-8')
response.write('呜呜呜')
response.end()
}

//代码结束，下面不要看
console.log(method+''+request.url)
})

server.listen(port)
console.log('监听' + port + '成功\n请用在空中转体720度然后用电饭煲打开\nhttp:localhost:'+port)

```
### 开启服务器
进入到当前目录下:
![84842897.png](xml和ajax(有个例子)_files/84842897.png)
如果遇到端口占用问题,看隔壁一篇文章;
如下图:
```
开启服务命令:
node server 8888(端口可以自己定)
```
![84950055.png](xml和ajax(有个例子)_files/84950055.png)
如上图所示,现在服务端处于此时状态(之前已经调试过一次了,故有`GET/xxx`);
下面以firefox(我自己电脑上面chrome有问题)为例开启调试:
首先确保网络这里没有任何之前的历史记录;
![85546757.png](xml和ajax(有个例子)_files/85546757.png)
然后,点击`点我`那个按钮;
自动跳至调试器那边;
![85663140.png](xml和ajax(有个例子)_files/85663140.png)
![85809171.png](xml和ajax(有个例子)_files/85809171.png)
单步调试:
走至第9行时,还未走第10行就直接跳至34行:(下图标错了)
![85996855.png](xml和ajax(有个例子)_files/85996855.png)
### 状态码为0
![86293310.png](xml和ajax(有个例子)_files/86293310.png)
其实此时可以看得出来此时的状态码为0:
此时控制台打印出来的与上面对应:
![86088528.png](xml和ajax(有个例子)_files/86088528.png)
### 状态码为1
继续单步调:
从34行回到第10行,同时发现状态码变为1了！
![31097.png](xml和ajax(有个例子)_files/31097.png)

![57586.png](xml和ajax(有个例子)_files/57586.png)
![74794.png](xml和ajax(有个例子)_files/74794.png)
注意,到了这一步了:
![123783.png](xml和ajax(有个例子)_files/123783.png)
到这一步的时候注意网络:
![1898932.png](xml和ajax(有个例子)_files/1898932.png)

![159466.png](xml和ajax(有个例子)_files/159466.png)
此时观察服务端和网络:

![550943.png](xml和ajax(有个例子)_files/550943.png)
![1940330.png](xml和ajax(有个例子)_files/1940330.png)
### 状态码为2
再次回到第10行:(状态码变为2)
![188970.png](xml和ajax(有个例子)_files/188970.png)

![331286.png](xml和ajax(有个例子)_files/331286.png)
![348238.png](xml和ajax(有个例子)_files/348238.png)
### 状态码变为3
再次回到10th行;
![364167.png](xml和ajax(有个例子)_files/364167.png)
![404909.png](xml和ajax(有个例子)_files/404909.png)
![422124.png](xml和ajax(有个例子)_files/422124.png)
### 状态码变为4了

![449709.png](xml和ajax(有个例子)_files/449709.png)
状态码为4

![642765.png](xml和ajax(有个例子)_files/642765.png)
![801266.png](xml和ajax(有个例子)_files/801266.png)
上面口误,应该是已知走到28行;
![863516.png](xml和ajax(有个例子)_files/863516.png)
然后程序就结束了!!!
可以看看控制台都打印了什么:
![940431.png](xml和ajax(有个例子)_files/940431.png)
看看此时的网络:

![1115539.png](xml和ajax(有个例子)_files/1115539.png)

## 手写ajax
![80718741.png](xml和ajax(有个例子)_files/80718741.png)


```
myButton.addEventlistener('click',(e)=>{
let request = new XMLHttpRequest()
request.open('get','http://jack.com:8002/xxx')
request.send()
request.onreadystatechange=()=>{
if (request.readyState===4){
if (request.status >= 200&& request.status<300){
let string = request.request.responseText
let object = windows.JSON.parse(string)
}
}
}

})




优化版：
 let request = new XMLHttpRequest()

  request.open('get', '/xxx') // 配置request

  request.send()

  request.onreadystatechange = ()=>{

    if(request.readyState === 4){ 

      if(request.status >= 200 && request.status < 300){

        console.log('说明请求成功')

      }else if(request.status >= 400){

        console.log('说明请求失败') 

      }

    }

  }  

```

