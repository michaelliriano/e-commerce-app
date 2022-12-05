import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/product";
import axios from "axios";
import ProductDetail from "@/components/ProductDetail";
import { useDispatch } from "react-redux";
import { clearToast, setToast } from "../../../features/toast/toastSlice";

export default function ProductIdPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);
  let dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/v1/products/" + id)
      .then(({ data }) => {
        setProduct({ ...data.product, inCart: 1 });
        setLoading(false);
        dispatch(clearToast());
      })
      .catch(() => {
        dispatch(
          setToast({
            title: "Network Error",
            color: "red",
            message: "Unable to fetch products. Please try again.",
          })
        );
      });
  }, [id]);

  return <ProductDetail product={product} loading={loading} />;
}
