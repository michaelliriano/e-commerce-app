import Head from "next/head";
import { Text, Box } from "@mantine/core";
import ProductCard from "@/components/common/ProductCard";
import ProductWrapper from "@/components/ProductWrapper";
import useHome from "../hooks/useHome";
import Loader from "@/components/common/Loader";

export default function Home() {
  const { products, redirect, loading } = useHome();

  return (
    <Box>
      <Head>
        <title>E-Commerce App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text mb={10}>Welcome!</Text>
      </main>
      {loading ? (
        <Loader />
      ) : (
        <ProductWrapper>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => redirect(product.id)}
            />
          ))}
        </ProductWrapper>
      )}
    </Box>
  );
}
