import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorPicker from "./ColorPicker";

describe("Test Colorpicker", () => {
  it("should render pallete and rectangle", () => {
    render(<ColorPicker />);

    expect(screen.getByTestId("color-input-test")).toBeInTheDocument();
    expect(screen.getByTestId("color-block-test")).toBeInTheDocument();
  });

  it("should have white color by default", () => {
    render(<ColorPicker />);

    expect(screen.getByTestId("color-block-test")).toHaveStyle({
      backgroundColor: "#fff",
    });
  });

  it("should render block with the color passed in parameters by string", () => {
    render(<ColorPicker initialColor="red" />);

    expect(screen.getByTestId("color-block-test")).toHaveStyle({
      backgroundColor: "red",
    });
  });

  it("should render block with the color passed in parameters by hex code", () => {
    render(<ColorPicker initialColor="#eee" />);

    expect(screen.getByTestId("color-block-test")).toHaveStyle({
      backgroundColor: "#eee",
    });
  });

});
