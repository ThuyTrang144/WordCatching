import { render } from "@testing-library/react";
import Logo from "..";

describe("Logo component", () => {
  test("should render Logo component", () => {
    const { getByTestId } = render(<Logo href="#" />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Logo href="#" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
