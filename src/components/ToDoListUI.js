import React, { Component } from 'react'
import '../styles/ToDoListUI.css'

class ToDoListUI extends Component {  
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  
  render() {
    return (
      <div>
        <div className="formHeader">
          <form onSubmit={this.props.addTask}>
            <input 
              ref={this.props.inputElement}
              value={this.props.currentTask.text} 
              name="toDoItem" 
              placeholder="Task" 
              onChange={this.props.handleInput} 
            />
            <button className="button" id="add" type="submit"><span> Add </span></button>
          </form>
        </div>
      </div>
    )
  }
}

export default ToDoListUI