import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '~/components/ui/progress';

const meta = {
  title: 'UI/Progress',
  component: Progress,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default = {
  args: {
    value: 99,
    className: 'w-[60%]',
    children: [],
  },
} satisfies Story;
