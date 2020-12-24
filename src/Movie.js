import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchMovie } from "./ducks/MoviesPage"
import Loading from "./Loading"
import "./Movie.css"

function Movie(props) {
  const { onFetchMovie, loading, movie } = props
  useEffect(() => {
    const id = props.match.params.id
    window.scrollTo(0, 0)
    onFetchMovie(id)
  }, [])

  const genres = movie && movie.genres?.map((genre) => genre.name).join(", ")
  return loading ? (
    <Loading />
  ) : (
    <div className="moviepage-wrapper">
      <div className="moviepage">
        <img
          className="moviepage-image"
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.original_title}
        />
        <div className="moviepage-details">
          <h2 className="moviepage-title">{movie.original_title}</h2>
          <h4 className="moviepage-genres">Genres: {genres}</h4>
          <h5 className="moviepage-releaseDate">
            Release Date: {movie.release_date}
          </h5>
        </div>
        <h4 className="movie-overview">
          Overview: <br /> {movie.overview}
        </h4>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { loading } = state.UI
  const { movie } = state.MoviesPage
  return {
    loading,
    movie,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovie: (payload) => dispatch(fetchMovie(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
