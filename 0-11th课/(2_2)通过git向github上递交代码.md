[TOC]

## 1 前言

在「[利用 SSH 完成 Git 与 GitHub 的绑定](http://blog.csdn.net/qq_35246620/article/details/69061355)」一文中，我们完成了本地 Git 与远程 GitHub 的绑定，这意味着我们已经可以通过 Git 向 GitHub 提交代码啦！但是在进行演示之前，我们需要先了解两个命令，也是我们在将来需要经常用到的两个命令，分别为`push`和`pull`.

*   **`push`**：该单词直译过来就是“推”的意思，如果我们本地的代码有了更新，为了保持本地与远程的代码同步，我们就需要把本地的代码推到远程的仓库，代码示例：

```
git push origin master
```

*   **`pull`**：该单词直译过来就是“拉”的意思，如果我们远程仓库的代码有了更新，同样为了保持本地与远程的代码同步，我们就需要把远程的代码拉到本地，代码示例：

```
git pull origin master
```

此外，在之前我们讲到过`pull request`，在这里，估计大家就能更好的理解了，它表示：如果我们`fork`了别人的项目（或者说代码），并对其进行了修改，想要把我们的代码合并到原始项目（或者说原始代码）中，我们就需要提交一个`pull request`，让原作者把我们的代码拉到 ta 的项目中，至少对于 ta 来说，我们都是属于远程端的。

一般情况下，我们在`push`操作之前都会先进行`pull`操作，这样不容易造成冲突。

## 2 提交代码

对于向远处仓库（GitHub）提交代码，我们可以细分为两种情况：

*   **第一种**：本地没有 Git 仓库，这时我们就可以直接将远程仓库`clone`到本地。通过`clone`命令创建的本地仓库，其本身就是一个 Git 仓库了，不用我们再进行`init`初始化操作啦，而且自动关联远程仓库。我们只需要在这个仓库进行修改或者添加等操作，然后`commit`即可。

接下来，以博主的 GitHub 账号中的`mybatis-tutorial`项目为例，进行演示。首先，进入 GitHub 个人主页：

![]((2_2)通过git向github上递交代码_files/c228e61b-a393-4088-988a-3a5f987dfcde.jpg)

如上图所示，点击`mybatis-tutorial`项目：

![]((2_2)通过git向github上递交代码_files/f7f745d8-0e0f-4a33-be8c-2c05478a1d2e.jpg)

如上图所示，进入`mybatis-tutorial`项目后，点击`Clone or download`，复制上图所示的地址链接。然后，进入我们准备存储 Git 仓库的目录，例如下面我们新建的`GitRepo`目录， 从此目录进入 Git Bash：

![]((2_2)通过git向github上递交代码_files/a09fa0ed-5062-4b20-927a-9d8509d35904.jpg)

接下来，输入`git clone https://github.com/guobinhit/mybatis-tutorial.git`命令，其中`clone`后面所接的链接为我们刚刚复制的远程仓库的地址：

![]((2_2)通过git向github上递交代码_files/70d738c6-614c-4ac3-a1ea-16ceee16fff6.jpg)

如上图所示，我们已经把远程的`mybatis-tutorial`仓库`clone`到本地啦！下面，我们看看`clone`到本地的仓库内容与远程仓库的内容，是否完全一致：
![]((2_2)通过git向github上递交代码_files/ec1808cb-7117-4b0f-962f-8227fbdef257.jpg)

如上图所示，显示我们已经把远程仓库`mybatis-tutorial`的内容都`clone`到本地啦！接下来，为了方便演示，我们直接把之前重构的「[史上最简单的 MyBatis 教程](http://blog.csdn.net/qq_35246620/article/details/54802944)」里面的`mybatis-demo`项目的代码复制过来：
![]((2_2)通过git向github上递交代码_files/f41cc160-2bd8-4a55-8c88-a01b92c7350a.jpg)

如上图所示，我们已经把`mybatis-demo`项目里面的主要内容`src`目录和`web`目录复制过来啦！接下来，从此目录进入 Git Bash，然后输入`git status`命令查看仓库状态：

![]((2_2)通过git向github上递交代码_files/7857f089-430c-4e39-898a-4a79f1ebe70d.jpg)
如上图所示，`mybatis-tutorial`已经是一个 Git 仓库了，而且在输入`git status`命令后显示有两个文件未被追踪，也就是我们刚刚复制过来的两个文件没有提交。通过「[Git 初体验及其常用命令介绍](http://blog.csdn.net/qq_35246620/article/details/66973794)」，我们已经知道了在真正提交代码之前，需要先进行`git add`操作：

![]((2_2)通过git向github上递交代码_files/b44f287a-b811-4364-8b32-4136c91f7402.jpg)

如上图所示，我们已经将`src`目录`add`并`commit`到`mybatis-tutorial`仓库啦！接下来，我们将`web`目录提交到仓库，然后输入`git log`命令查看仓库日志：

![]((2_2)通过git向github上递交代码_files/b3ba0068-2eb7-482c-8cf5-39159dc6ad35.jpg)

再输入`git status`命令查看仓库状态：
![]((2_2)通过git向github上递交代码_files/a6c4cdd9-d6c7-4df1-b632-5ec1f99e16f4.jpg)

如上图所示，我们已经将`mybatis-tutorial`仓库里面新添加的两个目录都提交啦！下面，我们将本地仓库的内容`push`到远程仓库，输入`git push origin master`命令：

![]((2_2)通过git向github上递交代码_files/d93b1acf-1236-4f6d-a955-1f50fec51edb.jpg)

如上图所示，在第一次向远程仓库提交代码的时候，需要输入账号及密码进行验证，验证成功后，显示如下结果：

![]((2_2)通过git向github上递交代码_files/5fd41233-d4d2-40c8-b405-d28b85cdcaa0.jpg)

然后，刷新 GitHub 中`mybatis-tutorial`仓库：
![]((2_2)通过git向github上递交代码_files/bb32bd4e-814f-4602-97d2-2f93a8867c18.jpg)

如上图所示，我们已经将项目（仓库）中新添加的内容提交到了远程仓库。接下来，返回 GitHub 个人主页：



![]((2_2)通过git向github上递交代码_files/637c2cea-45ac-47ff-822f-6b1a0d8545d4.jpg)

观察上图，我们会发现一个现象，那就是：`mybatis-tutorial`仓库的概要中新增了一个`Java`语言的标记。对于这个仓库语言的标记，其来源有两个，一是在我们创建仓库时就指定语言；二是在我们提交或者新建代码后由 GitHub 自动识别该语言。

*   **第二种：**详见「[通过 Git 将代码提交到 GitHub（下）](http://blog.csdn.net/qq_35246620/article/details/69668846)」.

--------------------- 本文来自 维C果糖 的CSDN 博客 ，全文地址请点击：https://blog.csdn.net/qq_35246620/article/details/69230109?utm_source=copy