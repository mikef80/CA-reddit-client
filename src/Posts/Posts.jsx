import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPosts } from "./postsSlice";

import Post from "../Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const getPosts = useCallback(async () => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div>
      {posts.isLoading ? (
        <p>Loading...</p>
      ) : posts.posts.length > 0 ? (
        posts.posts.map((post) => {
          return post.map((item) => {
            const { id } = item.data;
            return <Post key={id} data={item.data} />;
          });
        })
      ) : (
        <p>No posts returned.</p>
      )}
    </div>
  );
};

export default Posts;
