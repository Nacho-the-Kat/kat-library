import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MenuComponent from "../components/Menu";

export default {
  title: "Components/Menu",
  component: MenuComponent,
} as Meta<typeof MenuComponent>;

const oneLevelMenu = [
  { label: "Scan", href: "#" },
  { label: "About", href: "#" },
  { label: "Whitepaper", href: "#" },
];

const twoLevelMenu = [
  { label: "Scan", href: "#" },
  { 
    label: "Explore KRC-20", 
    children: [
      { label: "Search Transactions", href: "#" },
      { label: "Search Addresses", href: "#" },
      { label: "Top Holders", href: "#" },
    ]
  },
  { 
    label: "Analyze KRC-20", 
    children: [
      { label: "All Tokens", href: "#" },
      { label: "Side by side", href: "#" },
      { label: "Mint Heatmap", href: "#" },
      { label: "MarketCap Cal", href: "#" },
    ]
  },
  { 
    label: "Tools", 
    children: [
      { label: "Trade on KSPR", href: "#" },
      { label: "Mint and Deploy", href: "#" },
      { label: "Announcements", href: "#" },
    ]
  },
];

const Template: StoryFn<typeof MenuComponent> = (args) => <MenuComponent {...args} />;

export const OneLevel = Template.bind({});
OneLevel.args = {
  items: oneLevelMenu,
};

export const TwoLevels = Template.bind({});
TwoLevels.args = {
  items: twoLevelMenu,
};
