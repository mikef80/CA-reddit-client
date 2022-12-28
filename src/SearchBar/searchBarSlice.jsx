import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name: 'search',
    initialState: {
        term: '',
        returnedJSON: {}
    },
    reducers: {
        updateTerm: (state, action) => {
            state.term = action.payload;
            console.log('something');
        }
    }
});

export const { updateTerm } = searchBarSlice.actions;

export default searchBarSlice.reducer;