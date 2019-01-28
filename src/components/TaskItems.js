import React, { Component } from 'react'
import '../styles/TaskItems.css'

class TaskItems extends Component {
  showMenu = () => {
    this.dropdown.show()
  }
  
  createTask = task => {
    return (
      <div className="optionsParent">
        <li key={task.key}>
          {task.text}
          {// <div className="menu">
          //   {task.text}<button className="menuBtn" onclick="showMenu()"/>
          //   <div id="dropdown" ref={dropdown => this.dropdown = dropdown}>
          //     <ul>
          //       <li id="options" onClick={() => this.props.removeTask(task.key)}>
          //       Remove
          //       </li>
          //     </ul>
          //     <button id="options" onClick={() => this.props.hideTask(task.key)}>
          //       Hide
          //     </button>
          //   </div>
          // </div>
        }
        </li>
        <button id="options" onClick={() => this.props.removeTask(task.key)}>
          Remove
        </button>
      </div>
    )
  }
  
  render() {
    const toDoEntries = this.props.entries
    const list = toDoEntries.map(this.createTask)
    
    return (
      <div className="table">
        <ul className="ToDoList">{list}</ul>
      </div>
    )
  }
}

export default TaskItems;