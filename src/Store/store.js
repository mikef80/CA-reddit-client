import { configureStore } from "@reduxjs/toolkit";

import searchBarReducer from "../SearchBar/searchBarSlice";

export default configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});