import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Tag from './index'

export default {
  title: 'common/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Tag</Title>
          <Subtitle>Generic tag component</Subtitle>
          <Canvas of={TagUse} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Tag>

export const TagUse: StoryObj<typeof Tag> = {
  args: {
    children: 1
  }
}