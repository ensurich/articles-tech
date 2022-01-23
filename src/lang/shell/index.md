# Shell

## 什么是Shell
Reference: [Wiki: Unix shell](https://en.wikipedia.org/wiki/Unix_shell)
>A Unix shell is a command-line interpreter or shell that provides a command line user interface for Unix-like operating systems. The shell is both an interactive command language and a scripting language, and is used by the operating system to control the execution of the system using shell scripts.

shell是一个应用程序

>shell是一个命令行解释器，为类Unix操作系统提供命令行用户界面，让用户可以通过命令来操作和控制操作系统。

shell是一种语言（shell script）

>shell 既是一种交互式命令语言又是一种脚本语言，操作系统使用shell脚本来控制系统的执行。

Note：为避免混淆，使用shell指代应用程序，shell script指代为shell编写的脚本语言。

## Shell 环境

Shell 编程和其他脚本语言一样，只要有一个能编写代码的文本编辑器和一个能解释执行的脚本解释器就可以了。

Unix 的 Shell 种类众多，常见的有：

- Bourne Shell（/usr/bin/sh或/bin/sh）
- Bourne Again Shell（/bin/bash）
- Z Shell (/bin/zsh)
- C Shell（/usr/bin/csh）
- K Shell（/usr/bin/ksh）
- Shell for Root（/sbin/sh）

## ohmyzsh

安装 [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```
vi ~/.zshrc
```