import React from 'react'

const posts =[
    {
        id: 1,
        title: 'Understanding React Hooks',
        content: 'React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8.',
    },
    {
        id: 2,
        title: 'A Guide to Next.js',
        content: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.',
    },
    {
        id: 3,
        title: 'Exploring JavaScript ES6 Features',
        content: 'ES6, also known as ECMAScript 2015, introduced many new features to JavaScript, including arrow functions, classes, and template literals.',
    },
]
const Posts = () => {
  return (
    <div className='mt-10 w-full'>
        <h3 className='text-lg font-semibold mb-4 text-gray-800'> 
            <ul>
                {posts.map(post => (
                    <li key={post.id} className='mb-6 p-4 border rounded bg-white shadow-sm'>
                        <h4 className='font-semibold text-gray-900'>{post.title}</h4>
                        <p className=' mt-2 text-gray-600'>{post.content}</p>
                    </li>
                ))}
            </ul>
        </h3>
    </div>
  )
}

export default Posts