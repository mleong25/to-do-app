import React, { Component } from 'react'
import '../styles/TaskItems.css'

class TaskItems extends Component {
  showMenu = () => {
    this.dropdown.show()
  }
  
  createTask = task => {
    return (
      <div>
        <li key={task.key}>
          {task.text}<button id="options" onClick={() => this.props.removeTask(task.key)}>
            Remove
            </button>
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
      </div>
    )
  }
  
  render() {
    const toDoEntries = this.props.entries
    const list = toDoEntries.map(this.createTask)
    
    return (
      <ul className="ToDoList">{list}</ul>
    )
  }
}

export default TaskItems;