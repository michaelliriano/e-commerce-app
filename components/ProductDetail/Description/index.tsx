import { Title, Text, Rating } from "@mantine/core";
import React from "react";
import { Product } from "../../../types/product";
import { displayPrice } from "../../../utils/";

export default function Description({ product }: { product?: Product }) {
  return (
    <>
      {!!product && (
        <>
          <Title mt={20}>{product.title}</Title>
          <Text mt={10}>{product.subtitle}</Text>
          <Rating mt={30} value={product.rating} readOnly />
          <Text size={20} fw="500" mt={20}>
            {displayPrice(product.price)}
          </Text>
        </>
      )}
    </>
  );
}
