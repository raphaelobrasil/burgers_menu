import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import CardOption from '../sub_components/card_option'
import CardHeader from '../sub_components/card_header'
import GridDefault from '../sub_components/card_grid_default'
import GridDefaultContent from '../sub_components/grid_default_content'
import GridDefaultAside from '../sub_components/grid_default_aside'
import CardPriceLabel from '../sub_components/card_label_price'
import Radio from '@/common/components/radio'

export default {
  title: 'common/Cards/CardOption',
  component: CardOption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Card Options</Title>
          <Subtitle>Generic component for option cards</Subtitle>
          <Canvas of={ContentOption} />
          <Controls />
        </>
    }
  }
} as Meta<typeof CardOption>

export const ContentOption: StoryObj<typeof CardOption> = {
  args: {
    children: 
      <GridDefault>
        <GridDefaultContent>
          <CardHeader $title='Smash Brooks' />
          <CardPriceLabel>
            R$ 33,00
          </CardPriceLabel>
        </GridDefaultContent>
        <GridDefaultAside>
          <Radio $id='example' $name='example' $value='example' $findOptionSelected={() => {}} />
        </GridDefaultAside>
      </GridDefault>
  }
}