import { ProductService } from "../../../../services/product";

export default async (req, res) => {
  try {
    const service = new ProductService();
    const products = await service.fetchProducts();

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
};
