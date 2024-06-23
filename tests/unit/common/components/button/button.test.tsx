import { render, fireEvent, waitFor } from '@testing-library/react'
import Button from '@/common/components/button'
import { theme } from '@/theme/theme'

describe('Button component - UI', () => {
  const children = 'Add to Order • $11.75'
  const mockAction = jest.fn()

  it('Should render the button and must be clickable', async () => {
    const { getByText, getByTestId } = render(
      <Button $action={mockAction}>
        {children}
      </Button>
    )

    const button = getByTestId('button-id-test')
    fireEvent.click(button)

    await waitFor(() => {      
      expect(mockAction).toHaveBeenCalledTimes(1)
      expect(getByText(children)).toBeInTheDocument()
    })
  })

  it('Should render the button with style default', async () => {
    const { getByText, getByTestId } = render(
      <Button $action={mockAction}>
        {children}
      </Button>
    )

    const button = getByTestId('button-id-test')

    await waitFor(() => {      
      expect(button).toHaveStyle(`background-color: ${theme.color.tertiary}`)
      expect(getByText(children)).toBeInTheDocument()
    })
  }) 

  it('Should render button with disable', () => {
    const { getByTestId } = render(
      <Button $action={mockAction} $disable>
        {children}
      </Button>
    )

    const button = getByTestId('button-id-test')

    expect(button).toHaveStyle(`background-color: ${theme.color.quaternary}`)
  })
})
