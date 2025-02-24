import React from "react";
import Page from "../components/Page";
import Title from "../components/Title";
export default {
    title: "Components/Page",
    component: Page,
};
const Template = (args) => <Page {...args}/>;
export const Default = Template.bind({});
Default.args = {
    children: <Title text=" Basic Page"/>
};
//# sourceMappingURL=Page.stories.jsx.map