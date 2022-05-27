import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sidebar from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/Sidebar",
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Sidebar> = () => (
  <div style={{ width: "300px" }}>
    <Sidebar />
  </div>
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
