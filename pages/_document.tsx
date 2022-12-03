import { Html, Head, Main, NextScript } from "next/document";
import { MantineProvider } from "@mantine/core";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: "light" }}
        >
          <Main />
          <NextScript />
        </MantineProvider>
      </body>
    </Html>
  );
}
