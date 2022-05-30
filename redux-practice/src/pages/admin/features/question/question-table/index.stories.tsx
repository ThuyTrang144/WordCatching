import { QUESTION_LIST } from "@constants/question";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import QuestionTable from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/QuestionTable",
  component: QuestionTable,
} as ComponentMeta<typeof QuestionTable>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof QuestionTable> = (args) => (
  <QuestionTable {...args} />
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  questions: QUESTION_LIST,
};
