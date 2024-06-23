import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Search from './index'

export default {
  title: 'common/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Search</Title>
          <Subtitle>Generic Search component</Subtitle>
          <Canvas of={SearchUse} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Search>

export const SearchUse: StoryObj<typeof Search> = {}
