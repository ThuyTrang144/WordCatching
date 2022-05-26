import { ComponentStory, ComponentMeta } from "@storybook/react";
import AdminPage from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Pages/Admin",
  component: AdminPage,
} as ComponentMeta<typeof AdminPage>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof AdminPage> = () => (
  <AdminPage />
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
