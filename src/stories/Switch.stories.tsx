import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SwitchComponent, { SwitchProps } from "../components/Switch";
import { BellIcon } from "@heroicons/react/20/solid";

export default {
  title: "Components/Switch",
  component: SwitchComponent,
  argTypes: {
    enabled: { control: "boolean" },
    name: { control: "text" },
    legend: { control: "text" },
    icon: { control: "boolean" },
  },
} as Meta<typeof SwitchComponent>;

const Template: StoryFn<SwitchProps> = (args) => {
  const [enabled, setEnabled] = useState(args.enabled);
  return <SwitchComponent {...args} enabled={enabled} onChange={setEnabled} />;
};

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};

export const WithName = Template.bind({});
WithName.args = {
  enabled: true,
  name: "Notifications",
};

export const WithLegend = Template.bind({});
WithLegend.args = {
  enabled: false,
  legend: "Enable notifications for updates",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  enabled: true,
  icon: <BellIcon className="w-5 h-5 text-blue-500" />,
};
