import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';

const meta = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default = {
  args: {
    id: 'airplane-mode',
    children: [<Label htmlFor='airplane-mode'>Airplane Mode</Label>],
  },
} satisfies Story;
