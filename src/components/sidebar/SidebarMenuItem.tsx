
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarMenuItemProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ to, children, className = "" }) => {
  return (
    <div className="px-4 py-1">
      <Link to={to} className={`sidebar-menu-item ${className}`}>
        {children}
      </Link>
    </div>
  );
};

export default SidebarMenuItem;
