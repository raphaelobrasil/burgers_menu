import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Template from './index'

export default {
  title: 'Template',
  component: Template,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Template</Title>
          <Subtitle>Template application</Subtitle>
          <Canvas of={Layout} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Template>

export const Layout: StoryObj<typeof Template> = {
  args: {
    children: 
      <main>
        Main content
      </main>
  }
}
