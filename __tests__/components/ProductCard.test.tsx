import { render, screen } from "@testing-library/react";
import ProductCard from "@/components/common/ProductCard";
import { products } from "../../mocks/products";

describe("ProductCard.tsx", () => {
  const mockProduct = products[0];
  const testId = "product-card";

  beforeEach(() => {
    render(<ProductCard product={{ ...mockProduct, inCart: 1 }} />);
  });

  it("renders a image", async () => {
    const image = await screen.findByTestId(testId);
    expect(image.style.backgroundImage).toEqual(
      `url(${mockProduct.images[0]})`
    );
  });

  it("renders a title", () => {
    const title = screen.getByText(
      'BAKER Brand Logo 7.75" Complete Skateboard'
    );
    expect(title).toBeInTheDocument();
  });

  it("renders a subtitle", () => {
    const subtitle = screen.getByText(
      'Baker Brand Logo 7.75" Complete Skateboard. 7-ply ...'
    );
    expect(subtitle).toBeInTheDocument();
  });

  it("renders a price", () => {
    const price = screen.getByText("$150.00");
    expect(price).toBeInTheDocument();
  });
});
