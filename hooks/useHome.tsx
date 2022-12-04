import { Product } from "../types/product";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { closeCart } from "../features/cart/cartSlice";

export default function useHome() {
  let dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    axios.get("/api/v1/products").then(({ data }) => {
      setProducts(data.products);
      setLoading(false);
    });
    return () => {};
  }, []);

  const redirect = useCallback((id: number) => {
    router.push(`/products/${id}`);
    dispatch(closeCart());
  }, []);
  return {
    loading,
    redirect,
    products,
  };
}
