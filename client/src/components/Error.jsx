import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h2 className="text-2xl text-red-600 font-semibold mb-4">Oops! Something went wrong.</h2>
        <p className="text-yellow-600 mb-6">{message || 'An unexpected error occurred.'}</p>
        <button
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition duration-200"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
