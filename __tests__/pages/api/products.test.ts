/**
 * @jest-environment node
 */

import { createMocks } from "node-mocks-http";
import productHandler from "@/pages/api/v1/products";
import { products } from "../../../mocks/products";

describe("/api/v1/products", () => {
  test("Returns all products", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await productHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        products,
      })
    );
  });
});
