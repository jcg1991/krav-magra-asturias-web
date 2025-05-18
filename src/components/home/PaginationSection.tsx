
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

const PaginationSection = () => {
  const navigate = useNavigate();
  const totalPages = 10;
  
  const handlePageChange = (page: number) => {
    if (page === 1) {
      // Página actual
      return;
    }
    // Navegar a las páginas adicionales
    navigate(`/page/${page}`);
  };

  return (
    <div className="w-full mt-8 bg-gray-100 rounded-lg shadow-sm p-4">
      <Pagination>
        <PaginationContent>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink 
                isActive={i + 1 === 1}
                onClick={() => handlePageChange(i + 1)}
                className="cursor-pointer"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={() => handlePageChange(2)} className="cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationSection;
