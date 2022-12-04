import { Box, Card } from "@mantine/core";
import React from "react";
import Loader from "@/components/common/Loader";

export default function DetailWrapper({
  loading,
  image,
  description,
  action,
}: {
  loading: boolean;
  image: React.ReactNode;
  action: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Card p={0} withBorder>
          <Box
            mt={20}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box></Box>
              {image}
            </Box>
            <Box px={10} style={{ maxWidth: 400 }}>
              {description}

              <Box mt={20}>
                <Box mb={20}>{action}</Box>
              </Box>
            </Box>
          </Box>
        </Card>
      )}
    </>
  );
}
