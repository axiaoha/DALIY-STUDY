#### 1.v-show和v-if的区别

v-show通过css display控制显示和隐藏

v-if组件真正的渲染和销毁，而不是显示和隐藏

频繁切换显示状态用v-show，否则用v-if

#### 2.v-for中使用key

必须用key，且不能是index和random

diff算法中通过tag和key来判断是否是sameNode

减少渲染次数，提升渲染性能

#### 3.描述Vue组件生命周期(父子组件)

单组件生命周期图

父子组件生命周期关系

#### 4.Vue组件如何通讯(常见)

父子组件props和this.$emit

自定义事件event.$on、event.$off、event.$emit

vuex

#### 5.描述组件渲染和更新的过程

#### 6.双向数据绑定v-model的实现原理

input元素的value = this.name

绑定input事件this.name = $event.target.value

data更新会触发re-render

#### 7.MVVM

#### 8.computed有何特点

缓存，data不变不会重新计算

提高性能

#### 9.为何组件data必须是一个函数

#### 10.ajax请求应该放在哪个什么周期

#### 11.如何将组件所有props传递给子组件

#### 12.如何自己实现一个v-model

#### 13.多个组件有相同的逻辑，如何抽离

mixin

以及mixin的一些缺点

#### 14.何时使用异步组件

加载大组件

路由异步加载时

#### 15.何时需要使用keep-alive

缓存组件，不需要重复渲染

如多个静态tab页的切换

优化性能

#### 16.何时需要使用beforeDestroy(内存泄漏)

解绑自定义事件event.$off

清除定时器

解绑自定义的DOM事件，如windwo scroll

#### 17.什么是作用域插槽

#### 18.Vuex中action和mutation有何区别

action中处理异步，mutation不可以

mutation做原子操作(每次只做一个操作)

action可以整合多个mutation

#### 19.Vue-router常用的路由模式

#### 20.如何配置Vue-router异步加载

#### 21.请用vnode描述一个DOM结构

#### 22.监听data变化的核心API是什么

Object.defineProperty

以及深度监听、监听数组

有何缺点

#### 23.Vue如何监听数组变化

Object.defineProperty不能监听数组变化

重新定义原型，重写push、pop、shift、unshift等方法，实现监听

Proxy可以原生支持监听数组变化

#### 24.请描述响应式原理

监听data变化

组件渲染和更新的流程

#### 25.diff算法的事件复杂度

O(n)

在O(n^3)的基础上做了一些调整

#### 26.简述diff算法过程

patch(elem,vnode)和patch(anode,newVnode)

patchVnode和addVnodes和removeVnodes

updateChildren(key的重要性)

#### 27.Vue为何是异步渲染，$nextTick何用

异步渲染(以及合并data修改，以提高渲染性能)

$nextTick在DOM更新完之后，触发回调

#### 28.Vue常见性能优化方式

合理使用v-show和v-if

合理使用computed

v-for时加key，以及避免和v-if同时使用

自定义事件、DOM事件及时销毁

合理使用异步组件

合理使用keep-alive

data层级不要太深(深度监听需要递归到底，一次性计算量大)

使用vue-loader在开发环境做模板编译(预编译)

