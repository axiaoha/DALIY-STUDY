### 浏览器加载

**脚本加载导致的问题**

浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到`<script>`标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应。

**解决**

浏览器通过 defer 和 async 属性实现脚本异步加载

**defer 与 async 的区别**

defer 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行

async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。

一句话，`defer`是“渲染完再执行”，`async`是“下载完就执行”。

另外，如果有多个`defer`脚本，会按照它们在页面出现的顺序加载，而多个`async`脚本是不能保证加载顺序的。

**浏览器加载 ES6 模块**

浏览器加载 ES6 模块，也使用<script>标签，但是要加入 type="module"属性。

```html
<script type="module" src="./foo.js"></script>
```

浏览器对于带有 type="module"的<script>，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了<script>标签的 defer 属性。

- 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
- 模块脚本自动采用严格模式，不管有没有声明`use strict`。
- 模块之中，可以使用`import`命令加载其他模块（`.js`后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用`export`命令输出对外接口。
- 模块之中，顶层的`this`关键字返回`undefined`，而不是指向`window`。也就是说，在模块顶层使用`this`关键字，是无意义的。
- 同一个模块如果加载多次，将只执行一次。

利用顶层的 this 等于 undefined 这个语法点，可以侦测当前代码是否在 ES6 模块之中。

### ES6 模块与 CommonJS 模块的差异

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的`require()`是同步加载模块，ES6 模块的`import`命令是异步加载，有一个独立的模块依赖的解析阶段。

### Node.js 的模块加载方法

从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。

Node.js 要求 ES6 模块采用.mjs 后缀文件名。

如果不希望将后缀名改成.mjs，可以在项目的 package.json 文件中，指定 type 字段为 module。如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成.cjs。

**package.json 的 main 字段**

package.json 文件有两个字段可以指定模块的入口文件：main 和 exports。比较简单的模块，可以只使用 main 字段，指定模块加载的入口文件。

**package.json 的 main 字段**

exports 字段的优先级高于 main 字段。

exports 字段的别名如果是.，就代表模块的主入口，优先级高于 main 字段，并且可以直接简写成 exports 字段的值。

**CommonJS 模块加载 ES6 模块**

CommonJS 的 require()命令不能加载 ES6 模块，会报错，只能使用 import()这个方法加载。

require()不支持 ES6 模块的一个原因是，它是同步加载

**ES6 模块加载 CommonJS 模块**

ES6 模块的 import 命令可以加载 CommonJS 模块，但是只能整体加载，不能只加载单一的输出项。

### 循环加载

a脚本的执行依赖b脚本，而b脚本的执行又依赖a脚本

### 面试题

##### 脚本下载 defer 与 async 的区别

##### ES6 模块与 CommonJS 模块的差异

##### 循环加载