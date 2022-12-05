import { Box, Card, Image } from "@mantine/core";
import React from "react";
import dynamic from "next/dynamic";

const Lightbox = dynamic(import("yet-another-react-lightbox"), { ssr: false }); // Async API cannot be server-side rendered
import useLightBox from "../../../hooks/useLightBox";

export default function ImageGallery({ images }: { images?: string[] }) {
  const { isLightBoxOpen, imageIndex, plugins, close, open, setImageIndex } =
    useLightBox();

  return (
    <>
      {!!images?.length && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            onClick={open}
            style={{
              objectFit: "contain",
              cursor: "pointer",
              maxHeight: 400,
            }}
            src={images[imageIndex]}
          />
          <Box
            my={20}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {images.length > 1 &&
              images
                .filter((p, i) => i < 4)
                .map((p, i) => (
                  <Card key={i} radius={7} withBorder={i === imageIndex}>
                    <Image
                      onClick={() => setImageIndex(i)}
                      src={p}
                      height={60}
                      width={60}
                      style={{ cursor: "pointer" }}
                      fit="contain"
                    />
                  </Card>
                ))}
          </Box>
          <Lightbox
            open={isLightBoxOpen}
            close={close}
            slides={images.map((i) => ({ src: i }))}
            plugins={plugins}
          />
        </Box>
      )}
    </>
  );
}
