import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useCountry } from '../../context/CountryContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { formatPrice } = useCountry();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {product.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          -{product.discount}%
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        <button
          onClick={handleAddToCart}
          className="absolute right-2 bottom-2 p-2 bg-orange-500 rounded-full text-white transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Add to cart"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-gray-800 font-medium text-lg mb-1 line-clamp-1 group-hover:text-orange-500 transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">
          {product.description.slice(0, 60)}...
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            {product.discount ? (
              <div className="flex items-center">
                <span className="text-gray-400 line-through text-sm mr-2">
                  {formatPrice(product.price)}
                </span>
                <span className="font-bold text-orange-600">
                  {formatPrice(product.price * (1 - product.discount / 100))}
                </span>
              </div>
            ) : (
              <span className="font-bold text-gray-800">{formatPrice(product.price)}</span>
            )}
          </div>
          
          {!product.inStock && (
            <span className="text-red-500 text-xs font-medium">Agotado</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;