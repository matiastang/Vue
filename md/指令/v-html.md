<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-26 16:48:51
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-26 16:50:55
 * @Description: v-html
-->
# v-html

[v-html](https://v3.cn.vuejs.org/api/directives.html#v-html)

更新元素的 innerHTML。**注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译。**如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。

在单文件组件里，scoped 的样式不会应用在 v-html 内部，因为那部分 HTML 没有被 Vue 的模板编译器处理。如果你希望针对 v-html 的内容设置带作用域的 CSS，你可以替换为 `CSS modules` 或用一个额外的全局 <style> 元素手动设置类似 BEM 的作用域策略。