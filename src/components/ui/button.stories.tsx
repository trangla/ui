import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { ChevronRight, Loader2, MailOpen } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary = {
  args: {
    children: [<>Button</>],
  },
} satisfies Story;

export const Secondary = {
  args: {
    variant: 'secondary',
    children: [<>Button</>],
  },
} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
    children: [<>Button</>],
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
    children: [<>Button</>],
  },
} satisfies Story;

export const Ghost = {
  args: {
    variant: 'ghost',
    children: [<>Button</>],
  },
} satisfies Story;

export const Link = {
  args: {
    variant: 'link',
    children: [<>Button</>],
  },
} satisfies Story;

export const Icon = {
  args: {
    variant: 'outline',
    size: 'icon',
    children: [
      <>
        <ChevronRight />
      </>,
    ],
  },
} satisfies Story;

export const WithIcon = {
  args: {
    children: [
      <>
        <MailOpen /> Login with Email
      </>,
    ],
  },
} satisfies Story;

export const Loading = {
  args: {
    children: [
      <>
        <Loader2 className='animate-spin' />
        Please wait
      </>,
    ],
  },
} satisfies Story;

export const AsChild = {
  render: () => (
    <Button asChild>
      <a href='#'>Login</a>
    </Button>
  ),
} satisfies Story;
