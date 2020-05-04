import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Form from "../src/components/layout/formcontainer/Form";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    //console.log(123);
    const res = await axios.get("https://api.github.com/users");

    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container"></div>
        <Users loading={this.state.loading} users={this.state.users} />
        <div>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
