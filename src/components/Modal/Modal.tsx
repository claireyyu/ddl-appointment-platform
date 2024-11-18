import React from 'react';
import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ isOpen, onClose, bgColor, children, maxWidth=null }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className={`${bgColor} ${maxWidth} rounded-custom-lg p-4 w-full max-w-md mx-auto relative mt-16 mb-16 sm:mt-4 sm:mb-4`}>
        <button className="absolute top-2 right-2 text-gray-500 hover:opacity-75" onClick={onClose}>
          <MdOutlineCancel size="28"/>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;