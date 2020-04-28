import React, { Component } from 'react'

export default class TodoInput extends Component {
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue}
                onChange={this.handleInput}/>
                <button onClick={this.handleAddClick}> {this.props.btnText} </button>
            </div>
        )
    }

    handleInput = (e)=>{
        console.log(e.currentTarget.value)
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleAddClick = () => {
        this.props.addTodo(this.state.inputValue)
    }
}
