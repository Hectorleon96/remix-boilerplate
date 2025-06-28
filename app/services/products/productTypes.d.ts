type ProductCategory = {
  id: 1;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

type ProductImages = string[];

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ProductCategory;
  images: ProductImages;
  creationAt: string;
  updatedAt: string;
};
