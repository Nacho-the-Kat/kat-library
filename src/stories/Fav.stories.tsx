import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Fav from "../components/Fav";

export default {
  title: "Components/Fav",
  component: Fav,
} as Meta<typeof Fav>;

const Template: StoryFn<typeof Fav> = (args) => <Fav {...args} />;

export const Default = Template.bind({});
Default.args = { checked: false };

export const Checked = Template.bind({});
Checked.args = { checked: true };
