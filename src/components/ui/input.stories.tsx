import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '~/components/ui/input';

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default = {
  args: {
    type: 'email',
    placeholder: 'Email',
  },
} satisfies Story;
