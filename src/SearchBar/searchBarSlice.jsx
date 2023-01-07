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
        },
        cleanTerm: (state, action) => {
            state.term = '';
            console.log('cleared search term');
        }
    }
});

export const { updateTerm, cleanTerm } = searchBarSlice.actions;

export default searchBarSlice.reducer;