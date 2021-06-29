<!--
 * @Author: tangdaoyong
 * @Date: 2021-06-27 17:42:18
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2021-06-27 17:43:46
 * @Description: inject
-->
# inject

[inject](https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html#%E8%AE%BE%E6%83%B3%E5%9C%BA%E6%99%AF)

在 setup() 中使用 inject 时，也需要从 vue 显式导入(`import { inject } from 'vue'`)。导入以后，我们就可以调用它来定义暴露给我们的组件方式。

inject 函数有两个参数：

要 inject 的 property 的 name
默认值 (可选)