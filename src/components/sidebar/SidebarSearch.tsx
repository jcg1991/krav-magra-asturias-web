
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SidebarSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isSearchFocused: boolean;
  setIsSearchFocused: (focused: boolean) => void;
  handleSearch: (e: React.FormEvent) => void;
  clearSearch: () => void;
}

const SidebarSearch: React.FC<SidebarSearchProps> = ({
  searchTerm,
  setSearchTerm,
  isSearchFocused,
  setIsSearchFocused,
  handleSearch,
  clearSearch
}) => {
  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="search"
        placeholder="Buscar..."
        className="pl-10 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsSearchFocused(true)}
      />
      {searchTerm && (
        <button 
          type="button"
          onClick={clearSearch}
          className="absolute inset-y-0 right-10 pr-1 flex items-center text-sm text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <button 
        type="submit" 
        className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-primary hover:text-primary-dark"
      >
        Buscar
      </button>
    </form>
  );
};

export default SidebarSearch;
