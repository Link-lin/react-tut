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
            completedText: props.isCompleted?'完成':'未完成'
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.isCompleted !== this.props.isCompleted
    }
  
    render() {
        console.log('TodoItem render')
        const{
            isCompleted,
            title
        } = this.props 
        return (
            <li>
                <input type="checkbox" checked={isCompleted}
                onChange= {this.handleCheckBoxChange}/>
                { title }
                { isCompleted ? " 已完成": " 未完成"}
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
