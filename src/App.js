// import logo from './logo.svg';
import './App.css';
import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {

  state = {
    count: 0
  }

  add = () => {
    this.setState(current => ({
      count : current.count + 1
    }));
  };
  minus = () => {
    this.setState(current => ({
      count : current.count - 1
    }));
  };

  componentDidMount() { // 처음 렌더링 된 후
    console.log("I`m Mounted");
  }

  componentDidUpdate() { // 개발자가 setState 호출 시 render 후 실행
    console.log("I`m Updating");
  }

  render () {
    console.log("I`m rendered");
    return (
      <div>
         <h1>This number is: {this.state.count}</h1>
         <button onClick={this.add}>Add</button>
         <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
