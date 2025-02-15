import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProgressBar from "../components/ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = { value: 50 };

export const CustomColor = Template.bind({});
CustomColor.args = { value: 75, color: "bg-blue-500" };

export const Full = Template.bind({});
Full.args = { value: 100, color: "bg-green-500" };
