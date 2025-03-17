import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '~/components/ui/skeleton';

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
} satisfies Story;

export const Card = {
  args: {
    className: 'h-[125px] w-[250px] rounded-xl',
  },
} satisfies Story;
