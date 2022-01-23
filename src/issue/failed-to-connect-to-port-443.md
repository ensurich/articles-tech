
# 443 端口连接被拒

**碰到问题：**
[Failed to connect to raw.githubusercontent.com:443](https://zhuanlan.zhihu.com/p/115450863)

完整报错：
```
curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
```
443 端口连接被拒一般是因为墙的原因，如果你可以科学上网（Virtual Private Network）的话，在命令行键以下命令执行：
```
# 8118 和 8119 需要换成你自己的端口
export https_proxy=http://127.0.0.1:8118 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:8119
```

