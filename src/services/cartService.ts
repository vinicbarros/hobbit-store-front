import { AxiosResponse } from "axios";
import { createAuthHeader } from "../helpers/createAuthHeader";
import { IFingerprintData } from "../types/cartType";
import { ProductType } from "../types/productTypes";
import api from "./api";

// eslint-disable-next-line prettier/prettier
export async function getFingerprint(): Promise<AxiosResponse<IFingerprintData, any>> {
  const response = await api.get("/cart/fingerprint");

  return response.data;
}

export async function postCart(productId: string) {
  const config = createAuthHeader();
  const response = await api.post(`/cart/${productId}`, {}, config);

  return response;
}

export async function getCart(): Promise<ProductType[]> {
  const config = createAuthHeader();
  const response = await api.get("/cart", config);

  return response.data as ProductType[];
}
