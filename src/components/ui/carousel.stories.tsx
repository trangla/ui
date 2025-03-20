import type { Meta, StoryObj } from '@storybook/react';

import * as React from 'react';

import { Card, CardContent } from '~/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';

const meta = {
  title: 'UI/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className='w-full'>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default = {
  args: {
    className: 'w-full max-w-xs',
    children: [
      <>
        <CarouselContent>
          {Array.from({ length: 5 }).map((value, index) => (
            <CarouselItem key={`${value} ${index}`}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </>,
    ],
  },
} satisfies Story;

export const Sizes = {
  args: {
    opts: {
      align: 'start',
    },
    className: 'w-full max-w-sm',
    children: [
      <>
        <CarouselContent>
          {Array.from({ length: 5 }).map((value, index) => (
            <CarouselItem
              key={`${value} ${index}`}
              className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </>,
    ],
  },
} satisfies Story;

export const Spacing = {
  args: {
    className: 'w-full max-w-sm',
    children: [
      <>
        <CarouselContent className='-ml-1'>
          {Array.from({ length: 5 }).map((value, index) => (
            <CarouselItem
              key={`${value} ${index}`}
              className='pl-1 md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-2xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </>,
    ],
  },
} satisfies Story;

export const Orientation = {
  args: {
    opts: {
      align: 'start',
    },
    orientation: 'vertical',
    className: 'w-full max-w-xs',
    children: [
      <>
        <CarouselContent className='-mt-1 h-[200px]'>
          {Array.from({ length: 5 }).map((value, index) => (
            <CarouselItem
              key={`${value} ${index}`}
              className='pt-1 md:basis-1/2'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </>,
    ],
  },
} satisfies Story;
