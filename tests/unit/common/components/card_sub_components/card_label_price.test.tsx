import { render, waitFor } from '@testing-library/react'
import Card from '@/common/components/card'
import { theme } from '@/theme/theme'

describe('Card label price component - UI', () => {
  const children = 'Smash Brooks'

  it('Should render the price label default style', async () => {
    const { getByText, getByTestId } = render(
      <Card.PriceLabel>
        {children}
      </Card.PriceLabel>
    )

    const label = getByTestId('card-label-price-id-test')

    await waitFor(() => {
      expect(label).toHaveStyle('font-weight: 400')
      expect(label).toHaveStyle(`color: ${theme.color.secondaryLight}`)
      expect(getByText(children)).toBeInTheDocument()
    })
  })
  
  it('Should render the price label in font bold', async () => {
    const { getByText, getByTestId } = render(
      <Card.PriceLabel $isBold>
        {children}
      </Card.PriceLabel>
    )

    const label = getByTestId('card-label-price-id-test')

    await waitFor(() => {
      expect(label).toHaveStyle('font-weight: 500')
      expect(label).toHaveStyle(`color: ${theme.color.secondaryLight}`)
      expect(getByText(children)).toBeInTheDocument()
    })
  })
  
  it('Should render the price label in alt color default', async () => {
    const { getByText, getByTestId } = render(
      <Card.PriceLabel $altColor>
        {children}
      </Card.PriceLabel>
    )

    const label = getByTestId('card-label-price-id-test')

    await waitFor(() => {
      expect(label).toHaveStyle('font-weight: 400')
      expect(label).toHaveStyle(`color: ${theme.color.secondaryLightest}`)
      expect(getByText(children)).toBeInTheDocument()
    })
  })

  it('Should render the style price label of sum', async () => {
    const { getByText, getByTestId } = render(
      <Card.PriceLabel $altColor $isSum>
        {children}
      </Card.PriceLabel>
    )

    const label = getByTestId('card-label-price-id-test')

    await waitFor(() => {
      expect(label).toHaveStyle('font-weight: 400')
      expect(label).toHaveStyle(`color: ${theme.color.secondaryDark}`)
      expect(getByText(children)).toBeInTheDocument()
    })
  })
})
