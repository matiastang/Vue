<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 17:56:12
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 18:02:43
 * @Description: Mixin
-->
# Mixin

[Mixin](https://v3.cn.vuejs.org/guide/mixins.html#%E5%9F%BA%E7%A1%80)

* Mixin 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个 mixin 对象可以包含任意组件选项。**当组件使用 mixin 对象时，所有 mixin 对象的选项将被“混合”进入该组件本身的选项。**
```js
// define a mixin object
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}

// define an app that uses this mixin
const app = Vue.createApp({
  mixins: [myMixin]
})

app.mount('#mixins-basic') // => "hello from mixin!"
```
当组件和 mixin 对象含有同名选项时，这些选项将以恰当的方式进行“合并”。

比如，每个 mixin 可以拥有自己的 data 函数。每个 data 函数都会被调用，并将返回结果合并。**在数据的 property 发生冲突时，会以组件自身的数据为优先。**
**同名钩子函数将合并为一个数组，因此都将被调用。另外，mixin 对象的钩子将在组件自身钩子之前调用。**
**值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。**

## 全局 mixin

Vue 应用程序全局应用 mixin：
```js
const app = Vue.createApp({
  myOption: 'hello!'
})

// 为自定义的选项 'myOption' 注入一个处理器。
app.mixin({
  created() {
    const myOption = this.$options.myOption
    if (myOption) {
      console.log(myOption)
    }
  }
})
```
app.mount('#mixins-global') // => "hello!"
Mixin 也可以进行全局注册。使用时格外小心！一旦使用全局 mixin，它将影响每一个之后创建的组件 (例如，每个子组件)。

## 自定义选项合并策略

自定义选项在合并时，默认策略为简单地覆盖已有值。如果想让某个自定义选项以自定义逻辑进行合并，可以在 app.config.optionMergeStrategies 中添加一个函数：

const app = Vue.createApp({})

app.config.optionMergeStrategies.customOption = (toVal, fromVal) => {
  // return mergedVal
}
合并策略接收在父实例和子实例上定义的该选项的值，分别作为第一个和第二个参数。让我们来检查一下使用 mixin 时，这些参数有哪些：

const app = Vue.createApp({
  custom: 'hello!'
})

app.config.optionMergeStrategies.custom = (toVal, fromVal) => {
  console.log(fromVal, toVal)
  // => "goodbye!", undefined
  // => "hello", "goodbye!"
  return fromVal || toVal
}

app.mixin({
  custom: 'goodbye!',
  created() {
    console.log(this.$options.custom) // => "hello!"
  }
})