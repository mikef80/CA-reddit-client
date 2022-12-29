import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: []
    },
    reducers: {
        updatePosts: (state, action) => {
            state.posts.push(action.payload);
            console.log('posts push');
        }
    },
    extraReducers: (builder) => {
        // need to build out reducers for different states (pending, failed, fulfilled)
    }
});

export const { updatePosts } = postsSlice.actions;

export default postsSlice.reducer;