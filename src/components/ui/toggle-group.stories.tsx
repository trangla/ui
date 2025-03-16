import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
  title: 'UI/Toggle-group',
  component: ToggleGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Default = {
  args: {
    type: 'multiple',
    children: [
      <ToggleGroupItem key='bold' value='bold'>
        <Bold className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='italic' value='italic'>
        <Italic className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='strikethrough' value='strikethrough'>
        <Underline className='h-4 w-4' />
      </ToggleGroupItem>,
    ],
  },
} satisfies Story;

export const Outline = {
  args: {
    type: 'multiple',
    variant: 'outline',
    children: [
      <ToggleGroupItem key='bold' value='bold'>
        <Bold className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='italic' value='italic'>
        <Italic className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='strikethrough' value='strikethrough'>
        <Underline className='h-4 w-4' />
      </ToggleGroupItem>,
    ],
  },
} satisfies Story;

export const Single = {
  args: {
    type: 'single',
    children: [
      <ToggleGroupItem key='bold' value='bold'>
        <Bold className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='italic' value='italic'>
        <Italic className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='strikethrough' value='strikethrough'>
        <Underline className='h-4 w-4' />
      </ToggleGroupItem>,
    ],
  },
} satisfies Story;

export const Small = {
  args: {
    type: 'single',
    size: 'sm',
    children: [
      <ToggleGroupItem key='bold' value='bold'>
        <Bold className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='italic' value='italic'>
        <Italic className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='strikethrough' value='strikethrough'>
        <Underline className='h-4 w-4' />
      </ToggleGroupItem>,
    ],
  },
} satisfies Story;

export const Large = {
  args: {
    type: 'multiple',
    size: 'lg',
    children: [
      <ToggleGroupItem key='bold' value='bold'>
        <Bold className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='italic' value='italic'>
        <Italic className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='strikethrough' value='strikethrough'>
        <Underline className='h-4 w-4' />
      </ToggleGroupItem>,
    ],
  },
} satisfies Story;

export const Disabled = {
  args: {
    type: 'single',
    disabled: true,
    children: [
      <ToggleGroupItem key='bold' value='bold'>
        <Bold className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='italic' value='italic'>
        <Italic className='h-4 w-4' />
      </ToggleGroupItem>,
      <ToggleGroupItem key='strikethrough' value='strikethrough'>
        <Underline className='h-4 w-4' />
      </ToggleGroupItem>,
    ],
  },
} satisfies Story;
