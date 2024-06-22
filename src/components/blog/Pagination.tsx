// components/Pagination.tsx
"use client";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pages = [];
    const ellipsis = (
      <span key="ellipsis" className="pagination-ellipsis">
        ...
      </span>
    );

    const createPageNumber = (number: number) => (
      <span
        key={number}
        onClick={() => onPageChange(number)}
        className={`pagination-number ${
          number === currentPage ? "active" : ""
        }`}
      >
        {number}
      </span>
    );

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(createPageNumber(i));
      }
    } else {
      pages.push(createPageNumber(1));
      if (currentPage > 3) {
        pages.push(ellipsis);
      }
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        pages.push(createPageNumber(i));
      }
      if (currentPage < totalPages - 2) {
        pages.push(ellipsis);
      }
      pages.push(createPageNumber(totalPages));
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      <span
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={`pagination-arrow ${currentPage === 1 ? "disabled" : ""}`}
      >
        <FaArrowLeft />
      </span>
      {renderPageNumbers()}
      <span
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className={`pagination-arrow ${
          currentPage === totalPages ? "disabled" : ""
        }`}
      >
        <FaArrowRight />
      </span>
    </div>
  );
};

export default Pagination;
