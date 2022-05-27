import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserPanel from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/UserPanel",
  component: UserPanel,
} as ComponentMeta<typeof UserPanel>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof UserPanel> = (args) => (
  <div style={{ width: "200px" }}>
    <UserPanel {...args} />
  </div>
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { username: "Trang Nguyen" };

export const Undefined = Template.bind({});
Undefined.args = { username: undefined };
