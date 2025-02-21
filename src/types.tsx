export type Trailer = {
  id: string;
  make: string;
  model: string;
  year: number;
  type: string;
  price: number;
  status: string;
  thumbnail: string;
}

export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
}

export type Sale = {
  id: string;
  customerId: string;
  trailerId: string;
  saleDate: string;
  salePrice: number;
  paymentMethod: string;
  status: string;
}