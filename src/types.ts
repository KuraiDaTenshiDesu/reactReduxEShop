export type TProduct = {
  id: number;
  name: string;
  price: number;
};

export interface CartProduct extends TProduct {
  count: number;
}
