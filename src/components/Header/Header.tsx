import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // HashLink for scrolling on the same page
  const HashNavLink = ({ to, label }: { to: string, label: string }) => (
    <HashLink 
      smooth 
      to={to}
      className="text-gray-300 hover:text-white transition-colors px-3 py-2"
    >
      {label}
    </HashLink>
  );

  return (
    <header 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? 'glass-card' : 'bg-transparent'}
      `}
    >
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center space-x-3">
            <img 
              className="h-8 w-auto" 
              src="/logo.png"
              alt="agaami ai labs logo" 
            />
            <span className="font-bold text-xl text-white">
              agaami ai labs
            </span>
          </div>

          {/* --- THIS IS THE FIX --- */}
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            <HashNavLink to="/#vision" label="Vision" />
            <HashNavLink to="/#products" label="Products" />
            <HashNavLink to="/#services" label="Services" />
            <HashNavLink to="/#contact" label="Contact" />
            
            {/* Apply the new .glowing-button class */}
            <Link 
              to="/blog"
              className="glowing-button"
            >
              Blog
            </Link>
          </nav>
          {/* --- END OF FIX --- */}

        </div>
      </nav>
    </header>
  );
};