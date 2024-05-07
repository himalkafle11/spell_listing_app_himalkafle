import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-[70vh] bg-gray-100">
      <div className="px-6 py-2 font-semibold text-center text-blue-800 bg-blue-200 rounded-full animate-pulse">
        loading...
      </div>
    </div>
  );
};

export default Loader;
