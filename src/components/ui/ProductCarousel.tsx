import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(1);
      } else if (width < 768) {
        setItemsPerView(2);
      } else if (width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(0, products.length - itemsPerView + 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  useEffect(() => {
    // Adjust currentIndex if it becomes invalid after resize
    if (currentIndex >= totalSlides && totalSlides > 0) {
      setCurrentIndex(totalSlides - 1);
    }
  }, [totalSlides, currentIndex]);

  return (
    <div 
      className="relative py-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full ${
              currentIndex === 0
                ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                : 'text-gray-600 hover:bg-orange-100 hover:text-orange-500'
            } transition-colors`}
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1 || totalSlides <= 1}
            className={`p-2 rounded-full ${
              currentIndex === totalSlides - 1 || totalSlides <= 1
                ? 'text-gray-300 cursor-not-allowed bg-gray-100'
                : 'text-gray-600 hover:bg-orange-100 hover:text-orange-500'
            } transition-colors`}
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile navigation dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 md:hidden">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full transition-colors ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;