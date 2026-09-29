import React from 'react';
import Post from '../components/Post';

const PostPage = async() => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    return (
        <div>
            <h2>Post Page: {posts.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {posts.map(post => <Post key={post.id} post={post}></Post>)}
            </div>
        </div>
    );
};

export default PostPage;