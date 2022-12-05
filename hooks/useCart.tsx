import { createStyles } from "@mantine/core";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { openCart, setGlobalCart } from "../features/cart/cartSlice";

export default function useCart() {
  const CART_STORE = useSelector((state: RootState) => state.cart.cart);

  let dispatch = useDispatch();

  const total = useCallback(() => {
    let total = 0;
    for (let i = 0; i < CART_STORE.length; i++) {
      total = total + CART_STORE[i].price * CART_STORE[i].inCart;
    }
    return total;
  }, [CART_STORE]);

  const clear = () => dispatch(setGlobalCart([]));

  const useStyles = createStyles((theme) => ({
    scollView: {
      [theme.fn.smallerThan("sm")]: {
        height: 500,
        overflow: "scroll",
      },
      [theme.fn.largerThan("sm")]: {
        height: 700,
        overflow: "scroll",
      },
    },
  }));

  const { classes } = useStyles();

  useEffect(() => {
    if (CART_STORE.length === 0) return;
    dispatch(openCart());
  }, [CART_STORE]);

  return { total, clear, CART_STORE, classes };
}
