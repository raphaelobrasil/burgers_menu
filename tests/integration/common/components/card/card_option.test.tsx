import { render, fireEvent, waitFor } from '@testing-library/react'
import Card from '@/common/components/card'
import Radio from '@/common/components/radio'

describe('Card option component - UI', () => {
  const price = 'R$ 33,00'
  const title = 'Smash Brooks'
  const mockActionCard = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render the card option', async () => {
    const { getByText } = render(
      <Card.RootOption>
        <Card.ContainerDefault>
          <Card.DefaultContent>
            <Card.CardHeader $title={title} />
            <Card.PriceLabel>
              {price}
            </Card.PriceLabel>
          </Card.DefaultContent>
          <Card.DefaultAside>
            <Radio $id='example' $name='example' $value='example' $findOptionSelected={mockActionCard} />
          </Card.DefaultAside>
        </Card.ContainerDefault>
      </Card.RootOption>
    )

    await waitFor(() => {
      expect(getByText(title)).toBeInTheDocument()
      expect(getByText(price)).toBeInTheDocument()
    })
  })

  it('Should the radio must be clickable', () => {
    const { getByTestId } = render(
      <Card.RootOption>
        <Card.ContainerDefault>
          <Card.DefaultContent>
            <Card.CardHeader $title={title} />
            <Card.PriceLabel>
              {price}
            </Card.PriceLabel>
          </Card.DefaultContent>
          <Card.DefaultAside>
            <Radio $id='option1' $name='example' $value='example' $findOptionSelected={mockActionCard} />
          </Card.DefaultAside>
        </Card.ContainerDefault>
      </Card.RootOption>
    )

    const card = getByTestId('radio-id-test-option1')
    fireEvent.click(card)

    expect(mockActionCard).toHaveBeenCalledTimes(1)
  })
})
