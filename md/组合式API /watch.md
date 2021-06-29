<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 17:26:39
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 17:27:22
 * @Description: watch
-->
# watch

我们也可以使用从 Vue 导入的 watch 函数执行相同的操作。它接受 3 个参数：

一个想要侦听的响应式引用或 getter 函数
一个回调
可选的配置选项

```js
import { ref, watch } from 'vue'

const counter = ref(0)
watch(counter, (newValue, oldValue) => {
  console.log('The new counter value is: ' + counter.value)
})
```