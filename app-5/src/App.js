import React, { Component } from "react";
import Image from './Components/Image'
import "./App.css";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Image url={"https://httpstatusdogs.com/img/412.jpg"}/>
      
      </div>
    );
  }
}

export default App;
