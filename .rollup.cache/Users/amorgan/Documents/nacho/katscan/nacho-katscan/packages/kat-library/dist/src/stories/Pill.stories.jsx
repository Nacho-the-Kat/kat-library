import Pill from "../components/Pill";
const meta = {
    title: "Components/Pill",
    component: Pill,
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "dark", "gray", "accent"],
        },
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        label: "Pre-Mint",
        color: "primary",
    },
};
//# sourceMappingURL=Pill.stories.jsx.map