import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updatePosts, fetchPosts } from './postsSlice';

import Post from '../Post/Post';

const Posts = () => {
    const posts = useSelector(state => state.posts);
    let returnedPosts;

    const dispatch = useDispatch();

    const getPosts = async () => {
        // THINK I NEED A THUNK IN HERE OR POSTSSLICE TO UPDATE STATE ASYNC
        /* const response = await fetch('https://www.reddit.com/search.json?q=surfing');
        const raw = await response.json();
        console.log(raw.data.children[0].data.title);
        const posts = raw.data.children;
        console.log(posts); */

        dispatch(fetchPosts());
        // dispatch(updatePosts(posts));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            { posts.isLoading ?
                <p>Loading...</p>
                :
                posts.posts.length > 0 ?
                    posts.posts.map(post => {
                        return post.map(item => {
                            const { id, title, selftext, url, thumbnail } = item.data;
                            console.log(item.data);
                            // return <p role="generic" key={ id }>{ title }</p>;
                            return <Post />;
                        });
                    })
                    :
                    <p>No posts returned.</p>
            }
        </div>
    );
};

export default Posts;