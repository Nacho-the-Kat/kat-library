import React from "react";
import Header from "../components/Header";
export default {
    title: "Components/Header",
    component: Header,
};
const Template = (args) => <Header {...args}/>;
export const Default = Template.bind({});
Default.args = {
    logoSrc: "https://katscan.xyz/static/media/logo.47d57aff3b1e724f34d9.png",
    title: "KatScan",
    subtitle: "Explore, Analyze, and Compare KRC-20 Token Data",
};
export const NoSubtitle = Template.bind({});
NoSubtitle.args = {
    logoSrc: "https://katscan.xyz/static/media/logo.47d57aff3b1e724f34d9.png",
    title: "KatScan",
    subtitle: "",
};
//# sourceMappingURL=Header.stories.jsx.map