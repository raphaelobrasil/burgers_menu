import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Root from './sub_components/counter_root'
import Button from './sub_components/counter_button'
import Label from './sub_components/counter_label'

export default {
  title: 'common/CounterDot',
  component: Root,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Counter dot</Title>
          <Subtitle>Generic Counter dot component</Subtitle>
          <Title>Counter basic</Title>
          <Canvas of={CountDotUse} />
          <Title>Counter large and alt color</Title>
          <Canvas of={CountDotLargeDisableUse} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Root>

export const CountDotUse: StoryObj<typeof Root> = {
  args: {
    children:
      <>
        <Button $actionClick={() => {}} />
        <Label>1</Label>
        <Button $isUpButton $actionClick={() => {}} />
      </>
  }
}


export const CountDotLargeDisableUse: StoryObj<typeof Root> = {
  args: {
    $isLarge: true,
    children:
      <>
        <Button $disable $isLarge $actionClick={() => {}} />
        <Label $isLarge>1</Label>
        <Button $isUpButton $isLarge $actionClick={() => {}} $disable />
      </>
  }
}