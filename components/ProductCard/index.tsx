import { Card, Box, Title, Text } from "@mantine/core";
import { shorten, displayPrice } from "../../utils";
import { ProductCardProps } from "./types";

export default function ProductCard({
  children,
  product,
  onClick,
  imageHeight,
  horizontal = false,
}: ProductCardProps) {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      style={{
        minHeight: horizontal ? 220 : 390,
        maxHeight: horizontal ? "fit-content" : "none",
        maxWidth: horizontal ? "none" : "auto",
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        alignItems: horizontal ? "center" : "space-between",
        justifyContent: horizontal ? "flex-end" : "space-between",
        marginBottom: 32,
        overflow: horizontal ? "visible" : "none",
      }}
    >
      <Box
        data-testid="product-card"
        onClick={onClick}
        mr={horizontal ? 40 : 0}
        style={{
          position: "relative",
          cursor: "pointer",
          minHeight: imageHeight || 150,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundImage: `url(${product.images[0]})`,
        }}
      ></Box>
      <Box style={{ minWidth: 200 }}>
        <Title mt={10} mb={10} size={16}>
          {product.title}
        </Title>
        {!horizontal && <p>{shorten(product.subtitle, 50)}...</p>}
        <Text>{displayPrice(product.price)}</Text>
        <Box style={{ zIndex: 1 }}>{children}</Box>
      </Box>
    </Card>
  );
}
