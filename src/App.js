// import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

class App extends React.Component {

  state = {
    isLoading : true
  }

  componentDidMount() { // 처음 렌더링 된 후
    console.log("I`m Mounted");
  }

  componentDidUpdate() { // 개발자가 setState 호출 시 render 후 실행
    console.log("I`m Updating");
  }

  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  componentDidMount() {
    this.getMovies();    
  }

  render () {
    console.log("I`m rendered");

    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}

export default App;
