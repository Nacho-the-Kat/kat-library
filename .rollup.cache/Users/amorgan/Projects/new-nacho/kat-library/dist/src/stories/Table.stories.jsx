import React from "react";
import Table from "../components/Table";
import Avatar from "../components/Avatar";
import Fav from "@/components/Fav";
import ProgressBar from "@/components/ProgressBar";
import Pill from "@/components/Pill";
export default {
    title: "Components/Table",
    component: Table,
    tags: ["autodocs"], // ✅ Helps with Storybook autodocs
    argTypes: {
        summaryText: { control: "text" },
        subText: { control: "text" },
    },
};
const columns = [
    {
        accessorKey: "avatar",
        header: "",
        cell: ({ row }) => <Avatar imageUrl={row.original.avatar}/>,
    },
    {
        accessorKey: "ticker",
        header: "Ticker",
        cell: ({ row }) => (<div className="flex items-center gap-2">
          <Fav />
          {row.original.ticker}
        </div>),
    },
    { accessorKey: "launchType", header: "Launch Type" },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <Pill label={row.original.status} key={row.original.status} color="accent"/>,
    },
    { accessorKey: "maxSupply", header: "Max Supply" },
    { accessorKey: "preMinted", header: "Pre-Minted" },
    { accessorKey: "totalMinted", header: "Total Minted" },
    {
        accessorKey: "mintingProgress",
        header: "Minting Progress",
        cell: ({ row }) => (<div className="flex items-center gap-2">
          <ProgressBar value={row.original.mintingProgress}/>
        </div>),
    },
    { accessorKey: "deployedOn", header: "Deployed On" },
];
const data = [
    {
        id: 1,
        avatar: "https://krc20-assets.kas.fyi/icons/NACHO.jpg",
        ticker: "NACHO",
        launchType: "IPO",
        status: "Active",
        maxSupply: "100M",
        preMinted: "10M",
        totalMinted: "50M",
        mintingProgress: 50,
        deployedOn: "Dec 5, 24, 01:05 AM CST",
    },
    {
        id: 2,
        avatar: "https://krc20-assets.kas.fyi/icons/NACHO.jpg",
        ticker: "SLVR",
        launchType: "Direct Listing",
        status: "Active",
        maxSupply: "200M",
        preMinted: "20M",
        totalMinted: "100M",
        mintingProgress: 75,
        deployedOn: "Dec 6, 24, 01:05 AM CST",
    },
];
const Template = (args) => <Table {...args}/>;
export const Default = Template.bind({});
Default.args = {
    columns,
    data,
    summaryText: "A total of 1,253,011 Token Contracts found",
    subText: "Showing 653 Tokens with OK or Neutral Reputation",
};
export const WithoutText = Template.bind({});
WithoutText.args = {
    columns,
    data,
    summaryText: "",
    subText: "",
};
//# sourceMappingURL=Table.stories.jsx.map