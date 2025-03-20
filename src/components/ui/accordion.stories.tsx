import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default = {
  args: {
    type: 'single' as const,
    collapsible: true,
    children: [
      <AccordionItem key='item-1' value='item-1'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key='item-2' value='item-2'>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components'
          aesthetic.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key='item-3' value='item-3'>
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>,
    ],
  },
} satisfies Story;

export const Multiple = {
  args: {
    type: 'multiple' as const,
    children: [
      <AccordionItem key='item-1' value='item-1'>
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. Just set the type prop to "multiple" on the Accordion component.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key='item-2' value='item-2'>
        <AccordionTrigger>Can I customize the styling?</AccordionTrigger>
        <AccordionContent>
          Yes. You can use the className prop to add custom styles.
        </AccordionContent>
      </AccordionItem>,
      <AccordionItem key='item-3' value='item-3'>
        <AccordionTrigger>Can I disable items?</AccordionTrigger>
        <AccordionContent>
          Yes. Use the disabled prop on AccordionItem to disable specific items.
        </AccordionContent>
      </AccordionItem>,
    ],
  },
} satisfies Story;
