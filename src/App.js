import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Useritem from "./components/users/Useritem";
import "./App.css";

class App extends Component {
  render() {
    const name = "John Doe";
    const foo = () => "Bar";
    const loading = false;
    const showName = true;
    const numbers = [1, 2, 3, 4];

    return (
      <div className="App">
        <h1>My App</h1>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello from React {showName ? name : null} </h1>
        )}
        <Navbar />
        <Useritem />
      </div>
    );
  }
}

export default App;
