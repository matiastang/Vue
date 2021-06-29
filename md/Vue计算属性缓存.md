# Vue计算属性缓存

[Vue 的计算属性如何实现缓存？（原理深入揭秘）](https://blog.csdn.net/weixin_39843414/article/details/106152585)

你可以像普通属性一样将数据绑定到模板中的计算属性。Vue 知道 vm.publishedBookMessage 依赖于 vm.author.books，因此当 vm.author.books 发生改变时，所有依赖 vm.publishedBookMessage 的绑定也会更新。而且最妙的是我们已经声明的方式创建了这个依赖关系：计算属性的 getter 函数没有副作用，它更易于测试和理解。

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是**计算属性是基于它们的反应依赖关系缓存的**。计算属性只在相关响应式依赖发生改变时它们才会重新求值。

`计算属性默认只有 getter，不过在需要时你也可以提供一个 setter`：

// ...
computed: {
  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。