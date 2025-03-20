import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '~/components/ui/checkbox';
const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full flex items-center gap-2'>
        <Story />
        <label
          htmlFor='terms'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
          Accept terms and conditions
        </label>
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default = {
  args: {
    id: 'terms',
  },
} satisfies Story;

export const Disabled = {
  args: {
    id: 'terms2',
    disabled: true,
  },
} satisfies Story;
