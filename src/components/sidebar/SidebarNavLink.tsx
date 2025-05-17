
import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarNavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, className, children }) => {
  return (
    <div className="px-4 py-1">
      <Link to={to} className={`sidebar-menu-item ${className || ''}`}>
        {children}
      </Link>
    </div>
  );
};

export default SidebarNavLink;
