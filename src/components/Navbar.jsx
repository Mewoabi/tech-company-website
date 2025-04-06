import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Hamburger and Close icons

function Navbar({ stripPadding }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    return location.pathname === path ? "text-primary" : "text-white";
  };

  const navLinks = (
    <>
      <Link to="/" className={getLinkClass('/')} onClick={() => setIsMenuOpen(false)}>Home</Link>
      <Link to="/services" className={getLinkClass('/services')} onClick={() => setIsMenuOpen(false)}>Services</Link>
      <Link to="/about" className={getLinkClass('/about')} onClick={() => setIsMenuOpen(false)}>About</Link>
      <Link to="/contact" className={getLinkClass('/contact')} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
      <Link to="/register" className={getLinkClass('/register')} onClick={() => setIsMenuOpen(false)}>Register</Link>
      <Link to="/login" className={getLinkClass('/login')} onClick={() => setIsMenuOpen(false)}>Login</Link>
    </>
  );

  return (
    <nav className={`${!stripPadding ? "h-16 w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 py-10 md:py-15 lg:py-0" : ""} relative z-50`}>
      <div className="container mx-auto h-full flex lg:justify-between justify-end items-center px-4">
        <div className="hidden lg:flex space-x-6 items-center">
          {navLinks}
        </div>

        <button
          className="hidden lg:block text-secondary-dark px-10 py-3 bg-primary"
          onClick={() => navigate('/login')}
        >
          PROFILE
        </button>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-64 bg-neutral-900 p-6 flex flex-col gap-6 z-40 shadow-lg transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>

          {navLinks}

          <button
            className="text-secondary-dark px-6 py-2 mt-auto bg-primary"
            onClick={() => {
              setIsMenuOpen(false);
              navigate('/login');
            }}
          >
            PROFILE
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
