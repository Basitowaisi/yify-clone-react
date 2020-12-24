import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Component } from "react"
import { store } from "./store"
import Home from "./Home"
import Movie from "./Movie"
import "./App.css"
import Navbar from "./Navbar"
import Search from "./Search"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
