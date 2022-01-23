# Homebrew
[toc]

## 常用命令
安装
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

卸载
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)"
```

更新升级
```
brew update && brew upgrade
```

检查是否有任何问题
```
brew doctor
```

## 国内镜像源
Mac Homebrew 国内镜像源替换或重置（brew update 没反应）

[参考：Van Wu](https://zhuanlan.zhihu.com/p/102760018)

查看当前Homebrew 镜像源
```shell
# brew.git镜像源
git -C "$(brew --repo)" remote -v

# homebrew-core.git镜像源
git -C "$(brew --repo homebrew/core)" remote -v

# homebrew-cask.git镜像源
git -C "$(brew --repo homebrew/cask)" remote -v 
```

国内镜像地址
- 科大: https://mirrors.ustc.edu.cn
- 阿里: https://mirrors.aliyun.com/homebrew/

科大真香实例：
```shell
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

if [ $SHELL = "/bin/bash" ] # 如果你的是bash
then 
    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/' >> ~/.bash_profile
    source ~/.bash_profile
elif [ $SHELL = "/bin/zsh" ] # 如果用的shell 是zsh 的话
then
    echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/' >> ~/.zshrc
    source ~/.zshrc
fi

brew update
```

如果需要恢复原有镜像源的话（国内镜像源突然不能用了或版本不够新）
```shell
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git

git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git

# 找到 ~/.bash_profile 或者 ~/.zshrc 中的HOMEBREW_BOTTLE_DOMAIN 一行删除

brew update
```

如果可以了下面的就不用看了
如果不行的话可以依次尝试以下命令

```shell
brew doctor
brew update-reset
brew update
```

