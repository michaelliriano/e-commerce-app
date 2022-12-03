import { Product } from "@/types/product";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export default function useShell() {
  const drawers = {
    cart: useSelector((state: RootState) => state.cart.open),
  };

  const CART_STORE = useSelector((state: RootState) => state.cart.cart);

  const totalCartLength = useCallback(() => {
    return CART_STORE.length;
  }, [CART_STORE]);

  const calculateTotal = useCallback(() => {
    let amount = 0;
    CART_STORE.forEach((product: Product) => (amount = amount + product.price));
    return amount;
  }, [CART_STORE]);

  return {
    calculateTotal,
    totalCartLength,
    CART_STORE,
    drawers,
  };
}
