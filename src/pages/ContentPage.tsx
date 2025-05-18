
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ContentPage = () => {
  const { pageNumber } = useParams();
  const navigate = useNavigate();
  const totalPages = 10;
  const currentPage = parseInt(pageNumber || '1');
  
  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    
    if (page === 1) {
      navigate('/');
    } else {
      navigate(`/page/${page}`);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-primary">
          Contenido Adicional - Página {pageNumber}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Contenido de la página {pageNumber}</h2>
          <p className="mb-4">
            Esta es la página {pageNumber} del contenido adicional. Aquí puedes añadir más contenido según necesites.
          </p>
          
          {/* Área para subir y mostrar contenido adicional */}
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 mb-6">
            <p className="text-center text-gray-500">
              Espacio para contenido adicional de la página {pageNumber}
            </p>
          </div>
        </div>
        
        {/* Paginación */}
        <div className="w-full mt-8 bg-gray-100 rounded-lg shadow-sm p-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} 
                  className={`cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink 
                    isActive={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)} 
                  className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </Layout>
  );
};

export default ContentPage;
