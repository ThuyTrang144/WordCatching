import { IMAGE } from "@constants/image";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import QuestionForm from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/Form/QuestionForm",
  component: QuestionForm,
} as ComponentMeta<typeof QuestionForm>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof QuestionForm> = (args) => (
  <QuestionForm {...args} />
);

// 👇 Each story then reuses that template
export const AddForm = Template.bind({});
AddForm.args = {
  title: "Create new question",
};

// 👇 Each story then reuses that template
export const EditForm = Template.bind({});
EditForm.args = {
  title: "Update question",
  formData: {
    id: "1",
    answer: "Bao cao",
    image: IMAGE,
  },
};
