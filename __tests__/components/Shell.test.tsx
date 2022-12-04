import { screen } from "@testing-library/react";
import Shell from "@/components/common/Shell";
import { renderWithProviders } from "../../utils/testing";
import * as nextRouter from "next/router";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

describe("Shell.tsx", () => {
  beforeEach(() => {
    renderWithProviders(<Shell />);
  });

  it("renders the navbar", () => {
    const navbar = screen.findByTestId("navbar");
    expect(navbar).toBeTruthy();
    const title = screen.getByText("E-Commerce");
    expect(title).toBeInTheDocument();
  });
});
