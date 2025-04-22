import React, { createContext, useContext, useState } from 'react';

interface Country {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  flag: string;
  exchangeRate: number;
}

export const countries: Country[] = [
  { code: 'AR', name: 'Argentina', currency: 'ARS', currencySymbol: '$', flag: 'https://flagcdn.com/w160/ar.png', exchangeRate: 850.50 },
  { code: 'BO', name: 'Bolivia', currency: 'BOB', currencySymbol: 'Bs.', flag: 'https://flagcdn.com/w160/bo.png', exchangeRate: 6.91 },
  { code: 'BR', name: 'Brasil', currency: 'BRL', currencySymbol: 'R$', flag: 'https://flagcdn.com/w160/br.png', exchangeRate: 4.97 },
  { code: 'CL', name: 'Chile', currency: 'CLP', currencySymbol: '$', flag: 'https://flagcdn.com/w160/cl.png', exchangeRate: 962.45 },
  { code: 'CO', name: 'Colombia', currency: 'COP', currencySymbol: '$', flag: 'https://flagcdn.com/w160/co.png', exchangeRate: 3927.50 },
  { code: 'EC', name: 'Ecuador', currency: 'USD', currencySymbol: '$', flag: 'https://flagcdn.com/w160/ec.png', exchangeRate: 1 },
  { code: 'PY', name: 'Paraguay', currency: 'PYG', currencySymbol: '₲', flag: 'https://flagcdn.com/w160/py.png', exchangeRate: 7285.30 },
  { code: 'PE', name: 'Perú', currency: 'PEN', currencySymbol: 'S/.', flag: 'https://flagcdn.com/w160/pe.png', exchangeRate: 3.72 },
  { code: 'UY', name: 'Uruguay', currency: 'UYU', currencySymbol: '$', flag: 'https://flagcdn.com/w160/uy.png', exchangeRate: 39.15 },
  { code: 'VE', name: 'Venezuela', currency: 'VES', currencySymbol: 'Bs.', flag: 'https://flagcdn.com/w160/ve.png', exchangeRate: 36.31 }
];

interface CountryContextType {
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
  formatPrice: (price: number) => string;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

  const formatPrice = (price: number) => {
    const convertedPrice = price * selectedCountry.exchangeRate;
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: selectedCountry.currency,
      currencyDisplay: 'symbol',
    }).format(convertedPrice);
  };

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry, formatPrice }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};