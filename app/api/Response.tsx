import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
  images: string[];
};
export type Products = {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
};
const request = axios.create({
  baseURL: "https://dummyjson.com",
});
export default async function Response(limit: number) {
  const response = await request.get<Products>(`/products?limit=${limit}`);

  return response.data;
}
