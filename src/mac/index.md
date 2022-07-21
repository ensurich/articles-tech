# Mac环境初搭建

brew
git
sourcetree
webstorm

| Tools                                         | Description              |
|-----------------------------------------------| ------------------------ |
| [iterm2](https://iterm2.com/)                 | 使用 iterm 代替 terminal |
| [atom](https://atom.io/)                      | 文本工具                 |
| [ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) | zsh工具                  |



## shell

查看当前 shell
```
# Unsure which shell you are using? Type
echo $SHELL
```
>`/bin/bash` or `/bin/zsh`

切换 shell
```
# switch to zsh
chsh -s /bin/zsh

# switch to bash
chsh -s /bin/bash
```


## Homebrew
安装 Homebrew
```
# Install Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
安装 Ruby
```
# Install Ruby
brew install ruby
```

安装 git
```shell
brew install git
```