"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center mt-10 mb-20">
      <h2 className="text-2xl mb-5">Counter: {count}</h2>
      <div>
        <button
          className="h-10 bg-blue-500 text-white px-4 mr-2 hover:bg-blue-700 rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button className="h-10 bg-red-500 text-white px-4 hover:bg-red-700 rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
