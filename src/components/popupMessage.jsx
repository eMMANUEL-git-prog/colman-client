import React from "react";

const PopupMessage = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 p-6 rounded-lg shadow-lg text-white flex flex-col items-center space-y-4 ${
        type === "success" ? "bg-blue-400" : "bg-red-500"
      }`}
    >
      <p className="text-lg font-semibold">{message}</p>
      <button
        className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default PopupMessage;
