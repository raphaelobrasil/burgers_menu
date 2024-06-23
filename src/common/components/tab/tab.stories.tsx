import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Tab from './index'

export default {
  title: 'common/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Tab</Title>
          <Subtitle>Generic Tab component</Subtitle>
          <Canvas of={TabUse} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Tab>

export const TabUse: StoryObj<typeof Tab> = {
  args: {
    $src: 'https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png',
    $title: 'Burgers',
  }
}