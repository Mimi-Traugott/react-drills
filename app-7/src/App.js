import React, { Component } from "react";
import NewTask from './Components/NewTask';
import List from './Components/List';
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state={
      list:[]
    };
    this.handleTask = this.handleTask.bind(this)
  }
  handleAddTask (task) {
    this.setState({ list: [...this.state.list, task ] })
  }

  render() {
    return (
      <div className="App">
        <h1>MY LIST OF ADULTING TO-DO</h1>

        <NewTask add={this.handleAddTask}/>
        <List tasks={this.state.list}/>
       
      </div>
    );
  }
}

export default App;
