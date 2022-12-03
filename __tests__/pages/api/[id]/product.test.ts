/**
 * @jest-environment node
 */

import { createMocks } from "node-mocks-http";
import productHandler from "@/pages/api/v1/products/[id]";
import { products } from "../../../../mocks/products";

describe("/api/v1/products/id", () => {
  test("Returns product by id", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: 1,
      },
    });

    await productHandler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        product: products[0],
      })
    );
  });
});
