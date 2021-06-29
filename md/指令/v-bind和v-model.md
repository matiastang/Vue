<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-26 16:00:40
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-26 16:05:05
 * @Description: v-bind和v-model
-->
# v-bind和v-model

## 介绍

`Vue`中可以使用下面方式绑定数据。

* 插值，`{{ 值 }}`
* `v-bind`
* `v-model`

## v-bind

**单向绑定**

```vue
<a v-bind:[attributeName]=""> ... </a>
```

这里的 `attributeName` 会被作为一个 `JavaScript` 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 `Vue` 实例有一个` data property attributeName`，其值为 `"href"`，那么这个绑定将等价于 `v-bind:href`。

## v-model

**双向绑定**

```vue
<input v-model="msg" placeholder="请输入..." />
```

很多时候`v-model`使用在表单的`<input>`中实现双向绑定。
`v-model` 会忽略所有表单元素的 `value、checked、selected` 特性的初始值，而总是将 `Vue` 实例的数据作为数据来源。直接给元素 `value` 赋值不会生效的，你应该通过 `JavaScript` 在组件的 `data` 选项中声明初始值。