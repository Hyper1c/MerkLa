import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ProductCard from '../components/ui/ProductCard';
import { getProductsByCategory, categories } from '../data/products';
import { Product } from '../types';

const CategoryPage: React.FC = () => {
  const { slug = 'todas' } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>('default');
  
  useEffect(() => {
    setLoading(true);
    
    // Simulate API fetch delay
    setTimeout(() => {
      const fetchedProducts = getProductsByCategory(slug);
      setProducts(fetchedProducts);
      setLoading(false);
    }, 500);
  }, [slug]);
  
  const currentCategory = categories.find(
    category => category.slug === slug
  ) || categories[0];
  
  // Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* Category Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {currentCategory.name}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500">
              <a href="/" className="hover:text-orange-500 transition-colors">
                Inicio
              </a>
              <span className="mx-2">/</span>
              {slug !== 'todas' && (
                <>
                  <a href="/category/todas" className="hover:text-orange-500 transition-colors">
                    Categorías
                  </a>
                  <span className="mx-2">/</span>
                </>
              )}
              <span className="font-medium text-gray-700">
                {currentCategory.name}
              </span>
            </div>
          </header>
          
          {/* Category Navigation */}
          <div className="flex overflow-x-auto pb-4 mb-6 -mx-2 scrollbar-hide">
            <div className="flex space-x-2 px-2">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className={`whitespace-nowrap px-4 py-2 rounded-md transition-colors ${
                    category.slug === slug
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Sorting and Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
            <div className="mb-4 sm:mb-0">
              <span className="text-gray-700 mr-2">Mostrando {products.length} productos</span>
            </div>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="text-gray-700 mr-2">
                Ordenar por:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
              >
                <option value="default">Destacados</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
                <option value="name-asc">Nombre: A-Z</option>
                <option value="name-desc">Nombre: Z-A</option>
              </select>
            </div>
          </div>
          
          {/* Product Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm p-4 h-80">
                  <div className="h-48 bg-gray-200 animate-pulse mb-4 rounded"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded mb-2 w-3/4"></div>
                  <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                No se encontraron productos
              </h2>
              <p className="text-gray-500 mb-8">
                No hay productos disponibles en esta categoría en este momento.
              </p>
              <a
                href="/category/todas"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Ver todos los productos
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;