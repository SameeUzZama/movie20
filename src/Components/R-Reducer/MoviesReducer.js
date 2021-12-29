export const MoviesReducer = (
  state = { movie: [], cart: [], selectedMovie: [] },
  action
) => {
  // if (action.type === "Add-Movies") {
  //   return { ...state, movie: [...action.data, ...state.movie] };
  // }
  // if (action.type === "selected-Movie") {
  //   return { ...state, selectedMovie: [action.data] };
  // }
  if (action.type === "Add-Cart") {
    return {
      ...state,
      cart: [{ ...action.data, key: state.cart.length }, ...state.cart],
    };
  }
  if (action.type === "Remove-Movies") {
    const filteredMovie = state.cart.filter(
      (item) => item.key !== action.data.key
    );
    return { ...state, cart: filteredMovie };
  }
  return state;
};
