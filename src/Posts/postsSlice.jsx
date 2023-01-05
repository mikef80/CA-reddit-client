import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (term) => {
  try {
    console.log(term);
    // return await fetch(`https://www.reddit.com/search.json?q=surfing`)
    const url = `https://www.reddit.com/search.json?q=${term}`;
    console.log(url);
    return await fetch(url)
      .then((response) => response.json())
      .then((raw) => raw.data.children);
  } catch (error) {
    console.log(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: false,
    noneReturned: false,
  },
  reducers: {
    updatePosts: (state, action) => {
      state.posts.push(action.payload);
      console.log("posts push");
    },
    cleanPosts: (state, action) => {
        state.posts = [];
        console.log('cleared posts');
    }
  },
  extraReducers: (builder) => {
    // need to build out reducers for different states (pending, failed, fulfilled)
    builder.addCase(fetchPosts.pending, (state, action) => {
      // state.posts.push(action.payload);
      state.isLoading = true;
      state.posts = [];
      console.log("posts pending");
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoading = false;
        state.posts.push(action.payload);
        console.log("posts loaded");
      } else {
        state.isLoading = false;
        state.noneReturned = true;
      }
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      // state.posts.push(action.payload);
      state.isLoading = false;
      console.log("posts rejected");
    });
  },
});

export const { updatePosts, cleanPosts } = postsSlice.actions;

export default postsSlice.reducer;
