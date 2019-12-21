[TOC]

## 建立仓库
![]((3)git的安装与配置_files/eaf252c5-3390-4d87-ba34-748dfb69b4d9.png)
![]((3)git的安装与配置_files/c95481de-1df6-493d-b74e-fcfd3c10ae16.jpg)
划红线部分不要填写任何东西,不要勾！！！上面是错误的！

![]((3)git的安装与配置_files/1940ae86-2463-4b4b-8c46-f9d526f490da.png)

![]((3)git的安装与配置_files/4c5577f5-4e2c-4c3d-96ee-b10c52500c56.png)

下面这三步的效果见下:
![]((3)git的安装与配置_files/7b529ece-2a4c-41d5-a942-6f7dff93f480.png)

![]((3)git的安装与配置_files/6c317fdb-1298-43c9-a033-2e2450219459.png)

关联远程仓库


`
 git remote add origin git@github.com:richard1230/blog.git
 `
![]((3)git的安装与配置_files/fd05648d-3214-4754-9b22-206bfbd285c8.png)

## 上面命令行汇总
```
echo "# blog" >>README.md

git init

git add README.md

git commit -m "first commit"

 git remote add origin git@github.com:richard1230/blog.git
 
 git push -u origin master

```




