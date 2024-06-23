import type { Meta, StoryObj } from '@storybook/react'
import { Canvas, Title, Controls, Subtitle } from '@storybook/blocks'
import Carte from './index'
import Card from '@/common/components/card'

export default {
  title: 'common/Carte',
  component: Carte,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: () => 
        <>
          <Title>Carte</Title>
          <Subtitle>Generic Carte component</Subtitle>
          <Title>Carte Open</Title>
          <Canvas of={CarteOpen} />
          <Title>Carte Closed</Title>
          <Canvas of={CarteClosed} />
          <Controls />
        </>
    }
  }
} as Meta<typeof Carte>

export const CarteOpen: StoryObj<typeof Carte> = {
  args: {
    $titleGroup: 'Burgers',
    children:
    <>
      {
        Array(3).fill(null).map((_obj, key) =>         
            <Card.RootMenu key={key} $onClick={() => {}}>
            <Card.ContainerFigure
              $src='https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png'
              $alt=''
            >
              <Card.CardHeader $title='Smash Brooks' />
              <Card.CardDescription>
                180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions.
              </Card.CardDescription>
              <Card.PriceLabel $isBold>
                R$ 33,00
              </Card.PriceLabel>
            </Card.ContainerFigure>
          </Card.RootMenu>
        )
      }
    </>
    ,
    $open: true,
    $close: () => {}  
  }
}


export const CarteClosed: StoryObj<typeof Carte> = {
  args: {
    $titleGroup: 'Burgers',
    children: 
      <Card.RootMenu $onClick={() => {}}>
        <Card.ContainerFigure
          $src='https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png'
          $alt=''
        >
          <Card.CardHeader $title='Smash Brooks' />
          <Card.CardDescription>
            180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions.
          </Card.CardDescription>
          <Card.PriceLabel $isBold>
            R$ 33,00
          </Card.PriceLabel>
        </Card.ContainerFigure>
      </Card.RootMenu>
    ,
    $open: false,
    $close: () => {}  
  }
}
