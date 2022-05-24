import { Table } from "@chakra-ui/react";
import { QUESTION } from "@constants/question";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import QuestionItem from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/QuestionItem",
  component: QuestionItem,
} as ComponentMeta<typeof QuestionItem>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof QuestionItem> = (args) => (
  <Table style={{ marginTop: "50px" }}>
    <QuestionItem {...args} />
  </Table>
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  question: QUESTION,
};
