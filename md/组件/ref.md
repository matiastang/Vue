<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 17:03:31
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 17:04:30
 * @Description: ref
-->
# ref

[ref](https://v3.cn.vuejs.org/guide/component-template-refs.html)

尽管存在 prop 和事件，但有时你可能仍然需要直接访问 JavaScript 中的子组件。为此，可以使用 ref attribute 为子组件或 HTML 元素指定引用 ID。例如：

<input ref="input" />
例如，你希望在组件挂载时，以编程的方式 focus 到这个 input 上，这可能有用

const app = Vue.createApp({})

app.component('base-input', {
  template: `
    <input ref="input" />
  `,
  methods: {
    focusInput() {
      this.$refs.input.focus()
    }
  },
  mounted() {
    this.focusInput()
  }
})
此外，还可以向组件本身添加另一个 ref，并使用它从父组件触发 focusInput 事件：

<base-input ref="usernameInput"></base-input>
this.$refs.usernameInput.focusInput()

## $refs

`$refs` 只会在组件渲染完成之后生效。这仅作为一个用于直接操作子元素的“逃生舱”——你应该避免在模板或计算属性中访问 `$refs`。