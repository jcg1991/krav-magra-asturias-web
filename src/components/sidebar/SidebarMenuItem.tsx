
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarMenuItemProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  isExternalLink?: boolean;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ 
  to, 
  children, 
  className = "sidebar-menu-item",
  isExternalLink = false 
}) => {
  if (isExternalLink) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`block py-1 px-6 text-sm text-blue-600 hover:underline ${className}`}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default SidebarMenuItem;
