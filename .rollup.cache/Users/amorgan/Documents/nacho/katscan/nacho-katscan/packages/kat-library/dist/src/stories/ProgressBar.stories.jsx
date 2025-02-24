import React from "react";
import ProgressBar from "../components/ProgressBar";
export default {
    title: "Components/ProgressBar",
    component: ProgressBar,
};
const Template = (args) => <ProgressBar {...args}/>;
export const Default = Template.bind({});
Default.args = { value: 50 };
export const CustomColor = Template.bind({});
CustomColor.args = { value: 75, color: "bg-blue-500" };
export const Full = Template.bind({});
Full.args = { value: 100, color: "bg-green-500" };
//# sourceMappingURL=ProgressBar.stories.jsx.map