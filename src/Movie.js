import "./Movie.css";
import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres }) {
    console.log(genres);
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, idx) => <li className="genres__genre" data-idx={idx}>{genre}</li>)}
            </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;