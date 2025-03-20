import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';

const meta = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default = {
  args: {
    defaultValue: 'comfortable',
    children: [
      <>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='default' id='r1' />
          <label htmlFor='r1'>Default</label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='comfortable' id='r2' />
          <label htmlFor='r2'>Comfortable</label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='compact' id='r3' />
          <label htmlFor='r3'>Compact</label>
        </div>
      </>,
    ],
  },
} satisfies Story;

export const Form = {
  args: {
    children: [
      <div className='flex flex-col space-y-6'>
        <div className='space-y-3'>
          <div className='text-sm font-medium'>Notify me about...</div>
          <div className='flex flex-col space-y-1'>
            <div className='flex items-center space-x-3'>
              <RadioGroupItem value='all' id='r4' />
              <label htmlFor='r4' className='text-sm font-normal'>
                All new messages
              </label>
            </div>
            <div className='flex items-center space-x-3'>
              <RadioGroupItem value='mentions' id='r5' />
              <label htmlFor='r5' className='text-sm font-normal'>
                Direct messages and mentions
              </label>
            </div>
            <div className='flex items-center space-x-3'>
              <RadioGroupItem value='none' id='r6' />
              <label htmlFor='r6' className='text-sm font-normal'>
                Nothing
              </label>
            </div>
          </div>
        </div>
        <button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-24'>
          Submit
        </button>
      </div>,
    ],
  },
};
