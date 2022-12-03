import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Container,
  Group,
  Header,
  Paper,
  Title,
  Transition,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IconShoppingCart } from "@tabler/icons";
import { HEADER_HEIGHT } from "./styles";
import useNavBar from "./useNavbar";
import { NavBarProps } from "./types";

export default function Navbar({ drawer }: NavBarProps) {
  const {
    router,
    classes,
    items,
    CART_STORE,
    opened,
    toggle,
    totalCartLength,
  } = useNavBar();

  const [cachedCartLength, setCachedCartLength] = useState<number>(
    totalCartLength()
  );
  const [cartColor, setCartColor] = useState<"blue" | "green" | "red">("blue");

  useEffect(() => {
    if (cachedCartLength > totalCartLength()) {
      setCartColor("red");
    } else if (cachedCartLength < totalCartLength()) {
      setCartColor("green");
    }
    let timeout = setTimeout(() => {
      setCartColor("blue");
    }, 3000);
    setCachedCartLength(CART_STORE.length);
    return () => {
      clearTimeout(timeout);
    };
  }, [CART_STORE, totalCartLength]);

  return (
    <Header height={HEADER_HEIGHT} mb={-60} className={classes.root}>
      <Container className={classes.header}>
        <Title onClick={() => router.push("/")} size={24}>
          E-Commerce
        </Title>
        <Box style={{ display: "flex" }}>
          <Group spacing={5} className={classes.links} mr={20}>
            {items}
          </Group>
          <Group style={{ display: "flex", alignItems: "center" }}>
            <Box
              onClick={() => drawer.cart.open()}
              style={{ position: "relative", display: "flex" }}
              mr={10}
            >
              <ActionIcon style={{ zIndex: 3 }}>
                <IconShoppingCart size={40} />
              </ActionIcon>
              <Avatar
                color={cartColor}
                style={{
                  position: "absolute",
                  top: -10,
                  right: -15,
                }}
                radius="xl"
                size={25}
              >
                {CART_STORE.length ? totalCartLength() : "0"}
              </Avatar>
            </Box>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="sm"
            />
          </Group>
        </Box>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
