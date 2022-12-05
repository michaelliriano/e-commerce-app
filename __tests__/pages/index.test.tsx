import { screen } from "@testing-library/react";
import Home from "@/pages/index";

import { renderWithProviders } from "../../utils/testing";
import * as nextRouter from "next/router";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

describe("Home", () => {
  it("renders a heading", () => {
    renderWithProviders(<Home />);

    const heading = screen.getByText("Welcome!");
    expect(heading).toBeInTheDocument();
  });
});
