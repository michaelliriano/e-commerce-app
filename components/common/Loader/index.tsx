import { Box } from "@mantine/core";
import React from "react";
import { Loader as LoaderComponent } from "@mantine/core";

export default function Loader() {
  return (
    <Box
      data-testid="loader"
      mt={100}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoaderComponent size={30} />
    </Box>
  );
}
