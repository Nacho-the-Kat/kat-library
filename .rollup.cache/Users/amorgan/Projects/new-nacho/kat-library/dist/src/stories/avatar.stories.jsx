import Avatar from "../components/Avatar";
const meta = {
    title: "Components/Avatar",
    component: Avatar,
    argTypes: {
        imageUrl: { control: "text" },
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        imageUrl: "",
    },
};
export const WithImage = {
    args: {
        imageUrl: "https://via.placeholder.com/150",
    },
};
//# sourceMappingURL=avatar.stories.jsx.map