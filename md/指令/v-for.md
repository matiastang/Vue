<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-26 17:39:16
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-26 17:46:09
 * @Description: v-for
-->
# v-for

v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。

在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它在不同 JavaScript 引擎下的结果都一致。

## 更新

当 Vue 正在更新使用 v-for 渲染的元素列表时，它默认使用 **”就地更新“的策略** 。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

这个默认的模式是高效的，但是 **只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出**。

**为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key attribute**：

<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
建议尽可能在使用 v-for 时提供 key attribute，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。

## 变更方法
Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
你可以打开控制台，然后对前面例子的 items 数组尝试调用变更方法。比如 example1.items.push({ message: 'Baz' })。

## 替换数组
变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 filter()、concat() 和 slice()。它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组：

example1.items = example1.items.filter(item => item.message.match(/Foo/))
你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。**Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。**


`不推荐同时使用 v-if 和 v-for。请查阅风格指南以获取更多信息。`

当 v-if 与 v-for 一起使用时，**v-if 具有比 v-for 更高的优先级**。请查阅列表渲染指南以获取详细信息。

`Vue3`中：**v-if 具有比 v-for 更高的优先级**这意味着 v-if 将没有权限访问 v-for 里的变量
`Vue2`中：**v-for 具有比 v-if 更高的优先级**

* 尽量避免在同一个元素上面同时使用 v-if 和 v-for ，建议使用计算属性替代。