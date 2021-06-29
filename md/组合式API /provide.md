<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 17:41:49
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 17:47:00
 * @Description: provide
-->
# provide

[provide](https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html#%E8%AE%BE%E6%83%B3%E5%9C%BA%E6%99%AF)

在 setup() 中使用 provide 时，我们首先从 vue 显式导入 provide 方法(`import { provide } from 'vue'`)。这使我们能够调用 provide 来定义每个 property。

provide 函数允许你通过两个参数定义 property：

* name (<String> 类型)
* value

## 添加响应性

为了增加 `provide` 值和 `inject` 值之间的`响应性`，我们可以在 `provide` 值时使用 `ref` 或 `reactive`。

## 修改响应式 property

当使用响应式 provide / inject 值时，**建议尽可能将对响应式 property 的所有修改限制在定义 provide 的组件内部。**
`有时我们需要在注入数据的组件内部更新 inject 的数据。在这种情况下，我们建议 provide 一个方法来负责改变响应式 property。`
`如果要确保通过 provide 传递的数据不会被 inject 的组件更改，我们建议对提供者的 property 使用 readonly。`

