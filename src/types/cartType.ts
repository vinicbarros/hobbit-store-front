export interface IFingerprintData {
  fingerprint: string;
}

export type CartType = {
  _id: string;
  productId: string;
  fingerprint: string;
  productName: string;
  productImg: string;
  productPrice: number;
};
