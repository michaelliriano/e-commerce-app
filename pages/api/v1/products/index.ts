import type { NextApiRequest, NextApiResponse } from "next";
import { ProductService } from "../../../../services/product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const service = new ProductService();
    const products = await service.fetchProducts();

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
}
