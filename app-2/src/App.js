import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      foods: ["juice", "milk", "cheese", "beans"]
    }
  }


  render() {
    let foodsToDisplay = this.state.foods.map((el,i) => {
      return <h1 key={index}>{element}</h1>
    })
    return (
      <div className="App">{foodsToDisplay}</div>
    );
  }
}

export default App;
