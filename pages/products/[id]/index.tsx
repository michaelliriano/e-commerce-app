import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/product";
import axios from "axios";
import ProductDetail from "@/components/ProductDetail";

export default function ProductIdPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/v1/products/" + id).then(({ data }) => {
      setProduct(data.product);
      setLoading(false);
    });
  }, [id]);

  return <ProductDetail product={product} loading={loading} />;
}
