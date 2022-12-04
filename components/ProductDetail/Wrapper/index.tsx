import { Box, Card } from "@mantine/core";
import React from "react";
import Loader from "@/components/common/Loader";

export default function DetailWrapper({
  loading,
  image,
  description,
}: {
  loading: boolean;
  image: React.ReactNode;
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
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  mb={20}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Card>
      )}
    </>
  );
}
