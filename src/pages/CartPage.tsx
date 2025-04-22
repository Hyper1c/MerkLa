import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, X, ShoppingBag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const [currency, setCurrency] = useState<string>('USD');

  const exchangeRates: Record<string, number> = {
    USD: 1, // Dólar estadounidense
    ARS: 350, // Peso argentino
    BOB: 6.96, // Boliviano
    BRL: 5.2, // Real brasileño
    CLP: 800, // Peso chileno
    COP: 4000, // Peso colombiano
    EUR: 0.85, // Euro
    PEN: 3.7, // Sol peruano
    PYD: 7000, // Guaraní paraguayo
    UYU: 40, // Peso uruguayo
    VES: 5.0, // Bolívar venezolano
  };

  const formatPrice = (price: number) => {
    const converted = price * (exchangeRates[currency] || 1);
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency,
    }).format(converted);
  };

  const getItemPrice = (price: number, discount?: number) => {
    if (discount) {
      return price * (1 - discount / 100);
    }
    return price;
  };

  const buildWhatsAppMessage = () => {
    let message = `*Pedido de Productos*%0A`;
    message += `Estimado/a, me gustaría realizar un pedido con los siguientes productos en ${currency}:%0A%0A`;

    items.forEach((item) => {
      const itemPrice = getItemPrice(item.price, item.discount);
      const subtotal = itemPrice * item.quantity;
      message += `*Producto:* ${item.name}%0A`;
      message += `*Cantidad:* ${item.quantity}%0A`;
      message += `*Precio Unitario:* ${formatPrice(itemPrice)}%0A`;
      message += `*Subtotal:* ${formatPrice(subtotal)}%0A%0A`;
    });

    message += `*Total del Pedido:* ${formatPrice(total)}%0A%0A`;
    message += `Agradecería mucho si pudieras confirmarme la disponibilidad de los productos.%0A`;
    message += `Quedo atento/a a tu respuesta.%0A`;

    return `https://wa.me/573216698114?text=${message}`;
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Carrito de Compras
          </h1>

          {items.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Tu carrito está vacío
              </h2>
              <p className="text-gray-500 mb-6 text-center">
                Parece que aún no has añadido ningún producto a tu carrito de
                compras.
              </p>
              <Link
                to="/category/todas"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Continuar Comprando
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 text-sm font-medium text-gray-500">
                    <div className="col-span-6">Producto</div>
                    <div className="col-span-2 text-center">Precio</div>
                    <div className="col-span-2 text-center">Cantidad</div>
                    <div className="col-span-2 text-center">Total</div>
                  </div>
                  {items.map((item) => {
                    const itemPrice = getItemPrice(item.price, item.discount);
                    const itemTotal = itemPrice * item.quantity;
                    return (
                      <div
                        key={item.id}
                        className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center"
                      >
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="absolute top-2 right-2 sm:hidden text-gray-400 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <X className="h-5 w-5" />
                        </button>
                        <div className="col-span-6 flex items-center">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-base font-medium text-gray-800">
                              <Link
                                to={`/product/${item.id}`}
                                className="hover:text-orange-500 transition-colors"
                              >
                                {item.name}
                              </Link>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.category.charAt(0).toUpperCase() +
                                item.category.slice(1)}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <span className="font-medium text-gray-800">
                            {formatPrice(itemPrice)}
                          </span>
                        </div>
                        <div className="col-span-2 flex justify-center">
                          <div className="flex border border-gray-300 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  item.id,
                                  parseInt(e.target.value) || 1
                                )
                              }
                              className="w-10 h-8 text-center text-gray-700 border-x border-gray-300 focus:outline-none"
                            />
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          <span className="font-medium text-gray-800">
                            {formatPrice(itemTotal)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="hidden sm:inline-block ml-4 text-gray-400 hover:text-red-500"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  <div className="p-4 flex justify-between items-center bg-gray-50">
                    <button
                      onClick={clearCart}
                      className="text-sm text-gray-500 hover:text-red-500 flex items-center transition-colors"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Vaciar Carrito
                    </button>
                    <Link
                      to="/category/todas"
                      className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                      Continuar Comprando
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Resumen del Pedido
                  </h2>
                  <div className="mb-4">
                    <label
                      htmlFor="currency"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Elige la moneda
                    </label>
                    <select
                      id="currency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full border-gray-300 rounded-lg shadow-sm"
                    >
                      <option value="USD">USD - Dólar Estadounidense</option>
                      <option value="COP">COP - Peso Colombiano</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="ARS">ARS - Peso Argentino</option>
                      <option value="BOB">BOB - Boliviano</option>
                      <option value="BRL">BRL - Real Brasileño</option>
                      <option value="CLP">CLP - Peso Chileno</option>
                      <option value="PEN">PEN - Sol Peruano</option>
                      <option value="PYG">PYG - Guaraní Paraguayo</option>
                      <option value="UYU">UYU - Peso Uruguayo</option>
                      <option value="VES">VES - Bolívar Venezolano</option>
                    </select>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Envío</span>
                      <span>Calculado en el siguiente paso</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-lg text-gray-800">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4">
                      Proceder al Pago por WhatsApp
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
