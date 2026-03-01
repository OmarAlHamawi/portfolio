import { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['About', 'Experience', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className="fixed top-0 w-full bg-dark-900/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-white">OmarAlHamawi<span className="text-gold-500">.dev</span></span>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-400">
          {navItems.map((item) => (
            <Link 
              key={item} 
              to={item.toLowerCase()} 
              smooth={true} 
              offset={-80} 
              className="hover:text-gold-500 cursor-pointer transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark-800 border-b border-white/10 shadow-2xl absolute w-full">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item} 
                to={item.toLowerCase()} 
                smooth={true} 
                offset={-80}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="text-gray-400 hover:text-gold-500 cursor-pointer transition-colors text-lg font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;