import React from "react";
import ImageGallery from "./ImageGallery";
import Wrapper from "./Wrapper";
import Description from "./Description";
import { ProductProps } from "./types";
import Action from "./Action";

export default function ProductDetail({ product, loading }: ProductProps) {
  return (
    <Wrapper
      loading={loading}
      action={!!product && <Action product={product} />}
      image={<ImageGallery images={product?.images} />}
      description={<Description product={product} />}
    />
  );
}
