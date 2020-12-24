import axios from "../axios"
import { setLoading } from "./UI"

const API_KEY = process.env.REACT_APP_TMDB_API_KEY

export const SET_SEARCH_PAGE_DATA = "app/SearchPage/SET_SEARCH_PAGE_DATA"

const initialState = {
  results: [],
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_SEARCH_PAGE_DATA:
      return {
        ...state,
        results: payload,
      }
    default:
      return state
  }
}

export function setSearchPageData(payload) {
  const filterPayload = payload.filter(
    (p) => !(p.backdrop_path == null && p.poster_path == null)
  )
  return { type: SET_SEARCH_PAGE_DATA, payload: filterPayload }
}

export function setSearchKeyword(payload) {
  return (dispatch, getState) => {
    dispatch(setLoading(true))
    axios
      .get(
        `/search/movie?api_key=${API_KEY}&query=${payload.replace(
          " ",
          "+"
        )}&include_adult=false&page=1`
      )
      .then((res) => {
        dispatch(setLoading(false))
        dispatch(setSearchPageData(res.data.results))
      })
      .catch((err) => dispatch(setLoading(false)))
  }
}
