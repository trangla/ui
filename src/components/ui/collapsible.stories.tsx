import * as React from 'react';
import { ChevronsUpDown } from 'lucide-react';

import { Button } from '~/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '~/components/ui/collapsible';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Collapsible>;

export default meta;

type Story = StoryObj<typeof Collapsible>;

const CollapsibleDemo: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className='w-[350px] space-y-2'>
      <CollapsibleTrigger asChild>
        <Button
          variant='outline'
          className='w-full justify-between'
          onClick={() => setIsOpen(!isOpen)}>
          Toggle Content
          <ChevronsUpDown className='h-4 w-4' />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className='p-4 border rounded-md'>
        <p className='text-sm'>This is the collapsible content.</p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const Default = {
  render: () => <CollapsibleDemo />,
} satisfies Story;
