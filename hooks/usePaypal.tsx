import React, { useCallback } from "react";
import { displayPrice } from "../utils";
import useCart from "./useCart";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FUNDING_SOURCE } from "../types/paypal";
import { useDispatch } from "react-redux";
import { setToast } from "../features/toast/toastSlice";
import { closeCart } from "../features/cart/cartSlice";

export default function usePaypal() {
  const { total, clear } = useCart();
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
  };
  const price = useCallback(() => {
    return displayPrice(total()).split("$")[1];
  }, [total]);

  let dispatch = useDispatch();
  const fundingSources: FUNDING_SOURCE[] = ["paypal"];

  const createOrder = useCallback(
    (data: any, actions: any) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: price(),
            },
          },
        ],
      });
    },
    [price]
  );

  const onError = useCallback(() => {
    dispatch(closeCart());
    dispatch(
      setToast({
        title: "Paypal Payment Error.",
        color: "red",
        message:
          "Error processing your request. Please try another payment method.",
      })
    );
  }, []);

  const onApprove = useCallback((data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      dispatch(
        setToast({
          color: "green",
          title: "Success!",
          message: "Transaction completed by " + details.payer.name.given_name,
        })
      );
      clear();
    });
  }, []);

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        {fundingSources.map((source) => (
          <PayPalButtons
            key={source}
            forceReRender={[total]}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            fundingSource={source}
            disabled={total() === 0}
            style={{ layout: "vertical" }}
          />
        ))}
      </PayPalScriptProvider>
    </>
  );
}
