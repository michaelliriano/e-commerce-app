import { screen } from "@testing-library/react";
import ProducsById from "@/pages/products/[id]";

import { renderWithProviders } from "../../../../utils/testing";
import * as nextRouter from "next/router";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/products/1" }));

describe("products/[id]", () => {
  it("renders a loader", () => {
    expect(renderWithProviders(<ProducsById />));
  });
});
