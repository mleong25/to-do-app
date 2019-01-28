import React, { Component } from 'react'
import Header from './components/Header'
import ToDoListUI from './components/ToDoListUI'
import TaskItems from './components/TaskItems'
import './styles/App.css';

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      tasks: [],
      currentTask: {text:'', key: ''},
    }
  }
  
  removeTask = key => {
    const filteredTasks = this.state.tasks.filter(task => {
      return task.key !== key
    })
    this.setState ({
      tasks: filteredTasks,
    })
  }
  
  handleInput = e => {
    const taskText = e.target.value
    const currentTask = { text: taskText, key: Date.now() }
    this.setState({
      currentTask,
    })
  }
  
  addTask = e => {
    e.preventDefault()
    const newTask = this.state.currentTask
    if(newTask.text !== '') {
      const tasks = [...this.state.tasks, newTask]
      this.setState({
        tasks: tasks,
        currentTask: { text: '', key: ''},
      })
    }
  }
  
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <ToDoListUI 
            addTask={this.addTask}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentTask={this.state.currentTask}
          />
        </div>
        <TaskItems entries={this.state.tasks} removeTask={this.removeTask} />
      </div>
    )
  }
}

export default App;
