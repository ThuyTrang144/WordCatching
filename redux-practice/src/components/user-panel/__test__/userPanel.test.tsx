import { fireEvent, render } from "@testing-library/react";
import UserPanel from "..";

const USER_NAME = "Trang Nguyen";

describe("UserPanel component", () => {
  test("should render UserPanel component", () => {
    const { getByTestId } = render(<UserPanel username={USER_NAME} />);
    expect(getByTestId("user-panel")).toBeInTheDocument();
  });

  test("should not open menu when render UserPanel component", () => {
    const { queryByTestId } = render(<UserPanel username={USER_NAME} />);
    expect(queryByTestId("user-panel__menu")).not.toBeInTheDocument();
  });

  test("should open menu when click to avatar button", () => {
    const { getByTestId } = render(<UserPanel username={USER_NAME} />);
    const userPanelBtn = getByTestId("user-panel-btn");
    fireEvent.click(userPanelBtn);
    expect(getByTestId("user-panel__menu")).toBeInTheDocument();
  });

  test("should render nothing if username is undefined", () => {
    const { queryByTestId } = render(<UserPanel />);
    expect(queryByTestId("user-panel__loading-btn")).not.toBeInTheDocument();
  });

  test("matches snapshot when having username", () => {
    const { asFragment } = render(<UserPanel username={USER_NAME} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot when username is undefined", () => {
    const { asFragment } = render(<UserPanel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
