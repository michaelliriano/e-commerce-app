import React from "react";
import { Box } from "@mantine/core";

export default function ProductWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gridAutoRows: "minmax(100px, auto)",
        gap: "10px",
      }}
    >
      {children}
    </Box>
  );
}
