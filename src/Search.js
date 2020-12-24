import React, { Component } from "react"
import { connect } from "react-redux"
import MovieCard from "./MovieCard"
import "./Search.css"
import Loading from "./Loading"

function Search(props) {
  const { loading, results } = props
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="Movies">
            {results.map((result) => (
              <MovieCard key={result.id} movie={result} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { loading } = state.UI
  const { results } = state.SearchPage
  return {
    loading,
    results,
  }
}
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
