import { render, fireEvent, waitFor } from '@testing-library/react'
import Card from '@/common/components/card'
import Tag from '@/common/components/tag'
import ImgMock from '../../../../mocks/imgMock'

describe('Card menu component - UI', () => {
  const children = '180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.'
  const price = 'R$ 33,00'
  const title = 'Smash Brooks'
  const mockActionCard = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render the card menu', async () => {
    const { getByText } = render(
      <Card.RootMenu $onClick={mockActionCard}>
        <Card.ContainerFigure
          $src={ImgMock}
          $alt=''
        >
          <Card.CardHeader $title={title} />
          <Card.CardDescription>
            {children}
          </Card.CardDescription>
          <Card.PriceLabel $isBold>
            {price}
          </Card.PriceLabel>
        </Card.ContainerFigure>
      </Card.RootMenu>
    )

    await waitFor(() => {
      expect(getByText(children)).toBeInTheDocument()
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(price)).toBeInTheDocument()
    })
  })

  
  it('Should render the card with tag', async () => {
    const tagValue = '88'
    const { getByText } = render(
      <Card.RootMenu $onClick={mockActionCard}>
        <Card.ContainerFigure
          $src={ImgMock}
          $alt=''
        >
          <Card.CardHeader $title={title}>
            <Tag>{tagValue}</Tag>
          </Card.CardHeader>
          <Card.CardDescription>
            {children}
          </Card.CardDescription>
          <Card.PriceLabel $isBold>
            {price}
          </Card.PriceLabel>
        </Card.ContainerFigure>
      </Card.RootMenu>
    )

    await waitFor(() => {
      expect(getByText(children)).toBeInTheDocument()
      expect(getByText(tagValue)).toBeInTheDocument()
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(price)).toBeInTheDocument()
    })
  })

  it('Should the card must be clickable', () => {
    const { getByTestId } = render(
      <Card.RootMenu $onClick={mockActionCard}>
        <Card.ContainerFigure
          $src={ImgMock}
          $alt=''
        >
          <Card.CardHeader $title={title} />
          <Card.CardDescription>
            {children}
          </Card.CardDescription>
          <Card.PriceLabel $isBold>
            {price}
          </Card.PriceLabel>
        </Card.ContainerFigure>
      </Card.RootMenu>
    )

    const card = getByTestId('card-menu-id-test')
    fireEvent.click(card)

    expect(mockActionCard).toHaveBeenCalledTimes(1)
  })
})
