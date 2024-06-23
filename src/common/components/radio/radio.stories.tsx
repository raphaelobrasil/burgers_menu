import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Radio from './index'

export default {
  title: 'common/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Radio</Title>
          <Subtitle>Generic radio component</Subtitle>
          <Canvas of={RadioUse} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Radio>

export const RadioUse: StoryObj<typeof Radio> = {
  args: {
    $findOptionSelected: () => {},
    $id: 'example1',
    $name: 'exampleName',
    $value: 'exameValue'
  }
}