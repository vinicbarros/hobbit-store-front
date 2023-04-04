import { ProductType } from "../types/productTypes";
import api from "./api";

export async function getProducts(): Promise<ProductType[]> {
  const response = await api.get("/products");

  return response.data as ProductType[];
}
