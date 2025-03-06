import { Meta } from "@storybook/react";
interface TabItem {
    label: string;
    content: React.ReactNode;
}
declare const _default: Meta;
export default _default;
export declare const Default: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
    tabs: TabItem[];
}>;
export declare const WithIcons: import("@storybook/csf").AnnotatedStoryFn<import("@storybook/react").ReactRenderer, {
    tabs: TabItem[];
}>;
