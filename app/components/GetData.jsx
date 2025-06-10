"use client";
import React, { useState, useEffect } from "react";

const GetData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Posts</h1>
      <ul className="space-y-6">
        {data.map((post) => (
          <li
            key={post.id}
            className="border p-4 border-gray-300 rounded-lg shadow-sm hover:shadow-sm hover:bg-gray-100"
          >
            <h2 className="text-2xl font-semibold text-blue-600">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.body}</p>

            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetData;
