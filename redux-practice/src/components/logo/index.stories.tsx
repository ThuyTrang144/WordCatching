import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { href: "#" };
