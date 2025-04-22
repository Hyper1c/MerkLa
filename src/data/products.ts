import { Product } from '../types';

export const categories: {id: number, name: string, slug: string}[] = [
  { id: 1, name: "Todas", slug: "todas" },
  { id: 2, name: "Ropa Mujer", slug: "ropa-mujer" },
  { id: 3, name: "Ropa Hombre", slug: "ropa-hombre" },
  { id: 4, name: "Tecnología", slug: "tecnologia" },
  { id: 5, name: "Hogar", slug: "hogar" },
  { id: 6, name: "Zapatos", slug: "zapatos" },
  { id: 7, name: "Deportes", slug: "deportes" }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Vestido Floral Verano",
    price: 49.99,
    image: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
    category: "ropa-mujer",
    description: "Hermoso vestido floral perfecto para el verano. Diseño elegante y cómodo.",
    inStock: true,
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg"
    ]
  },
  {
    id: 2,
    name: "Camisa Casual Hombre",
    price: 35.99,
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    category: "ropa-hombre",
    description: "Camisa casual de algodón para hombre, perfecta para cualquier ocasión.",
    inStock: true,
    gallery: [
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg"
    ]
  },
  {
    id: 3,
    name: "Smartphone Ultimate Pro",
    price: 799.99,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    category: "tecnologia",
    description: "El último smartphone con características premium y cámara profesional.",
    inStock: true,
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg"
    ]
  },
  {
    id: 4,
    name: "Lámpara Moderna LED",
    price: 89.99,
    image: "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg",
    category: "hogar",
    description: "Lámpara LED moderna con control de intensidad y temperatura de color.",
    inStock: true,
    gallery: [
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg"
    ]
  },
  {
    id: 5,
    name: "Zapatillas Running Pro",
    price: 129.99,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    category: "zapatos",
    description: "Zapatillas profesionales para running con máxima comodidad.",
    inStock: true,
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
    ]
  },
  {
    id: 6,
    name: "Blusa Elegante",
    price: 45.99,
    image: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg",
    category: "ropa-mujer",
    description: "Blusa elegante para ocasiones especiales.",
    inStock: true,
    gallery: [
      "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg"
    ]
  },
  {
    id: 7,
    name: "Jeans Clásicos",
    price: 59.99,
    image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg",
    category: "ropa-hombre",
    description: "Jeans clásicos de corte regular para hombre.",
    inStock: true,
    gallery: [
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg"
    ]
  },
  {
    id: 8,
    name: "Smart TV 55\"",
    price: 699.99,
    image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg",
    category: "tecnologia",
    description: "Smart TV de 55 pulgadas con resolución 4K y HDR.",
    inStock: true,
    discount: 10,
    gallery: [
      "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg"
    ]
  },
  {
    id: 9,
    name: "Sofá Moderno",
    price: 899.99,
    image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    category: "hogar",
    description: "Sofá moderno de 3 plazas con tapizado premium.",
    inStock: true,
    gallery: [
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
    ]
  },
  {
    id: 10,
    name: "Tacones Elegantes",
    price: 89.99,
    image: "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg",
    category: "zapatos",
    description: "Tacones elegantes para ocasiones especiales.",
    inStock: true,
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg"
    ]
  },
  {
    id: 11,
    name: "Laptop Pro",
    price: 1299.99,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    category: "tecnologia",
    description: "Laptop profesional con las últimas especificaciones.",
    inStock: true,
    discount: 15,
    gallery: [
      "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    ]
  },
  {
    id: 12,
    name: "Zapatillas Casual",
    price: 79.99,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    category: "zapatos",
    description: "Zapatillas casuales perfectas para el día a día.",
    inStock: true,
    gallery: [
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg"
    ]
  },
  {
    id: 13,
    name: "Balón de Fútbol Profesional",
    price: 49.99,
    image: "https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg",
    category: "deportes",
    description: "Balón de fútbol profesional, diseñado para máximo rendimiento y durabilidad.",
    inStock: true,
    featured: true,
    gallery: [
      "https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg"
    ]
  },
  {
    id: 14,
    name: "Raqueta de Tenis",
    price: 129.99,
    image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg",
    category: "deportes",
    description: "Raqueta de tenis profesional con tecnología de última generación.",
    inStock: true,
    gallery: [
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg"
    ]
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  if (categorySlug === 'todas') return products;
  return products.filter(product => product.category === categorySlug);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
};