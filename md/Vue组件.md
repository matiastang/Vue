<!--
 * @Descripttion: 
 * @version: 
 * @Author: matias tang
 * @Date: 2020-11-02 17:17:08
 * @LastEditors: matias tang
 * @LastEditTime: 2020-11-02 17:41:54
-->
# Vue组件

[Vue知识点](https://blog.csdn.net/Raleway/article/details/104158621)

## 调用方法

1.vue中子组件调用父组件的方法

    第一种方法是直接在子组件中通过this.$parent.event来调用父组件的方法。

    第二种方法是在子组件里用$emit向父组件触发一个事件，父组件监听这个事件就行了。

    第三种是父组件把方法传入子组件中，在子组件里直接调用这个方法。

2.vue中父组件调用子组件的方法

    父组件利用ref属性操作子组件方法。
```js
父：
<child ref="childMethod"></child>
子：
method: {
  test() {
     alert(1)
  }
}
在父组件里调用test即 this.$refs.childMethod.test()
```

## 传值

(1)父组件给子组件传值：

1.父组件调用子组件的时候动态绑定属性
 <parent :dataList='dataList'></parent>
2.子组件定义props接收动态绑定的属性props: ['dataList']        

3.子组件使用数据

  (2)子组件主动获取父子间的属性和方法：

    在子组件中使用this.$parent.属性/this.$parent.方法。

（3）子组件给父组件传值：

一、使用ref属性

1.父组件调用子组件时绑定属性ref

  <parent :ref='parent'></parent>

2.在父组件中使用this.$refs.parent.属性/this.$refs.parent.方法

二、使用$emit方法

1.子组件调用this.$emit('方法名‘,传值)

2.父组件通过子组件绑定的'方法名'获取传值。

（4）vue页面级组件之间传值

    1.使用vue-router通过跳转链接带参数传参。

    2.使用本地缓存localStorge。

    3.使用vuex数据管理传值。

（5）说说vue的动态组件。

        多个组件通过同一个挂载点进行组件的切换，is的值是哪个组件的名称，那么页面就会显示哪个组件。

    主要考查面试这 component的 is属性。
    [vue 利用component组件和is属性实现动态组件](https://www.jianshu.com/p/14980d732e16)

 

（6）keep-alive内置组件的作用

    可以让当前组件或者路由不经历创建和销毁，而是进行缓存，凡是被keep-alive组件包裹的组件，除了第一次以外。不会经历创建和销毁阶段的。第一次创建后就会缓存到缓存当中

    

 (7)递归组件的用法

    组件是可以在它们自己的模板中调用自身的。不过它们只能通过 name 选项来做这件事。

    首先我们要知道，既然是递归组件，那么一定要有一个结束的条件，否则就会使用组件循环引用，最终出现“max stack size exceeded”的错误，也就是栈溢出。那么，我们可以使用v-if="false"作为递归组件的结束条件。当遇到v-if为false时，组件将不会再进行渲染。

