<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 18:30:34
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 18:31:42
 * @Description: render
-->
# render

## 返回值

render 函数返回的是单个根 VNode。
返回一个字符串时会创建一个文本 VNode
返回一个子元素数组，而不把它们包裹在一个根结点里。这会创建一个片段 (fragment)：