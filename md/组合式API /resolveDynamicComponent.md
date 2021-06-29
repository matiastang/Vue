<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 18:25:51
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 18:25:52
 * @Description: resolveDynamicComponent
-->
# resolveDynamicComponent

## <component> 和 is

在底层实现里，模板使用 `resolveDynamicComponent` 来实现 `is` attribute。如果我们在 render 函数中需要 is 提供的所有灵活性，我们可以使用同样的函数：
```js
const { h, resolveDynamicComponent } = Vue

// ...

// `<component :is="name"></component>`
render() {
  const Component = resolveDynamicComponent(this.name)
  return h(Component)
}
```