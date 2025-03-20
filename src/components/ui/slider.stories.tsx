import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '~/lib/utils';
import { Slider } from '~/components/ui/slider';

const meta = {
  title: 'UI/Slider',
  component: Slider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: cn('w-[60%]'),
  },
} satisfies Story;
