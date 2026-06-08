export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  //images: string[];
  thumbnail: string;
  [key: string]: any;
}

export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
