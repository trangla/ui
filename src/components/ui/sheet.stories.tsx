import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet';

const meta = {
  title: 'UI/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Sheet>;

export default meta;

type Story = StoryObj<typeof Sheet>;

// Reusable form content component
const ProfileForm = () => (
  <div className='grid gap-4 py-4'>
    <div className='grid grid-cols-4 items-center gap-4'>
      <Label htmlFor='name' className='text-right'>
        Name
      </Label>
      <Input id='name' value='Pedro Duarte' className='col-span-3' />
    </div>
    <div className='grid grid-cols-4 items-center gap-4'>
      <Label htmlFor='username' className='text-right'>
        Username
      </Label>
      <Input id='username' value='@peduarte' className='col-span-3' />
    </div>
  </div>
);

// Base sheet content component
const BaseSheetContent = ({
  side,
  title,
  description,
  children,
}: {
  side?: 'top' | 'right' | 'bottom' | 'left';
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) => (
  <SheetContent
    side={side}
    className={side === undefined ? 'w-[400px] sm:w-[540px]' : undefined}>
    <SheetHeader>
      <SheetTitle>{title}</SheetTitle>
      <SheetDescription>{description}</SheetDescription>
    </SheetHeader>
    {children}
    {children && (
      <SheetFooter>
        <SheetClose asChild>
          <Button type='submit'>Save changes</Button>
        </SheetClose>
      </SheetFooter>
    )}
  </SheetContent>
);

// Story variants
const createSheetStory = (
  buttonText: string,
  side?: 'top' | 'right' | 'bottom' | 'left'
) =>
  ({
    args: {
      children: [
        <>
          <SheetTrigger asChild>
            <Button variant='outline'>{buttonText}</Button>
          </SheetTrigger>
          <BaseSheetContent
            side={side}
            title='Edit profile'
            description="Make changes to your profile here. Click save when you're done.">
            <ProfileForm />
          </BaseSheetContent>
        </>,
      ],
    },
  }) satisfies Story;

export const Default = createSheetStory('Open');
export const SideLeft = createSheetStory('Left', 'left');
export const SideRight = createSheetStory('Right', 'right');
export const SideTop = createSheetStory('Top', 'top');
export const SideBottom = createSheetStory('Bottom', 'bottom');

export const Size = {
  args: {
    children: [
      <>
        <SheetTrigger>Open</SheetTrigger>
        <BaseSheetContent
          title='Are you absolutely sure?'
          description='This action cannot be undone. This will permanently delete your account and remove your data from our servers.'
        />
      </>,
    ],
  },
} satisfies Story;
