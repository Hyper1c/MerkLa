import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'MerkaLatina: Tu Mercado Favorito',
    subtitle: 'Descubre nuestra selección de productos disponibles',
    image:
      'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaText: 'Explorar Productos',
    ctaLink: '/category/todas',
  },
  {
    id: 2,
    title: 'MerkaLatina: Tu Mercado Favorito',
    subtitle: 'Descubre nuestra selección de productos disponibles',
    image:
      'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaText: 'Explorar Productos',
    ctaLink: '/category/todas',
  },
  {
    id: 3,
    title: 'MerkaLatina: Tu Mercado Favorito',
    subtitle: 'Descubre nuestra selección de productos disponibles',
    image:
      'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ctaText: 'Explorar Productos',
    ctaLink: '/category/todas',
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <div className="relative h-full flex items-center z-20">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transform transition-transform duration-1000 delay-100"
                  style={{
                    transform:
                      index === currentSlide
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  {slide.title}
                </h1>

                <p
                  className="text-xl text-white mb-8 transform transition-transform duration-1000 delay-300"
                  style={{
                    transform:
                      index === currentSlide
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                >
                  {slide.subtitle}
                </p>

                <Link
                  to={slide.ctaLink}
                  className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:translate-x-1"
                  style={{
                    transform:
                      index === currentSlide
                        ? 'translateY(0)'
                        : 'translateY(20px)',
                    opacity: index === currentSlide ? 1 : 0,
                    transitionDelay: '500ms',
                    transitionDuration: '1000ms',
                  }}
                >
                  {slide.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-orange-500 w-8'
                : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
