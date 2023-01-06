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
        className="border-black border-[1px] bg-slate-200 focus:outline-black focus:outline focus:outline-[1.5px] pl-1"
        role="search"
        onChange={updateInput}
        term={term}
        placeholder="Search..."
      />
      <p>{term}</p>
    </div>
  );
};
