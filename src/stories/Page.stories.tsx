import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Page from "../components/Page";
import Title from "../components/Title";

export default {
  title: "Components/Page",
  component: Page,
} as Meta<typeof Page>;

const Template: StoryFn<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Title text=" Basic Page" />
};
