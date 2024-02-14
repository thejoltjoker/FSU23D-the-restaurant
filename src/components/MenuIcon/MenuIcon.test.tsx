import { queryByTestId, render } from "@testing-library/react";
import MenuIcon from ".";

describe("MenuIcon", () => {
  it("Shows x mark when open", () => {
    const { container } = render(<MenuIcon isOpen={true} />);
    const xMark = queryByTestId(container, "x-mark");
    expect(xMark).toBeInTheDocument();
  });

  it("Shows bars when open", () => {
    const { container } = render(<MenuIcon isOpen={false} />);
    const xMark = queryByTestId(container, "bars");
    expect(xMark).toBeInTheDocument();
  });
});
