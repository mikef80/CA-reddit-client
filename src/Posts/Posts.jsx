import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updatePosts } from './postsSlice';

const Posts = () => {
    const posts = useSelector(state => state.posts.posts);

    const dispatch = useDispatch();

    const getPosts = async () => {
        // THINK I NEED A THUNK IN HERE OR POSTSSLICE TO UPDATE STATE ASYNC
        const response = await fetch('https://www.reddit.com/search.json?q=surfing');
        const raw = await response.json();
        console.log(raw.data.children[0].data.title);
        const posts = raw.data.children;
        console.log(posts);

        dispatch(updatePosts(posts));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            { posts.length ?

                <p>Loading...</p>
                :
                posts.map(post => {
                    console.log(post);
                    // return <p role="generic" key={ post.data.id }>{ post.data.title }</p>;
                }) }
        </div>
    );
};

export default Posts;