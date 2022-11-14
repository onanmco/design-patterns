export type Order = {
  customer: {
    email: string;
  },
  product: {
    name: string;
    price: number;
  }
}