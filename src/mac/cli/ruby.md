# Ruby

[toc]

##常用命令
安装 ruby
```
brew install ruby
```
确定位置
```
which ruby
```

查看版本
```
ruby -v
```




把 ruby 和 gems 添加到 shell 配置文件
```
# If you're using Zsh
echo 'export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"' >> ~/.zshrc

# If you're using Bash
echo 'export PATH="/usr/local/opt/ruby/bin:/usr/local/lib/ruby/gems/3.0.0/bin:$PATH"' >> ~/.bash_profile

# Unsure which shell you are using? Type
echo $SHELL
```

## RubyGems
查看版本
```
gem -v
```
查看环境
```
gem env
```

切换国内镜像
```shell
# 移除默认的镜像站
gem sources --remove https://rubygems.org/

# 添加国内镜像站
gem sources --add https://gems.ruby-china.com/
#gem sources -a https://ruby.taobao.org/ ERROR:  SSL verification error at depth 0: Hostname mismatch (62)

# 查看源
gem sources -l
```
## rbenv
安装
```
# Install rbenv and ruby-build
brew install rbenv

# Set up rbenv integration with your shell
rbenv init

# Check your installation
curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-doctor | bash
```

查看 ruby 最新版本（稳定版）
```shell
# List latest stable versions for each Ruby
rbenv install -l
```

安装 ruby
```
rbenv install <version>
```



