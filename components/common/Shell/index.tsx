import { Alert, AppShell, Container } from "@mantine/core";
import React from "react";
import Navbar from "../Navbar";
import useShell from "./useShell";
import { ShellProps } from "./types";
import { useDispatch } from "react-redux";
import { closeCart, openCart } from "../../../features/cart/cartSlice";
import Cart from "./Cart";
import { IconAlertCircle } from "@tabler/icons";

export default function Shell({ children }: ShellProps) {
  let dispatch = useDispatch();
  const { drawers, toast } = useShell();

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
        <Container>
          {!!toast.message && (
            <Alert
              mt={10}
              mb={20}
              icon={<IconAlertCircle size={16} />}
              title={toast.title}
              color={toast.color}
            >
              {toast.message}
            </Alert>
          )}
          {children}
        </Container>
      </AppShell>
    </>
  );
}
