import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar } from '~/components/ui/calendar';

const meta = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof Calendar>;

const CalenderDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={(date: Date | undefined) => setDate(date)}
      className='rounded-md border shadow'
    />
  );
};
export const Default = {
  render: () => <CalenderDemo />,
} satisfies Story;
