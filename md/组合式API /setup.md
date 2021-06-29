<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 17:16:06
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 17:38:05
 * @Description: setup
-->
# setup

新的 setup 选项在组件创建之前执行，一旦 props 被解析，就将作为组合式 API 的入口。

**注意**在 setup 中你应该避免使用 this，因为它不会找到组件实例。`setup` 的调用发生在 `data` property、computed property 或 methods 被解析之前，所以它们无法在 setup 中被获取。

使用 setup 函数时，它将接收两个参数：

* props
* context

## props

setup 函数中的第一个参数是 props。正如在一个标准组件中所期望的那样，setup 函数中的 props 是响应式的，当传入新的 prop 时，它将被更新。

**注意**因为 props 是响应式的，你不能使用 ES6 解构，它会消除 prop 的响应性。

如果需要解构 prop，可以在 setup 函数中使用 `toRefs` 函数来完成此操作：

// MyBook.vue

import { toRefs } from 'vue'

setup(props) {
  const { title } = toRefs(props)

  console.log(title.value)
}
如果 title 是可选的 prop，则传入的 props 中可能没有 title 。在这种情况下，toRefs 将不会为 title 创建一个 ref 。你需要使用 `toRef` 替代它：

// MyBook.vue
import { toRef } from 'vue'
setup(props) {
  const title = toRef(props, 'title')
  console.log(title.value)
}

## context

传递给 setup 函数的第二个参数是 context。context 是一个普通的 JavaScript 对象，它暴露组件的三个 property：
```js
// MyBook.vue

export default {
  setup(props, context) {
    // Attribute (非响应式对象)
    console.log(context.attrs)

    // 插槽 (非响应式对象)
    console.log(context.slots)

    // 触发事件 (方法)
    console.log(context.emit)
  }
}
```

## 结合模板使用
如果 setup 返回一个对象，那么该对象的 property 以及传递给 setup 的 props 参数中的 property 就都可以在模板中访问到：

<!-- MyBook.vue -->
<template>
  <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    props: {
      collectionName: String
    },
    setup(props) {
      const readersNumber = ref(0)
      const book = reactive({ title: 'Vue 3 Guide' })

      // 暴露给 template
      return {
        readersNumber,
        book
      }
    }
  }
</script>
注意，**从 setup 返回的 `refs` 在模板中访问时是被`自动浅解包`的，因此不应在模板中使用 .value。**

## 使用渲染函数

## this

**在 setup() 内部，this 不是该活跃实例的引用**，因为 setup() 是在解析其它组件选项之前被调用的，所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。这使得 setup() 在和其它选项式 API 一起使用时可能会导致混淆。