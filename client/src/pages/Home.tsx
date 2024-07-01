//import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-60px)] bg-gradient-to-r from-indigo-100 to-blue-100 flex flex-col justify-center items-center text-gray-800">
      <h1 className="text-6xl font-bold mb-4">DevCompiler</h1>
      <p className="text-lg font-light mb-8">
        Code, Compile, Run and share your code seamlessly
      </p>
      <div className="flex space-x-4">
      <Link to="/signup">
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-indigo-200 transition duration-300">
          Get Started
        </button>
        </Link>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-blue-200 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
