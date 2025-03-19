import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div>
        <div className='space-y-1'>
          <h4 className='text-sm font-medium leading-none'>Radix Primitives</h4>
          <p className='text-sm text-muted-foreground'>
            An open-source UI component library.
          </p>
        </div>
        <Separator className='my-4' />
        <div className='flex h-5 items-center space-x-4 text-sm'>
          <div>Blog</div>
          <Separator orientation='vertical' />
          <div>Docs</div>
          <Separator orientation='vertical' />
          <div>Source</div>
        </div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default = {
  args: {},
} satisfies Story;
