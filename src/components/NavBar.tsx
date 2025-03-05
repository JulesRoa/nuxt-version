import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Target, Zap, Database, ArrowRight, Menu, X } from 'lucide-react';

interface NavBarProps {
  clearProgress?: () => void;
  onGetStarted?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ clearProgress, onGetStarted }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
      setIsMenuOpen(false); // Close the mobile menu if open
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
          scrolled ? 'bg-base-dark/80 border-b border-pine/20' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl impact text-rose flex items-center gap-2 transition-colors duration-300 hover:text-pine"
              onClick={() => clearProgress && clearProgress()}
            >
              <span>it's just good marketing</span>
              <Zap className="text-pine" size={20} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-gray-300 hover:text-pine transition-colors" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button 
                onClick={handleGetStarted}
                className="text-sm px-4 py-2 bg-rose/10 border border-rose/30 text-rose rounded-lg flex items-center gap-2 transition-all duration-300 hover:bg-rose/20"
              >
                <span>get started</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Left Side Navigation */}
      <div className={`fixed left-0 top-0 bottom-0 z-40 transition-all duration-300 transform ${isMenuOpen || window.innerWidth >= 768 ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="h-full w-64 bg-base-dark/95 border-r border-pine/20 backdrop-blur-sm pt-20 flex flex-col justify-between">
          {/* Main Menu Links */}
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/campaign-automation" 
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                    location.pathname === '/campaign-automation' 
                      ? 'bg-pine/10 text-pine' 
                      : 'text-gray-300 hover:bg-base-light hover:text-pine'
                  }`}
                >
                  <Target size={18} /> 
                  <span>campaign automation</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/data-analytics" 
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                    location.pathname === '/data-analytics' 
                      ? 'bg-iris/10 text-iris' 
                      : 'text-gray-300 hover:bg-base-light hover:text-iris'
                  }`}
                >
                  <BarChart3 size={18} /> 
                  <span>data analytics</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/lead-scoring" 
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                    location.pathname === '/lead-scoring' 
                      ? 'bg-rose/10 text-rose' 
                      : 'text-gray-300 hover:bg-base-light hover:text-rose'
                  }`}
                >
                  <Zap size={18} /> 
                  <span>lead scoring</span>
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/data-lake-attribution" 
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 ${
                    location.pathname === '/data-lake-attribution' 
                      ? 'bg-yellow-400/10 text-yellow-400' 
                      : 'text-gray-300 hover:bg-base-light hover:text-yellow-400'
                  }`}
                >
                  <Database size={18} /> 
                  <span>data lake attribution</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Bottom CTA */}
          <div className="p-6 border-t border-pine/10">
            <button 
              onClick={handleGetStarted}
              className="w-full py-3 px-4 bg-rose/10 border border-rose/30 text-rose rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-rose/20"
            >
              <span>get started</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
        {/* Semi-transparent overlay for mobile */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-base-dark/50 z-[-1] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
      
      {/* Push content to the right on desktop */}
      <div className="md:pl-64 transition-all duration-300">
      </div>
    </>
  );
};

export default NavBar;