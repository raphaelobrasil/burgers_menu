import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Menu from './index'

export default {
  title: 'common/Menu/Home',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Modal</Title>
          <Subtitle>Generic Modal component</Subtitle>
          <Canvas of={MenuUse} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Menu>

export const MenuUse: StoryObj<typeof Menu> = {
  args: {
  }
}
