# Deep Linking

[TOC]

## 需求



需求：

1. 分享下native app的deep linking
2. 还有一个deferred deep linking页介绍
3. 另外h5如何跳转app deep linking也调研下

App已安装
App未安装（需要个web来管理？）

Web Linking
Deep Linking（深度链接）
Deferred Deep linking （延迟深度链接）


Deep Link背景知识
Web链接不知道app的存在，当在手机上打开一个Jet.com这样一个网页链接，你会进入到浏览器中打开Jet.com网站，尽管你的手机上已经安装了Jet app。Deep Link解决的问题就点击一个网页链接，能够跳转到对应的app中。

传统的deep link
传统的deep link当你在点击链接的时候，能够跳转到相应的app中，只要你已经安装了app。也就是如果手机上没有安装app，跳转至下载页。在iOS中，可以通过URL Scheme和Universe Link来实现。

deferred deep Link
deferred deep link是指用户打开一个web page的时候并没有安装对应的app，在用户安装app以后打开直接跳转到链接对应的内容。



## URL scheme
URL scheme

在iOS 9和安卓6（M）之前，移动端实现Deeplink的方式都是通过URL Scheme。
URL，我们都很清楚，weixin://dl/moments就是一个 URL，也叫它链接或网址；
Scheme，表示的是一个 URL 中最初始的位置，即 ://之前的那段字符，例如这个URL中的Scheme就是weixin。我们可以用Scheme来定位对应的App。
例如淘宝的Scheme就是taobao、支付宝的Scheme就是alipay，新浪微博的Scheme是sinaweibo。


URL scheme是App提供给外部的可以直接操作App的规则。
- 比如微信提供了打开扫一扫的URL scheme。weixin://dl/scan
- 比如支付宝提供了转账的URL scheme。alipayqr://platformapi/startapp?saId=20000116
- 比如知乎提供了打开回答页面的URL scheme。zhihu://answers/{id}


URL Scheme 协议格式

一般来说整段的URL Scheme是这种的形式：
Scheme://host:port/path?query=xxxxxxx。
其中path代表了想要跳转的指定页面，而query代表了想要传递的参数。




深度链接 Deeplink 是一种能将网页端用户直接带到 App 内指定内容的技术。深度链接包含了 Deeplink、Deferred Deeplink 和 Contextual Deeplink，主要触发场景分为三种：
- Deep link (深度链接): 用户已安装 App：在 web 端点击链接，能直接跳转到 App 内的指定页面
- Deferred Deep link (延迟深度链接): 用户未安装 App：在 web 端点击链接，先跳转至应用商店，安装后首次打开 App，会自动跳转到指定 App 页面
- Contextual Deep link (上下文深度链接): 用户未安装目标 App：在 web 端点击链接，先跳转至应用商店，安装后首次打开 App，会自动跳转到指定页面，并携带特定参数，App 开发者可以进行相关运营

## Deep Linking
什么是 Deep linking
> Deep linking 深度链接技术，是指在App/短信/Web页面里点击链接，能直接跳转到目标App具体位置的技术

深度链接打破了网站与App间的壁垒，成为实现网站与App相互跳转的桥梁。
开发者不仅可以通过deeplink实现网站到App互相跳转， 也可以实现从多个平台（QQ、微信、微博、Twitter、Facebook、短信、各大浏览器等）到App内指定页的跳转。

例如用户将电商App内的一个详情页链接通过短信形式发送给其他亲友，用户点击短信内的链接就能打开对应的H5页面，然后直接跳转到电商App内的指定详情页，而不是App首页。

如果用户并未安装App，那么就会跳转到App下载页面。等用户安装打开App后仍然能跳转到指定页面。

Deeplink技术不仅可以实现场景快速还原，缩短用户使用路径，更重要的是能够用于App拉新推广场景，降低用户流失率。



Deep Link背景知识
       Web链接不知道app的存在，当在手机上打开一个Jet.com这样一个网页链接，你会进入到浏览器中打开Jet.com网站，尽管你的手机上已经安装了Jet app。Deep Link解决的问题就点击一个网页链接，能够跳转到对应的app中。

传统的deep link
      传统的deep link当你在点击链接的时候，能够跳转到相应的app中，只要你已经安装了app。也就是如果手机上没有安装app，跳转至下载页。在iOS中，可以通过URL Scheme和Universe Link来实现。


### 深度链接的应用场景
- H5 to App
>在 web 端底、顶部或浮窗等位置，可以添加引导打开、下载 App 按钮在页面内的关键操作，比如关注、加购、评论等页面，添加定向跳转逻辑

短信 to App
>短信营销，调起 App，引导用户准确抵达 App 内短信营销的内容通过短信，进行用户流失召回

二维码 to App
>线下推广或图片包含二维码推广，调起 App，引导用户准确抵达 App 内二维码定向营销的内容

邮件 to App
>邮件营销，点击链接调起 App，引导用户准确抵达 App 内邮件营销的内容通过邮件，进行用户流失召回

手机推送 to App
>App 推送通知，一键抵达推送信息指定的 App 具体页面

用户分享
>App 社交分享、裂变传播、无需邀请码实现关系链的串联、奖励自动分发

Web 广告 to H5 to App
>DSP （Demand Side Platform，广告主需求方）广告投放、搜索引擎引流、营销广告 H5，下载后直达指定页面

有关深度链接（Deeplink）的知识点：
- 在浏览器或者短信中打开App，如果安装了就能直接打开App，否则引导下载。对于Android而言，这里主要牵扯的技术就是deeplink，也可以简单看成scheme。
- 在App / Universal Links出现以前，Android和iOS都采用的URI Schemes的方式来处理深度。使用 这种方式实现的有点是易于开发，可同时适用于Android和iOS系统。缺点是不安全，技术比较落 后，用户体验不是特别好。
- 还有在微信中，也可以作出这样操作。如果用户已经安装App，点击跳转App则会通过应用宝打开该应用并且跳转到相应的页面，这种也是一种AppLink。


## Android
Android:
- [App links](https://developer.android.com/training/app-links)
- [Add Android App Links](https://developer.android.google.cn/studio/write/app-link-indexing)



其实，AppLink就是特殊的Deeplink，只不过它多了一种类似于验证机制，如果验证通过，就设置默认打开，如果验证不过，则退化为deeplink，如果单从APP端来看，区别主要在Manifest文件中的android:autoVerify="true"。



ensurich://dl:88/lobby?name=tom&age=12

| scheme | 代表该Schema 协议名称      | ensurich            |
| ------ | -------------------------- | ---------------- |
| host   | 代表Schema作用于哪个地址域 | dl               |
| port   | 代表该路径的端口号         | 88               |
| path   | 代表Schema指定的页面       | /lobby           |
| --     | 代表传递的参数             | ?name=tom&age=12 |





目前处理深度链接主要有两种方式：
- Custom URI Schemes
- App / Universal Links.


## iOS
[iOS: Deferred Deeplink（延展的深度链接）](https://blog.csdn.net/zzhongcy/article/details/118602343)

Deep link 在iOS App有新旧两种实现方案
- [Custom URL Scheme](https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app)
- [Universal Links （iOS 9之后）](https://developer.apple.com/ios/universal-links/)


Universal Links 有许多 Custom URL Scheme不具备的优点
- 不同的App可以定义相同的URL Scheme造成冲突，Universal Links则是由server端决定呼起哪一个app
- Universal Links本身是一个https地址，可以展示页面，更友好，同时也能被搜索引擎索引



## Deep Linking vs Deferred Deep Linking



Deeplink有个局限，就是只能在已安装的APP之间进行跳转。如果没安装，就会出现下面的场景：用户在微信点击这个商品链接后，屏幕跳转到一个HTML5页面，页面右上角会有个按钮提示你到App Store下载。下载后打开应用，发现之前的商品页面找不到了。那么，用户很可能会直接卸载应用，商铺也会失去一次有效交易。







## 参考

概念

- [深度链接（Deeplinking）是什么？](https://www.zhihu.com/question/51509486)
- [一文读懂深度链接(deep linking)](https://mktbee.com/318.html)
-
- [AppsFlyer Guides](https://www.appsflyer.com/resources/guides/deep-linking-101/)


[Android6 0新特性 App Links](https://juejin.cn/post/6844903527794343950)

[Android 中Scheme协议的使用详解](https://juejin.cn/post/7080492841872392229)

[深度链接(Deeplink)的实现与使用](https://zhuanlan.zhihu.com/p/394363004)
[Android 上玩转 DeepLink：如何最大程度的向 App 引流](https://juejin.cn/post/6844903620287135752)
[Deferred Deeplink（延展的深度链接）](https://blog.csdn.net/zzhongcy/article/details/118602343)
[Android AppLinks 接入](https://juejin.cn/post/6844903494760349703)
[[译]Android6 0新特性 App Links](https://juejin.cn/post/6844903527794343950)
[Android Deep Links & Android App Links](https://juejin.cn/post/6844903544575770638)
[Android Studio 2.3 特性：生成 Android App Links](https://juejin.cn/post/6844903466180034573#heading-6)
[App深度链接与延迟深度链接](https://www.biaodianfu.com/deep-link-deferred-deeplink.html)
[深度链接(deeplink)唤醒直达App指定内页](https://cloud.tencent.com/developer/article/1855859)
[Android Deep Link 深度链接，看看你在第几层？](https://juejin.cn/post/7073731278612201509)


## 其他
微信 Schema
weixin://dl/moments
weixin://dl/wallet
weixin://dl/chat
weixin://dl/scan
weixin://dl/settings
weixin://dl/profile
weixin://dl/general

微信 Schema
weixin://dl/moments
weixin://dl/wallet
weixin://dl/chat
weixin://dl/scan
weixin://dl/settings
weixin://dl/profile
weixin://dl/general



DeepLink和AppLink用到的核心技术

- URL SCHEMES。不论是IOS还是Android。
- 比如微信：URL Schemes：weixin://dl/moments（打开微信朋友圈）
- DeepLink与AppLink，本质上都是基于Intent框架，使App能够识别并处理来自系统或其他App的某种特殊URL，在原生App之间相互跳转，实现良好的用户体验



有关深度链接（Deeplink）的知识点：

- 在浏览器或者短信中打开App，如果安装了就能直接打开App，否则引导下载。对于Android而言，这里主要牵扯的技术就是deeplink，也可以简单看成scheme。
- 在App / Universal Links出现以前，Android和iOS都采用的URI Schemes的方式来处理深度。使用这种方式实现的有点是易于开发，可同时适用于Android和iOS系统。缺点是不安全，技术比较落 后，用户体验不是特别好。
- 还有在微信中，也可以作出这样操作。如果用户已经安装App，点击跳转App则会通过应用宝打开该应用并且跳转到相应的页面，这种也是一种AppLink。

