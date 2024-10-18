import React from 'react';

export default function PressableButton({ age, year, ganzhi, isActive, onClick }) {
  return (
    <button
      className={`w-full h-full p-2 border border-gray-300 ${
        isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
      }`}
      onClick={onClick}
    >
      {/* Display age and year for header */}
      {age && year && (
        <>
          Age: {age} <br />
          {year}
        </>
      )}
      {/* Display ganzhi for body */}
      {ganzhi && (
        <>
          {ganzhi[0]} <br />
          {ganzhi[1]}
        </>
      )}
    </button>
  );
}
