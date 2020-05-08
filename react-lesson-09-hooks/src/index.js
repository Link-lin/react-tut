import React from 'react'
import ReactDOM from 'react-dom'

const Counter = () =>{
    return (
        <div>
            <button>-</button> 
            <span>10</span>
            <button>+</button> 
        </div>
    )
}

ReactDOM.render(
    <Counter/>, document.getElementById('root')
)

