import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

//import * as services from './services'
//React.Component.prototype.http = services

// 如果想要全局的扩展react组件的prototype, 比如想把ajax的方法全局挂载组件的this上

ReactDOM.render(<App/>, document.getElementById('root'));