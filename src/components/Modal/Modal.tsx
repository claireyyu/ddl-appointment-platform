import React from 'react';
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-greyBg rounded-custom-lg p-4 max-w-md mx-auto relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:opacity-75" onClick={onClose}>
          <MdOutlineCancel size="28"/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
