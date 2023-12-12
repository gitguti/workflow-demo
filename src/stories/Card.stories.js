import { Card } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    // uppercase: {control: boolean}
  },
};

export const Challenge = {
    args: {
        description: "In operational excellence",
        title: "How do we reduce waste across our organization?"
    },
  };