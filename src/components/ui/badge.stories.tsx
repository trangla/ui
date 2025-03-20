import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default = {
  args: {
    children: [<>Badge</>],
  },
} satisfies Story;

export const Secondary = {
  args: {
    variant: 'secondary',
    children: [<>Secondary</>],
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
    children: [<>Outline</>],
  },
} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
    children: [<>Destructive</>],
  },
} satisfies Story;
