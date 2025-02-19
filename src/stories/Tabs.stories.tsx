import { Meta, StoryFn } from "@storybook/react";
import TabsComponent from "../components/Tabs"; // ✅ Updated import

interface TabItem {
  label: string;
  content: React.ReactNode;
}

export default {
  title: "Components/Tabs",
  component: TabsComponent, // ✅ Updated component name
} as Meta;

const Template: StoryFn<{ tabs: TabItem[] }> = (args) => <TabsComponent {...args} />; // ✅ Updated name

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: "Tab 1", content: <div>Content for Tab 1</div> },
    { label: "Tab 2", content: <div>Content for Tab 2</div> },
    { label: "Tab 3", content: <div>Content for Tab 3</div> },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    { label: "🔥 Hot", content: <div>Trending Content</div> },
    { label: "⭐ Popular", content: <div>Popular Content</div> },
    { label: "📊 Stats", content: <div>Statistics Content</div> },
  ],
};
