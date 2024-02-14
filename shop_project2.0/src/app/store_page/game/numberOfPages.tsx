import React, { useState, useEffect } from "react";

type numberPagesProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: any
}

export const NumberPages = ({ currentPage, totalPages, onPageChange }:numberPagesProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Ensure that currentPage and totalPages are valid numbers
    if (typeof currentPage === 'number' && !isNaN(currentPage) &&
        typeof totalPages === 'number' && !isNaN(totalPages)) {
      setSlideIndex(Math.max(0, Math.min(currentPage - 1, totalPages - 3)));
    }
  }, [currentPage, totalPages]);

  if (totalPages <= 1) {
    return null; // No need for pagination when there's only one page
  }

  const handleSlideLeft = () => {
    if (currentPage > 1) {
      setSlideIndex((prevIndex) => prevIndex - 1);
      onPageChange(currentPage - 1);
    }
  };

  const handleSlideRight = () => {
    if (currentPage < totalPages) {
      setSlideIndex((prevIndex) => prevIndex + 1);
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="bg-white text-dark">
      <div className="flex justify-center gap-2 px-4 pb-4">
        <div
          className={`cursor-pointer bg-RED rounded-full w-11 text-center active:transform active:-translate-y-1 transition ease-in-out hover:scale-110 duration-150 ${
            currentPage > 1 ? "cursor-pointer" : ""
          }`}
          onClick={handleSlideLeft}
        > 
          <i className="text-dark relative top-2 text-xl bi bi-caret-left-fill"></i>
        </div>
        {Array.from({ length: Math.min(3, totalPages) }, (_, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 border-RED p-2 w-11 text-center rounded-full 
            hover:bg-dark hover:text-RED font-bold transition ease-in-out hover:scale-110 duration-150 
            ${currentPage === slideIndex + index + 1 ? "bg-dark text-RED" : ""}`}
            onClick={() => onPageChange(slideIndex + index + 1)}
          >
            {slideIndex + index + 1}
          </div>
        ))}
        <div
          className={`bg-RED rounded-full w-11 text-center  active:transform active:-translate-y-1 transition ease-in-out hover:scale-110 duration-150 ${
            currentPage < totalPages ? "cursor-pointer" : ""
          }`}
          onClick={handleSlideRight}
        >
          <i className="text-dark relative top-2 text-xl bi bi-caret-right-fill"></i>
        </div>
      </div>
    </div>
  );
};