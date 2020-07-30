## Change Log

[mark](https://www.cnblogs.com/wj-1314/p/8547763.html)

### 0.0.1

- 使用 `react-router-dom` 进行路由管理
- 使用对象 key 形式解决 `antd`v4 版本 动态 icon 渲染问题
- side 添加 Logo
- ssh

---

### 0.0.2

- 在 Layout 中添加 `header`
- 添加 Login 模块,并判断账号是否存在
- 添加 `axios` 模块并自定义封装

---

### 0.0.3

- add `react-redux` `redux` `redux-thunk` 插件
- `redux` 通过`createStore`函数创建状态管理, `reducer`:它是一个纯函数，管理着 state，不能直接修改 state , 返回是 state, `combineReducers` 也是是 redux 属性之一，可以把对象转化为函数形式的 reducer,
- `react-redux` 使用`Provider`属性 包裹着管理 app.js 根实例， 使用`connect`负责把 redux 连接起来 ,更方便操作 react-redux,可以把 state 和 action 映射到当前实例 props 属性中。
- `redux-thunk` 中间件管理工具,action 能更方便进行异步操作
- `react-router-dom`里的 withRouter 属性负责管理路由，把当前实例包裹在里面再 export 出去，前提条件是要在路由里面
- #### 注意：在组件 jsx 语法中不允许直接调用 store 的 action（setState）

```
error:
Cannot update a component while rendering a different component, bad setState() call
        <MenuFoldOutlined onClick={this.handleChangeStatus()} />

success:
        <MenuFoldOutlined onClick={this.handleChangeStatus} />
```

- 添加 side 收缩功能
- 解决 side css 布局问题

---
