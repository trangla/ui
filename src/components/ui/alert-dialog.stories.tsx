import type { Meta, StoryObj } from '@storybook/react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '~/components/ui/alert-dialog';
import { Button } from '~/components/ui/button';

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default = {
  args: {
    children: [
      <>
        <AlertDialogTrigger asChild>
          <Button variant='outline'>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </>,
    ],
  },
} satisfies Story;
