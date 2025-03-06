import { Meta, StoryObj } from "@storybook/react";
import Widget from "../components/Widget";
declare const meta: Meta<typeof Widget>;
export default meta;
type Story = StoryObj<typeof Widget>;
export declare const Default: Story;
export declare const Clickable: Story;
