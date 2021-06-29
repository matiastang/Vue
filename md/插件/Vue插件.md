<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 18:49:08
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 18:50:14
 * @Description: Vue插件
-->
# Vue插件

[Vue插件]()

插件是自包含的代码，通常向 Vue 添加全局级功能。它可以是公开 install() 方法的 object，也可以是 function

插件的功能范围没有严格的限制——一般有下面几种：

* 添加`全局方法`或者 `property`。如：vue-custom-element
* 添加`全局资源：指令/过滤器/过渡等`。如：vue-touch）
* 通过全局 `mixin` 来添加一些组件选项。(如vue-router)
* 添加`全局实例方法`，通过把它们添加到 config.globalProperties 上实现。
* 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router
