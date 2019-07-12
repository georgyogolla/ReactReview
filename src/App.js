import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "george"
    };
  }

  render() {
    return (
      <div>
        <Options data={this.state.name} />
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Jo birg"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
        <DataRender city={this.state.city} />
      </div>
    );
  }
}

const DataRender = props => {
  return (
    <div>
      <h3>{props.city}</h3>
    </div>
  );
};

export default App;
