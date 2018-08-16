import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data";
import UnicornCard from "./UnicornCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      unicorns: []
    };
  }

  componentDidMount() {
    this.setState({ unicorns: data });
  }

  render() {
    return (
      <div className="App container">
        <h1 className="App-intro">Unicorns!!!!!!!</h1>
        <h1 htmlFor="Unicorn">Submit a unicorn!</h1>
        <form>
          <div className="form-group">
            <input name="unicorn" className="form-control" placeholder="Name" />
            <input
              name="imageUrl"
              className="form-control"
              placeholder="ImageUrl"
            />
            <input name="age" className="form-control" placeholder="Age" />
          </div>
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
        <div className="row">
          {this.state.unicorns.map(unicorn => (
            <div key={unicorn.id}>
              <UnicornCard unicorn={unicorn} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
