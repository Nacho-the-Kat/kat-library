import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TreemapComponent, { TreemapProps } from '../components/Tree';

const testData = {
  id: 'root',
  children: [
    { id: 'child1', value: 50 },
    { id: 'child2', value: 30 },
    {
      id: 'child3',
      children: [
        { id: 'grandchild1', value: 10 },
        { id: 'grandchild2', value: 5 },
      ],
    },
  ],
};

export default {
  title: 'Components/TreemapComponent',
  component: TreemapComponent,
  argTypes: {
    width: { control: { type: 'number', min: 100, max: 1000, step: 50 } },
    height: { control: { type: 'number', min: 100, max: 1000, step: 50 } },
    margin: { control: 'object' },
    data: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<TreemapProps> = (args) => <TreemapComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 600,
  height: 400,
  data: testData,
  margin: { top: 10, right: 10, bottom: 10, left: 10 },
};

export const SmallTreemap = Template.bind({});
SmallTreemap.args = {
  width: 300,
  height: 200,
  data: testData,
  margin: { top: 5, right: 5, bottom: 5, left: 5 },
};

export const LargeTreemap = Template.bind({});
LargeTreemap.args = {
  width: 800,
  height: 600,
  data: testData,
  margin: { top: 15, right: 15, bottom: 15, left: 15 },
};
