import WidgetChartComponent from "../components/WidgetChart";
export default {
    title: "Components/WidgetChart",
    component: WidgetChartComponent,
};
const sampleData = [
    { date: new Date(2024, 0, 1), value: 50 },
    { date: new Date(2024, 0, 2), value: 75 },
    { date: new Date(2024, 0, 3), value: 60 },
    { date: new Date(2024, 0, 4), value: 90 },
    { date: new Date(2024, 0, 5), value: 100 },
];
const Template = (args) => <WidgetChartComponent {...args}/>;
export const Default = Template.bind({});
Default.args = {
    title: "Active Addresses",
    subtitle: "Number of addresses involved in transactions",
    data: sampleData,
    width: 600,
    height: 300,
};
//# sourceMappingURL=WidgetChart.stories.jsx.map