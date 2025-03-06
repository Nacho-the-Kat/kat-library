import AffiliateComponent from "../components/Affiliates";
export default {
    title: "Components/Affiliate",
    component: AffiliateComponent,
};
const Template = (args) => (<AffiliateComponent {...args}/>);
const affiliates = [
    { name: "Google", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", url: "https://www.google.com" },
    { name: "Facebook", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", url: "https://www.facebook.com" },
    { name: "X", icon: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg", url: "https://twitter.com" },
    { name: "KASPER", icon: "https://krc20-assets.kas.fyi/icons/KASPER.jpg" },
];
export const Default = Template.bind({});
Default.args = {
    affiliates,
    displayMode: "iconsWithNames",
    layout: "horizontal",
};
export const IconsOnly = Template.bind({});
IconsOnly.args = {
    affiliates,
    displayMode: "icons",
    layout: "horizontal",
};
export const VerticalLayout = Template.bind({});
VerticalLayout.args = {
    affiliates,
    displayMode: "iconsWithNames",
    layout: "vertical",
};
export const VerticalIconsOnly = Template.bind({});
VerticalIconsOnly.args = {
    affiliates,
    displayMode: "icons",
    layout: "vertical",
};
export const ClickableLinks = Template.bind({});
ClickableLinks.args = {
    affiliates,
    displayMode: "iconsWithNames",
    layout: "horizontal",
};
//# sourceMappingURL=affiliates.stories.jsx.map