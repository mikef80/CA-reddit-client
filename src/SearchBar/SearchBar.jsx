import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTerm } from "./searchBarSlice";
import { fetchPosts, cleanPosts } from "../Posts/postsSlice";

export const SearchBar = () => {
  const term = useSelector((state) => state.searchBar.term);

  const dispatch = useDispatch();

  const updateInput = (e) => {
    console.log("update Input");
    const searchTerm = e.target.value;
    dispatch(updateTerm(searchTerm));
  };

  useEffect(() => {
    console.log(term);
    dispatch(fetchPosts(term));

    return () => {
      // clean up here
      dispatch(cleanPosts())
    };
  }, [term]);

  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        className="border-slate-900 border"
        role="search"
        onChange={updateInput}
        term={term}
      />
      <p>{term}</p>
    </div>
  );
};
