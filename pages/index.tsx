import Head from "next/head";
import axios from "axios";
import { Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Product } from "../types/product";
import ProductCard from "@/components/ProductCard";
import ProductWrapper from "@/components/ProductWrapper";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("/api/v1/products").then(({ data }) => {
      setProducts(data.products);
    });
    return () => {};
  }, []);

  return (
    <div>
      <Head>
        <title>E-Commerce App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text mb={10}>Welcome to the ecom app</Text>
      </main>
      <ProductWrapper>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductWrapper>
    </div>
  );
}
