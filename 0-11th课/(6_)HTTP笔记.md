[TOC]
## 定义
超文本传输协议（HTTP，HyperText Transfer Protocol)是互联网上应用最为广泛的一种网络协议。

HTTP的作用就是指导浏览器和服务器如何进行沟通。那么又是如何实现沟通的呢？



![]((6_)HTTP笔记_files/634789f8-cdd5-46c1-a7be-5c8fbc5ab135.jpg)

如上图所示:客户端的浏览器发起请求--->服务器在其80端口接收到请求之后，然后根据客户端的请求发出对应响应返回内容,将相关数据发送给客户端---->浏览器负责下载响应内容;

tips:
80端口专门用来服务HTTP;
如下图这样的一个URL,构成如下:

![]((6_)HTTP笔记_files/4e7e786b-f543-494f-b5d2-225fa80e95fd.png)

![]((6_)HTTP笔记_files/10d6c9e6-480a-40c6-a11c-a955282cc5c7.png)

## HTTP请求(重要)
1.发送请求的格式:
第一部分: 动词 路径 协议/版本
第二部分: key1 : value1
第二部分：key2 : value2
第二部分：key3 : value3
第二部分：Content-Type : application / x-www-form-urlencoded                        (我要上传的数据内容的类型和格式)
第二部分： Content-Length：10 (我要上传的数据的长度)
第二部分：HOST：www.baidu.com  //目标域名
第二部分：User-Agent : Curl/7.54.0  //你通过哪个软件(工具发起请求的)
第三部分：
第四部分：要上传的数据

- 请求最多包含四部分,至少三部分,也就是第四部分 可以空着;
- 第三部分永远都是一个回车(/n)主要作用就是划出三四部分的界限;
- 动词主要有GET(获取),POST(上传数据:主要是用户名,密码,头像之类的数据),PUT(整体更新，就是将你上传的所有数据全都替换掉),PATCH(局部更新，就是将你上传的数据中的一部分更新掉),DELETE(删除)等；
- 这里的路径包括查询参数,但是不包括锚点
-  如果你不写路径,默认为`/`;（路径必须以`/`开头）
- 第二部分的Content-Type标注了第四部分的格式
注:不按照协议来,会报错的!
下面这个图很清晰的表述了请求与响应的格式：

![]((6_)HTTP笔记_files/635c107e-1c1a-422d-91e9-fe74715d2a85.jpg)
### 对服务器的测试
测试1：
![]((6_)HTTP笔记_files/22989be4-7d58-4d0a-a72a-690dbad46051.jpg)
```
curl -s -v -H "Host: www.qq.com" -- "https://www.baidu.com"
```
这句话的意思是:对百度服务器说，有没有qq.com的页面，这里会出错!

测试2:
![]((6_)HTTP笔记_files/4b3e2e16-dda5-4344-8635-3f3dcc0f4b34.jpg)
```
curl -s -v -- "https://www.baidu.com/s?wd=JavaScript"
```
GET和协议之间的就是路径,包含查询字符串的;
测试3：
![]((6_)HTTP笔记_files/8533bf79-6cc2-4c16-878b-ed5d0737268b.jpg)
服务器是不看路径的；如上图

测试4:
 如果你不写路径,默认为`/`
![]((6_)HTTP笔记_files/982bd046-4af3-4a99-a294-7fa070318460.jpg)

Content-Type : application / x-www-form-urlencoded:
这里的`application`表示一个应用数据;
x-www-form-urlencoded：`x`表示这是一个实验属性，没有被写入规范的属性!`form`表单;`urlencoded`以urlencoded的形式给其压缩;


## chrome实验

![]((6_)HTTP笔记_files/c4fab3bd-4b81-4018-a535-27a16813a7cd.jpg)

![]((6_)HTTP笔记_files/04179428-1623-446e-8177-d0b170caf67b.jpg)

![]((6_)HTTP笔记_files/e58a89ef-d45f-4af7-a3d4-ef5ad692a952.jpg)

![]((6_)HTTP笔记_files/514e18de-793a-4ccc-8aee-cd4001446dd8.png)

![]((6_)HTTP笔记_files/4d3bcdf4-f11a-4859-95b9-4469e532dfcb.png)

可以看到http的请求;


下面看一个post的请求:
要在Preserve Log这里打钩:
![]((6_)HTTP笔记_files/e16ddd8e-e0a8-4f74-a413-33fc8a63f9bb.jpg)


![]((6_)HTTP笔记_files/6ad961f0-ba06-47be-b874-da55d1ac2d05.png)
可以看到自己的用户名和密码:

由于这里是https协议,all数据在网络上传输的时候是需要加密的;
![]((6_)HTTP笔记_files/c7af3608-7072-4011-9b78-df3dec9c3051.png)

## 响应
content-length和content-type需要了解一下:
我们请求的时候会带上我们的数据,返回的时候会带上百度的数据(响应的格式，这里为文本,以及响应的长度);
server:指的是百度的一个前端服务器(在百度那里的,不是我们这里,这是它为了方便调试的,比如说哪一台出错了,就可以调试哪一台);
第三部分也是回车，就是图里面空的那一行;
![]((6_)HTTP笔记_files/f7f03aea-a9fa-42cb-a840-eb203a41c36f.jpg)
理论上来说百度首页是不接受post的;

### 响应的格式(重要)
**1.协议/版本号 状态码 状态解释
2.key1: value1
2.key2: value2
2.Content-Length:17931
2.Content-Type:text/html
3.
4.要下载的内容**

状态码:需要记忆，是服务器对浏览器要说的话:
- 1xx:不常用
- 2xx:表示成功，200表示普通成功(如果是get，则返回200给你);204表示创建成功(如果你是post,服务器就可能返回一个204给你)；
- 3xx:表示你滚吧；(301:表示以前在这里的那个人永久搬走了,我会在第二部分告诉你它搬到哪里了；302：表示他临时不在,可能过几天就回了)
- 4xx:表示你错了(比如你输入的网址有错误)
- 5xx:表示我错了==


*   状态解释没什么用
*   第 2 部分中的 Content-Type 标注了第 4 部分的格式(**第二部分要与第四部分对应**)；Content-Type 表示的是响应的内容的格式,第四部分为响应的内容！！
*   第 2 部分中的 Content-Type 遵循 MIME 规范


![]((6_)HTTP笔记_files/2f36dbf6-0bb7-47ad-8e33-26d5d87eb82d.png)
响应部分的第一部分和第二部分在Headers里面；


![]((6_)HTTP笔记_files/0d59cbd2-82da-4507-91f2-41c144543be5.png)
第四部分在response里面;



