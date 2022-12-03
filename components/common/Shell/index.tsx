import { AppShell, Container } from "@mantine/core";
import React from "react";
import Navbar from "../Navbar";
import useShell from "./useShell";
import { ShellProps } from "./types";
import { useDispatch } from "react-redux";
import { closeCart, openCart } from "../../../features/cart/cartSlice";
import Cart from "./Cart";

export default function Shell({ children }: ShellProps) {
  let dispatch = useDispatch();
  const { drawers } = useShell();

  return (
    <>
      <AppShell
        header={
          <Navbar
            drawer={{
              cart: {
                isOpen: drawers.cart,
                open: () => dispatch(openCart()),
                close: () => dispatch(closeCart()),
              },
            }}
          />
        }
      >
        <Cart />
        <Container>{children}</Container>
      </AppShell>
    </>
  );
}
