
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarNavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
  scrollToTop?: boolean;
}

const SidebarNavLink: React.FC<SidebarNavLinkProps> = ({ to, className, children, id, scrollToTop = false }) => {
  const location = useLocation();
  
  // Generate the final URL with hash if id is provided
  const targetUrl = id ? `${to}#${id}` : to;
  
  const handleClick = () => {
    // If we're already on the target page and there's an id, scroll to it
    if (location.pathname === to && id) {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // If we navigate to a URL with a hash, scroll to the element with that id
  useEffect(() => {
    if (location.hash && location.pathname === to) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location, to]);
  
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
