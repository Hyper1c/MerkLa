import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import ProductCarousel from '../components/ui/ProductCarousel';
import { getFeaturedProducts, products } from '../data/products';
import { ArrowRight } from 'lucide-react';

const countries = [
  { name: 'Argentina', flag: 'https://flagcdn.com/w160/ar.png' },
  { name: 'Bolivia', flag: 'https://flagcdn.com/w160/bo.png' },
  { name: 'Brasil', flag: 'https://flagcdn.com/w160/br.png' },
  { name: 'Chile', flag: 'https://flagcdn.com/w160/cl.png' },
  { name: 'Colombia', flag: 'https://flagcdn.com/w160/co.png' },
  { name: 'Ecuador', flag: 'https://flagcdn.com/w160/ec.png' },
  { name: 'Paraguay', flag: 'https://flagcdn.com/w160/py.png' },
  { name: 'Perú', flag: 'https://flagcdn.com/w160/pe.png' },
  { name: 'Uruguay', flag: 'https://flagcdn.com/w160/uy.png' },
  { name: 'Venezuela', flag: 'https://flagcdn.com/w160/ve.png' },
];

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        {/* Countries Section */}
        <div className="mb-12">
          <div className="flex justify-center flex-wrap gap-6">
            {countries.map((country) => (
              <div key={country.name} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500 shadow-lg">
                  <img
                    src={country.flag}
                    alt={`Bandera de ${country.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-8">
            Productos Destacados
          </h2>
          <ProductCarousel title="" products={featuredProducts} />
        </div>

        {/* Categories Banner */}
        <div className="my-16">
          <h2 className="text-2xl font-bold text-green-800 mb-8">
            Nuestras Categorías
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg"
                alt="Ropa de Mujer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Ropa de Mujer
                  </h3>
                  <a
                    href="/category/ropa-mujer"
                    className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition-colors duration-300"
                  >
                    Ver Productos
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg"
                alt="Ropa de Hombre"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Ropa de Hombre
                  </h3>
                  <a
                    href="/category/ropa-hombre"
                    className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition-colors duration-300"
                  >
                    Ver Productos
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
                alt="Tecnología"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Tecnología
                  </h3>
                  <a
                    href="/category/tecnologia"
                    className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition-colors duration-300"
                  >
                    Ver Productos
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
                alt="Hogar"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Hogar</h3>
                  <a
                    href="/category/hogar"
                    className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition-colors duration-300"
                  >
                    Ver Productos
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
                alt="Zapatos"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Zapatos</h3>
                  <a
                    href="/category/zapatos"
                    className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition-colors duration-300"
                  >
                    Ver Productos
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-md group">
              <img
                src="https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg"
                alt="Deportes"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Deportes
                  </h3>
                  <a
                    href="/category/deportes"
                    className="inline-block text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition-colors duration-300"
                  >
                    Ver Productos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Arrivals */}
        <div className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-8">
            Nuevos Productos
          </h2>
          <ProductCarousel title="" products={products.slice(6, 12)} />
        </div>

        {/* About Section */}
        <div className="my-16 bg-green-50 rounded-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Sobre MerkaLatina
              </h2>
              <p className="text-green-700 mb-6">
                MerkaLatina es tu destino único para productos auténticos
                latinoamericanos. Nos especializamos en traer lo mejor de
                América Latina directamente a tu puerta, ofreciendo una amplia
                selección de productos de alta calidad que representan la rica
                diversidad de nuestra cultura.
              </p>
              <p className="text-green-700 mb-6">
                Desde 2020, hemos estado conectando a la comunidad latina con
                sus productos favoritos, manteniendo vivas las tradiciones y
                sabores de casa. Nuestro compromiso es brindar un servicio
                excepcional y productos auténticos a precios competitivos.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
              >
                Conoce Mas sobre MerkaLatina
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="h-64 md:h-auto">
              <img
                src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg"
                alt="Nuestra tienda"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
