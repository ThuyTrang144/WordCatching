import { QUESTION_LIST } from "@constants/question";
import { render } from "@testing-library/react";
import QuestionTable from "..";

describe("Question Table component", () => {
  test("should render Question Table component", () => {
    const { getByTestId } = render(<QuestionTable questions={QUESTION_LIST} />);
    expect(getByTestId("question-table")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<QuestionTable questions={QUESTION_LIST} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
