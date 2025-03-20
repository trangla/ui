import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';

const meta = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Default = {
  args: {
    htmlFor: 'terms',
    children: [
      <div className='flex items-center space-x-2'>
        <Checkbox id='terms' />
        <Label htmlFor='terms'>Accept terms and conditions</Label>
      </div>,
    ],
  },
} satisfies Story;
