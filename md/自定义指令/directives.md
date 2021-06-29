<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 18:04:40
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 18:06:16
 * @Description: directives
-->
# directives

## 注册指令

### 全局注册

注册全局指令

const app = Vue.createApp({})
// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus()
  }
})

### 局部注册

注册局部指令，组件中也接受一个 directives 的选项：

directives: {
  focus: {
    // 指令的定义
    mounted(el) {
      el.focus()
    }
  }
}

### 使用

然后你可以在模板中任何元素上使用新的 v-focus attribute，如下：

<input v-focus />