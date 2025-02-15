import { Meta, StoryObj } from "@storybook/react";
import Widget from "../components/Widget";
import { ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Widget> = {
  title: "Components/Widget",
  component: Widget,
  argTypes: {
    value: { control: "text" },
    icon: { control: "select", options: ["ChartBarIcon", "CurrencyDollarIcon"] },
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Widget>;

export const Default: Story = {
  args: {
    value: "Statistics",
    icon: <ChartBarIcon className="w-6 h-6 text-teal-400" />,
  },
};

export const Clickable: Story = {
  args: {
    value: "Revenue",
    icon: <CurrencyDollarIcon className="w-6 h-6 text-teal-400" />,
    onClick: () => alert("Widget clicked!"),
  },
};
