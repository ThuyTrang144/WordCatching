import { render } from "@testing-library/react";
import SideBar from "..";

describe("Sidebar component", () => {
  test("should render Sidebar component", () => {
    const { getByTestId } = render(<SideBar />);
    expect(getByTestId("sidebar")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<SideBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
