export function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case "success":
      return {
        ...state,
        weather: action.payload,
        isError: false,
        isLoading: false,
      };
    case "addHistory":
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case "deleteOneHistory":
      return {
        ...state,
        history: state.history.filter((history) => history !== action.payload),
      };
    case "error":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
}
