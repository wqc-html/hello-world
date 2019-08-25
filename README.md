# hello-world

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 项目涉及技术栈，点超链接查看教程

- JS ES5 [教程](https://wangdoc.com/javascript/)
- JS ES6 新语法 [教程](http://es6.ruanyifeng.com/#README)

```javascript
// 箭头函数
() => {};

// Promise 异步操作
new Promise.then(res => {}, err => {});

// 解构赋值
const response = {
  code: "SUCCESS",
  count: null,
  data: null,
  msg: "未查询到相关数据"
};
const { code, msg } = response;

// 扩展运算符
const obj = { a: "a", b: "b" };
const aaa = { ...obj };
```

- [vue.js](https://cn.vuejs.org/v2/guide/) vue.js 起步
- [vue-router](https://router.vuejs.org/zh/) 前端路由
- [wx-js-sdk](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115) 微信浏览器接口
- [apis.map.qq.com](https://lbs.qq.com/webservice_v1/guide-gcoder.html) 腾讯地图接口，逆地址解析(坐标位置描述)
- [vue-cli](https://cli.vuejs.org/zh/guide/) vue 项目快速构建工具
- [npm](https://www.npmjs.cn/) [yarn](https://yarnpkg.com/zh-Hans/docs/getting-started) 组件库管理工具，本项目使用 yarn
- [muse-ui](https://muse-ui.org/#/zh-CN/installation) UI 组件
- [element-ui](https://element.eleme.cn/#/zh-CN/component/installation) UI 组件
- [VueSignaturePad](https://github.com/szimek/signature_pad) 签名板组件
- [Less](http://lesscss.org/) CSS 预渲染器
