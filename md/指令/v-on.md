<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-26 17:51:01
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-26 17:52:28
 * @Description: v-on
-->
# v-on

[v-on](https://v3.cn.vuejs.org/guide/events.html#%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6)

缩写`@`

## 内联

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：
```html
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```
```js
methods: {
  warn(message, event) {
    // 现在可以访问到原生事件
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```