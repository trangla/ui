import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from '~/components/ui/scroll-area';
import { Separator } from '~/components/ui/separator';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const VerticalScroll = {
  args: {
    className: 'h-72 w-48 rounded-md border',
    defaultValue: 'account',
    children: [
      <div className='p-4'>
        <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className='text-sm'>
              {tag}
            </div>
            <Separator className='my-2' />
          </>
        ))}
      </div>,
    ],
  },
} satisfies Story;

interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
];
