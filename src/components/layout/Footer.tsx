import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold">MerkaLatina</span>
            </div>
            <p className="text-gray-400 mb-4">
              Tu mercado latino favorito, con los mejores productos importados 
              y locales.
            </p>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5" />
            </a>
            </div>
          </div>

          

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
              
                
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+573044151020</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@merkalatina.com" className="text-gray-400 hover:text-orange-500 transition-colors">
                  MerkaLatinaSupport@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MerkaLatina. Todos los derechos reservados.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;