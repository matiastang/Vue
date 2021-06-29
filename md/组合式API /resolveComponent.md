<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 18:19:13
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 18:20:31
 * @Description: resolveComponent
-->
# resolveComponent

如果我们需要通过名称来解析一个组件，那么我们可以调用 resolveComponent

resolveComponent 是模板内部用来解析组件名称的同一个函数。

**render 函数通常只需要对`全局注册`的组件使用 resolveComponent。而对于`局部注册`的却可以跳过**