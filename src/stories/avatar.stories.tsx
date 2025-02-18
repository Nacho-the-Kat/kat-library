import { Meta, StoryObj } from "@storybook/react";
import Avatar from "../components/Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    imageUrl: { control: "text" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageUrl: "",
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/150",
  },
};
