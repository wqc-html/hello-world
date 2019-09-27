- JS ES5 [教程](https://wangdoc.com/javascript/)
- JS ES6 新语法 [教程](http://es6.ruanyifeng.com/#README)

let 和 const 命令:
  1.不存在的变量提升 : var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined 。为了纠正这种现象 let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。
  2.暂时性死区 : 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
  3.不允许重复声明 : let不允许在相同作用域内，重复声明同一个变量。
  4.ES5块级作用域 : ES5 只有全局作用域和函数作用域，没有块级作用域，第一种场景，内层变量可能会覆盖外层变量。，原因在于变量提升，导致内层的变量覆盖了外层的变量。第二种场景，内层变量泄露为全局变量。，原因在于变量提升。
  5.ES6块级作用域 : let实际上为 JavaScript 新增了块级作用域。ES6 允许块级作用域的任意嵌套( {{console.log(123)}} )。每一层都是一个单独的作用域，外层作用域无法读取内层作用域的内部变量。内层作用域可以定义外层作用域的同名变量。
  6.const声明一个只读的常量。一旦声明，常量的值就不能改变。
  7.const本质: 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。
  8.ES6 声明变量的六种方法: var，function，let，const，import，class。
  9.顶层对象: 顶层对象，在浏览器环境指的是window对象，在 Node 指的是global对象。ES5 之中，顶层对象的属性与全局变量是等价的。顶层对象的属性与全局变量挂钩，被认为是 JavaScript 语言最大的设计败笔之一。这样的设计带来了几个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道（因为全局变量可能是顶层对象的属性创造的，而属性的创造是动态的）；其次，程序员很容易不知不觉地就创建了全局变量（比如打字出错）；最后，顶层对象的属性是到处可以读写的，这非常不利于模块化编程。另一方面，window对象有实体含义，指的是浏览器的窗口对象，顶层对象是一个有实体含义的对象，也是不合适的。ES6 为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性。也就是说，从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。

变量的解构赋值:
  1.ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
  2.解构赋值允许指定默认值。注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
  3.对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
  4.如果解构失败，变量的值等于undefined。
  
箭头函数:
  1.ES6 允许使用“箭头”（=>）定义函数。
    var f = v => v;
  2.如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
    var sum = (num1, num2) => num1 + num2;
  3.如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
    var sum = (num1, num2) => { return num1 + num2; }
  4.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
    let getTempItem = id => ({ id: id, name: "Temp" });
  5.如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
    let fn = () => void doesNotReturn();
  6.箭头函数可以与变量解构结合使用。
    const full = ({ first, last }) => first + ' ' + last;
  7.箭头函数有几个使用注意点。
    1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
  8.箭头函数根本没有自己的this , 指向最靠近外层的this。除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、            new.target。
  9.在function里this关键字总是指向函数所在的当前对象。

尾调用:
  1.尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。
  2.尾调用优化”（Tail call optimization），即只保留内层函数的调用帧。如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存。这就是“尾调用优化”的意义。注意，只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行“尾调用优化”。
  3.目前只有 Safari 浏览器支持尾调用优化，Chrome 和 Firefox 都不支持。

尾递归:
  1.函数调用自身，称为递归。如果尾调用自身，就称为尾递归。
  2.递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
  3.递归本质上是一种循环操作。纯粹的函数式编程语言没有循环操作命令，所有的循环都用递归实现，这就是为什么尾递归对这些语言极其重要。对于其他支持“尾调用优化”的语言（比如 Lua，ES6），只需要知道循环可以用递归代替，而一旦使用递归，就最好使用尾递归。

扩展运算符:
  1.扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
    console.log(...[1, 2, 3])
  2.如果扩展运算符后面是一个空数组，则不产生任何效果。
    [...[], 1] 
    // [1]
  3.只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。
    (...[1, 2])
    // Uncaught SyntaxError: Unexpected number

    console.log((...[1, 2]))
    // Uncaught SyntaxError: Unexpected number

    console.log(...[1, 2])
    // 1 2
  4.合并数组
    // ES6 的合并数组
    [...arr1, ...arr2, ...arr3]

    // ES6 的写法(push方法的参数不能是数组)
    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];
    arr1.push(...arr2);
  5.与解构赋值结合
    const [first, ...rest] = [1, 2, 3, 4, 5];
    first // 1
    rest  // [2, 3, 4, 5]

    如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
    const [...butLast, last] = [1, 2, 3, 4, 5];
    // 报错
  
  6.对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
    let z = { a: 3, b: 4 };
    let n = { ...z };
    n // { a: 3, b: 4 }

  7.如果扩展运算符后面是一个空对象，则没有任何效果。
    {...{}, a: 1}
    // { a: 1 }

  8.如果扩展运算符后面不是对象，则会自动将其转为对象。由于该对象没有自身属性，所以返回一个空对象。
    // 等同于 {...Object(true)}
    {...true} // {}

    // 等同于 {...Object(undefined)}
    {...undefined} // {}

    // 等同于 {...Object(null)}
    {...null} // {}

  9.扩展运算符可以用于合并两个对象。(如果出现重复的属性，后面的会把前面的覆盖掉)
    let ab = { ...a, ...b };
    // 等同于
    let ab = Object.assign({}, a, b);

Proxy
  1.概述
    Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
    Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
  
Reflect
  1.概述
    Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。
    将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。
    修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。

Promise
  1.含义
    Promise 是异步编程的一种解决方案
    所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果
  
  2.Promise对象有以下两个特点
    1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
    2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

  3.优点
    有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
  
  4.基本用法
    ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。
    下面代码创造了一个Promise实例。
    const promise = new Promise(function(resolve, reject) {
      // ... some code

      if (/* 异步操作成功 */){
        resolve(value);
      } else {
        reject(error);
      }
    });

    Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
    resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

    Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
    promise.then(function(value) {
      // success
    }, function(error) {
      // failure
    });

    then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

Iterator
  1.概念 
    JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

    遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

    Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

  2.Iterator 的遍历过程
    1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

    2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

    3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

    4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

    每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

Generator 函数
  1.概念
    Generator 函数是 ES6 提供的一种异步编程解决方案，Generator 函数有多种理解角度。语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。

    执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

    形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

  2.异步
    所谓"异步"，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。

    比如，有一个任务是读取文件进行处理，任务的第一段是向操作系统发出请求，要求读取文件。然后，程序执行其他任务，等到操作系统返回文件，再接着执行任务的第二段（处理文件）。这种不连续的执行，就叫做异步。

    相应地，连续的执行就叫做同步。由于是连续执行，不能插入其他任务，所以操作系统从硬盘读取文件的这段时间，程序只能干等着。

  3.回调函数
    JavaScript 语言对异步编程的实现，就是回调函数。所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。回调函数的英语名字callback，直译过来就是"重新调用"。

  4.协程
    传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做"协程"（coroutine），意思是多个线程互相协作，完成异步任务。
    协程有点像函数，又有点像线程。它的运行流程大致如下。
      第一步，协程A开始执行。
      第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
      第三步，（一段时间后）协程B交还执行权。
      第四步，协程A恢复执行。

  5.参数的求值策略
    Thunk 函数早在上个世纪 60 年代就诞生了。
    那时，编程语言刚刚起步，计算机学家还在研究，编译器怎么写比较好。一个争论的焦点是"求值策略"，即函数的参数到底应该何时求值。  

    f(x + 5)
    上面代码先定义函数f，然后向它传入表达式x + 5。请问，这个表达式应该何时求值？

    一种意见是"传值调用"（call by value），即在进入函数体之前，就计算x + 5的值（等于 6），再将这个值传入函数f。C 语言就采用这种策略。
    f(x + 5)
    // 传值调用时，等同于
    f(6)  

    另一种意见是“传名调用”（call by name），即直接将表达式x + 5传入函数体，只在用到它的时候求值。Haskell 语言采用这种策略。
    f(x + 5)
    // 传名调用时，等同于
    (x + 5) * 2

    传值调用和传名调用，哪一种比较好？  
    回答是各有利弊。传值调用比较简单，但是对参数求值的时候，实际上还没用到这个参数，有可能造成性能损失。

  6.Thunk 函数的含义
    编译器的“传名调用”实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。
    
    function f(m) {
      return m * 2;
    }

    f(x + 5);

    // 等同于

    var thunk = function () {
      return x + 5;
    };

    function f(thunk) {
      return thunk() * 2;
    }

  7.co 模块 
    co 模块是著名程序员 TJ Holowaychuk 于 2013 年 6 月发布的一个小工具，用于 Generator 函数的自动执行。
    原理 : 
          为什么 co 可以自动执行 Generator 函数？

          前面说过，Generator 就是一个异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。

          两种方法可以做到这一点。

          （1）回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。

          （2）Promise 对象。将异步操作包装成 Promise 对象，用then方法交回执行权。

          co 模块其实就是将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个模块。使用 co 的前提条件是，Generator 函数的yield命令后面，只能是 Thunk 函数或 Promise 对象。如果数组或对象的成员，全部都是 Promise 对象，也可以使用 co，


async函数
  1.含义
    ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
    async 函数是什么？一句话，它就是 Generator 函数的语法糖。

    //async函数写法
    const asyncReadFile = async function () {
      const f1 = await readFile('/etc/fstab');
      const f2 = await readFile('/etc/shells');
      console.log(f1.toString());
      console.log(f2.toString());
    };

    一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已。

    async函数对 Generator 函数的改进，体现在以下四点。
    1）内置执行器。
       Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。
       上面的代码调用了asyncReadFile函数，然后它就会自动执行，输出最后结果。这完全不像 Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果。

    2）更好的语义。
       async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
    
    3）更广的适用性。
       co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。

    4）返回值是 Promise。
       async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
       进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。

  
  2.基本用法
    async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

  3.语法
    async 函数有多种使用形式。
    // 函数声明
    async function foo() {}

    // 函数表达式
    const foo = async function () {};

    // 对象的方法
    let obj = { async foo() {} };
    obj.foo().then(...)

    // Class 的方法
    class Storage {
      constructor() {
        this.cachePromise = caches.open('avatars');
      }

      async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
      }
    }

    const storage = new Storage();
    storage.getAvatar('jake').then(…);

    // 箭头函数
    const foo = async () => {};

  4.返回 Promise 对象
    async函数返回一个 Promise 对象。

    async函数内部return语句返回的值，会成为then方法回调函数的参数。
    //语句
    async function f() {
      return 'hello world';
    }

    f().then(v => console.log(v))
    // "hello world"

    上面代码中，函数f内部return命令返回的值，会被then方法回调函数接收到。

    async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
    //语句
    async function f() {
      throw new Error('出错了');
    }

    f().then(
      v => console.log(v),
      e => console.log(e)
    )
    // Error: 出错了

  5.Promise 对象的状态变化
    async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

    下面是一个例子。

    async function getTitle(url) {
      let response = await fetch(url);
      let html = await response.text();
      return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    }
    getTitle('https://tc39.github.io/ecma262/').then(console.log)
    // "ECMAScript 2017 Language Specification"

    上面代码中，函数getTitle内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行then方法里面的console.log。

  6.await 命令
    正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

    async function f() {
      // 等同于
      // return 123;
      return await 123;
    }

    f().then(v => console.log(v))
    // 123

    上面代码中，await命令的参数是数值123，这时等同于return 123。

    另一种情况是，await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象。

    await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到。
    //语句
    async function f() {
      await Promise.reject('出错了');
    }

    f()
    .then(v => console.log(v))
    .catch(e => console.log(e))
    // 出错了
    注意，上面代码中，await语句前面没有return，但是reject方法的参数依然传入了catch方法的回调函数。这里如果在await前面加上return，效果是一样的。

    任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
    //语句
    async function f() {
      await Promise.reject('出错了');
      await Promise.resolve('hello world'); // 不会执行
    }
    上面代码中，第二个await语句是不会执行的，因为第一个await语句状态变成了reject。

    第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
    //语句
    async function f() {
      try {
        await Promise.reject('出错了');
      } catch(e) {
      }
      return await Promise.resolve('hello world');
    }

    f()
    .then(v => console.log(v))
    // hello world

    另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
    //语句
    async function f() {
      await Promise.reject('出错了')
        .catch(e => console.log(e));
      return await Promise.resolve('hello world');
    }

    f()
    .then(v => console.log(v))
    // 出错了
    // hello world

  7.错误处理
    如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。

    //语句
    async function f() {
      await new Promise(function (resolve, reject) {
        throw new Error('出错了');
      });
    }

    f()
    .then(v => console.log(v))
    .catch(e => console.log(e))
    // Error：出错了

    上面代码中，async函数f执行后，await后面的 Promise 对象会抛出一个错误对象，导致catch方法的回调函数被调用，它的参数就是抛出的错误对象。具体的执行机制，可以参考后文的“async 函数的实现原理”。

    防止出错的方法，也是将其放在try...catch代码块之中。

  8.使用注意点
    第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。

    第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

    let foo = await getFoo();
    let bar = await getBar(); 
    上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。

    // 写法一
    let [foo, bar] = await Promise.all([getFoo(), getBar()]);

    // 写法二
    let fooPromise = getFoo();
    let barPromise = getBar();
    let foo = await fooPromise;
    let bar = await barPromise;
    上面两种写法，getFoo和getBar都是同时触发，这样就会缩短程序的执行时间。

    第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错。
    const a = () => {
      b().then(() => c());
    };
    上面代码中，函数a内部运行了一个异步任务b()。当b()运行的时候，函数a()不会中断，而是继续执行。等到b()运行结束，可能a()早就运行结束了，b()所在的上下文环境已经消失了。如果b()或c()报错，错误堆栈将不包括a()。

    现在将这个例子改成async函数。

    const a = async () => {
      await b();
      c();
    };

    上面代码中，b()运行的时候，a()是暂停执行，上下文环境都保存着。一旦b()或c()报错，错误堆栈将包括a()。

  9.async 函数的实现原理
    async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。


Class 的基本语法

  1.简介
    类的由来 : JavaScript 语言中，生成实例对象的传统方法是通过构造函数。下面是一个例子。
    //语句
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }

    Point.prototype.toString = function () {
      return '(' + this.x + ', ' + this.y + ')';
    };

    var p = new Point(1, 2);

    ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。
    基本上，ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。上面的代码用 ES6 的class改写，就是下面这样。

    //语句
    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      toString() {
        return '(' + this.x + ', ' + this.y + ')';
      }
    }

    上面代码定义了一个“类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。也就是说，ES5 的构造函数Point，对应 ES6 的Point类的构造方法。

    Point类除了构造方法，还定义了一个toString方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

    ES6 的类，完全可以看作构造函数的另一种写法。

    //语句
    class Point {
      // ...
    }

    typeof Point // "function"
    Point === Point.prototype.constructor // true

    上面代码表明，类的数据类型就是函数，类本身就指向构造函数。

    使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。

    //语句
    class Bar {
      doStuff() {
        console.log('stuff');
      }
    }

    var b = new Bar();
    b.doStuff() // "stuff"

    构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。

    class Point {
      constructor() {
        // ...
      }

      toString() {
        // ...
      }

      toValue() {
        // ...
      }
    }

    // 等同于
    Point.prototype = {
      constructor() {},
      toString() {},
      toValue() {},
    };

    在类的实例上面调用方法，其实就是调用原型上的方法。

  2.constructor 方法
    constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

    //语句
    class Point {
    }

    // 等同于
    class Point {
      constructor() {}
    }

    上面代码中，定义了一个空的类Point，JavaScript 引擎会自动为它添加一个空的constructor方法。


    constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。 
    //语句
    class Foo {
      constructor() {
        return Object.create(null);
      }
    }

    new Foo() instanceof Foo
    // false

    类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

  3.类的实例
    生成类的实例的写法，与 ES5 完全一样，也是使用new命令。前面说过，如果忘记加上new，像函数那样调用Class，将会报错。

    //语句
    class Point {
      // ...
    }

    // 报错
    var point = Point(2, 3);

    // 正确
    var point = new Point(2, 3);


    与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。

    //定义类
    class Point {

      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      toString() {
        return '(' + this.x + ', ' + this.y + ')';
      }

    }

    var point = new Point(2, 3);

    point.toString() // (2, 3)

    point.hasOwnProperty('x') // true
    point.hasOwnProperty('y') // true
    point.hasOwnProperty('toString') // false
    point.__proto__.hasOwnProperty('toString') // true

    上面代码中，x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。这些都与 ES5 的行为保持一致。

    与 ES5 一样，类的所有实例共享一个原型对象。

    //语句
    var p1 = new Point(2,3);
    var p2 = new Point(3,2);

    p1.__proto__ === p2.__proto__
    //true

    上面代码中，p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。

    这也意味着，可以通过实例的__proto__属性为“类”添加方法。

    __proto__ 并不是语言本身的特性，这是各大厂商具体实现时添加的私有属性，虽然目前很多现代浏览器的 JS 引擎中都提供了这个私有属性，但依旧不建议在生产中使用该属性，避免对环境产生依赖。生产环境中，我们可以使用 Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。

    var p1 = new Point(2,3);
    var p2 = new Point(3,2);

    p1.__proto__.printName = function () { return 'Oops' };

    p1.printName() // "Oops"
    p2.printName() // "Oops"

    var p3 = new Point(4,2);
    p3.printName() // "Oops"

    上面代码在p1的原型上添加了一个printName方法，由于p1的原型就是p2的原型，因此p2也可以调用这个方法。而且，此后新建的实例p3也可以调用这个方法。这意味着，使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。

  4.取值函数（getter）和存值函数（setter）
    与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

    class MyClass {
      constructor() {
        // ...
      }
      get prop() {
        return 'getter';
      }
      set prop(value) {
        console.log('setter: '+value);
      }
    }

    let inst = new MyClass();

    inst.prop = 123;
    // setter: 123

    inst.prop
    // 'getter'

    上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。

    存值函数和取值函数是设置在属性的 Descriptor 对象上的。

    class CustomHTMLElement {
      constructor(element) {
        this.element = element;
      }

      get html() {
        return this.element.innerHTML;
      }

      set html(value) {
        this.element.innerHTML = value;
      }
    }

    var descriptor = Object.getOwnPropertyDescriptor(
      CustomHTMLElement.prototype, "html"
    );

    "get" in descriptor  // true
    "set" in descriptor  // true

    上面代码中，存值函数和取值函数是定义在html属性的描述对象上面，这与 ES5 完全一致。

  5.属性表达式
    类的属性名，可以采用表达式。

    let methodName = 'getArea';

    class Square {
      constructor(length) {
        // ...
      }

      [methodName]() {
        // ...
      }
    }

    上面代码中，Square类的方法名getArea，是从表达式得到的。

  6.Class 表达式
    与函数一样，类也可以使用表达式的形式定义。

    const MyClass = class Me {
      getClassName() {
        return Me.name;
      }
    };

    上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用MyClass引用。

    let inst = new MyClass();
    inst.getClassName() // Me
    Me.name // ReferenceError: Me is not defined

    上面代码表示，Me只在 Class 内部有定义。

    如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。
    const MyClass = class { /* ... */ };

    采用 Class 表达式，可以写出立即执行的 Class。
    let person = new class {
      constructor(name) {
        this.name = name;
      }

      sayName() {
        console.log(this.name);
      }
    }('张三');

    person.sayName(); // "张三"

    上面代码中，person是一个立即执行的类的实例。

  7.注意点 
    1）严格模式
    类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。考虑到未来所有的代码，其实都是运行在模块之中，所以 ES6 实际上把整个语言升级到了严格模式。
   
    2）不存在提升
    类不存在变量提升（hoist），这一点与 ES5 完全不同。

    new Foo(); // ReferenceError
    class Foo {}

    上面代码中，Foo类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。

    
    {
      let Foo = class {};
      class Bar extends Foo {
      }
    }

    上面的代码不会报错，因为Bar继承Foo的时候，Foo已经有定义了。但是，如果存在class的提升，上面代码就会报错，因为class会被提升到代码头部，而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义。

    3）name 属性
    由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。 
    name属性总是返回紧跟在class关键字后面的类名。

    4）Generator 方法
    如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。

    5）this 的指向
    类的方法内部如果含有this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。

  8.静态方法
    类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
    
    class Foo {
      static classMethod() {
        return 'hello';
      }
    }

    Foo.classMethod() // 'hello'

    var foo = new Foo();
    foo.classMethod()
    // TypeError: foo.classMethod is not a function

    上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

    注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。 静态方法可以与非静态方法重名。

    父类的静态方法，可以被子类继承。

    静态方法也是可以从super对象上调用的。

  9.实例属性的新写法
    实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。

  10.静态属性
    静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。

    //写法
    class Foo {
      static myStaticProp = 42;
    }
    
  11.私有方法和私有属性
    私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但 ES6 不提供，只能通过变通方法模拟实现。
    一种做法是在命名上加以区别。
    另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的。
    
    
  12.私有属性的提案 
    目前，有一个提案，为class加了私有属性。方法是在属性名之前，使用#表示。

    //语句
    class IncreasingCounter {
      #count = 0;
    }

    上面代码中，#count就是私有属性，只能在类的内部使用（this.#count）。如果在类的外部使用，就会报错。

    //语句
    const counter = new IncreasingCounter();
    counter.#count // 报错
    counter.#count = 42 // 报错

    上面代码在类的外部，读取私有属性，就会报错。

    下面是另一个例子。

    class Point {
      #x;

      get x() {
        return this.#x;
      }
    }

    上面代码中，#x就是私有属性，在Point类之外是读取不到这个属性的。由于井号#是属性名的一部分，使用时必须带有#一起使用，所以#x和x是两个不同的属性。

    之所以要引入一个新的前缀#表示私有属性，而没有采用private关键字，是因为 JavaScript 是一门动态语言，没有类型声明，使用独立的符号似乎是唯一的比较方便可靠的方法，能够准确地区分一种属性是否为私有属性。另外，Ruby 语言使用@表示私有属性，ES6 没有用这个符号而使用#，是因为@已经被留给了 Decorator。

    这种写法不仅可以写私有属性，还可以用来写私有方法。

    class Foo {
      #a;
      #b;
      
      #sum() {
        return #a + #b;
      }
    }

    上面代码中，#sum()就是一个私有方法。

    另外，私有属性也可以设置 getter 和 setter 方法。
    class Counter {
      #xValue = 0;

      get #x() { return #xValue; }
      set #x(value) { this.#xValue = value; }
    }

    上面代码中，#x是一个私有属性，它的读写都通过get #x()和set #x()来完成。

    私有属性不限于从this引用，只要是在类的内部，实例也可以引用私有属性。

    class Foo {
      #privateValue = 42;
      static getPrivateValue(foo) {
        return foo.#privateValue;
      }
    }

    Foo.getPrivateValue(new Foo()); // 42

    上面代码允许从实例foo上面引用私有属性。

    私有属性和私有方法前面，也可以加上static关键字，表示这是一个静态的私有属性或私有方法。

    //语句
    class FakeMath {
      static PI = 22 / 7;
      static #totallyRandomNumber = 4;

      static #computeRandomNumber() {
        return FakeMath.#totallyRandomNumber;
      }

      static random() {
        console.log('I heard you like random numbers…')
        return FakeMath.#computeRandomNumber();
      }
    }

    FakeMath.PI // 3.142857142857143
    FakeMath.random()
    // I heard you like random numbers…
    // 4
    FakeMath.#totallyRandomNumber // 报错
    FakeMath.#computeRandomNumber() // 报错

    上面代码中，#totallyRandomNumber是私有属性，#computeRandomNumber()是私有方法，只能在FakeMath这个类的内部调用，外部调用就会报错。

  
  13.new.target 属性 
    new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。

    function Person(name) {
      if (new.target !== undefined) {
        this.name = name;
      } else {
        throw new Error('必须使用 new 命令生成实例');
      }
    }

    // 另一种写法
    function Person(name) {
      if (new.target === Person) {
        this.name = name;
      } else {
        throw new Error('必须使用 new 命令生成实例');
      }
    }

    var person = new Person('张三'); // 正确
    var notAPerson = Person.call(person, '张三');  // 报错

    上面代码确保构造函数只能通过new命令调用。

    Class 内部调用new.target，返回当前 Class。

    需要注意的是，子类继承父类时，new.target会返回子类。

    注意，在函数外部，使用new.target会报错。


Class 的继承
  1.简介
    Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。  

    class Point {
    }

    class ColorPoint extends Point {
    }

    上面代码定义了一个ColorPoint类，该类通过extends关键字，继承了Point类的所有属性和方法。但是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个Point类。下面，我们在ColorPoint内部加上代码。

    class ColorPoint extends Point {
      constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
      }

      toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
      }
    }

    上面代码中，constructor方法和toString方法之中，都出现了super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。

    子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。

    class Point { /* ... */ }

    class ColorPoint extends Point {
      constructor() {
      }
    }

    let cp = new ColorPoint(); // ReferenceError

    上面代码中，ColorPoint继承了父类Point，但是它的构造函数没有调用super方法，导致新建实例时报错。

    ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

    如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。

    class ColorPoint extends Point {
    }

    // 等同于
    class ColorPoint extends Point {
      constructor(...args) {
        super(...args);
      }
    } 

    另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }

    class ColorPoint extends Point {
      constructor(x, y, color) {
        this.color = color; // ReferenceError
        super(x, y);
        this.color = color; // 正确
      }
    }

    上面代码中，子类的constructor方法没有调用super之前，就使用this关键字，结果报错，而放在super方法之后就是正确的。

    下面是生成子类实例的代码。
    let cp = new ColorPoint(25, 8, 'green');

    cp instanceof ColorPoint // true
    cp instanceof Point // true
    上面代码中，实例对象cp同时是ColorPoint和Point两个类的实例，这与 ES5 的行为完全一致。

    最后，父类的静态方法，也会被子类继承。
    class A {
      static hello() {
        console.log('hello world');
      }
    }

    class B extends A {
    }

    B.hello()  // hello world

    上面代码中，hello()是A类的静态方法，B继承A，也继承了A的静态方法。

  2.Object.getPrototypeOf()
    Object.getPrototypeOf方法可以用来从子类上获取父类。

    Object.getPrototypeOf(ColorPoint) === Point
    // true
    因此，可以使用这个方法判断，一个类是否继承了另一个类。

  3.super 关键字
    super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

    第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。

    注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B的实例，因此super()在这里相当于A.prototype.constructor.call(this)。

    作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。
    class A {}

    class B extends A {
      m() {
        super(); // 报错
      }
    }

    第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
    class A {
      p() {
        return 2;
      }
    }

    class B extends A {
      constructor() {
        super();
        console.log(super.p()); // 2
      }
    }

    let b = new B();   

    上面代码中，子类B当中的super.p()，就是将super当作一个对象使用。这时，super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()。

    这里需要注意，由于super指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过super调用的。
    class A {
      constructor() {
        this.p = 2;
      }
    }

    class B extends A {
      get m() {
        return super.p;
      }
    }

    let b = new B();
    b.m // undefined

    上面代码中，p是父类A实例的属性，super.p就引用不到它。

    如果属性定义在父类的原型对象上，super就可以取到。
    class A {}
    A.prototype.x = 2;

    class B extends A {
      constructor() {
        super();
        console.log(super.x) // 2
      }
    }

    let b = new B();

    上面代码中，属性x是定义在A.prototype上面的，所以super.x可以取到它的值。

    ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
    由于this指向子类实例，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。

    如果super作为对象，用在静态方法之中，这时super将指向父类静态方法，而不是父类的原型对象。 在普通方法之中指向父类的原型对象。
    
    另外，在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例。

    注意，使用super的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错。

    最后，由于对象总是继承其他对象的，所以可以在任意一个对象中，使用super关键字。

  4.类的 prototype 属性和__proto__属性
    大多数浏览器的 ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

    1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

    2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

    这两条继承链，可以这样理解：作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；作为一个构造函数，子类（B）的原型对象（prototype属性）是父类的原型对象（prototype属性）的实例。

  5.实例的 _proto_ 属性
    子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型。

  6.原生构造函数的继承
    原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。

    Boolean()
    Number()
    String()
    Array()
    Date()
    Function()
    RegExp()
    Error()
    Object()

    ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。下面是一个继承Array的例子。

    extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数。因此可以在原生数据结构的基础上，定义自己的数据结构。


Module 的语法
  1.概述
    历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的require、Python 的import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。

    在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

    ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。

    // CommonJS模块
    let { stat, exists, readFile } = require('fs');

    // 等同于
    let _fs = require('fs');
    let stat = _fs.stat;
    let exists = _fs.exists;
    let readfile = _fs.readfile;

    上面代码的实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

    ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。

    // ES6模块
    import { stat, exists, readFile } from 'fs';    

    上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

    由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。

    除了静态加载带来的各种好处，ES6 模块还有以下好处。

      不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
      将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
      不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。

  2.严格模式
    ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。

    严格模式主要有以下限制。
      变量必须声明后再使用
      函数的参数不能有同名属性，否则报错
      不能使用with语句
      不能对只读属性赋值，否则报错
      不能使用前缀 0 表示八进制数，否则报错
      不能删除不可删除的属性，否则报错
      不能删除变量delete prop，会报错，只能删除属性delete global[prop]
      eval不会在它的外层作用域引入变量
      eval和arguments不能被重新赋值
      arguments不会自动反映函数参数的变化
      不能使用arguments.callee
      不能使用arguments.caller
      禁止this指向全局对象
      不能使用fn.caller和fn.arguments获取函数调用的堆栈
      增加了保留字（比如protected、static和interface）

    上面这些限制，模块都必须遵守。由于严格模式是 ES5 引入的，不属于 ES6，

    其中，尤其需要注意this的限制。ES6 模块之中，顶层的this指向undefined，即不应该在顶层代码使用this。

  3.export 命令
    模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

    一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个 JS 文件，里面使用export命令输出变量。

    // profile.js
    export var firstName = 'Michael';
    export var lastName = 'Jackson';
    export var year = 1958;

    上面代码是profile.js文件，保存了用户信息。ES6 将其视为一个模块，里面用export命令对外部输出了三个变量。

    export的写法，除了像上面这样，还有另外一种。

    // profile.js
    var firstName = 'Michael';
    var lastName = 'Jackson';
    var year = 1958;

    export { firstName, lastName, year };

    上面代码在export命令后面，使用大括号指定所要输出的一组变量。它与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

    export命令除了输出变量，还可以输出函数或类（class）。

    export function multiply(x, y) {
      return x * y;
    };

    上面代码对外输出一个函数multiply。

    通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

    function v1() { ... }
    function v2() { ... }

    export {
      v1 as streamV1,
      v2 as streamV2,
      v2 as streamLatestVersion
    };  

    上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。

    需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

    // 报错
    export 1;

    // 报错
    var m = 1;
    export m;

    上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。

    // 写法一
    export var m = 1;

    // 写法二
    var m = 1;
    export {m};

    // 写法三
    var n = 1;
    export {n as m};

    上面三种写法都是正确的，规定了对外的接口m。其他脚本可以通过这个接口，取到值1。它们的实质是，在接口名与模块内部变量之间，建立了一一对应的关系。

    同样的，function和class的输出，也必须遵守这样的写法。

    // 报错
    function f() {}
    export f;

    // 正确
    export function f() {};

    // 正确
    function f() {}
    export {f};

    另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

    这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新

    最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。

    function foo() {
      export default 'bar' // SyntaxError
    }
    foo()

    上面代码中，export语句放在函数之中，结果报错。


  4.import 命令

    使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

    // main.js
    import { firstName, lastName, year } from './profile.js';

    function setName(element) {
      element.textContent = firstName + ' ' + lastName;
    }

    上面代码的import命令，用于加载profile.js文件，并从中输入变量。import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

    如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。

    import { lastName as surname } from './profile.js';

    import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
    
    import {a} from './xxx.js'
    a = {}; // Syntax Error : 'a' is read-only;

    上面代码中，脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。

    import {a} from './xxx.js'
    a.foo = 'hello'; // 合法操作

    上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。

    import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

    import {myMethod} from 'util';

    上面代码中，util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。

    注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。

    foo();
    import { foo } from 'my_module';

    上面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

    由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

    // 报错
    import { 'f' + 'oo' } from 'my_module';

    // 报错
    let module = 'my_module';
    import { foo } from module;

    // 报错
    if (x === 1) {
      import { foo } from 'module1';
    }

    上面三种写法都会报错，因为它们用到了表达式、变量和if结构。在静态分析阶段，这些语法都是没法得到值的。

    最后，import语句会执行所加载的模块，因此可以有下面的写法。

    import 'lodash';

    上面代码仅仅执行lodash模块，但是不输入任何值。

    如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次。

    import 'lodash';
    import 'lodash';

    上面代码加载了两次lodash，但是只会执行一次。

    import { foo } from 'my_module';
    import { bar } from 'my_module';

    // 等同于
    import { foo, bar } from 'my_module';

    上面代码中，虽然foo和bar在两个语句中加载，但是它们对应的是同一个my_module实例。也就是说，import语句是 Singleton 模式。

  
  5.模块的整体加载 

    除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

    import { area, circumference } from './circle';

    上面写法是逐一指定要加载的方法，整体加载的写法如下。

    import * as circle from './circle';
    console.log('圆面积：' + circle.area(4));

    注意，模块整体加载所在的那个对象（上例是circle），应该是可以静态分析的，所以不允许运行时改变。下面的写法都是不允许的。

    import * as circle from './circle';

    // 下面两行都是不允许的
    circle.foo = 'hello';
    circle.area = function () {};


  6.export default 命令

    从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

    为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

    // export-default.js
    export default function () {
      console.log('foo');
    }

    上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

    其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

    // import-default.js
    import customName from './export-default';
    customName(); // 'foo'

    上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面，不使用大括号。

    export default命令用在非匿名函数前，也是可以的。

    // export-default.js
    export default function foo() {
      console.log('foo');
    }

    // 或者写成

    function foo() {
      console.log('foo');
    }

    export default foo;

    上面代码中，foo函数的函数名foo，在模块外部是无效的。加载的时候，视同匿名函数加载。

    下面比较一下默认输出和正常输出。

    // 第一组
    export default function crc32() { // 输出
      // ...
    }

    import crc32 from 'crc32'; // 输入

    // 第二组
    export function crc32() { // 输出
      // ...
    };

    import {crc32} from 'crc32'; // 输入

    上面代码的两组写法，第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号。

    export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。

    本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。

    正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。

    // 正确
    export var a = 1;

    // 正确
    var a = 1;
    export default a;

    // 错误
    export default var a = 1;

    上面代码中，export default a的含义是将变量a的值赋给变量default。所以，最后一种写法会报错。

    同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default之后。

    // 正确
    export default 42;

    // 报错
    export 42;

    上面代码中，后一句报错是因为没有指定对外的接口，而前一句指定对外接口为default。

    有了export default命令，输入模块时就非常直观了，以输入 lodash 模块为例。

    import _ from 'lodash';

    如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。

    import _, { each, forEach } from 'lodash';

    对应上面代码的export语句如下。

    export default function (obj) {
      // ···
    }

    export function each(obj, iterator, context) {
      // ···
    }

    export { each as forEach };

    上面代码的最后一行的意思是，暴露出forEach接口，默认指向each接口，即forEach和each指向同一个方法。

    export default也可以用来输出类。

    // MyClass.js
    export default class { ... }

    // main.js
    import MyClass from 'MyClass';
    let o = new MyClass();

  
  7.export 与 import 的复合写法

    如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。

    export { foo, bar } from 'my_module';

    // 可以简单理解为
    import { foo, bar } from 'my_module';
    export { foo, bar };

    上面代码中，export和import语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

    模块的接口改名和整体输出，也可以采用这种写法。

    // 接口改名
    export { foo as myFoo } from 'my_module';

    // 整体输出
    export * from 'my_module';

    默认接口的写法如下。
    export { default } from 'foo';

    具名接口改为默认接口的写法如下。
    export { es6 as default } from './someModule';

    // 等同于
    import { es6 } from './someModule';
    export default es6;

    同样地，默认接口也可以改名为具名接口。
    export { default as es6 } from './someModule';


  8.模块的继承

    export * from 'circle';
    上面代码中的export *，表示输出模块的所有属性和方法。注意，export * 命令会忽略模块的default方法。

    也可以将模块的属性或方法，改名后再输出。
    export { area as circleArea } from 'circle';


  9.跨模块常量 

    const声明的常量只在当前代码块有效。如果想设置跨模块的常量（即跨多个文件），或者说一个值要被多个模块共享，可以采用下面的写法。
    
    // constants.js 模块
    export const A = 1;

    // test2.js 模块
    import {A} from './constants';
    console.log(A); // 1


  10.import()
    
    简介
      前面介绍过，import命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行（import命令叫做“连接” binding 其实更合适）。所以，下面的代码会报错。

      // 报错
      if (x === 2) {
        import MyModual from './myModual';
      }

      上面代码中，引擎处理import语句是在编译时，这时不会去分析或执行if语句，所以import语句放在if代码块之中毫无意义，因此会报句法错误，而不是执行时错误。也就是说，import和export命令只能在模块的顶层，不能在代码块之中（比如，在if代码块之中，或在函数之中）。

      这样的设计，固然有利于编译器提高效率，但也导致无法在运行时加载模块。在语法上，条件加载就不可能实现。如果import命令要取代 Node 的require方法，这就形成了一个障碍。因为require是运行时加载模块，import命令无法取代require的动态加载功能。

      const path = './' + fileName;
      const myModual = require(path);

      上面的语句就是动态加载，require到底加载哪一个模块，只有运行时才知道。import命令做不到这一点。

      因此，有一个提案，建议引入import()函数，完成动态加载。

      import(specifier)

      上面代码中，import函数的参数specifier，指定所要加载的模块的位置。import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。

      import()返回一个 Promise 对象。 

      import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。另外，import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。


  11.注意点

    import()加载模块成功以后，这个模块会作为一个对象，当作then方法的参数。因此，可以使用对象解构赋值的语法，获取输出接口。

    import('./myModule.js')
    .then(({export1, export2}) => {
      // ...·
    });

    如果模块有default输出接口，可以用参数直接获得。
    import('./myModule.js')
    .then(myModule => {
      console.log(myModule.default);
    });

    上面的代码也可以使用具名输入的形式。
    import('./myModule.js')
    .then(({default: theDefault}) => {
      console.log(theDefault);
    });

    如果想同时加载多个模块，可以采用下面的写法。
    Promise.all([
      import('./module1.js'),
      import('./module2.js'),
      import('./module3.js'),
    ])
    .then(([module1, module2, module3]) => {
      ···
    });

    import()也可以用在 async 函数之中。
    async function main() {
      const myModule = await import('./myModule.js');
      const {export1, export2} = await import('./myModule.js');
      const [module1, module2, module3] =
        await Promise.all([
          import('./module1.js'),
          import('./module2.js'),
          import('./module3.js'),
        ]);
    }
    main();


Module 的加载实现

  1.浏览器加载
    HTML网页中，浏览器通过<script>标签加载 javaScript脚本。
    由于浏览器脚本的默认语言是JavaScript，因此type="application/javascript"可以省略。
    默认情况下，浏览器是同步加载JavaScript脚本，即渲染引擎遇到<script>标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。

    如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应。这显然是很不好的体验，所以浏览器允许脚本异步加载，下面就是两种异步加载的语法。

    <script src="path/to/myModule.js" defer></script>
    <script src="path/to/myModule.js" async></script>

    上面代码中，<script>标签打开defer或async属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。

    defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。


  2.加载规则 
    浏览器加载 ES6 模块，也使用<script>标签，但是要加入type="module"属性。

    <script type="module" src="./foo.js"></script>
    上面代码在网页中插入一个模块foo.js，由于type属性设为module，所以浏览器知道这是一个 ES6 模块。

    浏览器对于带有type="module"的<script>，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了<script>标签的defer属性。

    <script type="module" src="./foo.js"></script>
    <!-- 等同于 -->
    <script type="module" src="./foo.js" defer></script>

    如果网页有多个<script type="module">，它们会按照在页面出现的顺序依次执行。

    <script>标签的async属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染。

    <script type="module" src="./foo.js" async></script>

    一旦使用了async属性，<script type="module">就不会按照在页面出现的顺序执行，而是只要该模块加载完成，就执行该模块。

    ES6 模块也允许内嵌在网页中，语法行为与加载外部脚本完全一致。

    <script type="module">
      import utils from "./utils.js";

      // other code
    </script>

    对于外部的模块脚本（上例是foo.js），有几点需要注意。
      代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见。
      模块脚本自动采用严格模式，不管有没有声明use strict。
      模块之中，可以使用import命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用export命令输出对外接口。
      模块之中，顶层的this关键字返回undefined，而不是指向window。也就是说，在模块顶层使用this关键字，是无意义的。
      同一个模块如果加载多次，将只执行一次。

    console.log(this === undefined); // true
    利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中。


  3.ES6 模块与 CommonJS 模块的差异

    它们有两个重大差异。
      CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。(如果引用的值被修改 所有引用该模块的值都会被影响)
      CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

    第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。


  4.Node 加载

    Node 对 ES6 模块的处理比较麻烦，因为它有自己的 CommonJS 模块格式，与 ES6 模块格式是不兼容的。目前的解决方案是，将两者分开，ES6 模块和 CommonJS 采用各自的加载方案。

    Node 的import命令只支持加载本地模块（file:协议），不支持加载远程模块。

    如果模块名不含路径，那么import命令会去node_modules目录寻找这个模块。
    import 'baz';

    如果模块名包含路径，那么import命令会按照路径去寻找这个名字的脚本文件。
    import './foo';


  5.内部变量

    ES6 模块应该是通用的，同一个模块不用修改，就可以用在浏览器环境和服务器环境。为了达到这个目标，Node 规定 ES6 模块之中不能使用 CommonJS 模块的特有的一些内部变量。

    首先，就是this关键字。ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块，这是两者的一个重大差异。

    其次，以下这些顶层变量在 ES6 模块之中都是不存在的。
      arguments
      require
      module
      exports
      __filename
      __dirname

    如果你一定要使用这些变量，有一个变通方法，就是写一个 CommonJS 模块输出这些变量，然后再用 ES6 模块加载这个 CommonJS 模块。但是这样一来，该 ES6 模块就不能直接用于浏览器环境了，所以不推荐这样做。

  
  6.ES6 模块加载 CommonJS 模块

    CommonJS 模块的输出都定义在module.exports这个属性上面。Node 的import命令加载 CommonJS 模块，Node 会自动将module.exports属性，当作模块的默认输出，即等同于export default xxx。

    import命令加载模块，module.exports会被视为默认输出，即import命令实际上输入的是这样一个对象{ default: module.exports }。

    CommonJS 模块的输出缓存机制，在 ES6 加载方式下依然有效。

    ES6 模块是编译时确定输出接口，CommonJS 模块是运行时确定输出接口

    import命令加载 CommonJS 模块时，不允许采用下面的写法。

    // 不正确
    import { readFile } from 'fs';

    上面的写法不正确，因为fs是 CommonJS 格式，只有在运行时才能确定readFile接口，而import命令要求编译时就确定这个接口。解决方法就是改为整体输入。

    // 正确的写法一
    import * as express from 'express';
    const app = express.default();

    // 正确的写法二
    import express from 'express';
    const app = express();


  7.CommonJS 模块加载 ES6 模块

    CommonJS 模块加载 ES6 模块，不能使用require命令，而要使用import()函数。ES6 模块的所有输出接口，会成为输入对象的属性。

    // es.mjs
    let foo = { bar: 'my-default' };
    export default foo;
    // cjs.js
    const es_namespace = await import('./es.mjs');
    console.log(es_namespace.default);


  8.循环加载

    “循环加载”（circular dependency）指的是，a脚本的执行依赖b脚本，而b脚本的执行又依赖a脚本。

    通常，“循环加载”表示存在强耦合，如果处理不好，还可能导致递归加载，使得程序无法执行，因此应该避免出现。

    但是实际上，这是很难避免的，尤其是依赖关系复杂的大项目，很容易出现a依赖b，b依赖c，c又依赖a这样的情况。这意味着，模块加载机制必须考虑“循环加载”的情况。

    对于 JavaScript 语言来说，目前最常见的两种模块格式 CommonJS 和 ES6，处理“循环加载”的方法是不一样的，返回的结果也不一样。

  
  9.CommonJS 模块的加载原理 
  
    CommonJS 的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。

    {
      id: '...',
      exports: { ... },
      loaded: true,
      ...
    }

    上面代码就是 Node 内部加载模块后生成的一个对象。该对象的id属性是模块名，exports属性是模块输出的各个接口，loaded属性是一个布尔值，表示该模块的脚本是否执行完毕。其他还有很多属性，这里都省略了。

    以后需要用到这个模块的时候，就会到exports属性上面取值。即使再次执行require命令，也不会再次执行该模块，而是到缓存之中取值。也就是说，CommonJS 模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。

  
  10.CommonJS 模块的循环加载

    CommonJS 模块的重要特性是加载时执行，即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

    总之，CommonJS 输入的是被输出值的拷贝，不是引用。

    另外，由于 CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。

    var a = require('a'); // 安全的写法
    var foo = require('a').foo; // 危险的写法

    exports.good = function (arg) {
      return a.foo('good', arg); // 使用的是 a.foo 的最新值
    };

    exports.bad = function (arg) {
      return foo('bad', arg); // 使用的是一个部分加载时的值
    };

    上面代码中，如果发生循环加载，require('a').foo的值很可能后面会被改写，改用require('a')会更保险一点。

  
  11.ES6 模块的循环加载 

    ES6 处理“循环加载”与 CommonJS 有本质的不同。ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。

    请看下面这个例子。

    // a.mjs
    import {bar} from './b';
    console.log('a.mjs');
    console.log(bar);
    export let foo = 'foo';

    // b.mjs
    import {foo} from './a';
    console.log('b.mjs');
    console.log(foo);
    export let bar = 'bar';

    上面代码中，a.mjs加载b.mjs，b.mjs又加载a.mjs，构成循环加载。执行a.mjs，结果如下。

    ReferenceError: foo is not defined

    上面代码中，执行a.mjs以后会报错，foo变量未定义，这是为什么？

    让我们一行行来看，ES6 循环加载是怎么处理的。首先，执行a.mjs以后，引擎发现它加载了b.mjs，因此会优先执行b.mjs，然后再执行a.mjs。接着，执行b.mjs的时候，已知它从a.mjs输入了foo接口，这时不会去执行a.mjs，而是认为这个接口已经存在了，继续往下执行。执行到第三行console.log(foo)的时候，才发现这个接口根本没定义，因此报错。

    解决这个问题的方法，就是运行的时候，foo已经有定义了。这可以通过写成函数来解决。

    // a.mjs
    import {bar} from './b';
    console.log('a.mjs');
    console.log(bar());
    function foo() { return 'foo' }
    export {foo};

    // b.mjs
    import {foo} from './a';
    console.log('b.mjs');
    console.log(foo());
    function bar() { return 'bar' }
    export {bar};

    这时再执行a.mjs就可以得到预期结果。

    这是因为函数具有提升作用，在执行import {bar} from './b'时，函数foo就已经有定义了，所以b.mjs加载的时候不会报错。这也意味着，如果把函数foo改写成函数表达式，也会报错。

    // a.mjs
    import {bar} from './b';
    console.log('a.mjs');
    console.log(bar());
    const foo = () => 'foo';
    export {foo};

    上面代码的第四行，改成了函数表达式，就不具有提升作用，执行就会报错。


  12.ES6 模块的转码

    浏览器目前还不支持 ES6 模块，为了现在就能使用，可以将其转为 ES5 的写法。除了 Babel 可以用来转码之外，还有以下两个方法，也可以用来转码。

    ES6 module transpiler 
    ES6 module transpiler是 square 公司开源的一个转码器，可以将 ES6 模块转为 CommonJS 模块或 AMD 模块的写法，从而在浏览器中使用。

    SystemJS 
    另一种解决方法是使用 SystemJS。它是一个垫片库（polyfill），可以在浏览器内加载 ES6 模块、AMD 模块和 CommonJS 模块，将其转为 ES5 格式。它在后台调用的是 Google 的 Traceur 转码器。


编程风格

  块级作用域
  字符串
  解构赋值
  对象
  数组
  函数
  Map 结构
  Class
  模块
  ESLint 的使用

  1.块级作用域

    let 取代 var ,var命令存在变量提升效用，let命令没有这个问题。

    在let和const之间，建议优先使用const , const声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。

  
  2.字符串

    静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。
    const b = `foo${a}bar`;


  3.解构赋值

    使用数组成员对变量赋值时，优先使用解构赋值。

    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];

    // good
    const [first, second] = arr;

  
    函数的参数如果是对象的成员，优先使用解构赋值。
  
    // best
    function getFullName({ firstName, lastName } , obj) {
      // good
      const { firstName, lastName } = obj;
    }


    如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。

    // good
    function processInput(input) {
      return { left, right, top, bottom };
    }

    const { left, right } = processInput(input);


  4.对象

    单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。

    // good
    const a = { k1: v1, k2: v2 };
    const b = {
      k1: v1,
      k2: v2,
    };


    对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。

    const a = {};
    Object.assign(a, { x: 3 });


    如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。

    // good
    const obj = {
      id: 5,
      name: 'San Francisco',
      [getKey('enabled')]: true,
    };


    对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。

    // good
    const atom = {
      ref,

      value: 1,

      addValue(value) {
        return atom.value + value;
      },
    };


  5.数组

    使用扩展运算符（...）拷贝数组。
    // good
    const itemsCopy = [...items]; 


    使用 Array.from 方法，将类似数组的对象转为数组。
    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);


  6.函数 

    立即执行函数可以写成箭头函数的形式。
    (() => {
      console.log('Welcome to the Internet.');
    })();

    那些使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。
    // best
    [1, 2, 3].map(x => x * x);


    箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。
    // best
    const boundMethod = (...params) => method.apply(this, params);

    简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。


    所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。
    // good
    function divide(a, b, { option = false } = {}) {
    }


    不要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。因为 rest 运算符显式表明你想要获取参数，而且 arguments 是一个类似数组的对象，而 rest 运算符可以提供一个真正的数组。
    // good
    function concatenateAll(...args) {
      return args.join('');
    }

    使用默认值语法设置函数参数的默认值。
    // good
    function handleThings(opts = {}) {
      // ...
    }


  7.Map 结构

    注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。
    let map = new Map(arr);

    for (let key of map.keys()) {
      console.log(key);
    }

    for (let value of map.values()) {
      console.log(value);
    }

    for (let item of map.entries()) {
      console.log(item[0], item[1]);
    }


  8.Class

    总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。
    // good
    class Queue {
      constructor(contents = []) {
        this._queue = [...contents];
      }
      pop() {
        const value = this._queue[0];
        this._queue.splice(0, 1);
        return value;
      }
    }

    使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。
    // good
    class PeekableQueue extends Queue {
      peek() {
        return this._queue[0];
      }
    }

  
  9.模块

    Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。使用import取代require。
    // good
    import { func1, func2 } from 'moduleA';


    使用export取代module.exports。
    // ES6的写法  
    export default Breadcrumbs;


    如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。

    不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。
    // good
    import myObject from './importModule';


    如果模块默认输出一个函数，函数名的首字母应该小写。
    function makeStyleGuide() {
    }
    export default makeStyleGuide;


    如果模块默认输出一个对象，对象名的首字母应该大写。
    const StyleGuide = {
      es6: {
      }
    };
    export default StyleGuide;


  10.ESLint 的使用

    ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。


ECMAScript 规格

  1.概述

    规格文件是计算机语言的官方标准，详细描述语法规则和实现方法。

    一般来说，没有必要阅读规格，除非你要写编译器。因为规格写得非常抽象和精炼，又缺乏实例，不容易理解，而且对于解决实际的应用问题，帮助不大。但是，如果你遇到疑难的语法问题，实在找不到答案，这时可以去查看规格文件，了解语言标准是怎么说的。规格是解决问题的“最后一招”。

    这对 JavaScript 语言很有必要。因为它的使用场景复杂，语法规则不统一，例外很多，各种运行环境的行为不一致，导致奇怪的语法问题层出不穷，任何语法书都不可能囊括所有情况。查看规格，不失为一种解决语法问题的最可靠、最权威的终极方法。

    本章介绍如何读懂 ECMAScript 6 的规格文件。

    ECMAScript 6 的规格，可以在 ECMA 国际标准组织的官方网站（www.ecma-international.org/ecma-262/6.0/）免费下载和在线阅读。


异步遍历器

  1.同步遍历器的问题

    Iterator 接口是一种数据遍历的协议，只要调用遍历器对象的next方法，就会得到一个对象，表示当前遍历指针所在的那个位置的信息。next方法返回的对象的结构是{value, done}，其中value表示当前的数据的值，done是一个布尔值，表示遍历是否结束。

    这里隐含着一个规定，it.next()方法必须是同步的，只要调用就必须立刻返回值。也就是说，一旦执行it.next()方法，就必须同步地得到value和done这两个属性。如果遍历指针正好指向同步操作，当然没有问题，但对于异步操作，就不太合适了。

    目前的解决方法是，将异步操作包装成 Thunk 函数或者 Promise 对象，即next()方法返回值的value属性是一个 Thunk 函数或者 Promise 对象，等待以后返回真正的值，而done属性则还是同步产生的。但是这样写很麻烦，不太符合直觉，语义也比较绕。


  2.异步遍历的接口 

    异步遍历器的最大的语法特点，就是调用遍历器的next方法，返回的是一个 Promise 对象。

    asyncIterator
      .next()
      .then(
        ({ value, done }) => /* ... */
      );

    上面代码中，asyncIterator是一个异步遍历器，调用next方法以后，返回一个 Promise 对象。因此，可以使用then方法指定，这个 Promise 对象的状态变为resolve以后的回调函数。回调函数的参数，则是一个具有value和done两个属性的对象，这个跟同步遍历器是一样的。

  
  3.for await...of

    for...of循环用于遍历同步的 Iterator 接口。新引入的for await...of循环，则是用于遍历异步的 Iterator 接口。

    async function f() {
      for await (const x of createAsyncIterable(['a', 'b'])) {
        console.log(x);
      }
    }
    // a
    // b

  
  4.异步 Generator 函数

     Generator 函数返回一个同步遍历器对象一样，异步 Generator 函数的作用，是返回一个异步遍历器对象。

     async function* gen() {
      yield 'hello';
    }
    const genObj = gen();
    genObj.next().then(x => console.log(x));
    // { value: 'hello', done: false }


  5.yield* 语句

    yield*语句也可以跟一个异步遍历器。

    async function* gen1() {
      yield 'a';
      yield 'b';
      return 2;
    }

    async function* gen2() {
      // result 最终会等于 2
      const result = yield* gen1();
    }


    与同步 Generator 函数一样，for await...of循环会展开yield*。

    (async function () {
      for await (const x of gen2()) {
        console.log(x);
      }
    })();
    // a
    // b



ArrayBuffer

  ArrayBuffer对象、TypedArray视图和DataView视图是 JavaScript 操作二进制数据的一个接口。这些对象早就存在，属于独立的规格（2011 年 2 月发布），ES6 将它们纳入了 ECMAScript 规格，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。

  这个接口的原始设计目的，与 WebGL 项目有关。所谓 WebGL，就是指浏览器与显卡之间的通信接口，为了满足 JavaScript 与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的，而不能是传统的文本格式。文本格式传递一个 32 位整数，两端的 JavaScript 脚本与显卡都要进行格式转化，将非常耗时。这时要是存在一种机制，可以像 C 语言那样，直接操作字节，将 4 个字节的 32 位整数，以二进制形式原封不动地送入显卡，脚本的性能就会大幅提升。

  二进制数组就是在这种背景下诞生的。它很像 C 语言的数组，允许开发者以数组下标的形式，直接操作内存，大大增强了 JavaScript 处理二进制数据的能力，使得开发者有可能通过 JavaScript 与操作系统的原生接口进行二进制通信。


  二进制数组由三类对象组成。

    1）ArrayBuffer对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。

    2）TypedArray视图：共包括 9 种类型的视图，比如Uint8Array（无符号 8 位整数）数组视图, Int16Array（16 位整数）数组视图, Float32Array（32 位浮点数）数组视图等等。

    3）DataView视图：可以自定义复合格式的视图，比如第一个字节是 Uint8（无符号 8 位整数）、第二、三个字节是 Int16（16 位整数）、第四个字节开始是 Float32（32 位浮点数）等等，此外还可以自定义字节序。

    简单说，ArrayBuffer对象代表原始的二进制数据，TypedArray视图用来读写简单类型的二进制数据，DataView视图用来读写复杂类型的二进制数据。

    TypedArray视图支持的数据类型一共有 9 种（DataView视图支持除Uint8C以外的其他 8 种）。

    数据类型	字节长度	含义	对应的 C 语言类型
    Int8	1	8 位带符号整数	signed char
    Uint8	1	8 位不带符号整数	unsigned char
    Uint8C	1	8 位不带符号整数（自动过滤溢出）	unsigned char
    Int16	2	16 位带符号整数	short
    Uint16	2	16 位不带符号整数	unsigned short
    Int32	4	32 位带符号整数	int
    Uint32	4	32 位不带符号的整数	unsigned int
    Float32	4	32 位浮点数	float
    Float64	8	64 位浮点数	double

    注意，二进制数组并不是真正的数组，而是类似数组的对象。


  1.ArrayBuffer 对象 

    ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray视图和DataView视图)来读写，视图的作用是以指定格式解读二进制数据。

    ArrayBuffer也是一个构造函数，可以分配一段可以存放数据的连续内存区域。

    const buf = new ArrayBuffer(32);
    上面代码生成了一段 32 字节的内存区域，每个字节的值默认都是 0。可以看到，ArrayBuffer构造函数的参数是所需要的内存大小（单位字节）。

    为了读写这段内容，需要为它指定视图。DataView视图的创建，需要提供ArrayBuffer对象实例作为参数。

    const buf = new ArrayBuffer(32);
    const dataView = new DataView(buf);
    dataView.getUint8(0) // 0
    上面代码对一段 32 字节的内存，建立DataView视图，然后以不带符号的 8 位整数格式，从头读取 8 位二进制数据，结果得到 0，因为原始内存的ArrayBuffer对象，默认所有位都是 0。

    另一种TypedArray视图，与DataView视图的一个区别是，它不是一个构造函数，而是一组构造函数，代表不同的数据格式。

    const buffer = new ArrayBuffer(12);
    const x1 = new Int32Array(buffer);
    x1[0] = 1;
    const x2 = new Uint8Array(buffer);
    x2[0]  = 2;
    x1[0] // 2

    上面代码对同一段内存，分别建立两种视图：32 位带符号整数（Int32Array构造函数）和 8 位不带符号整数（Uint8Array构造函数）。由于两个视图对应的是同一段内存，一个视图修改底层内存，会影响到另一个视图。

    TypedArray视图的构造函数，除了接受ArrayBuffer实例作为参数，还可以接受普通数组作为参数，直接分配内存生成底层的ArrayBuffer实例，并同时完成对这段内存的赋值。

    const typedArray = new Uint8Array([0,1,2]);
    typedArray.length // 3
    typedArray[0] = 5;
    typedArray // [5, 1, 2]
    上面代码使用TypedArray视图的Uint8Array构造函数，新建一个不带符号的 8 位整数视图。可以看到，Uint8Array直接使用普通数组作为参数，对底层内存的赋值同时完成。


    ArrayBuffer.prototype.byteLength
    ArrayBuffer实例的byteLength属性，返回所分配的内存区域的字节长度。
    如果要分配的内存区域很大，有可能分配失败（因为没有那么多的连续空余内存），所以有必要检查是否分配成功。

    ArrayBuffer.prototype.slice()
    ArrayBuffer实例有一个slice方法，允许将内存区域的一部分，拷贝生成一个新的ArrayBuffer对象。
    slice方法接受两个参数，第一个参数表示拷贝开始的字节序号（含该字节），第二个参数表示拷贝截止的字节序号（不含该字节）。如果省略第二个参数，则默认到原ArrayBuffer对象的结尾。
    除了slice方法，ArrayBuffer对象不提供任何直接读写内存的方法，只允许在其上方建立视图，然后通过视图读写。

    ArrayBuffer.isView()
    ArrayBuffer有一个静态方法isView，返回一个布尔值，表示参数是否为ArrayBuffer的视图实例。这个方法大致相当于判断参数，是否为TypedArray实例或DataView实例。

  
  2.TypedArray 视图

    ArrayBuffer对象作为内存区域，可以存放多种类型的数据。同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）。ArrayBuffer有两种视图，一种是TypedArray视图，另一种是DataView视图。前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型。

    目前，TypedArray视图一共包括 9 种类型，每一种视图都是一种构造函数。

      Int8Array：8 位有符号整数，长度 1 个字节。
      Uint8Array：8 位无符号整数，长度 1 个字节。
      Uint8ClampedArray：8 位无符号整数，长度 1 个字节，溢出处理不同。
      Int16Array：16 位有符号整数，长度 2 个字节。
      Uint16Array：16 位无符号整数，长度 2 个字节。
      Int32Array：32 位有符号整数，长度 4 个字节。
      Uint32Array：32 位无符号整数，长度 4 个字节。
      Float32Array：32 位浮点数，长度 4 个字节。
      Float64Array：64 位浮点数，长度 8 个字节。

    这 9 个构造函数生成的数组，统称为TypedArray视图。它们很像普通数组，都有length属性，都能用方括号运算符（[]）获取单个元素，所有数组的方法，在它们上面都能使用。普通数组与 TypedArray 数组的差异主要在以下方面。

      TypedArray 数组的所有成员，都是同一种类型。
      TypedArray 数组的成员是连续的，不会有空位。
      TypedArray 数组成员的默认值为 0。比如，new Array(10)返回一个普通数组，里面没有任何成员，只是 10 个空位；new Uint8Array(10)返回一个 TypedArray 数组，里面 10 个成员都是 0。
      TypedArray 数组只是一层视图，本身不储存数据，它的数据都储存在底层的ArrayBuffer对象之中，要获取底层对象必须使用buffer属性。


    TypedArray 数组提供 9 种构造函数，用来生成相应类型的数组实例。

      (1)TypedArray(buffer, byteOffset=0, length?)
      注意，byteOffset必须与所要建立的数据类型一致，否则会报错。

      如果想从任意字节开始解读ArrayBuffer对象，必须使用DataView视图，因为TypedArray视图只提供 9 种固定的解读格式。

      (2)TypedArray(length)
      视图还可以不通过ArrayBuffer对象，直接分配内存而生成。

      (3)TypedArray(typedArray)
      TypedArray 数组的构造函数，可以接受另一个TypedArray实例作为参数。
      注意，此时生成的新数组，只是复制了参数数组的值，对应的底层内存是不一样的。新数组会开辟一段新的内存储存数据，不会在原数组的内存之上建立视图。
      
      (4)TypedArray(arrayLikeObject)
      构造函数的参数也可以是一个普通数组，然后直接生成TypedArray实例。
      注意，这时TypedArray视图会重新开辟内存，不会在原数组的内存上建立视图。

      ...
      普通数组的操作方法和属性，对 TypedArray 数组完全适用。


    字节序

      字节序指的是数值在内存中的表示方式。


    BYTES_PER_ELEMENT 属性

      每一种视图的构造函数，都有一个BYTES_PER_ELEMENT属性，表示这种数据类型占据的字节数。
      这个属性在TypedArray实例上也能获取，即有TypedArray.prototype.BYTES_PER_ELEMENT。


    ArrayBuffer 与字符串的互相转换

      ArrayBuffer 和字符串的相互转换，使用原生 TextEncoder 和 TextDecoder 方法。为了便于说明用法，下面的代码都按照 TypeScript 的用法，给出了类型签名。

    
    溢出

      不同的视图类型，所能容纳的数值范围是确定的。超出这个范围，就会出现溢出。比如，8 位视图只能容纳一个 8 位的二进制值，如果放入一个 9 位的值，就会溢出。

      TypedArray 数组的溢出处理规则，简单来说，就是抛弃溢出的位，然后按照视图类型进行解释。

    
    TypedArray.prototype.buffer

      TypedArray实例的buffer属性，返回整段内存区域对应的ArrayBuffer对象。该属性为只读属性。

    
    TypedArray.prototype.byteLength，TypedArray.prototype.byteOffset

      byteLength属性返回 TypedArray 数组占据的内存长度，单位为字节。byteOffset属性返回 TypedArray 数组从底层ArrayBuffer对象的哪个字节开始。这两个属性都是只读属性。


    TypedArray.prototype.length

      length属性表示 TypedArray 数组含有多少个成员。注意将 length 属性和 byteLength 属性区分，前者是成员长度，后者是字节长度。


    TypedArray.prototype.set() 

      TypedArray 数组的set方法用于复制数组（普通数组或 TypedArray 数组），也就是将一段内容完全复制到另一段内存。


    TypedArray.prototype.subarray()

      subarray方法是对于 TypedArray 数组的一部分，再建立一个新的视图。


    TypedArray.prototype.slice()

      TypeArray 实例的slice方法，可以返回一个指定位置的新的TypedArray实例。

    
    TypedArray.of()

      TypedArray 数组的所有构造函数，都有一个静态方法of，用于将参数转为一个TypedArray实例。

    
    TypedArray.from()

      静态方法from接受一个可遍历的数据结构（比如数组）作为参数，返回一个基于这个结构的TypedArray实例。

  
  3.复合视图

    由于视图的构造函数可以指定起始位置和长度，所以在同一段内存之中，可以依次存放不同类型的数据，这叫做“复合视图”。


  4.DataView 视图

    如果一段数据包括多种类型（比如服务器传来的 HTTP 数据），这时除了建立ArrayBuffer对象的复合视图以外，还可以通过DataView视图进行操作。

  
  5.二进制数组的应用

    大量的 Web API 用到了ArrayBuffer对象和它的视图对象。

    AJAX 
      传统上，服务器通过 AJAX 操作只能返回文本数据，即responseType属性默认为text。XMLHttpRequest第二版XHR2允许服务器返回二进制数据，这时分成两种情况。如果明确知道返回的二进制数据类型，可以把返回类型（responseType）设为arraybuffer；如果不知道，就设为blob。

    Canvas
      网页Canvas元素输出的二进制像素数据，就是 TypedArray 数组。

    WebSocket
      WebSocket可以通过ArrayBuffer，发送或接收二进制数据。

    Fetch API
      Fetch API 取回的数据，就是ArrayBuffer对象。

    File API
      如果知道一个文件的二进制数据类型，也可以将这个文件读取为ArrayBuffer对象。


  6.SharedArrayBuffer 

    ES2017 引入SharedArrayBuffer，允许 Worker 线程与主线程共享同一块内存。SharedArrayBuffer的 API 与ArrayBuffer一模一样，唯一的区别是后者无法共享数据。


  7.Atomics 对象

    多线程共享内存，最大的问题就是如何防止两个线程同时修改某个地址，或者说，当一个线程修改共享内存以后，必须有一个机制让其他线程同步。SharedArrayBuffer API 提供Atomics对象，保证所有共享内存的操作都是“原子性”的，并且可以在所有线程内同步。

    什么叫“原子性操作”呢？现代编程语言中，一条普通的命令被编译器处理以后，会变成多条机器指令。如果是单线程运行，这是没有问题的；多线程环境并且共享内存时，就会出问题，因为这一组机器指令的运行期间，可能会插入其他线程的指令，从而导致运行结果出错。


