import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name: 'search',
    initialState: {
        value: '',
        returnedJSON: {}
    },
    reducers: {
        updateTerm: (state, action) => {
            state.value = action.payload;
            console.log('something');
        }
    }
});

export const { updateTerm } = searchBarSlice.actions;

export default searchBarSlice.reducer;