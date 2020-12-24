import { combineReducers } from "redux"
import moviespage from "./ducks/MoviesPage"
import ui from "./ducks/UI"
import searchpage from "./ducks/SearchPage"

export const rootReducer = combineReducers({
  MoviesPage: moviespage,
  UI: ui,
  SearchPage: searchpage,
})
