import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateTerm } from './searchBarSlice';

export const SearchBar = () => {
    const term = useSelector(state => state.searchBar.term);

    const dispatch = useDispatch();

    const updateInput = (e) => {
        const searchTerm = e.target.value;
        dispatch(updateTerm(searchTerm));
    };

    return (
        <div>
            <input type="search" name="search" id="search" className='border-slate-900 border' role="search" onChange={ updateInput } term={ term } />
            <p>{ term }</p>
        </div>
    );
};