[TOC]


https://xiedaimala.com/tasks/8c9f20da-c78c-4aed-821c-b671683bb483/text_tutorials/b8c17836-372b-4500-8f4b-e2b702485bd9
## 前言
其实脚本原本来自戏剧舞台，比如下面这个脚本：

> 公馆一室内
> 王妈：（小心翼翼地）小姐，您还是得注意身子，就吃点东西吧。
> 鸡小姐：（把碗砸在地上）不吃，我就是不吃。
> （王妈下）

脚本主要由人物对话和舞台提示组成。演员和道具组只需要按照脚本说的做即可。

编程领域的脚本也是类似的，计算机只要照着脚本上说的做即可，比如下面这个脚本：

```
cd ~/Desktop
mkdir demo
cd demo
echo "hi" > index.html
cd ~/Desktop

```

所以说，脚本就是给计算机照着做的。这是我们对「脚本」的一个感性认识。

## 例子

![]((5-)脚本(有git上传)_files/3924fe99-08f5-4546-b4c2-bd34216ecbe4.jpg)

![]((5-)脚本(有git上传)_files/e6c2d169-2bbb-4a3b-b4d5-0e213bd15a68.jpg)

![]((5-)脚本(有git上传)_files/e59f443a-deb4-499b-a7c5-5ebb3fdc6557.jpg)

非windows系统还要加上chmod +x filename  修改权限

![]((5-)脚本(有git上传)_files/686a21b9-db6e-463e-a664-da8315f5f235.jpg)
## 几个命令
1.  PATH 的作用
    **你每次在 Bash 里面输入一个命令时（比如 ls、cp、demo），Bash 都会去 PATH 列表里面寻找对应的文件，如果找到了就执行**。(所有命令都是脚本文件而已！linux里面可执行 文件皆命令,不可执行文件就是配置！)
2.  使用 type demo 可以看到寻找过程
3.  使用 which demo 可以看到寻找结果
4.  文件后缀的作用：毫无作用
    你以为一个文件以 .exe 结尾就一定可以双击吗？你以为一个文件以 .png 结尾就一定是图片吗？图样图森破！



## 创建任意目录的脚本


![]((5-)脚本(有git上传)_files/5a9186c5-328d-4f79-96ba-d780615f27c7.png)
```
mkdir $1
cd $1
mkdir css js
touch index.html css/style.css js/main.js
exit


```
![]((5-)脚本(有git上传)_files/49ce44f4-dd42-4eec-872b-bff240cef715.jpg)

![]((5-)脚本(有git上传)_files/eb16b79c-1987-4f8c-bd8d-cdaa25864dbd.png)


![]((5-)脚本(有git上传)_files/8e3cebd0-551d-4468-b20d-67557f23c3b0.png)

**注意MAC 和Linux(以及windows)有不一样的地方,执行文件需要加`./`**
![]((5-)脚本(有git上传)_files/e9659f27-ee9a-4551-9133-593f67ae9905.jpg)

### 原理讲解
![]((5-)脚本(有git上传)_files/d82bb02e-a44e-4dd3-af24-0a9c86f8dbb0.jpg)

![]((5-)脚本(有git上传)_files/e5092642-c7b8-47d7-8f62-18eada1dcc9b.jpg)

上面的 `$1`为第一个参数

### 判断目录是否存在
![]((5-)脚本(有git上传)_files/a6dce369-f8f4-4ee7-b6d1-f61ff87645c5.png)

![]((5-)脚本(有git上传)_files/6e9a621b-3cb8-48e0-93ce-87314f330b70.png)


![]((5-)脚本(有git上传)_files/29def6f2-5f3b-49c8-874e-e3d1a6089500.png)


```
if [ -d $1 ] ; then 
    echo "$1 已经存在了 " 
    exit
else 
    mkdir $1 
    cd $1  
    mkdir css js 
    touch index.html css/style.css js/main.js 
    echo 'success'
    exit
fi
```


## Node.js写脚本(**ctrl +D 退出**)

上面我们写的脚本叫做 Bash Script（Bash脚本）。

JS 的全称叫做 JavaScript（Java脚本），虽然 JS 和 Java 没什么关系，但是 JS 依然是一种脚本。

1.  我们在 Bash 命令行里输入 Bash 命令，也可以在 Node.js 命令行里输入 JS 命令（<kbd>Ctrl</kbd> + <kbd>D</kbd> 退出）
2.  Bash 脚本能做的事情，JS 脚本也能做。(`sh demo.sh` 对应 `node demo.js`）


进入js命令行:(**ctrl +D 退出**)(其语法与bash完全不一样)
![]((5-)脚本(有git上传)_files/1a96e7fa-0f92-461f-b64a-9202671a10ac.jpg)
### js里面的显示当前目录与切换目录
`process.cwd()`<------->`pwd`(bash里面的)
![]((5-)脚本(有git上传)_files/b0918795-c2c4-4e55-b0f9-defdab76bcf3.png)
```
process.chdir("/Users/frank/Desktop")
```
chdir类似于change dir

### js里面的print
`console.log(1)`<-------->`echo 1`


### js里面的建立目录
![]((5-)脚本(有git上传)_files/6d5ec604-b2c6-43e4-bba1-78d2972393f1.png)


![]((5-)脚本(有git上传)_files/8bab4df0-7be7-463e-b5c1-cf7972be7d00.png)

![]((5-)脚本(有git上传)_files/92fe5767-8b60-4bae-99d8-f5b9c09f1e1f.jpg)

bash命令行和Node.js命令行实质上是一样的,只不过语法格式不一样！

Node.js文档见下:
https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_mode
### js里面读写
![]((5-)脚本(有git上传)_files/a2064505-448d-4836-b8d7-2542d05f2ce5.png)


## Node.js脚本
![]((5-)脚本(有git上传)_files/aa863203-46a0-4c32-afa5-2645377edd80.png)

![]((5-)脚本(有git上传)_files/383a37ad-26f2-4a75-82eb-094627ad0dbe.png)

一般默认皆是用bash来执行的,故这里要添加一个node
![]((5-)脚本(有git上传)_files/750dee22-6a26-4f6f-b79b-2fe7d2aaa9e5.png)

### shebang

我们每次执行 ~/local/jsdemo.js 都要用 node 来执行，能不能做到不加 node 也能执行呢（也就是指定执行环境），可以，在 jsdemo.js 第一行加上这一句即可：

```
#!/usr/bin/env node

```

（以下操作在 Windows 上可能失败，失败了就算了）

1.  然后你就可以直接用 `~/local/jsdemo.js zzz` 了（省得输入 node 了）。
2.  如果你已经把 ~/local 加入了 PATH，那么甚至可以直接输入 `jsdemo.js zzz` 来执行。
3.  如果你再把 jsdemo.js 的后缀 .js 去掉，就可以直接 `jsdemo zzz` 了。

注意，你每次执行前最好删掉 zzz 目录，以免发生冲突。



## 总结

1.  脚本就是给机器一行一行执行的文本
2.  Bash 脚本有 Bash 脚本的语法，Node.js 脚本有 JS 语法
3.  不管是那种脚本，能实现的功能都差不多，只是语法不同
4.  Bash 脚本的语法挺奇葩的，比如 $1 $# 等符号
5.  不用特别去学 Bash 脚本的用法，遇到不会的就 Google
6.  不用特别去学 Node.js 脚本的用法，遇到不会的就 Google
7.  新人写代码最大的问题就是「抄错了」
    1.  多写了一个空格
    2.  少写了一个空格
    3.  单词拼错了
    4.  没有加分号
    5.  多加了分号
    
    
    
    
## 作业题(重点有上传模板)
事先把`demo.sh`这个脚本写好,而后copy进homework这个目录下面;
![]((5-)脚本(有git上传)_files/8b4c013d-7a60-45f9-b9cd-e722cfb6c569.png)
```
echo "# homework" >> README.md
git init
git add README.md
git commit -m "first  homework"
git remote add origin git@github.com:richard1230/homework.git
git push -u origin master

git add demo.sh
git commit -m "commit homework"
git push -u origin master
```

![]((5-)脚本(有git上传)_files/188e2705-fc7d-4f5a-9df7-268ac6b7f6ec.png)

![]((5-)脚本(有git上传)_files/da0dff41-1514-43ef-8794-f86328747947.png)