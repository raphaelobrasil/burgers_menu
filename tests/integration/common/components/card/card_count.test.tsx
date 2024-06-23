import { render, fireEvent, waitFor } from '@testing-library/react'
import Card from '@/common/components/card'
import CounterDot from '@/common/components/counter_dot'

describe('Card count component - UI', () => {
  const price = 'R$ 33,00'
  const priceSelected = '1 meat (+R$ 33,00)'
  const title = 'Smash Brooks'
  const countDot = '50'
  const mockActionIncrease = jest.fn()
  const mockActionDecrease = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render the card count', async () => {
    const { getByText } = render(
      <Card.RootCount>
        <Card.ContainerDefault>
          <Card.DefaultContent>
            <Card.CardHeader $title={title} $isNormal />
            <Card.PriceLabel $altColor>
              {priceSelected}
            </Card.PriceLabel>
            <CounterDot.Root>
              <CounterDot.Button $actionClick={mockActionDecrease} />
              <CounterDot.Label>{countDot}</CounterDot.Label>
              <CounterDot.Button $actionClick={mockActionIncrease} $isUpButton />
            </CounterDot.Root>
          </Card.DefaultContent>
          <Card.DefaultAside $initTop>
            <Card.PriceLabel $isSum $isBold>
              {price}
            </Card.PriceLabel>
          </Card.DefaultAside>
        </Card.ContainerDefault>
      </Card.RootCount>
    )

    await waitFor(() => {
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(price)).toBeInTheDocument()
      expect(getByText(priceSelected)).toBeInTheDocument()
      expect(getByText(countDot)).toBeInTheDocument()
    })
  })

  it('Should the CounterDot must be clickable', () => {
    const { getByTestId } = render(
      <Card.RootCount>
        <Card.ContainerDefault>
          <Card.DefaultContent>
            <Card.CardHeader $title={title} $isNormal />
            <Card.PriceLabel $altColor>
              {priceSelected}
            </Card.PriceLabel>
            <CounterDot.Root>
              <CounterDot.Button $actionClick={mockActionDecrease} />
              <CounterDot.Label>{countDot}</CounterDot.Label>
              <CounterDot.Button $actionClick={mockActionIncrease} $isUpButton />
            </CounterDot.Root>
          </Card.DefaultContent>
          <Card.DefaultAside $initTop>
            <Card.PriceLabel $isSum $isBold>
              {price}
            </Card.PriceLabel>
          </Card.DefaultAside>
        </Card.ContainerDefault>
      </Card.RootCount>
    )

    
    const increaseButton = getByTestId('counter-button-id-test-increase')
    fireEvent.click(increaseButton)
  
    const decreaseButton = getByTestId('counter-button-id-test-decrease')
    fireEvent.click(decreaseButton)

    expect(mockActionDecrease).toHaveBeenCalledTimes(1)
    expect(mockActionIncrease).toHaveBeenCalledTimes(1)
  })
})
