import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      filterString: "",
      groceries: ["cheese", "bread", "milk", "tortillas"]
    }
  }

  handleChange(filter) {
    this.setState({filterString:filter})
  }

  render() {
    let foodsToPurchase = this.state.groceries
    .filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text"/>
        {foodsToPurchase}
      </div>
    );
  }
}

export default App;
