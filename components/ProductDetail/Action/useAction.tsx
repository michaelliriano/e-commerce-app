import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { setGlobalCart } from "../../../features/cart/cartSlice";
import { Product } from "../../../types/product";

export default function useAction({ product }: { product: Product }) {
  let dispatch = useDispatch();

  const CART_STORE = useSelector((state: RootState) => state.cart.cart);

  const remove = useCallback(
    (id: number) => {
      const cart = [...CART_STORE];
      const index = [...CART_STORE].findIndex((i) => i.id === id);
      cart.splice(index, 1);
      dispatch(setGlobalCart(cart));
    },
    [CART_STORE]
  );

  const add = useCallback(
    (product: Product) => {
      dispatch(setGlobalCart([...CART_STORE, { ...product }]));
    },
    [CART_STORE]
  );

  const existsInCart = useCallback(() => {
    return CART_STORE.find((p) => p.id === product.id);
  }, [CART_STORE, product]);

  const onChange = useCallback(
    (v: string) => {
      if (CART_STORE.find((c) => c.id === product.id)) {
        const newCart = [...CART_STORE];
        const indexC = newCart.findIndex((c) => c.id === product.id);
        newCart.splice(indexC, 1, { ...product, inCart: +v });
        dispatch(setGlobalCart(newCart));
        return;
      }
    },
    [CART_STORE]
  );

  return { add, remove, onChange, existsInCart };
}
