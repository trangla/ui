import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

type AccordionItemType = {
  question: string;
  answer: string;
};

const accordionItems: Record<string, AccordionItemType[]> = {
  single: [
    {
      question: 'Is it accessible?',
      answer: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      question: 'Is it styled?',
      answer:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      question: 'Is it animated?',
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ],
  multiple: [
    {
      question: 'Can I open multiple items?',
      answer:
        'Yes. Just set the type prop to "multiple" on the Accordion component.',
    },
    {
      question: 'Can I customize the styling?',
      answer: 'Yes. You can use the className prop to add custom styles.',
    },
    {
      question: 'Can I disable items?',
      answer:
        'Yes. Use the disabled prop on AccordionItem to disable specific items.',
    },
  ],
};

const AccordionDemo = ({
  items,
  type,
}: {
  items: AccordionItemType[];
  type: 'single' | 'multiple';
}) => (
  <Accordion type={type} collapsible={type === 'single'}>
    {items.map((item, index) => (
      <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>{item.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

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
  render: () => <AccordionDemo items={accordionItems.single} type='single' />,
} satisfies Story;

export const Multiple = {
  render: () => (
    <AccordionDemo items={accordionItems.multiple} type='multiple' />
  ),
} satisfies Story;
