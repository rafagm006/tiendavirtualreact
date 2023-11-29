import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin h-10 w-10 text-blue-500 mr-4" />
          <span className="text-black text-lg font-semibold">Cargando...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;