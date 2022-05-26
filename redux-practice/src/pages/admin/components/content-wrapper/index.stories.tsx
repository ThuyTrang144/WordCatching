import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentWrapper from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/ContentWrapper",
  component: ContentWrapper,
} as ComponentMeta<typeof ContentWrapper>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ContentWrapper> = (args) => (
  <ContentWrapper {...args} />
);

// 👇 Each story then reuses that template
export const QuestionPage = Template.bind({});
QuestionPage.args = {
  title: "Question",
  note: "1 item found",
  button: {
    name: "Create new item",
    icon: <FontAwesomeIcon icon={faPlus} />,
  },
};

export const AddPage = Template.bind({});
AddPage.args = {
  title: "Create new Item",
  button: {
    name: "Save",
    icon: <FontAwesomeIcon icon={faCheck} />,
  },
};
