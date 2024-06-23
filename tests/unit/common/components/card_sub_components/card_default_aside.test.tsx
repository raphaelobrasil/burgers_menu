import { render, waitFor } from '@testing-library/react'
import Card from '@/common/components/card'

describe('Card default aside component - UI', () => {
  const children = 'Smash Brooks'

  it('Should render the children in center', async () => {
    const { getByText, getByTestId } = render(
      <Card.DefaultAside>
        {children}
      </Card.DefaultAside>
    )

    const aside = getByTestId('card-default-aside-id-test')

    await waitFor(() => {
      expect(aside).toHaveStyle('align-items: center')
      expect(getByText(children)).toBeInTheDocument()
    })
  })
  
  it('Should render the children in top', async () => {
    const { getByText, getByTestId } = render(
      <Card.DefaultAside $initTop>
        {children}
      </Card.DefaultAside>
    )

    const aside = getByTestId('card-default-aside-id-test')

    await waitFor(() => {
      expect(aside).toHaveStyle('align-items: start')
      expect(getByText(children)).toBeInTheDocument()
    })
  })
})
