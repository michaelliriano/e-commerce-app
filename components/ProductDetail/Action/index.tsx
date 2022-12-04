import { Button, Select, Box } from "@mantine/core";
import React from "react";
import { Product } from "../../../types/product";
import useAction from "./useAction";

export default function Action({
  product,
  withQuantity = false,
}: {
  product: Product;
  withQuantity?: boolean;
}) {
  const { add, existsInCart, remove, onChange } = useAction({
    product,
  });

  const quantityList = (
    quantity: number
  ): { value: number; label: number }[] => {
    const options = [];
    for (let i = 0; i < quantity; i++) options.push(i + 1);
    return options.map((o) => ({ value: o, label: o }));
  };

  return (
    <Box mt={20}>
      {!!withQuantity && (
        <Select
          mb={10}
          onChange={(v) => onChange(v as string)}
          data={[...quantityList(product.quantity)].map((v) => ({
            value: v.value.toString(),
            label: v.value.toString(),
          }))}
          value={product.inCart.toString()}
          disabled={product.quantity < 1}
        />
      )}
      <Box>
        {!!existsInCart() ? (
          <Button fullWidth color="red" onClick={() => remove(product.id)}>
            Remove
          </Button>
        ) : (
          <Button
            fullWidth
            disabled={product.quantity < 1}
            color="dark"
            onClick={() => add(product)}
          >
            {product.quantity >= 1 ? "Add to Cart" : "Out of Stock"}
          </Button>
        )}
      </Box>
    </Box>
  );
}
