import React from "react";
import Grid from "../components/Grid";
import Widget from "../components/Widget";
import { ArrowRightIcon, HomeIcon, UserIcon, ChartBarIcon, CogIcon, BellIcon, InboxIcon, ShieldCheckIcon, StarIcon, BriefcaseIcon, ChatBubbleBottomCenterIcon, HeartIcon } from "@heroicons/react/24/outline";
const icons = [
    <ArrowRightIcon key="arrow" className="w-6 h-6"/>,
    <HomeIcon key="home" className="w-6 h-6"/>,
    <UserIcon key="user" className="w-6 h-6"/>,
    <ChartBarIcon key="chart" className="w-6 h-6"/>,
    <CogIcon key="cog" className="w-6 h-6"/>,
    <BellIcon key="bell" className="w-6 h-6"/>,
    <InboxIcon key="inbox" className="w-6 h-6"/>,
    <ShieldCheckIcon key="shield" className="w-6 h-6"/>,
    <StarIcon key="star" className="w-6 h-6"/>,
    <BriefcaseIcon key="briefcase" className="w-6 h-6"/>,
    <ChatBubbleBottomCenterIcon key="chat" className="w-6 h-6"/>,
    <HeartIcon key="heart" className="w-6 h-6"/>
];
const meta = {
    title: "Components/Grid",
    component: Grid,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (<Grid>
      {Array.from({ length: 12 }).map((_, index) => (<Widget key={index} value={`Widget ${index + 1}`} icon={React.cloneElement(icons[index % icons.length], { key: index })}/>))}
    </Grid>),
};
//# sourceMappingURL=Grid.stories.jsx.map