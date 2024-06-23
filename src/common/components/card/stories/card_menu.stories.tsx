import { Fragment } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import CardMenu from '../sub_components/card_menu'
import CardHeader from '../sub_components/card_header'
import CardGridFigure from '../sub_components/card_grid_figure'
import CardLabelPrice from '../sub_components/card_label_price'
import CardDescription from '../sub_components/card_description'
import GridDefaultContent from '../sub_components/grid_default_content'
import Tag from '@/common/components/tag'

export default {
  title: 'common/Cards/CardMenu',
  component: CardMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Card Menu</Title>
          <Subtitle>Generic component for menu cards</Subtitle>
          <Title>Not selected</Title>
          <Canvas of={ContentMenu} />
          <Title>Selected</Title>
          <Canvas of={ContentMenuSelected} />
          <Title>Without Image</Title>
          <Canvas of={MenuWithoutImage} />
          <Controls />
        </>
    }
  }
} as Meta<typeof CardMenu>

export const ContentMenu: StoryObj<typeof CardMenu> = {
  args: {
    $onClick: () => {},
    children:
      <CardGridFigure
        $src='https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png'
        $alt=''
      >
        <CardHeader $title='Smash Brooks' />
        <CardDescription>
          180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.
        </CardDescription>
        <CardLabelPrice $isBold>
          R$ 33,00
        </CardLabelPrice>
      </CardGridFigure>
  }
}

export const ContentMenuSelected: StoryObj<typeof CardMenu> = {
  args: {
    $onClick: () => {},
    children: 
      <CardGridFigure
        $src='https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png'
        $alt=''
      >
        <CardHeader $title='Smash Brooks'>
          <Tag>1</Tag>
        </CardHeader>
        <CardDescription>
          180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions.
        </CardDescription>
        <CardLabelPrice $isBold>
          R$ 33,00
        </CardLabelPrice>
      </CardGridFigure>
  }
}

export const MenuWithoutImage: StoryObj<typeof CardMenu> = {
  args: {
    $onClick: () => {},
    children:
      <GridDefaultContent>
        <CardHeader $title='Smash Brooks'>
          <Tag>2</Tag>
        </CardHeader>
        <CardDescription>
          180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato.
        </CardDescription>
        <CardLabelPrice $isBold>
          R$ 33,00
        </CardLabelPrice>

      </GridDefaultContent>
  }
}
