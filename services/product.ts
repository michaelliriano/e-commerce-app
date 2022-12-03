import { products } from "../mocks/products";

export class ProductService {
  constructor() {}

  fetchProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(products), 500); // Simulate query to DB
    });
  }
  fetchById(id: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find((product) => product.id === id));
      }, 500); // Simulate query to DB
    });
  }
}
