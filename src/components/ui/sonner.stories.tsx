import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '~/components/ui/sonner';

const meta = {
  title: 'UI/Toaster',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full flex gap-4'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default = {
  args: {
    theme: 'system',
    children: 'Hello World',
  },
} satisfies Story;
