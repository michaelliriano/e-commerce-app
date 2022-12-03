import { Product } from "../../types/product";

export type ProductCardProps = {
  product: Product;
  children?: React.ReactNode;
  horizontal?: boolean;
  imageHeight?: number;
  onClick?: () => void;
};
