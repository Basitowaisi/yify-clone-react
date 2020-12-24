export const SET_LOADING = "app/UI/SET_LOADING"

const initialState = {
  loading: false,
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: payload,
      }
    }
    default:
      return state
  }
}

export function setLoading(payload) {
  return { type: SET_LOADING, payload }
}
