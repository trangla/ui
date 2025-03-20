import type { Meta, StoryObj } from '@storybook/react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '~/components/ui/resizable';

const meta = {
  title: 'UI/ResizablePanelGroup',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default = {
  args: {
    direction: 'horizontal',
    className: 'max-w-md rounded-lg border md:min-w-[450px]',
    children: [
      <>
        <ResizablePanel defaultSize={50}>
          <div className='flex h-[200px] items-center justify-center p-6'>
            <span className='font-semibold'>One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction='vertical'>
            <ResizablePanel defaultSize={25}>
              <div className='flex h-full items-center justify-center p-6'>
                <span className='font-semibold'>Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className='flex h-full items-center justify-center p-6'>
                <span className='font-semibold'>Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </>,
    ],
  },
} satisfies Story;

export const Vertical = {
  args: {
    direction: 'vertical',
    className: 'min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]',
    children: [
      <>
        <ResizablePanel defaultSize={25}>
          <div className='flex h-full items-center justify-center p-6'>
            <span className='font-semibold'>Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className='flex h-full items-center justify-center p-6'>
            <span className='font-semibold'>Content</span>
          </div>
        </ResizablePanel>
      </>,
    ],
  },
} satisfies Story;

export const Handle = {
  args: {
    direction: 'horizontal',
    className: 'min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]',
    children: [
      <>
        <ResizablePanel defaultSize={25}>
          <div className='flex h-full items-center justify-center p-6'>
            <span className='font-semibold'>Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className='flex h-full items-center justify-center p-6'>
            <span className='font-semibold'>Content</span>
          </div>
        </ResizablePanel>
      </>,
    ],
  },
} satisfies Story;
