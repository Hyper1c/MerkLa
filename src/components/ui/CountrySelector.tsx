import React, { useState } from 'react';
import { countries, useCountry } from '../../context/CountryContext';

const CountrySelector: React.FC = () => {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Selecciona tu país
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => setSelectedCountry(country)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                selectedCountry.code === country.code
                  ? 'bg-green-50 border-2 border-green-500'
                  : 'border-2 border-transparent hover:bg-gray-50'
              }`}
            >
              <img
                src={country.flag}
                alt={`Bandera de ${country.name}`}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <span className="mt-2 text-sm font-medium text-gray-700">
                {country.name}
              </span>
              <span className="text-xs text-gray-500">
                {country.currencySymbol} {country.currency}
              </span>
            </button>
          ))}
        </div>

        {/* Botón Seleccionar */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisible(false)}
            disabled={!selectedCountry.code}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountrySelector;
