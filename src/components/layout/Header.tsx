import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { categories } from '../../data/products';

const Header: React.FC = () => {
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-green-800`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-2xl font-bold">
              <span className="text-yellow-500">Merka</span>
              <span className="text-green-500">Latina</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {categories.slice(0, 7).map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="font-medium text-white hover:text-yellow-500 transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="p-2 rounded-full relative hover:bg-green-700 transition-colors text-white"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-yellow-500 text-white text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden p-2 rounded-full hover:bg-green-700 transition-colors text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-green-800 z-40 overflow-y-auto">
            <div className="flex flex-col p-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="py-3 px-4 text-white font-medium border-b border-green-700 hover:bg-green-700"
                  onClick={toggleMobileMenu}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;