import React, { Component } from 'react'
import {TodoHeader, TodoInput, TodoList} from './components/index';

class App extends Component {
    render() {
        return (
            <div className='abc'>
                <TodoHeader></TodoHeader>
                <TodoInput />
                <TodoList></TodoList>
            </div>
        )
    }
}

export default App;
