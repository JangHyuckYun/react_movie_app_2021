// import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {

  state = {
    isLoading : true
  }

  getMovies = async () => {
    const { 
      data : { 
        data: { movies } 
      }
     } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState({movies, isLoading : false});
  }

  componentDidMount() {
    this.getMovies();    
  }

  render () {
    console.log("I`m rendered");

    const { isLoading, movies } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
              key = {movie.id}
              id = {movie.id}
              year = {movie.year}
              title = {movie.title}
              summary = { movie.summary }
              poster = { movie.medium_cover_image }
              genres = { movie.genres }
              />
            ))}
          </div>
        )}
      </section>
    )



  }
}


export default App;
