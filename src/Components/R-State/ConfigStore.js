import { createStore, combineReducers } from "redux";
import { MoviesReducer } from "../R-Reducer/MoviesReducer";

export const ConfigStore = () => {
  const myStore = createStore(
    combineReducers({MoviesReducer}),
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
  );
  return myStore;
};