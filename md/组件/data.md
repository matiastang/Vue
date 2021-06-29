<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-26 17:01:52
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-26 17:03:49
 * @Description: data
-->
# data

[data](https://v3.cn.vuejs.org/guide/data-methods.html#data-property)

组件的 data 选项是一个函数。Vue 在创建新组件实例的过程中调用此函数。它应该返回一个对象，然后 Vue 会通过响应性系统将其包裹起来，并以 $data 的形式存储在组件实例中。为方便起见，该对象的任何顶级 property 也直接通过组件实例暴露出来：

```
const app = Vue.createApp({
  data() {
    return { count: 4 }
  }
})

const vm = app.mount('#app')

console.log(vm.$data.count) // => 4
console.log(vm.count)       // => 4

// 修改 vm.count 的值也会更新 $data.count
vm.count = 5
console.log(vm.$data.count) // => 5

// 反之亦然
vm.$data.count = 6
console.log(vm.count) // => 6
```

这些实例 property 仅在实例首次创建时被添加，所以你需要确保它们都在 data 函数返回的对象中。必要时，要对尚未提供所需值的 property 使用 null、undefined 或其他占位的值。

**直接将不包含在 data 中的新 property 添加到组件实例是可行的。但由于该 property 不在背后的响应式 $data 对象内，所以 `Vue 的响应性系统`不会自动跟踪它。**

Vue 使用 $ 前缀通过组件实例暴露自己的内置 API。它还为内部 property 保留 _ 前缀。你应该避免使用这两个字符开头的的顶级 data property 名称。