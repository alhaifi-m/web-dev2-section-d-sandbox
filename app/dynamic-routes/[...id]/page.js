import React from 'react'

const Post = async ({ params}) => {
    const { id } = params;

    const posts = await Promise.all(
        id.map( async (id) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch post');
            }
            return response.json();
        })
    );

  return (
    <div>
        {posts.map((post) => (
            <div key={post.id} className="p-5">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default Post