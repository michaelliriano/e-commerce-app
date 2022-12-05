import { Box, Button, Drawer, ScrollArea, Text, Title } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import { closeCart } from "../../../../features/cart/cartSlice";
import useShell from "../useShell";
import useCart from "../../../../hooks/useCart";
import { displayPrice } from "../../../../utils";
import ProductCard from "../../ProductCard";
import Action from "@/components/ProductDetail/Action";
import usePaypal from "../../../../hooks/usePaypal";
import useHome from "../../../../hooks/useHome";

export default function Cart() {
  const { calculateTotal, totalCartLength, CART_STORE, drawers } = useShell();
  let dispatch = useDispatch();
  const { classes } = useCart();
  const PayPalButtons = usePaypal();
  const { redirect } = useHome();

  return (
    <>
      <Drawer
        opened={drawers.cart}
        position="right"
        onClose={() => dispatch(closeCart())}
        padding="xl"
        size="xl"
      >
        <Box
          mb={20}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Title size={20}>
              Cart {CART_STORE.length ? `(${totalCartLength()})` : ""}
            </Title>
          </Box>
          <Box>
            <Title size={20}> Subtotal</Title>
            <Text size={20}> {displayPrice(calculateTotal())}</Text>
          </Box>
        </Box>
        {PayPalButtons}

        {CART_STORE.length < 1 && <Text align="center">Nothing in cart.</Text>}

        <ScrollArea
          scrollbarSize={0}
          type="scroll"
          className={classes.scollView}
        >
          {CART_STORE.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              horizontal
              onClick={() => redirect(product.id)}
            >
              <Action product={product} withQuantity />
            </ProductCard>
          ))}
        </ScrollArea>
      </Drawer>
    </>
  );
}
