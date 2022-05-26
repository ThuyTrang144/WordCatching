import { IMAGE } from "@constants/image";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageItem from ".";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Components/ImageItem",
  component: ImageItem,
} as ComponentMeta<typeof ImageItem>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ImageItem> = (args) => (
  <div style={{ marginTop: "100px" }}>
    <ImageItem {...args} />
  </div>

);

// 👇 Each story then reuses that template
export const Square = Template.bind({});
Square.args = {
  image: IMAGE,
};

export const Circle = Template.bind({});
Circle.args = {
  shape: "circle",
  image: IMAGE,
};

export const CircleLarge = Template.bind({});
CircleLarge.args = {
  shape: "circle",
  size: "large",
  image: IMAGE,
};
