
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarNavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
  scrollToTop?: boolean;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, className, children, id, scrollToTop = false }) => {
  // Generate the final URL with hash if id is provided
  const targetUrl = id ? `${to}#${id}` : to;
  
  const handleClick = () => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <div className="px-4 py-1">
      <Link 
        to={targetUrl} 
        className={`sidebar-menu-item ${className || ''}`}
        onClick={handleClick}
      >
        {children}
      </Link>
    </div>
  );
};

export default SidebarNavLink;
