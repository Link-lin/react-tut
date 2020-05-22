// createStore是redux提供的一个用于创建store的, 这个原理里已经讲到过
import { createStore } from "redux";
// 引入全并后的reducer
import rootReducer from './reducers'

// createStore的第一个参数必须是一个reducer, 如果是多个，请在reducers目录下先使用combineReducers全并后再导出
export default createStore(rootReducer)
