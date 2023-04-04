import { AxiosResponse } from "axios";
import { IFingerprintData } from "../types/cartType";
import api from "./api";

// eslint-disable-next-line prettier/prettier
export async function getFingerprint(): Promise<AxiosResponse<IFingerprintData, any>> {
  const response = await api.get("/cart/fingerprint");

  return response.data;
}
