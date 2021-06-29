<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 15:54:00
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 16:16:35
 * @Description: emits
-->
# emits

可以通过 `emits` 选项在组件上定义已发出的事件。
```js
app.component('custom-form', {
  emits: ['inFocus', 'submit']
})
```
**当在 `emits` 选项中定义了原生事件 (如 `click`) 时，将使用组件中的事件替代原生事件侦听器**

与 prop 类型验证类似，如果使用对象语法而不是数组语法定义发出的事件，则可以验证它。

要添加验证，将为事件分配一个函数，该函数接收传递给 $emit 调用的参数，并返回一个布尔值以指示事件是否有效。
```js
app.component('custom-form', {
  emits: {
    // 没有验证
    click: null,

    // 验证submit 事件
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    submitForm(email, password) {
      this.$emit('submit', { email, password })
    }
  }
})
```

### v-model 参数

**默认情况下，组件上的 v-model 使用 modelValue 作为 prop 和 update:modelValue 作为事件。我们可以通过向 v-model 传递参数来修改这些名称：**

<my-component v-model:title="bookTitle"></my-component>
在本例中，子组件将需要一个 title prop 并发出 update:title 要同步的事件：

app.component('my-component', {
  props: {
    title: String
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `
})
<my-component v-model:title="bookTitle"></my-component>