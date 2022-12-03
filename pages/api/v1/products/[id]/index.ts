import { ProductService } from "../../../../../services/product";

export default async (req, res) => {
  try {
    const service = new ProductService();
    const product = await service.fetchById(Number(req.query.id));

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
};
