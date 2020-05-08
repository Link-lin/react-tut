import React, { Component } from 'react'

export default class TodoItem extends Component { 

    constructor(){
        super()
        this.state = {
            completedText: ''
        }
    }
    
    static getDerivedStateFromProps(props){
        return{
            completedText: props.completed?'完成':'未完成'
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.completed !== this.props.completed
    }
  
    render() {
        console.log('TodoItem render')
        const{
            completed,
            title
        } = this.props 
        return (
            <li>
                <input type="checkbox" checked={completed}
                onChange= {this.handleCheckBoxChange}/>
                { title }
                { completed ? " 已完成": " 未完成"}
            </li>
        )
    }

    handleCheckBoxChange =() =>{
        const{
            onCompletedChange,
            id
        }= this.props
        onCompletedChange && this.props.onCompletedChange(id)
    }

   
}
