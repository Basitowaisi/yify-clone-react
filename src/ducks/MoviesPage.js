import axios from "../axios"
import { setLoading } from "./UI"

export const SET_MOVIES = "app/MoviesPage/SET_MOVIES"
export const SET_MOVIE = "app/MoviesPage/SET_MOVIE"
export const SET_PAGINATION = "app/MoviesPage/SET_PAGINATION"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

console.log(process.env)

const initialState = {
  movies: [],
  page: null,
  totalPages: null,
  movie: {},
  totalItems: null,
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movies: payload,
      }
    }
    case SET_MOVIE: {
      return {
        ...state,
        movie: payload,
      }
    }
    case SET_PAGINATION: {
      return {
        ...state,
        ...payload,
      }
    }
    default:
      return state
  }
}

export function setMovies(payload) {
  const filterPayload = payload.filter(
    (p) => !(p.backdrop_path == null && p.poster_path == null)
  )
  return { type: SET_MOVIES, payload: filterPayload }
}
export function setMovie(payload) {
  return { type: SET_MOVIE, payload }
}

export function setPaginationData(payload) {
  return { type: SET_PAGINATION, payload }
}

export function fetchMovies() {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios
      .get(
        `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&include_adult=false`
      )
      .then((res) => {
        dispatch(setMovies(res.data.results))
        dispatch(
          setPaginationData({
            totalPages: res.data.total_pages,
            page: res.data.page,
            totalItems: res.data.total_results,
          })
        )
        dispatch(setLoading(false))
      })
      .catch((err) => setLoading(false))
  }
}

export function setPage(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios
      .get(
        `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&include_adult=false&page=${payload}`
      )
      .then((res) => {
        dispatch(setMovies(res.data.results))
        dispatch(
          setPaginationData({
            totalPages: res.data.total_pages,
            page: res.data.page,
            totalItems: res.data.total_results,
          })
        )
        dispatch(setLoading(false))
      })
      .catch((err) => dispatch(setLoading(false)))
  }
}

export function fetchMovie(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios
      .get(`/movie/${payload}?api_key=${API_KEY}`)
      .then((res) => {
        dispatch(setLoading(false))
        dispatch(setMovie(res.data))
      })
      .catch((err) => dispatch(setLoading(false)))
  }
}
