import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
    name: 'search',
    initialState: {
        value: ''
    },
    reducers: {
        updateTerm: (state, action) => {
            state.value = action.payload;
        }
    }
})