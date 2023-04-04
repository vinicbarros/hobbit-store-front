import { ProductType } from "../types/productTypes";
import api from "./api";

export async function getProducts(): Promise<ProductType[]> {
  const response = await api.get("/products");

  return response.data as ProductType[];
}

export async function getProduct(productId: string) {
  const response = await api.get(`/products/product/${productId}`);

  return response.data as ProductType;
}

export async function getProductsByCategory(category: string) {
  const response = await api.get(`/products/${category}`);

  return response.data as ProductType[];
}
