[TOC]

https://xiedaimala.com/tasks/24ba2b64-6695-4964-b04f-b462987664e9/video_tutorials/91cf7231-decd-4bbe-94cd-95d6cd1bf6f1
## url
![]((6)HTTP_files/04dd1780-635a-4c39-a543-0d269e7bc77e.png)

![]((6)HTTP_files/1e7c7f11-ba65-4c2b-8120-e61f0d9c99e0.png)

![]((6)HTTP_files/2f3138f4-c0ca-44df-9c1b-3f1d4c4b3350.png)


![]((6)HTTP_files/f13e4eae-4ca2-4825-b4d3-b71223f2b7e9.jpg)

### 对锚点的理解
![]((6)HTTP_files/b1a053d3-d3f3-4123-98fb-26c29b8939fa.jpg)

![]((6)HTTP_files/1fb8af4c-14c2-41eb-97fc-2ab3b8d341e5.jpg)

![]((6)HTTP_files/7557877a-08b8-48fa-8e37-ac4f2c3389cc.jpg)

自己做一遍实验:

![]((6)HTTP_files/2e801c5e-7c83-4798-b7ad-12a8121e928c.png)

![]((6)HTTP_files/78df142b-7f2d-48c3-b292-758f09403bf5.png)


## DNS

非windows系统下设置hosts：
![]((6)HTTP_files/ed4894ae-e244-44b0-ae4b-c64be382db24.jpg)

可以指定任意域名的Ip
![]((6)HTTP_files/192b57d8-6a4b-4034-a027-ba5117eb48f7.jpg)

![]((6)HTTP_files/264e0480-3134-44d8-a522-a18c99ded5a9.jpg)

以上为如何绕过DNS,自己指定ip;
非常时期如果上不了google，可以通过设置google的ip来访问;

![]((6)HTTP_files/b643eca3-d5de-46d0-a922-4b6516bce15a.jpg)

设置过hosts之后可以不问电信的DNS了,就可以直接访问了!(但是ip 会变，只能临时用)

![]((6)HTTP_files/24817d36-751c-4769-a388-2506f375c0f8.jpg)


## 请求

![]((6)HTTP_files/cb09a84c-d8fe-40e2-9e87-cce80458eb03.jpg)

一般1-2048是指定做指定事情的端口:
21端口给ftp;
443端口给https；
1080端口给代理;
3306 Mysql服务器
80端口给http协议，
如果你要做一个后台服务器,一定要留80端口给别人用！

服务器与浏览器的交互

*   浏览器负责发起请求
*   服务器在 80 端口接收请求
*   服务器负责返回内容（响应）
*   浏览器负责下载响应内容

HTTP 的作用就是指导浏览器和服务器如何进行沟通。

### 三个请求
### 请求示例

```
curl -s -v -H "Frank: xxx" -- "https://www.baidu.com"
```

请求的内容为

```
GET / HTTP/1.1
Host: www.baidu.com
User-Agent: curl/7.54.0
Accept: */*
Frank: xxx

```

```
curl -X POST -s -v -H "Frank: xxx" -- "https://www.baidu.com"

```

请求的内容为

```
POST / HTTP/1.1
Host: www.baidu.com
User-Agent: curl/7.54.0
Accept: */*
Frank: xxx

```

```
curl -X POST -d "1234567890" -s -v -H "Frank: xxx" -- "https://www.baidu.com"

```

请求的内容为

```
POST / HTTP/1.1
Host: www.baidu.com
User-Agent: curl/7.54.0
Accept: */*
Frank: xxx
Content-Length: 10
Content-Type: application/x-www-form-urlencoded

1234567890
```

## 请求
第四部分:
用户名,密码,头像等数据;
![]((6)HTTP_files/2bd22265-3fbe-42b0-a480-9e1cff916140.jpg)

动作里面有前5个最重要,要记忆:
GET POST PUT PATCH DELETE
![]((6)HTTP_files/d721c1e2-c1d8-4244-ba12-3c9bffe7d0d7.png)

![]((6)HTTP_files/a8c55034-4e7f-48bb-9ff3-f8df2451ba54.jpg)

### 查询路径

![]((6)HTTP_files/eff086f3-f605-4485-8008-4591d7aa0693.jpg)

锚点是浏览器看的,服务器不看的!
锚点无法传过去！

![]((6)HTTP_files/567035cc-5f30-42d8-92a6-b9ca5cb77a29.jpg)

![]((6)HTTP_files/e4ff9f03-75cd-48fc-933d-fdd58c07bd36.jpg)

不写路径:自动加`/`
![]((6)HTTP_files/5509b060-6a59-4120-9f64-05dac92e2761.jpg)