import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '~/components/ui/skeleton';

const meta = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full flex gap-4'>
        <Story />
        <div className='flex items-center space-x-4'>
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
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
    className: 'h-[125px] w-[250px] rounded-xl ',
  },
} satisfies Story;
