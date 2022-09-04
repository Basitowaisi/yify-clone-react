import React from "react"
import "./MovieCard.css"
import { Link } from "react-router-dom"

export default function MovieCard(props) {
  const { movie } = props
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="movie-image-container">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.backdrop_path
            }`}
            alt={movie.original_title}
          />
          <div className="overlay">
            <button>View</button>
          </div>
        </div>
        <h1 className="movie-title">{movie.original_title}</h1>
        <h4 className="movie-date">{movie.release_date}</h4>
      </Link>
    </div>
  )
}
