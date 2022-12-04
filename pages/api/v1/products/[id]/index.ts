import { ProductService } from "../../../../../services/product";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const service = new ProductService();
    const product = await service.fetchById(Number(req.query.id));

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
}
