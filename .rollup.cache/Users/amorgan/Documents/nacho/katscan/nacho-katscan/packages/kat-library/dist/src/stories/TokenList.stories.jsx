import TokenList from "../components/TokenList";
import { FireIcon } from "@heroicons/react/24/solid";
export default {
    title: "Components/TokenList",
    component: TokenList,
};
const sampleData = [
    { tick: "NACHO", image: "https://krc20-assets.kas.fyi/icons/KASPY.jpg", price: "$0.000046", change: -11 },
    { tick: "KASPY", image: "https://krc20-assets.kas.fyi/icons/KASPY.jpg", price: "$0.000038", change: 5 },
    { tick: "HJKL", price: "$0.000026", change: 12 }, // No image, should use default icon
    { tick: "KASPER", image: "https://krc20-assets.kas.fyi/icons/KASPER.jpg", price: "$0.000075", change: 2 },
    { tick: "KEIRO", image: "https://krc20-assets.kas.fyi/icons/KEIRO.jpg", price: "$0.000035", change: 31 },
    { tick: "DDDL", price: "$0.000021", change: -9 },
    { tick: "KEKE", image: "https://krc20-assets.kas.fyi/icons/KEKE.jpg", price: "$0.000019", change: -2 },
];
const Template = (args) => <TokenList {...args}/>;
export const Default = Template.bind({});
Default.args = {
    title: "Trending Tokens",
    icon: <FireIcon className="w-5 h-5 text-gray-500"/>,
    tokens: sampleData,
};
export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
    title: "Trending Tokens",
    tokens: sampleData,
};
export const WithLegend = Template.bind({});
WithLegend.args = {
    title: "Trending Tokens",
    legend: "🔥 Hot Market",
    tokens: sampleData,
    maxItems: 5,
};
//# sourceMappingURL=TokenList.stories.jsx.map