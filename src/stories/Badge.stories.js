import { Badge } from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Badge',
  component: Badge,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    // uppercase: {control: boolean}
  },
};

export const LightBlue = {
    args: {
      backgroundColor: 'lightBlue',
      label: 'Close',
      uppercase: false,
    },
  };
  
  export const DarkBlue = {
    args: {
      backgroundColor: 'darkBlue',
      label: 'Open',
      uppercase: true,
    },
  };