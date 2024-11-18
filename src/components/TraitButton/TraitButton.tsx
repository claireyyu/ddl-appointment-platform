import React from 'react';

const TraitButton = ({ trait, onClick }) => {
  return (
    <button className="hover:cursor-pointer" onClick={() => onClick(trait)} />
  );
};

export default TraitButton;