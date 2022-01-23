# Git

安装 git
```shell
brew install git
```

查看 git 版本
```shell
git --version
```

安装后解决 link 文件冲突
```shell
# To force the link and overwrite all conflicting files:
brew link --overwrite git
```

这些是各种场合常见的 Git 命令：
```text
开始一个工作区（参见：git help tutorial）
   clone     克隆仓库到一个新目录
   init      创建一个空的 Git 仓库或重新初始化一个已存在的仓库

在当前变更上工作（参见：git help everyday）
   add       添加文件内容至索引
   mv        移动或重命名一个文件、目录或符号链接
   restore   恢复工作区文件
   rm        从工作区和索引中删除文件

检查历史和状态（参见：git help revisions）
   bisect    通过二分查找定位引入 bug 的提交
   diff      显示提交之间、提交和工作区之间等的差异
   grep      输出和模式匹配的行
   log       显示提交日志
   show      显示各种类型的对象
   status    显示工作区状态

扩展、标记和调校您的历史记录
   branch    列出、创建或删除分支
   commit    记录变更到仓库
   merge     合并两个或更多开发历史
   rebase    在另一个分支上重新应用提交
   reset     重置当前 HEAD 到指定状态
   switch    切换分支
   tag       创建、列出、删除或校验一个 GPG 签名的标签对象

协同（参见：git help workflows）
   fetch     从另外一个仓库下载对象和引用
   pull      获取并整合另外的仓库或一个本地分支
   push      更新远程引用和相关的对象
```

新建分支
```shell
git checkout -b <branch-name>
# or
git branch <branch-name>
git checkout <branch-name>
```

当前分支 develop 没有对应的上游分支。
为推送当前分支并建立与远程上游的跟踪，使用
```shell
git push --set-upstream origin develop
```

```shell
git push <remote> <branch>
```

对于远端最常用的操作就是更新和推送
```shell
git fetch origin # 将本地的远端和远端进行同步
git merge origin/master # 将本地的远端合并到本地分支

git pull origin # 这相当于上面两条命令

git push origin master # 将本地推送到远程分支
```
关于push的必须得说一下引用展开，下面这些命令是一样的，git内部都会自动展开成最后一条
```shell
git push origin master
git push origin master:master
git push origin heads/master:heads/master
git push origin refs/heads/master:refs/heads/master
```

