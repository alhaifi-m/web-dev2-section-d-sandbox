import React from "react";
import Link from "next/link";

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data;
}

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className="p-5">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (

          <li key={post.id} className="mb-2">
            <Link
              className={"text-blue-500 hover:underline"}
              href={`/dynamic-routes/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
