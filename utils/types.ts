export type PostType = {
  id: number;
  title: string;
  body: string;
  tags: string[];
};

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  age: number;
  email: string;
  phone: string;
  address: {
    city: string;
    state: string;
  };
};

export type CartProductType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

export type CartSummaryType = {
  totalProducts: number;
  totalQuantity: number;
  total: number;
  discountedTotal: number;
};

export type CartType = {
  id: number;
  products: CartProductType[];
  title: string;
  price: number;
  quantity: number;
  totalProducts: number;
  totalQuantity: number;
  total: number;
  discountedTotal: number;
  thumbnail: string;
};
