import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '~/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default = {
  args: {
    children: [
      <Toggle aria-label='Toggle italic'>
        <Bold className='h-4 w-4' />
      </Toggle>,
    ],
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
    children: [<Italic />],
  },
} satisfies Story;

export const WithText = {
  args: {
    children: [
      <Toggle aria-label='Toggle italic'>
        <Italic />
        Italic
      </Toggle>,
    ],
  },
} satisfies Story;

export const Small = {
  args: {
    size: 'sm',
    children: [<Italic />],
  },
} satisfies Story;

export const Large = {
  args: {
    size: 'lg',
    children: [<Italic />],
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
    children: [<Underline className='h-4 w-4' />],
  },
} satisfies Story;
