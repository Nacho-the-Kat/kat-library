import React from "react";
import Card from "../components/Card";
import { ArrowTrendingUpIcon, ChartBarIcon } from "@heroicons/react/24/outline";
const meta = {
    title: "Components/Card",
    component: Card,
    argTypes: {
        title: { control: "text" },
        icon: { control: "select", options: ["ArrowTrendingUpIcon", "ChartBarIcon"] },
        children: { control: "text" },
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        title: "Minting Progress",
        icon: <ArrowTrendingUpIcon className="w-6 h-6 text-teal-400"/>,
        children: (<p className="text-sm text-gray-600 dark:text-gray-300">
        Track your minting process efficiently with real-time updates.
      </p>),
    },
};
export const WithChartIcon = {
    args: {
        title: "Statistics Overview",
        icon: <ChartBarIcon className="w-6 h-6 text-teal-400"/>,
        children: (<p className="text-sm text-gray-600 dark:text-gray-300">
        Visualize key metrics and trends in your project.
      </p>),
    },
};
//# sourceMappingURL=Card.stories.jsx.map