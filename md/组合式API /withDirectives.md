<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 18:27:20
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 18:27:36
 * @Description: withDirectives
-->
# withDirectives

可以使用 withDirectives 将自定义指令应用于 VNode：

const { h, resolveDirective, withDirectives } = Vue

// ...

// <div v-pin:top.animate="200"></div>
render () {
  const pin = resolveDirective('pin')

  return withDirectives(h('div'), [
    [pin, 200, 'top', { animate: true }]
  ])
}
resolveDirective 是模板内部用来解析指令名称的同一个函数。只有当你还没有直接访问指令的定义对象时，才需要这样做。