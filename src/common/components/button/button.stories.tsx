import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Button from './index'

export default {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Button</Title>
          <Subtitle>Generic Button component</Subtitle>
          <Canvas of={ButtonUse} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Button>

export const ButtonUse: StoryObj<typeof Button> = {
  args: {
    $action: () => {},
    children: 'Add to Order • $11.75'
  }
}

