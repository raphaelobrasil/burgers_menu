import { render, waitFor } from '@testing-library/react'
import Card from '@/common/components/card'

describe('Card header component - UI', () => {
  const title = 'Smash Brooks'

  it('Should render the title default weight', async () => {
    const { getByText, getByTestId } = render(<Card.CardHeader $title={title} />)
    const header = getByTestId('card-header-id-test')

    await waitFor(() => {
      expect(header.getElementsByTagName('h3')[0]).toHaveStyle('font-weight: 500')
      expect(getByText(title)).toBeInTheDocument()
    })
  })
  
  it('Should render the title alt weight', async () => {
    const { getByText, getByTestId } = render(<Card.CardHeader $isNormal $title={title} />)
    const header = getByTestId('card-header-id-test')

    await waitFor(() => {
      expect(header.getElementsByTagName('h3')[0]).toHaveStyle('font-weight: 400')
      expect(getByText(title)).toBeInTheDocument()
    })
  })
})
