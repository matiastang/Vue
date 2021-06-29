<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-26 17:08:34
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-26 17:09:30
 * @Description: methods
-->
# methods

[methods](https://v3.cn.vuejs.org/guide/data-methods.html#%E6%96%B9%E6%B3%95)

我们用 methods 选项向组件实例添加方法，它应该是一个包含所需方法的对象：

Vue 自动为 methods 绑定 this，以便于它始终指向组件实例。这将确保方法在用作事件监听或回调时保持正确的 this 指向。在定义 methods 时应避免使用箭头函数，因为这会阻止 Vue 绑定恰当的 this 指向。