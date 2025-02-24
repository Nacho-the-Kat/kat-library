import React from "react";
import Fav from "../components/Fav";
export default {
    title: "Components/Fav",
    component: Fav,
};
const Template = (args) => <Fav {...args}/>;
export const Default = Template.bind({});
Default.args = { checked: false };
export const Checked = Template.bind({});
Checked.args = { checked: true };
//# sourceMappingURL=Fav.stories.jsx.map