
import React from 'react';

interface SidebarSubmenuProps {
  title: string;
  isOpen: boolean;
  toggleSubmenu: () => void;
  children?: React.ReactNode;
}

const SidebarSubmenu: React.FC<SidebarSubmenuProps> = ({ 
  title, 
  isOpen, 
  toggleSubmenu, 
  children 
}) => {
  return (
    <div>
      <button
        onClick={toggleSubmenu}
        className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100"
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      
      {isOpen && (
        <div className="ml-4 border-l-2 border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default SidebarSubmenu;
