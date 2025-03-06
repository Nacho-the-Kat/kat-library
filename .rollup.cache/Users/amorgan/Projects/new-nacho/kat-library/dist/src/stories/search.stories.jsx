import SearchComponent from "../components/Search";
export default {
    title: "Components/Search",
    component: SearchComponent,
};
const sampleData = [
    { tick: "NACHO", image: "https://krc20-assets.kas.fyi/icons/KASPY.jpg" },
    { tick: "KASPY", image: "https://krc20-assets.kas.fyi/icons/KASPY.jpg" },
    { tick: "HJKL" }, // No image, should use fallback icon
    { tick: "KASPER", image: "https://krc20-assets.kas.fyi/icons/KASPER.jpg" },
    { tick: "KEIRO", image: "https://krc20-assets.kas.fyi/icons/KEIRO.jpg" },
    { tick: "DDDL" },
    { tick: "KEKE", image: "https://krc20-assets.kas.fyi/icons/KEKE.jpg" },
];
const Template = (args) => <SearchComponent {...args}/>;
export const Default = Template.bind({});
Default.args = {
    placeholder: "Search tokens...",
};
export const WithHint = Template.bind({});
WithHint.args = {
    placeholder: "Search tokens...",
    showHint: true,
};
export const WithAutocomplete = Template.bind({});
WithAutocomplete.args = {
    placeholder: "Search tokens...",
    enableAutocomplete: true,
    suggestions: sampleData,
};
//# sourceMappingURL=search.stories.jsx.map