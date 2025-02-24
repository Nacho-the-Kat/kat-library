import React from "react";
import Heatmap from "../components/Heatmap";
export default {
    title: "Components/Heatmap",
    component: Heatmap,
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["circle", "square"],
            },
        },
        hover: { control: "boolean" },
        events: { control: "boolean" },
    },
};
const Template = (args) => <Heatmap {...args}/>;
export const CircleHeatmap = Template.bind({});
CircleHeatmap.args = {
    width: 500,
    height: 500,
    type: "circle",
    hover: false,
    events: false,
    separation: 20,
    margin: { top: 10, right: 20, bottom: 110, left: 20 },
};
export const SquareHeatmap = Template.bind({});
SquareHeatmap.args = {
    width: 500,
    height: 500,
    type: "square",
    hover: false,
    events: false,
    separation: 20,
    margin: { top: 10, right: 20, bottom: 110, left: 20 },
};
export const WithHoverCircle = Template.bind({});
WithHoverCircle.args = {
    width: 500,
    height: 500,
    type: "circle",
    hover: true,
    events: false,
    borderOnHover: true,
};
export const WithHoverSquare = Template.bind({});
WithHoverSquare.args = {
    width: 500,
    height: 500,
    type: "square",
    hover: true,
    events: false,
    borderOnHover: true,
};
export const WithClickEventsCircle = Template.bind({});
WithClickEventsCircle.args = {
    width: 500,
    height: 500,
    type: "circle",
    hover: false,
    events: true,
};
export const WithClickEventsSquare = Template.bind({});
WithClickEventsSquare.args = {
    width: 500,
    height: 500,
    type: "square",
    hover: false,
    events: true,
};
//# sourceMappingURL=Heatmap.stories.jsx.map