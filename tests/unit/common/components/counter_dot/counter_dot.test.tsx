import { render, fireEvent, waitFor } from '@testing-library/react'
import CounterDot from '@/common/components/counter_dot'
import { theme } from '@/theme/theme'

describe('CounterDot component - UI', () => {
  const increaseAction = jest.fn()
  const decreaseAction = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render the children content', async () => {
    const children = '99'
    const { getByText } = render(
      <CounterDot.Root $isLarge>
        <CounterDot.Button $isLarge $actionClick={decreaseAction} />
        <CounterDot.Label $isLarge>{children}</CounterDot.Label>
        <CounterDot.Button $isLarge $isUpButton $actionClick={increaseAction} />
      </CounterDot.Root>
    )

    await waitFor(() => {
      expect(getByText(children)).toBeInTheDocument()
    })
  })
  
  it('Should render button with default color', () => {
    const { getByTestId } = render(
      <CounterDot.Root>
        <CounterDot.Button $actionClick={decreaseAction}/>
      </CounterDot.Root>
    )

    const button = getByTestId('counter-button-id-test-decrease')

    expect(button).toHaveStyle(`background-color: ${theme.color.tertiary}`)
    expect(button.firstChild).toHaveStyle(`background-color: ${theme.color.primaryLight}`)
  })
   
  it('Should render button with disable', () => {
    const { getByTestId } = render(
      <CounterDot.Root>
        <CounterDot.Button $actionClick={decreaseAction} $disable/>
      </CounterDot.Root>
    )

    const button = getByTestId('counter-button-id-test-decrease')

    expect(button).toHaveStyle(`background-color: ${theme.color.quaternary}`)
    expect(button.firstChild).toHaveStyle(`background-color: ${theme.color.secondaryLightest}`)
  })

  it('Should render large CounterDot', () => {
    const { getByTestId } = render(
      <CounterDot.Root $isLarge>
        <CounterDot.Button $isLarge $actionClick={decreaseAction} />
        <CounterDot.Label $isLarge>1</CounterDot.Label>
        <CounterDot.Button $isLarge $isUpButton $actionClick={increaseAction} />
      </CounterDot.Root>
    )

    const increaseButton = getByTestId('counter-button-id-test-increase')
    const decreaseButton = getByTestId('counter-button-id-test-decrease')

    expect(increaseButton).toHaveStyle('min-width: 32px')
    expect(decreaseButton).toHaveStyle('min-width: 32px')
  })

  it('Should render small CounterDot', () => {
    const { getByTestId } = render(
      <CounterDot.Root>
        <CounterDot.Button $actionClick={decreaseAction} />
        <CounterDot.Label>1</CounterDot.Label>
        <CounterDot.Button $isUpButton $actionClick={increaseAction} />
      </CounterDot.Root>
    )

    const increaseButton = getByTestId('counter-button-id-test-increase')
    const decreaseButton = getByTestId('counter-button-id-test-decrease')

    expect(increaseButton).toHaveStyle('min-width: 20px')
    expect(decreaseButton).toHaveStyle('min-width: 20px')
  })

  it('Should increment the counter when the increase button is clicked', () => {
    const { getByTestId } = render(
      <CounterDot.Root>
        <CounterDot.Button $actionClick={decreaseAction} />
        <CounterDot.Label>1</CounterDot.Label>
        <CounterDot.Button $isUpButton $actionClick={increaseAction} />
      </CounterDot.Root>
    )

    const increaseButton = getByTestId('counter-button-id-test-increase')
    fireEvent.click(increaseButton)

    expect(increaseAction).toHaveBeenCalledTimes(1)
    expect(decreaseAction).not.toHaveBeenCalledTimes(1)
  })

  it('Should decrement the counter when the decrease button is clicked', () => {
    const { getByTestId } = render(
      <CounterDot.Root>
        <CounterDot.Button $actionClick={decreaseAction} />
        <CounterDot.Label>1</CounterDot.Label>
        <CounterDot.Button $isUpButton $actionClick={increaseAction} />
      </CounterDot.Root>
    )

    const decreaseButton = getByTestId('counter-button-id-test-decrease')
    fireEvent.click(decreaseButton)

    expect(increaseAction).not.toHaveBeenCalledTimes(1)
    expect(decreaseAction).toHaveBeenCalledTimes(1)
  })
})
