[TOC]

https://xiedaimala.com/tasks/589e810e-cabf-4f90-9042-dd49a217d047/video_tutorials/efdad97e-2875-460a-8e50-732d6feb6d4b

http://js.jirengu.com/?html,output

一些快捷键:
比如:输入input,而后直接按Tab键：
![]((8-9_1)html详解_files/a719ce2c-ff2d-4c8c-a2e1-cb924fa5bcb8.png)


![]((8-9_1)html详解_files/1d58dad3-afa6-45fa-96c7-f979f1fcc663.jpg)
1和2这两个div被放到一个 div里面了!(这么分是需要经验的,考虑了后面的css的,为了后面的布局)

css布局:横向和纵向；

![]((8-9_1)html详解_files/c94b556d-47ab-4427-82bf-a88fa51b9f9e.jpg)
3和4是纵向布局,1和2横向布局；
grid布局可以实现复杂布局；

## iframe
iframe是一个内嵌的窗口；

默认高度50,宽度是100；
![]((8-9_1)html详解_files/a0a6cb42-2c35-42c2-8aa9-a2c7bcc11b5b.png)

给其定义一个属性:
```
  iframe{
    width: 100%;
    
  }
```
![]((8-9_1)html详解_files/79fc064e-6794-4a5e-8596-2f4582d375c8.png)


没卵用:
![]((8-9_1)html详解_files/f181b481-0fca-4f21-a5e0-acbb5d89cc32.png)


宽度和高度不一样的!
![]((8-9_1)html详解_files/25381b60-0fad-46e0-bebd-f20512b5ca31.png)

## 超链接(a标签)
![]((8-9_1)html详解_files/78d0a8de-2d38-4c63-8563-47441b8806b1.png)
如何达到这样的效果:点击下面的qq的时候可以在上面打开呢;
在标签里面加一个`target`,对应的iframe里面加个`name`即可!
![]((8-9_1)html详解_files/3cd0a51a-bc31-4c84-8c95-b4b300281b50.jpg)

![]((8-9_1)html详解_files/0268d7c8-e6eb-4c4c-9266-d715146366ae.png)
src里面是可以写相对路径的:
它就会渲染当前目录下的html文件;
![]((8-9_1)html详解_files/e903d5e4-35e8-4dda-bd05-0f571c778d5d.jpg)

第一个`blank`表示新开一个页面打开;
第二个`self`表示在当前页面打开(就在这个iframe里面打开)；
第三个`parent`表示在当前页面打开(iframe下面的页面就是当前页面);
当有祖孙三代的时候,就能看出区别了;(即在`index2`里面继续嵌入一个`index3`)
第四个`top`的意思是在顶层打开;(即在`index3`里面打开的时候,直接在顶层的`index`里面打开)



![]((8-9_1)html详解_files/b55f6e26-97ae-4326-96e4-0a6a470acdf4.jpg)

![]((8-9_1)html详解_files/0a041961-b4b7-46a5-8931-b97ea3d3ad0d.jpg)

`index2`作为一个iframe出现在上面;
![]((8-9_1)html详解_files/e176705c-0d55-4704-bd25-8265ba5c4546.jpg)

第二个`self`表示在当前页面打开(就在这个iframe里面打开)
![]((8-9_1)html详解_files/d47aaffd-3e46-413e-995e-d9de6cb9f7f0.jpg)


![]((8-9_1)html详解_files/d708b13f-fd13-4b93-b456-e030b4f0bbce.jpg)

download属性:
![]((8-9_1)html详解_files/4beb4f7e-2bd7-46f0-bfe7-e2c11dd52b31.png)

![]((8-9_1)html详解_files/187c9273-2901-4c96-93fe-a6a59cb85981.png)

### a标签:
1.target；
2.download;
3.href里面能写什么
如果href里面就写一个`qq.com`,他不会跳往`qq.com`
![]((8-9_1)html详解_files/90efbc0f-df47-46e0-8e9d-37d3b010d65a.jpg)

这里将其 看成了一个文件(此时文件名为`qq.com`);
![]((8-9_1)html详解_files/e62822a4-a0d0-4d45-ab72-27193e69076a.png)
`<a  href="http://qq.com"  download>下载</a>`
表示我要开启一个网页,用http协议表示的;域名是qq.com;
还有一种方法是不写http/https，当前文件是什么协议,就是什么协议;
它会跑到`file://qq.com`(但是写代码的时候不准用file协议,所以不要这样！)
![]((8-9_1)html详解_files/742dfe9b-3d7c-4206-85e7-f15abb8fc6b6.png)

![]((8-9_1)html详解_files/7d656ef2-95c3-493d-b8a0-3adbf7a84d46.jpg)
那么怎么预览index.html呢;
- 一种方法是将其上传至github,用github的预览功能;
- 还有一种方法就是下载一个小工具http-server;
![]((8-9_1)html详解_files/94515261-8319-47a1-999d-644d4b50b7e9.png)
自己搭建服务器
**如何自己搞一个小的服务器;**


利用命令`npm i -g http-server`即可;
http-server这个工具和之前的node.js一样;
不需要写代码,直接帮你写一个node.js-server；
![]((8-9_1)html详解_files/f7815532-be0a-48d1-a83f-3678970c0852.png)
![]((8-9_1)html详解_files/23ba83e4-d50f-4ae9-ab85-962ab5a45ea1.png)

推荐用`http-sever -c -1`；就不要缓存了;
`//`表示你当前页面是什么协议,我就是什么协议;`//qq.com`表示无协议绝对地址


当这么写的时候只会跳转至`xxx.html`;

![]((8-9_1)html详解_files/7af07690-0e4c-4d5e-818d-c92c2deea4ff.jpg)

![]((8-9_1)html详解_files/900b62e6-a576-44ed-83b2-7d7958d13e82.jpg)

![]((8-9_1)html详解_files/10391c19-c875-4853-bef2-f61ee449b94c.png)

![]((8-9_1)html详解_files/39921414-9525-47db-ac58-3ffbef8d0ea9.png)

![]((8-9_1)html详解_files/686a1032-55c7-48c4-b638-6df1c3d717e2.png)

![]((8-9_1)html详解_files/cca7961e-3ce3-4953-ad7b-c1537460348c.png)

还可以在a标签里面写一个`？name=richard`(get请求)
![]((8-9_1)html详解_files/9961ba19-b8d7-4604-9bcb-4653884b1139.jpg)


![]((8-9_1)html详解_files/32ccfff3-5ff2-4548-af00-15b982b9a179.png)

![]((8-9_1)html详解_files/186e4847-2610-40a1-81c5-3be95302c704.png)

![]((8-9_1)html详解_files/aec26e02-ff90-4b6a-ab8a-cff585fbde33.png)

![]((8-9_1)html详解_files/d22f328d-3bda-42e8-b949-c56e5784ee0c.jpg)
`#`不发起请求;(锚点)
![]((8-9_1)html详解_files/c43221de-98a3-458d-9043-029fbaddb245.png)


**只有锚点是不发起请求的;(锚点是页面内的跳转,其他都是发请求的)；
**
![]((8-9_1)html详解_files/a030d910-c574-4ec2-99f1-cc2df46458da.png)

![]((8-9_1)html详解_files/b73a6fde-113a-4f07-bad3-2a7734ebf935.png)

还有一种是**伪协议:**
`<a href="javascript: alert(1)">qq</a>`(这里分号可写或者不可写皆可;这里没写,图里面写的)

![]((8-9_1)html详解_files/41ed3c7f-d08c-443e-8636-bad7dcc767ef.png)

![]((8-9_1)html详解_files/281a0070-964d-4388-8329-6d649c9212cc.png)

![]((8-9_1)html详解_files/071924b9-235e-4786-9014-3db00e0d7777.png)

我们写一个a标签,但是不跳转(什么动作都不要做)，不要写成`#`(这样容易造成在同一个页面里面上下动,这是锚点的特征)；
如果在href里面写成空的,则跳转至自身（页面涮新）；
![]((8-9_1)html详解_files/2aab5efc-2db8-456a-a1ab-1e66506133f7.jpg)

![]((8-9_1)html详解_files/6beda896-23f7-48fc-977a-ede7e145fc16.jpg)
如果遇到下面这种 情况,则说明就是遇到了这种需求(鼠标放于标签上面,但是不跳转,页面底端有`javescript:;`的字符串)
![]((8-9_1)html详解_files/99d513a2-b038-4ab4-8a40-8e1d5172ca93.jpg)

![]((8-9_1)html详解_files/10da7932-94ea-47f9-854d-2dd9e330ca20.png)

## 小结
a标签:
- target的四个值:
![]((8-9_1)html详解_files/2040f4a2-a4a6-4757-a7fd-1184093ef334.jpg)
- domnload属性
网页可以支持浏览器查看和下载;
根据浏览器响应里面的`content-type`;
a标签可以指定强制下载;
- href支持的几种:
1. `//qq.com`
2.`#xxx`  `?name=qqq` `./xxx.html`
3.`javascript:alert(1);` `javascript:;`

iframe标签:
name与a标签里面的target相互对应;
![]((8-9_1)html详解_files/941ff7d5-273d-47fd-8722-a65182850db2.jpg)

## form和table
1.a标签与form标签对比:
a标签跳转页面(发起HTTP GET请求)
属性见:
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a
form标签跳转页面(发起HTTP POST请求)
属性见:
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form

C:\Users\huyon\local\resume
![]((8-9_1)html详解_files/61d6948a-9c51-4111-9449-c226c45dd2bc.png)
![]((8-9_1)html详解_files/0bd079fc-43f7-41a4-9c06-444b2d527ab7.png)
这里以qq为例吧:
![]((8-9_1)html详解_files/9b8f0113-b7ca-4cdc-9833-5f45d7277654.png)

![]((8-9_1)html详解_files/1b68ed8d-de05-408f-b4ed-07ea1599c465.png)

![]((8-9_1)html详解_files/2d197114-5876-4077-be86-122edbf94aa9.png)
post方法:

![]((8-9_1)html详解_files/0ed62d69-26e1-4294-b7ad-da1338afaf9b.jpg)


发起了一个post请求:
![]((8-9_1)html详解_files/a1e1a416-a4b4-4513-8816-8d86ce1f3c12.jpg)

get是获取内容;
post是上传内容;
get这个页面,就是想获取这个页面的内容;
post：把我的东西提交到服务器；只不过服务器只接收这个路径而已，此路径不等于文件;

![]((8-9_1)html详解_files/04ea8030-67ac-4a7e-b19a-c3fa735c75d1.jpg)
我post必须post“一个地方”，这个地方恰好叫`index2.html`
![]((8-9_1)html详解_files/df4cafa8-2a57-4308-a3cc-016b65039fab.jpg)


![]((8-9_1)html详解_files/c586c691-3669-4dc4-b37f-cd3ebe7fb7c8.jpg)

![]((8-9_1)html详解_files/7e8d94e2-e3a1-4010-853e-dd2625950f60.jpg)

发现提交有了第四部分:
一般请求只有前两部分(第三部分回车不算)


![]((8-9_1)html详解_files/4744ce66-b40e-4860-8bd8-04cc59572e98.jpg)

![]((8-9_1)html详解_files/c565e234-36bd-45f2-9da0-3b43f7cefc9d.jpg)

Content-Type第四部分的内容的语法就是这个(`x-www-form-urllencoded`)
![]((8-9_1)html详解_files/53565a72-4dcb-4dd7-a192-163f96a1cbf4.jpg)

如果这里写中文:
![]((8-9_1)html详解_files/4e4f55c7-9fcb-4d05-8b8f-130c572bf235.jpg)
可以发现第四部分不想上面是直接的明文,这里经过转义了;
这是`x-www-form-urllencoded`所规定的;即所有英文字母之外的,都要经过转义;你好的`你`要被变成utf-8;
如果发现是中文,就把utf-8的每一个字节前面加一个`%`;这样的话三个字节用三个%括起来！

![]((8-9_1)html详解_files/2253b067-837d-4463-8e03-b631f570bdb9.jpg)

![]((8-9_1)html详解_files/7532d75c-25d8-448f-9651-68b25d60e5d5.jpg)

这里的`name`会在第四部分作为`key`;
改一下名字测试:
![]((8-9_1)html详解_files/c7b39a65-95e5-4342-84b1-0388f5d4f46a.jpg)

注意:file协议不支持`post`;
![]((8-9_1)html详解_files/123b30b3-cde1-462c-a4a1-09d0d195ba10.jpg)


可以看到第四部分:
![]((8-9_1)html详解_files/651833a7-f7f5-4d6b-a9c0-6e5919839a27.jpg)

注意get方法:
**get会把参数放到查询参数里面;
而post会把参数放到第四部分；**
![]((8-9_1)html详解_files/d17dfc7c-6c91-4812-8048-f313ebfe6d93.jpg)
![]((8-9_1)html详解_files/496e0628-d1f1-4989-842c-d372e762aa6b.jpg)


通过手动方法可以出现查询参数;
![]((8-9_1)html详解_files/e170e80b-d3f2-4a19-bcaf-a6a3e4dcdd06.jpg)

![]((8-9_1)html详解_files/410652be-bcab-4008-8624-414758a189f1.jpg)

![]((8-9_1)html详解_files/453dc017-7eff-42c4-ae7b-14a0711a6d33.jpg)

## 小结
get默认会把参数放于查询参数里面;
post默认会把参数放于第四部分(from data里面);

可以通过给action加一个路径参数,让post也有查询参数;但是不能通过任何方法让get有第四部分;

![]((8-9_1)html详解_files/2844c3f6-fea4-4b6a-a858-d32e8d52dce1.jpg)

![]((8-9_1)html详解_files/eea3a025-0e0f-42f2-a575-450e1115cebe.jpg)

## form标签的补充
form标签的target；
搭配规则和a标签一摸一样;


![]((8-9_1)html详解_files/5ea7e299-67c1-498f-829a-ce3b9bea8dbe.jpg)

## input
input属性:
https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input
![]((8-9_1)html详解_files/7f5959ef-4677-4616-a050-9140e00036b9.jpg)



![]((8-9_1)html详解_files/ee573e2b-653a-4949-a588-f0a9fba95a0c.jpg)

![]((8-9_1)html详解_files/adf8fbb3-ff3b-4ee9-922d-2af246f14a53.jpg)

## button与submit的区别:
如果一个form里面只有一个按钮;
button这个标签,如果没有写类型,那么它就会自动升级为提交按钮;
![]((8-9_1)html详解_files/ec053d17-9b7c-4c8c-8c27-90defeaf071b.jpg)

![]((8-9_1)html详解_files/aa6cde9d-1e4f-4291-9296-3a4ffd02dfd3.png)

![]((8-9_1)html详解_files/b8662558-8931-4cff-85f0-9e4633fe2b3f.png)

![]((8-9_1)html详解_files/bb5ef35e-1a89-41d0-a6ee-8be67eac4a2a.png)
button这个标签加上类型,则按照type写的,点击没什么卵用;把type 删掉,就可以提交了;
![]((8-9_1)html详解_files/834f0ca3-d074-4cec-ae8a-a89b91cacb29.jpg)
下面这个input里面,也不是提交按钮;

![]((8-9_1)html详解_files/0640b42e-5aa0-4b17-8457-8ab2f7b6739e.jpg)

**除非把type改成submit;**
![]((8-9_1)html详解_files/0e16f3c7-9626-46bb-8c5f-bab3adf5dc51.jpg)
![]((8-9_1)html详解_files/82961484-9a60-4b97-867a-390a675bf65b.jpg)

![]((8-9_1)html详解_files/0bcba5c2-fb64-4023-9ebc-bdae4a55b1c6.jpg)

submit是唯一能够确定form表单能不能点击提交按钮；而type如果为button的话，他就是一个普通的按钮;


输入1:

![]((8-9_1)html详解_files/cceb7ce1-243a-4213-b620-d8c576e449eb.jpg)


![]((8-9_1)html详解_files/c490da27-1caa-48d2-bfe9-3314b0e6e845.png)

![]((8-9_1)html详解_files/b375e1ea-b07e-4527-807b-1b455dbd62d5.jpg)
点击回车,会看到页面跳转了;就是由submit按钮!
![]((8-9_1)html详解_files/492323be-cc07-4221-9610-78c31a90d040.png)

![]((8-9_1)html详解_files/223aa542-5582-455f-a073-ab82d8cf688a.png)

submit改成button，点击回车:
没有任何反应:
![]((8-9_1)html详解_files/a925b42f-5e16-4a4b-acc6-d0c0cf2cf713.jpg)

![]((8-9_1)html详解_files/c064188b-c327-4484-81fb-0f626028ee4b.jpg)

`checkbox`

![]((8-9_1)html详解_files/854165d4-7e2a-4fbd-830e-d8315b20a858.jpg)
![]((8-9_1)html详解_files/2c2290e0-acbf-4a0d-be9e-a422975e9821.png)

![]((8-9_1)html详解_files/eb8a7cb5-b115-4357-9458-63833a0b545d.png)

![]((8-9_1)html详解_files/2c21715e-293a-4363-aef5-35562fba8150.jpg)
这个标签是为了这个input而准备的;
label的for和input里面的id是一对；


不想写Id，同时要想label与form有关联:
用label把inPut包起来:
![]((8-9_1)html详解_files/ef9aa4ab-4549-486d-847a-a5c978ff5fe2.jpg)


![]((8-9_1)html详解_files/3acb9b63-3539-4cdd-9dad-d23588ffaaae.jpg)

![]((8-9_1)html详解_files/a4b7a309-8427-4799-a9b7-54ba40e800ee.png)

## radio
### checkbox的一个问题的说明:
![]((8-9_1)html详解_files/c7681231-4314-4a94-a629-690a481bc585.jpg)



![]((8-9_1)html详解_files/6c37caa5-2570-495e-9d19-90a9d0e87f31.jpg)

![]((8-9_1)html详解_files/126bf559-61d1-4cc5-b50d-6b159dd37ec7.jpg)

点击`爱我`；注意:
![]((8-9_1)html详解_files/8724a39b-38e7-45da-8bd9-8a90482c0fb7.jpg)

换成yes:
![]((8-9_1)html详解_files/3de58c03-f401-42ef-8bf0-524846b6db5e.jpg)


![]((8-9_1)html详解_files/5dc2f313-61c0-47b5-a1ad-20afc98406fe.jpg)

![]((8-9_1)html详解_files/2990acf5-c47a-40fa-88bb-fa128f0a127d.jpg)

改成水果：
![]((8-9_1)html详解_files/d0db1c24-d103-4549-885a-b74c488cff11.jpg)

![]((8-9_1)html详解_files/b08d4d3d-e039-43fa-903e-7c1a4d5c2ea2.jpg)

![]((8-9_1)html详解_files/1a06ec3f-2086-4e48-89a7-6a198f20b7fb.jpg)

请看下面:

![]((8-9_1)html详解_files/f4d570f4-568d-4fa8-9174-e8fefdb69906.jpg)
此时我选的东西都会被提交至服务器上面;
那么服务器怎么知道你选择的是对的还是错的呢？

![]((8-9_1)html详解_files/931c93a3-08ad-458d-987a-6114cbb80694.jpg)
在每一个测试题这里都给一个name；
即:这里的每一个选项都是一个checkbox；每个都对应这一个name;
![]((8-9_1)html详解_files/ca93825d-848b-4864-b4fa-17d655d9cbdc.jpg)

通过上面可以知道checkbox可以选择多个个；
而radio要只能选一个！
选了两个了:

![]((8-9_1)html详解_files/9e9d9d71-4237-4a71-a563-070651d4e886.jpg)

![]((8-9_1)html详解_files/24c25ab9-090c-4a64-8c21-5ec73d9ea7fc.jpg)

加了个name(name是相同的)就只能选中一个了:
而桔子香蕉在有name的时候是可以同时选的,因为这是多选框;

![]((8-9_1)html详解_files/d33ac628-a758-48df-8b8f-d2d0283ef552.jpg)

![]((8-9_1)html详解_files/7e3354e5-a389-48c5-8a53-a3c5ec0106b8.jpg)

![]((8-9_1)html详解_files/cd9ae984-a360-4a0f-8a00-3f31dc9054c7.jpg)

2个作用:
1.radio里面如果名字相同,只有一个可以选中;
2.你提交的时候,服务器就知道你是什么名字了;

![]((8-9_1)html详解_files/9636b63b-4ede-489d-a304-7915ad49edf2.jpg)

![]((8-9_1)html详解_files/22c6860e-6594-4e51-8883-ace9a0a07eb6.jpg)
这样你的信息就提交至服务器上面了；


下拉列表:
## select：
select属性是默认被选中的;
第三组选不了,因为有个属性是disabled;

![]((8-9_1)html详解_files/a343f567-095f-4879-b6b1-bd54da460def.jpg)

![]((8-9_1)html详解_files/f2191667-64ef-49f2-a831-9cf97e885f5b.jpg)

选了第一组:
![]((8-9_1)html详解_files/5ef60c28-ad4a-4438-9c63-9e1cef259a80.jpg)
![]((8-9_1)html详解_files/9268fc76-2d85-4755-8224-c1ff1a9426a6.jpg)

![]((8-9_1)html详解_files/fa96a45a-9a1f-41a9-b5d7-d6eddaa7c9b2.jpg)

将分组改成英文:
![]((8-9_1)html详解_files/e90a2a05-9cb3-4754-b5eb-fa75b43f8d52.jpg)

![]((8-9_1)html详解_files/a81b5860-20b9-46e7-ae1d-4dbb787d40ff.jpg)

![]((8-9_1)html详解_files/0aa2374c-eb1b-44eb-b7d0-f6c190bf8ec5.jpg)

![]((8-9_1)html详解_files/52f37b2d-4c3d-4a3e-8703-d97d9fe653f5.jpg)

![]((8-9_1)html详解_files/31878393-6ea7-4d25-9ea5-8bcd8eef9e11.jpg)

![]((8-9_1)html详解_files/ff9de08c-8f6e-4d7c-bdf9-c80681f076c4.jpg)

![]((8-9_1)html详解_files/ba7156c3-84b4-4ada-9255-9246152285e0.jpg)

![]((8-9_1)html详解_files/ff20c1a8-a4e4-4bb1-8ee4-48aaf2ad2e06.jpg)
### multiple属性

![]((8-9_1)html详解_files/1bfe39f6-9f7b-4baa-bd49-099a8b01e69e.jpg)

按着shift键，选择多个;
![]((8-9_1)html详解_files/5b75b333-5883-4b63-a20c-e6fd2bdeeccb.jpg)


## textarea
用css控制边框的大小;
这里是用rows控制其行数：
要记得给其一个name；
![]((8-9_1)html详解_files/2d4fdb1b-ce88-4b1e-a563-6a81ac9f5fee.jpg)

![]((8-9_1)html详解_files/7d9337d9-6d9f-4137-82ef-fd63e679a1dc.jpg)
button没有子元素,input有；


## table
![]((8-9_1)html详解_files/88d53555-9a26-4699-86f4-f770380d3ade.jpg)

![]((8-9_1)html详解_files/4ba76801-3f1d-4379-a2c1-cf0d957f331a.jpg)
td里面全是数据;
th是表头;
colorgroup控制宽度:

![]((8-9_1)html详解_files/eb3f8665-123d-4a08-86e0-46dcaf267f15.jpg)

![]((8-9_1)html详解_files/29a2e222-4cb0-4a26-bbc7-f12a5f2dce4c.jpg)
默认是有空间的(有空隙)，加上一句话就没有了;
![]((8-9_1)html详解_files/e9245f72-40a3-4abb-ac93-78d6dc4f0025.jpg)