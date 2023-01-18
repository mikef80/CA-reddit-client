import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTerm, /* cleanTerm */ } from "./searchBarSlice";
import { fetchPosts, /* cleanPosts */ } from "../Posts/postsSlice";

// export const SearchBar = () => {
//   const term = useSelector((state) => state.searchBar.term);

//   const dispatch = useDispatch();

//   const updateInput = (e) => {
//     console.log("update Input");
//     const searchTerm = e.target.value;
//     dispatch(updateTerm(searchTerm));
//   };

//   useEffect(() => {
//     console.log(term);
//     dispatch(fetchPosts(term));

//     return () => {
//       // clean up here
//       dispatch(cleanTerm())
//     };
//   }, [term]);

//   return (
//     <div>
//       <input
//         type="search"
//         name="search"
//         id="search"
//         className="border-black border-[1px] bg-slate-200 focus:outline-black focus:outline focus:outline-[1.5px] pl-1"
//         role="search"
//         onChange={updateInput}
//         term={term}
//         placeholder="Search..."
//       />
//       <p>{term}</p>
//     </div>
//   );
// };


export const SearchBar = () => {
  const term = useSelector((state) => state.searchBar.term);

  const dispatch = useDispatch();

  const updateSearchTerm = e => {
    dispatch(updateTerm(e.target.value));
  }

  useEffect(() => {
    const search = setTimeout(() => {
      dispatch(fetchPosts(term));
    },1000);

    return () => clearTimeout(search);
  },[term, dispatch])

  return (
    <div>
      <input
        type="search"
        name="search"
        id="search"
        className="border-black border-[1px] bg-slate-200 focus:outline-black focus:outline focus:outline-[1.5px] pl-1"
        role="search"
        onChange={updateSearchTerm}
        term={term}
        placeholder="Search..."
      />
    </div>
  );
};