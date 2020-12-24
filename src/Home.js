import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchMovies, setPage } from "./ducks/MoviesPage"
import MovieCard from "./MovieCard"
import "./Home.css"
import Pagination from "react-js-pagination"
import Loading from "./Loading"

function Home(props) {
  const {
    onFetchMovies,
    onChangePage,
    loading,
    movies,
    totalItems,
    page,
  } = props

  useEffect(() => {
    if (movies.length == 0) {
      onFetchMovies()
    }
  }, [])

  const handlePageChange = (page) => {
    onChangePage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="Movies">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
            <Pagination
              activePage={page}
              itemsCountPerPage={20}
              totalItemsCount={totalItems || 1}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { loading } = state.UI
  const { movies, totalItems, page } = state.MoviesPage
  return {
    loading,
    movies,
    totalItems,
    page,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangePage: (payload) => dispatch(setPage(payload)),
    onFetchMovies: () => dispatch(fetchMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
