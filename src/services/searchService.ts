import { ProductType } from "../types/productTypes";
import api from "./api";

export async function searchProduct(name: string): Promise<ProductType[]> {
  const response = await api.get(`/search/${name}`);

  return response.data as ProductType[];
}
