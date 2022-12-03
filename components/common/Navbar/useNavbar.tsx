import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { closeCart } from "../../../features/cart/cartSlice";

export default function useNavBar() {
  const router = useRouter();
  const links = [
    {
      link: "/",
      label: "Home",
    },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);

  let dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.split("/")[1];
      setActive(`/${path}`);
    }

    return () => {};
  }, []);

  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const CART_STORE = useSelector((state: RootState) => state.cart.cart);

  const totalCartLength = useCallback(() => {
    return CART_STORE.length;
  }, [CART_STORE]);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
        close();
        dispatch(closeCart());
      }}
    >
      {link.label}
    </a>
  ));

  return {
    router,
    classes,
    items,
    CART_STORE,
    opened,
    toggle,
    totalCartLength,
  };
}
