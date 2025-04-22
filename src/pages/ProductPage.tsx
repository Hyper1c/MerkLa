import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductCarousel from '../components/ui/ProductCarousel';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Share, Heart, Truck, ShieldCheck } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart } = useCart();
  
  const productId = parseInt(id || '0');
  const product = getProductById(productId);
  
  useEffect(() => {
    if (!product) {
      navigate('/');
    } else {
      setActiveImage(0);
      setQuantity(1);
    }
  }, [product, navigate, productId]);
  
  if (!product) {
    return null;
  }
  
  const relatedProducts = getRelatedProducts(product);
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);
  
  const discountedPrice = product.discount
    ? new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD',
      }).format(product.price * (1 - product.discount / 100))
    : null;
  
  return (
    <Layout>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Product Images */}
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="sticky top-24">
                <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100 h-[400px]">
                  <img
                    src={product.gallery?.[activeImage] || product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Gallery */}
                {product.gallery && product.gallery.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {product.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`w-20 h-20 flex-shrink-0 rounded border-2 ${
                          activeImage === index
                            ? 'border-orange-500'
                            : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 px-4">
              <div className="mb-2">
                <a href={`/category/${product.category}`} className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </a>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              <div className="mb-6">
                {product.discount ? (
                  <div className="flex items-baseline">
                    <span className="text-gray-400 line-through text-lg mr-2">
                      {formattedPrice}
                    </span>
                    <span className="text-2xl font-bold text-orange-600">
                      {discountedPrice}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-gray-800">{formattedPrice}</span>
                )}
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Cantidad
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="h-10 w-10 flex items-center justify-center border border-gray-300 rounded-l-lg text-gray-600 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="h-10 w-16 border-y border-gray-300 text-center text-gray-700 focus:outline-none"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="h-10 w-10 flex items-center justify-center border border-gray-300 rounded-r-lg text-gray-600 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex space-x-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 rounded-lg font-bold ${
                    product.inStock
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  } transition-colors`}
                >
                  {product.inStock ? 'Añadir al Carrito' : 'Agotado'}
                </button>
                
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg text-gray-500 hover:text-red-500 hover:border-red-500 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                
                <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg text-gray-500 hover:text-blue-500 hover:border-blue-500 transition-colors">
                  <Share className="h-5 w-5" />
                </button>
              </div>
              
              {/* Product Benefits */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Envío Rápido</h4>
                    <p className="text-sm text-gray-500">
                      Entrega en 24-48 horas para pedidos antes de las 3 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Garantía de Calidad</h4>
                    <p className="text-sm text-gray-500">
                      Todos nuestros productos son seleccionados cuidadosamente para garantizar la mejor calidad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <ProductCarousel 
                title="Productos Relacionados" 
                products={relatedProducts} 
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;