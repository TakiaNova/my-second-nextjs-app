import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border border-gray-400 rounded p-5 mb-5a'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;