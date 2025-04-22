import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { CountryProvider } from './context/CountryContext';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import CountrySelector from './components/ui/CountrySelector';

function App() {
  const [showCountrySelector, setShowCountrySelector] = useState(true);

  useEffect(() => {
    const hasSelectedCountry = localStorage.getItem('selectedCountry');
    setShowCountrySelector(!hasSelectedCountry);
  }, []);

  return (
    <CountryProvider>
      <CartProvider>
        <Router>
          {showCountrySelector && <CountrySelector />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
      </CartProvider>
    </CountryProvider>
  );
}

export default App;