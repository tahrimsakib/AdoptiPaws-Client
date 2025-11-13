import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full rounded-full border-4 border-[#ff6d2d]/30 border-t-[#ff6d2d] animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          🐾
        </div>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-light mt-1">
        Please wait a moment...
      </p>
    </div>
  );
};

export default Loading;
