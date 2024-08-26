import React from 'react';

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-lg p-8 max-w-md w-full">
        <button 
          className="absolute top-2 right-2 text-white hover:text-gray-300"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
        <div className="text-white padding:20pc">
          <p>Email: geekroomjimsrohini@gmail.com</p>
          <p>Phone: +91 7827545536</p>
          <p>Address: Jagan Institute of Management Studies,Sector - 5, Rohini, New Delhi - 110045</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;