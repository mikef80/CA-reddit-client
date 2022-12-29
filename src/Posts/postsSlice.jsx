import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        /* const response = await fetch('https://www.reddit.com/search.json?q=surfing');
        const raw = await response.json();
        const posts = raw.data.children; */

        try {
            return await fetch('https://www.reddit.com/search.json?q=surfing')
                .then(response => response.json())
                .then(raw => raw.data.children);
    
            // return posts;
        } catch (error) {
            console.log(error);
        }

    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        error: false,
        noneReturned: false,
    },
    reducers: {
        updatePosts: (state, action) => {
            state.posts.push(action.payload);
            console.log('posts push');
        }
    },
    extraReducers: (builder) => {
        // need to build out reducers for different states (pending, failed, fulfilled)
        builder.addCase(fetchPosts.pending, (state, action) => {
            // state.posts.push(action.payload);
            state.isLoading = true;
            console.log('posts pending');
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            if (action.payload) {
                state.isLoading = false;
                state.posts.push(action.payload);
                console.log('posts loaded');
            } else {
                state.isLoading = false;
                state.noneReturned = true;
            }
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            // state.posts.push(action.payload);
            state.isLoading = false;
            console.log('posts rejected');
        });
    }
});

export const { updatePosts } = postsSlice.actions;

export default postsSlice.reducer;