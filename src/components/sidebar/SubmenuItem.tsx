
import React, { useState } from 'react';

interface SubmenuItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const SubmenuItem: React.FC<SubmenuItemProps> = ({ 
  title, 
  isOpen, 
  onToggle, 
  children 
}) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full text-left py-2 px-4 font-medium text-sm flex justify-between items-center hover:bg-gray-100"
      >
        <span>{title}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default SubmenuItem;
