import React from 'react';

export default function CreateProfileBtn({ onClick }) {
  return (
    <button
    className="w-full text-bEnd text-base px-4 py-2 hover:bg-gray-100 cursor-pointer focus:outline-none whitespace-nowrap"
    onClick={onClick}
  >
    Create new profile
  </button>
  )

};