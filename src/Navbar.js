import React, { useState } from "react"
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import logo from "./assets/logo.svg"
import { setSearchKeyword } from "./ducks/SearchPage"
import "./Navbar.css"

function Navbar(props) {
  const [query, setQuery] = useState("")
  const history = useHistory()
  const handleChange = (e) => setQuery(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { onSearchKeyword } = props
    onSearchKeyword(query)
    history.push(`/search?query=${query.replace(" ", "+")}`)
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" exact="true">
          <img src={logo} alt="Home" />
        </Link>
      </div>
      <div className="navbar-right">
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={handleChange}
            placeholder="Search Movie..."
          />
        </form>
        <Link to="/" exact="true">
          Home
        </Link>
        <Link to="/4k">4k</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/browse-movies">Browse Movies</Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchKeyword: (payload) => dispatch(setSearchKeyword(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
