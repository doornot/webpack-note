# Webpack笔记 - HRM

### 一、模块热替换概念
1、模块热替换(HMR - Hot Module Replacement)

在应用程序运行过程中替换、添加或删除模块，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：

* 保留在完全重新加载页面时丢失的应用程序状态。
* 只更新变更内容，以节省宝贵的开发时间。
* 调整样式更加快速 - 几乎相当于在浏览器调试器中更改样式。

2、浏览器自动全局刷新 - 应用程序重新加载整个页面

### 二、启用 HMR

1、配置webpack-dev-server ，和使用webpack内置的HMR插件(HotModuleReplacementPlugin)

webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。

2、webpack-hot-middleware + webpack-dev-middleware + HotModuleReplacementPlugin

当我们想要在自己服务器上使用全局刷新功能时使用。

webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。

注意：webpack-dev-middleware 是 express 标准的中间件，并不能直接用于 Koa。

3、react-hot-loader

社区有许多其他 loader 和示例，可以使 HMR 与各种框架和库(library)平滑地进行交互。

* React Hot Loader：实时调整 react 组件。
* Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。

### 三、webpack-dev-server 与 webpack-hot-middle 比较

webpack-dev-server使用websocket，而webpack-hot-middle是使用EventStream。

1、服务器向浏览器推送信息

* WebSocket

* Server-Sent Events

2、两者比较：

SSE 与 WebSocket 作用相似，都是建立浏览器与服务器之间的通信渠道，然后服务器向浏览器推送信息。

总体来说，WebSocket 更强大和灵活。因为它是全双工通道，可以双向通信；SSE 是单向通道，只能服务器向浏览器发送，因为流信息本质上就是下载。如果浏览器向服务器发送信息，就变成了另一次 HTTP 请求。

### 参考

* webpack官方文档
* Webpack HMR 原理解析- 知乎
* 追溯 React Hot Loader 的实现 - 沪江技术
* webpack 热替换配置详解 - SegmentFault 思否
* Server-Sent Events 教程 - 阮一峰