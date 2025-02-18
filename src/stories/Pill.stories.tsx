import { Meta, StoryObj } from "@storybook/react";
import Pill from "../components/Pill";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "dark", "gray", "accent"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    label: "Pre-Mint",
    color: "primary",
  },
};
