import React from 'react';
import Layout from '../components/layout/Layout';
import { ShoppingBag, Truck, Users, Globe2, Shield, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Sobre MerkaLatina
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectando América Latina a través del comercio, llevando lo mejor de nuestros productos a cada hogar.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Nuestra Misión</h2>
              <p className="text-gray-700">
                Facilitar el acceso a productos auténticos latinoamericanos, manteniendo viva nuestra cultura y tradiciones a través del comercio electrónico, mientras apoyamos a productores locales y creamos oportunidades de crecimiento en toda la región.
              </p>
            </div>
            <div className="bg-yellow-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-800 mb-4">Nuestra Visión</h2>
              <p className="text-gray-700">
                Ser la plataforma líder de comercio electrónico en América Latina, reconocida por nuestra excelencia en servicio, autenticidad de productos y compromiso con el desarrollo económico de la región.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Envíos Seguros</h3>
              <p className="text-gray-600">
                Entrega garantizada a todos los países de América Latina
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Productos Auténticos</h3>
              <p className="text-gray-600">
                Garantía de autenticidad en todos nuestros productos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Soporte 24/7</h3>
              <p className="text-gray-600">
                Atención al cliente disponible todo el día, todos los días
              </p>
            </div>
          </div>

          {/* History */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nuestra Historia</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-4">
                MerkaLatina nació en 2020 como respuesta a la creciente necesidad de conectar a la comunidad latina con productos auténticos de su tierra natal. Lo que comenzó como una pequeña tienda en línea ha crecido hasta convertirse en un marketplace que une a vendedores y compradores de toda América Latina.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestra plataforma ha evolucionado constantemente, incorporando nuevas categorías de productos y mejorando la experiencia de compra para nuestros usuarios. Hoy, nos enorgullece ser un puente que conecta culturas y facilita el acceso a productos tradicionales y modernos de toda la región.
              </p>
              <p className="text-gray-700">
                Con presencia en 10 países y más de 100,000 clientes satisfechos, seguimos comprometidos con nuestra misión de hacer que el comercio latinoamericano sea más accesible y eficiente para todos.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Países</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100k+</div>
              <div className="text-gray-600">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5k+</div>
              <div className="text-gray-600">Productos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;