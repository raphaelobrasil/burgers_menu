import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import CardCount from '../sub_components/card_count'
import CardHeader from '../sub_components/card_header'
import { GridDefault, GridDefaultContent, GridDefaultAside } from '../styles'
import CardPriceLabel from '../sub_components/card_label_price'
import CounterDot from '@/common/components/counter_dot'

export default {
  title: 'common/Cards/CardCount',
  component: CardCount,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Card counts</Title>
          <Subtitle>Generic component for counts cards</Subtitle>
          <Canvas of={ContentCount} />
          <Controls />
        </>
    }
  }
} as Meta<typeof CardCount>

export const ContentCount: StoryObj<typeof CardCount> = {
  args: {
    children: 
      <GridDefault>
        <GridDefaultContent>
          <CardHeader $title='Smash Brooks' $isNormal />
          <CardPriceLabel $altColor>
            1 meat (+R$ 33,00)
          </CardPriceLabel>
          <CounterDot.Root>
            <CounterDot.Button $actionClick={() => {}} />
            <CounterDot.Label>1</CounterDot.Label>
            <CounterDot.Button $actionClick={() => {}} $isUpButton />
          </CounterDot.Root>
        </GridDefaultContent>
        <GridDefaultAside $initTop>
          <CardPriceLabel $isSum $isBold>
            R$ 33,00
          </CardPriceLabel>
        </GridDefaultAside>
      </GridDefault>
  }
}