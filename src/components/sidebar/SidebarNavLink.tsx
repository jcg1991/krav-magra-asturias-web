
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarNavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  id?: string; // Add support for id to allow direct linking to page elements
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, className, children, id }) => {
  // Generate the final URL with hash if id is provided
  const targetUrl = id ? `${to}#${id}` : to;
  
  return (
    <div className="px-4 py-1">
      <Link to={targetUrl} className={`sidebar-menu-item ${className || ''}`}>
        {children}
      </Link>
    </div>
  );
};

export default SidebarNavLink;
