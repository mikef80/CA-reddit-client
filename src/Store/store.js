import { configureStore } from "@reduxjs/toolkit";

import searchBarReducer from "../SearchBar/searchBarSlice";
import postsReducer from "../Posts/postsSlice";

export default configureStore({
  reducer: {
    searchBar: searchBarReducer,
    posts: postsReducer,
  },
});
