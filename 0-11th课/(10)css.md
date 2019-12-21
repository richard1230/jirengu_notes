[TOC]

css资源:

## CSS 学习资源

1.  Google: 关键词 MDN
2.  [CSS Tricks](https://css-tricks.com/ "null")
3.  [Google: 阮一峰 css](https://www.google.com/search?q=%E9%98%AE%E4%B8%80%E5%B3%B0+css "null")
4.  [张鑫旭的 240 多篇 CSS 博客](http://www.zhangxinxu.com/wordpress/category/css/page/25/ "null")
5.  [Codrops 炫酷 CSS 效果](https://tympanus.net/codrops/category/playground/ "null")
6.  [CSS揭秘](http://www.ituring.com.cn/book/1695 "null")
7.  [CSS 2.1 中文 spec](http://cndevdocs.com/ "null")
8.  [Magic of CSS](http://adamschwartz.co/magic-of-css/ "null") 免费在线书


![]((10)css_files/c049929f-88f3-47a8-8136-598df0d68ccf.jpg)

![]((10)css_files/8ecc7edb-8d7a-4c67-b561-82451b8fa8af.png)

![]((10)css_files/df71a44c-cb4b-491b-8d5d-c56506c924b1.jpg)


## 小试牛刀
### 背景色
```
<body  style="background-color : red">
```
![]((10)css_files/43fa5fd1-ca93-4c2b-8014-1256cad9a56e.png)
![]((10)css_files/f93ed9c4-4506-4d98-96da-8f0fdb3326c6.png)
body这个样式是红色的,冒号等全是英文的;

### 居中

```
<h1  style="text-align:center;">richard</h1>
```
自动让h1里面的文字居中;
![]((10)css_files/82f4054a-8a49-42ee-9553-57c035ff1369.png)


### 给文字着色:(4种方法)
```
<h1  style="text-align:center; color: red;">richard</h1>
```
![]((10)css_files/4272a0ab-2c7c-4ab1-aed0-7c4185b820e9.png)

![]((10)css_files/cf2683d6-8ada-43ea-9a7e-1c5a1ffa305f.png)
#### 上面用的style属性也叫做内联样式;
就是把样式写在标签上;
#### style标签
还有一种方法叫做style标签(一般写在head里面;);如下:

![]((10)css_files/f153226a-1270-48c5-ae90-d754ea7420b5.png)

![]((10)css_files/85a4854e-bfe1-4310-8400-ee1f051e6649.png)

h1也是一样的;
![]((10)css_files/f68a0817-bb74-41eb-a6fa-d6c11e3b0762.png)

![]((10)css_files/16c861cc-d005-49da-93a2-8f12b5cb714d.png)

#### 第三种方式(这种方式用的最多,需要掌握！！):
用link标签的方式引入 stylesheet;
link和当前文档是什么关系,可以用rel(relationship),这里为stylesheet;
注意:这里的CSS要为大写；

![]((10)css_files/23380589-4304-454e-8b25-1092dc7c3451.png)

a.CSS

![]((10)css_files/a4aaced5-d58c-4bc7-a02c-daecebe6f462.png)

![]((10)css_files/df637dc5-3f1d-46b8-b2e4-962af568a19a.png)

![]((10)css_files/d8d41dc8-990c-425a-9ba4-47adb90e5a2e.png)

![]((10)css_files/298f05ae-e2e6-43fc-8624-6ceb1ec442ad.png)

还有第四种:
在一个CSS里面引入另一个CSS；
在html里面看到了一个link;
![]((10)css_files/70ca3766-520f-4fc6-996b-cc98b22afeaf.png)
于是就去请求`a.css`,发现先要请求`b.css`

![]((10)css_files/36be1148-d37b-46f9-9525-daa0cafd7688.png)


发现只能先去请求`b.css`;
只能再发一个请求;
![]((10)css_files/79c4dc3d-9539-4697-aeb7-a003603c1361.png)

html如下:
```
<!DOCTYPE  html>
<html>
<head>
<link  rel="stylesheet"  href="./a.CSS">
<title>richard的个人简历</title>
</head>
<body  >
   <form  action="index2.html"  method="POST">
<input  type="text"  name = "xxx">
<input  type="password"  name = "yyy">
<input  type="submit"  value="提交">
<label  >  <input  type="checkbox"  > 爱我</label>
<button>button</button>
</form>
<div  class="topNavBar clearfix">
<a  class="logo"  href="#"  alt="logo"  style="float: left; ">
<span  class="rs">RS</span><span  class="card">card</span>
</a>
<nav  style="float: right;">
<ul  class="clearfix">
<li><a  href="#">关于</a></li>
<li><a  href="#">技能</a></li>
<li><a  href="#">作品</a></li>
<li><a  href="#">博客</a></li>
<li><a  href="#">日历</a></li>
<li><a  href="#">联系方式</a></li>
<li><a  href="#">其他</a></li>
</ul>
</nav>
</div>
<div  class="banner"  style="background-image: url(#)"></div>
<main>
<div  class="card">
<div  class="pictureAndText">
<div  class="picture">
<img  src=""  alt="头像">
</div>
<div  class="text">
<div  class="profile">
<span  class="welcome">Hello</span>
<h1  >richard</h1>
<p>前端开发工程师</p>
<hr>
<dl>
<dt>年龄</dt>
<dd>18</dd>
<dt>所在城市</dt>
<dd>北京</dd>
<dt>邮箱</dt>
<dd>yonghu1230@gmail.com</dd>
<dt>手机</dt>
<dd>13812345678</dd>
</dl>
</div>
</div>
</div>
<footer  class="media">
<a  href="#"><img  src="#"  alt="..."></a>
<a  href="#"><img  src="#"  alt="..."></a>
<a  href="#"><img  src="#"  alt="..."></a>
<a  href="#"><img  src="#"  alt="..."></a>
<a  href="#"><img  src="#"  alt="..."></a>
<a  href="#"><img  src="#"  alt="..."></a>
<a  href="#"><img  src="#"  alt="..."></a>
</footer>
</div>

<a  class="button"  href="#">下载 PDF 简历</a>

<p>
richard,二进制 安全 工程师。<br>
技能：前端开发，Rails 开发，Node.js 开发
</p>

</main>
<section>
<h2>技能</h2>
<ol>
<li>HTML 5 &amp; CSS 3</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>Vue</li>
<li>React</li>
<li>HTTP</li>
</ol>
</section>
<section>
<h2>作品集</h2>
<nav>
<ol>
<li>所有</li>
<li>框架</li>
<li>原生JS&amp;CSS</li>
</ol>
</nav>

<div  class="jobs">
<div  class="big"></div>
<div  class="small"></div>
<div  class="small"></div>
</div>

</section>
<a  href="#">link</a>
</body>
</html>
```
## 小结
1.内联`style`属性
2.style标签
3.外部文件 css link
4.@import url(./b.CSS);//这里绝对路径也可以


怎样让下面的这部分浮动起来？
![]((10)css_files/b6f1bb46-ec7f-435c-893a-1dcef8ea5ad8.jpg)

**给所有子元素添加`style="float: left;"`**

![]((10)css_files/edb0abaa-efcf-42ae-bb11-b197d917e98f.png)

发现上面果然变了:
![]((10)css_files/0784454a-0df4-445e-bef0-86170e264696.png)
**如何把里面的小圆点干掉呢;**
ul：全称:unordered list;
```
<ul  style="list-style: none;"  class="clearfix">
```

![]((10)css_files/589a731d-1687-4fde-8c0e-004793c96d3b.png)

果然变了:
![]((10)css_files/0f31f5a0-6bb7-4a1d-85f0-c32b3ff44c13.png)
如果要修改 默认样式,先要修改末默认样式:
![]((10)css_files/3d281bc3-74d0-4575-9e00-519f94d9e92a.png)
按照下面修改即可:
![]((10)css_files/4b20369c-3599-4aeb-b8c8-8539dc5c21ab.png)

nav里面写成left:
![]((10)css_files/984c0017-7724-479f-bb5f-de94ed2874cb.png)

![]((10)css_files/faff30c8-4a1b-44b7-89be-26dddbf181b7.png)
这里的头像是什么bug;

## **给ul加上 一个边框:**
![]((10)css_files/0100ddde-1f4d-4f9c-8f7f-35be6ece884f.png)
## **li也加上边框**：
![]((10)css_files/bdddd88d-120a-4b6e-b701-07859e2b94dc.png)
![]((10)css_files/e637c013-9679-42e6-afad-ba3e5ca4ba43.png)

事实上头像在下面：

![]((10)css_files/7bcb75c0-abaf-4279-bda6-d80d3b3aa420.png)
**怎么样修复这个bug??**
写一个类:
```
.clearfix::after{
content: '';
display:block;
clear:both;

}
```
**clearfix是类名,after是伪类;**(这里最好记忆一下！)
而后把类的名字写到所有浮动元素的爸爸身上;
所有子元素浮动他们的爸爸都要添加clearfix;



![]((10)css_files/7a75398e-97fa-49ae-97dd-efd291b7d81e.png)


![]((10)css_files/e3dcfc80-6129-4b20-870d-5da80f73af30.jpg)
## 小结(修复各种bug)
1.**给所有子元素添加`style="float: left;"`**（让字体横向）

**2.所有子元素的爸爸都要添加clearfix类;**
**3.修复头像的bug**
```
.clearfix::after{
content: '';
display:block;
clear:both;

}
```

**3.干掉nav里面的小圆点**
```
<ul  style="list-style: none;"  class="clearfix">
```


## 设置字体和颜色

下面一步:设置字体高度和空隙;
利用qq截图来进行测量;（宽17,高11）
![]((10)css_files/f2583223-b6af-4e1f-90c5-f203a1c6c127.jpg)

进行修改:(方便简写)
![]((10)css_files/00d579a4-3edf-4f23-87c4-f3346e63f30a.png)
红线里面进行修改;（将其剪切）
剪切到下面了;
![]((10)css_files/74dccdc5-0397-475a-906d-88e7c7496eb1.png)
大于号两边是父子关系
```
.topNavBar>nav>ul{
list-style: none; margin: 0;padding: 0; border:1px  solid  red;
}
```
大于号指着`父亲`！
![]((10)css_files/369bd275-6509-4ba5-9828-facb0a90a2fa.png)

像下图就不可以了:
.topNavBar和nav不是父子关系！
![]((10)css_files/b8525801-a9f0-4d82-a5a8-2ff1ee82dca1.jpg)

```
.topNavBar>nav>ul>li{
float: left;
border:1px  solid  green;
}
```
![]((10)css_files/572e89d7-b48d-410e-beba-07bc42343365.png)

前后对比:
![]((10)css_files/ce33c592-fa86-4bc2-a1b5-5a906b22e8c7.png)

![]((10)css_files/8e0b53df-5ca1-4b64-bd6f-012fb7ae2057.png)

### 有个注意点:
h-s -c 1是在local目录下的;


![]((10)css_files/77648311-766a-495e-92e9-a0d3836eab05.jpg)

此时效果如下:
![]((10)css_files/93faf604-690d-4866-8ae5-654b482aff81.png)
进入resume目录下:
![]((10)css_files/2ccb93ae-3866-4ad8-a381-d7a17adcdbf3.png)

或者直接在resume目录下面`h-s -c 1`也行;
![]((10)css_files/edb1d4a0-a72f-4bde-83ed-9a1c81050f54.png)

![]((10)css_files/74ef8c64-1788-45bd-97f6-e03d79bd827a.png)

### 如何设置字体

#### **这里是考点**：
**默认字体16px:(看的是它计算出来的属性:16像素)**
![]((10)css_files/d78481fa-fe85-4ef1-809d-433ca6e9eae7.png)

**style是展示样式;
Computed是计算出来的样式**；
![]((10)css_files/1cb6ee22-6c90-4eeb-bb4e-3dd4a8eb31ea.png)

修改字体：
```
.topNavBar>nav>ul>li>a{
font-size: 12px;

}
```
![]((10)css_files/ec06cfdb-b421-4857-aa4e-6a2944d727aa.png)

![]((10)css_files/2b845e24-09b1-475f-b32a-bec42a2ce6ca.png)

字体 颜色:

![]((10)css_files/b2be091b-c0cd-4fc4-8791-eb05e146729e.jpg)

点击此箭头：
![]((10)css_files/7dabaa10-bf30-4b51-a956-ead13e57858b.png)

### 如何修改颜色：
![]((10)css_files/6293e0c2-545f-43bd-847a-f61bad0b4591.png)

![]((10)css_files/5296cce5-c2b5-4dbb-a244-8d296ededb9a.png)

![]((10)css_files/dec8ea4f-4887-4a52-93d7-6c921e9249a7.jpg)
颜色设置:
![]((10)css_files/4799d1b6-347a-4f0a-b4df-8d0e738dc5cb.png)

效果:
![]((10)css_files/72c7816a-7f88-4747-bbd7-595e7921c3a7.png)



![]((10)css_files/022ac3d1-72b2-40a1-b298-fef56d8f6af7.png)


![]((10)css_files/5da86823-ed35-496c-8d7c-adbb921dc41d.png)

### 去下划线
![]((10)css_files/c36bc7ab-c113-4281-803f-5bed036b7dd1.png)

![]((10)css_files/d7b9a9a6-0041-4a01-ab77-8b66d9d14235.png)


也可以在这里写:

![]((10)css_files/4ead0da3-b6d3-4bd7-a109-72d21eb18c18.png)

![]((10)css_files/1cc59298-d15c-4283-a62f-58aeef9ad283.png)

不知道一个东西的取值,有两种方式:
1.搜索MDN
2.一个一个的去试;


### 间距

![]((10)css_files/2da5ff7a-ce82-4cde-af56-72a8230e158f.jpg)
宽度34;
左右两边各给17外边距;
![]((10)css_files/3b2c4f76-974c-4ba1-a962-36eb2a6f4cd1.png)

![]((10)css_files/e6928e3d-a1c3-49a3-a519-096cc1dacd0a.png)

### 字体加粗
![]((10)css_files/17eef33b-b0dc-41af-b831-008537d114e1.png)

![]((10)css_files/18522e5c-c843-4e58-9cf0-8e40e5e1ea33.png)


### 如何让两个加红的处于同一行:
![]((10)css_files/3c33985c-f6f8-403d-84f5-43790a1ae915.png)
怎样让 他们在一行？
RScard是一个子元素;
下面七个li的父元素ul又是个子元素;
要想让这两个子元素在同一行:
**把a和nav都加上 浮动;
然后在他们的爸爸身上加上一个clearfix**
如何做一个左右结构的菜单;(如何把几个li变成一行;)




![]((10)css_files/a4ecc3e7-d323-48cc-8bee-bf745fed621d.png)
![]((10)css_files/6063429e-88b0-4ad6-a356-85ee9afd46ea.png)

![]((10)css_files/a548340c-e21a-43d8-b815-74fc79a7dca5.png)
怎样分成左右两边？
如下：
![]((10)css_files/e16d0d93-9df9-404d-915e-9e042aafd14d.png)

![]((10)css_files/46efc6de-1b56-4f38-b882-30f286f26705.png)

### 怎样出红线的效果(鼠标放于导航字体上面有红线)
先让其有边框:
![]((10)css_files/195ff6a9-4d4b-441d-ad17-bc2e1f9d9425.png)

![]((10)css_files/74889a19-89bc-45d0-98e7-6fcbce530b54.png)

41:44
先处理一个小问题:
![]((10)css_files/974a8f76-78e9-4398-8b63-bea228552abf.png)
###  Disable Cache
**之前有个命令一直错了,正确的如下:(不要缓存)
然后在开发者工具 Network 里勾选 Disable Cache**(可以解决无法涮新的问题)
`http-server . -c-1`
![]((10)css_files/01bda6da-e559-413f-8e1d-bc903e099240.png)


![]((10)css_files/8fbe01f6-67b4-4be7-a138-75586672ccd0.png)

此时又出现了个问题:
我鼠标浮上去怎么发现左边在抖(右边在抖);
怎么解决？
就加一行代码即可:

![]((10)css_files/30a9c838-31b2-45bd-90cc-e6cbb6c716a1.png)

![]((10)css_files/4b4d513a-c757-4688-aae6-a7b57342cf0b.png)

再稍微修改:(添加了一个bottum)
![]((10)css_files/f661828c-c5fd-4fb8-b3b0-5e37a2d90216.png)


## 怎样测量下划线宽度hover(悬浮起来的效果)和颜色
1.强制触发其其悬浮(hover)状态：

![]((10)css_files/89cbf464-3c14-4e3d-b8d6-625274f09e48.png)

![]((10)css_files/fef76cbb-38b7-41e2-a353-cefecfd379ab.jpg)

![]((10)css_files/cfd144aa-23cb-4a41-8d92-a7d270e278f8.jpg)

![]((10)css_files/2489d9ae-d05c-4559-b194-65353dbe1db3.png)

![]((10)css_files/793222ca-9be8-49be-b433-40d48486ea84.png)

## 怎样设置下划线和字体之间距离

![]((10)css_files/e569e17d-f059-4cea-9bee-7b1d985b6fb7.png)

距离变了：
![]((10)css_files/aa1d5bd1-390d-417c-aae9-165d69cfbd5a.png)


发现a的边界在这里:
![]((10)css_files/ea00b62b-9f86-43a3-a75b-1781614cbeb8.png)

li的边界也会自动出现:
![]((10)css_files/12f524c6-9794-441c-8fce-3f1c69135693.png)

这里还有一个问题:
a标签的高度比li的要高;

![]((10)css_files/c15dbe9b-7b1d-4800-916b-72e99c333fe8.png)
![]((10)css_files/bb7a8d14-3da4-495f-bbb5-9300b4aaad38.png)
这里只需要加一个display
![]((10)css_files/883ea2c5-87e1-4614-94bd-0af14d0aa175.png)
现在看一看:
![]((10)css_files/237c77e8-7c67-42af-88de-d3e75aca77bf.png)

![]((10)css_files/062454b0-0cb2-42dd-b954-e8ab5395f92f.png)
