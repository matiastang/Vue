<!--
 * @Descripttion: 
 * @version: 
 * @Author: matias tang
 * @Date: 2020-11-02 18:13:38
 * @LastEditors: matias tang
 * @LastEditTime: 2020-11-02 18:22:20
-->
# Vue面试题

[vue生命周期详解](https://zhuanlan.zhihu.com/p/53039906)
[Vue面试中，经常会被问到的面试题/Vue知识点整理](https://www.cnblogs.com/sweeeper/p/10511773.html)

## vue-cli如何新增自定义指令？

1.创建局部指令

var app = new Vue({
    el: '#app',
    data: {    
    },
    // 创建指令(可以多个)
    directives: {
        // 指令名称
        dir1: {
            inserted(el) {
                // 指令中第一个参数是当前使用指令的DOM
                console.log(el);
                console.log(arguments);
                // 对DOM进行操作
                el.style.width = '200px';
                el.style.height = '200px';
                el.style.background = '#000';
            }
        }
    }
})
2.全局指令

Vue.directive('dir2', {
    inserted(el) {
        console.log(el);
    }
})
3.指令的使用

<div id="app">
    <div v-dir1></div>
    <div v-dir2></div>
</div>

## vue如何自定义一个过滤器？

html代码：

<div id="app">
     <input type="text" v-model="msg" />
     {{msg| capitalize }}
</div>
JS代码：

var vm=new Vue({
    el:"#app",
    data:{
        msg:''
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
})
全局定义过滤器

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到 msg的值作为第一个参数。

## vue插件挂载

Vue.use 
会自动阻止多次注册相同插件，届时只会注册一次该插件 
Vue 是可访问的全局变量时会自动调用 Vue.use()

Vue.prototype
定义的是原型,可以是用this.$xxx进行访问

 

归根结底：

不是为了vue写的插件(插件内要处理)不支持Vue.use()加载方式

非vue官方库不支持new Vue()方式

每一个vue组件都是Vue的实例，所以组件内this可以拿到Vue.prototype上添加的属性和方法。

[vue插件挂载](https://blog.csdn.net/elephant230/article/details/97631655)