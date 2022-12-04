import React from "react";
import ImageGallery from "./ImageGallery";
import Wrapper from "./Wrapper";
import Description from "./Description";
import { ProductProps } from "./types";

export default function ProductDetail({ product, loading }: ProductProps) {
  return (
    <Wrapper
      loading={loading}
      image={<ImageGallery images={product?.images} />}
      description={<Description product={product} />}
    />
  );
}
