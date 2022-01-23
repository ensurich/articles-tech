# MacOS 升级后 Homebrew 无法适用
[toc]

## 问题
```
Traceback (most recent call last):
	11: from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in `<main>'
	10: from /usr/local/Homebrew/Library/Homebrew/brew.rb:23:in `require_relative'
	 9: from /usr/local/Homebrew/Library/Homebrew/global.rb:29:in `<top (required)>'
	 8: from /usr/local/Homebrew/Library/Homebrew/vendor/portable-ruby/2.6.3/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
	 7: from /usr/local/Homebrew/Library/Homebrew/vendor/portable-ruby/2.6.3/lib/ruby/2.6.0/rubygems/core_ext/kernel_require.rb:54:in `require'
	 6: from /usr/local/Homebrew/Library/Homebrew/os.rb:3:in `<top (required)>'
	 5: from /usr/local/Homebrew/Library/Homebrew/os.rb:21:in `<module:OS>'
	 4: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:58:in `prerelease?'
	 3: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:24:in `version'
	 2: from /usr/local/Homebrew/Library/Homebrew/os/mac.rb:24:in `new'
	 1: from /usr/local/Homebrew/Library/Homebrew/os/mac/version.rb:26:in `initialize'
/usr/local/Homebrew/Library/Homebrew/version.rb:368:in `initialize': Version value must be a string; got a NilClass () (TypeError)
```
## 原因
Upgraded macOS Big Sur, Homebrew is not compatible (only the official release version of macOS is supported).

## 解决方案
### 方案 1
[Homebrew fails on MacOS Big Sur](https://stackoverflow.com/questions/64821648/homebrew-fails-on-macos-big-sur)
```
brew update-reset
```
此方案对我不适用

### 方案 2
**重新卸载安装：**

卸载
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)"
```
安装
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
>碰到了问题：443 端口连接被拒