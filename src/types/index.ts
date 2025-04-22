export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  featuredImage?: string;
  gallery?: string[];
  inStock: boolean;
  featured?: boolean;
  discount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}