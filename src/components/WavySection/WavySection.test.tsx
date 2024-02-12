import { getByTestId, queryByTestId, render } from "@testing-library/react";
import WavySection from "./WavySection";
import { describe, it, expect } from "vitest";

describe("WavySection", () => {
  it("renders only top wave", () => {
    const { container } = render(
      <WavySection bgColor={"pale-yellow"} top={true} bottom={false} />,
    );
    const waveDividerTop = getByTestId(container, "wave-divider-top");
    expect(waveDividerTop).toBeVisible();

    const waveDividerBottom = queryByTestId(container, "wave-divider-bottom");
    expect(waveDividerBottom).not.toBeInTheDocument();
  });

  it("renders only bottom wave", () => {
    const { container } = render(
      <WavySection bgColor={"pale-yellow"} top={false} bottom={true} />,
    );
    const waveDividerTop = queryByTestId(container, "wave-divider-top");
    expect(waveDividerTop).not.toBeInTheDocument();

    const waveDividerBottom = getByTestId(container, "wave-divider-bottom");
    expect(waveDividerBottom).toBeVisible();
  });

  it("renders no wave", () => {
    const { container } = render(
      <WavySection bgColor={"pale-yellow"} top={false} bottom={false} />,
    );
    const waveDividerTop = queryByTestId(container, "wave-divider-top");
    expect(waveDividerTop).not.toBeInTheDocument();

    const waveDividerBottom = queryByTestId(container, "wave-divider-bottom");
    expect(waveDividerBottom).not.toBeInTheDocument();
  });

  it("renders top and bottom wave", () => {
    const { container } = render(
      <WavySection bgColor={"pale-yellow"} top={true} bottom={true} />,
    );
    const waveDividerTop = getByTestId(container, "wave-divider-top");
    expect(waveDividerTop).toBeVisible();

    const waveDividerBottom = getByTestId(container, "wave-divider-bottom");
    expect(waveDividerBottom).toBeVisible();
  });
});
