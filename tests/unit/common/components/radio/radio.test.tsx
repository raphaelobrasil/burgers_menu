import { render, waitFor, fireEvent } from '@testing-library/react'
import 'jest-styled-components'
import Radio from '@/common/components/radio'
import { theme } from '@/theme/theme'
import rgbTohex from '../../../../utils/rgbToHex'

describe('Radio component - UI', () => {
    const radioProps = {
      $findOptionSelected: () => {},
      $id: 'example1',
      $name: 'exampleName',
      $value: 'exameValue'
    } 

  it('Should render the radio content', async () => {
    const { container } = render(<Radio {...radioProps} />)

    await waitFor(() => {
      expect(container).toBeInTheDocument()
    })
  })

  it('Should be checked when clicked', () => {
    const findOptionSelectedMock = jest.fn()
    const { getByTestId } = render(
      <Radio $findOptionSelected={findOptionSelectedMock} $id="radio1" $name="radioGroup" $value="option1" />
    )  
    const radioInput = getByTestId('radio-id-test-radio1')
  
    expect(radioInput).not.toBeChecked()  
    fireEvent.click(radioInput)
  
    expect(findOptionSelectedMock).toHaveBeenCalledWith('option1')
    expect(radioInput).toBeChecked()
  })

  it('Should only one Radio be checked in a group', () => {
    const findOptionSelectedMock = jest.fn()
    const { getByTestId } = render(
      <>
        <Radio $findOptionSelected={findOptionSelectedMock} $id="radio2" $name="radioGroup" $value="option2" />
        <Radio $findOptionSelected={findOptionSelectedMock} $id="radio3" $name="radioGroup" $value="option3" />
        <Radio $findOptionSelected={findOptionSelectedMock} $id="radio4" $name="radioGroup" $value="option4" />
      </>
    )  
    const radioInput2 = getByTestId('radio-id-test-radio2')
    const radioInput3 = getByTestId('radio-id-test-radio3')
    const radioInput4 = getByTestId('radio-id-test-radio4')
  
    expect(radioInput2).not.toBeChecked()
    expect(radioInput3).not.toBeChecked()
    expect(radioInput4).not.toBeChecked()

    fireEvent.click(radioInput3)
  
    expect(findOptionSelectedMock).toHaveBeenCalledWith('option3')
    expect(radioInput2).not.toBeChecked()
    expect(radioInput3).toBeChecked()
    expect(radioInput4).not.toBeChecked()
  
    fireEvent.click(radioInput4)
  
    expect(findOptionSelectedMock).toHaveBeenCalledWith('option4')
    expect(radioInput2).not.toBeChecked()
    expect(radioInput3).not.toBeChecked()
    expect(radioInput4).toBeChecked()
  })
  
  it('Should have the correct styles applied when checked and unchecked', async () => {
    const { getByTestId } = render(
      <Radio {...radioProps} $id="example1" />
    )
    const radioInput = getByTestId('radio-id-test-example1') as HTMLInputElement

    await waitFor(() => {
      const styles = window.getComputedStyle(radioInput)
      const borderColorUnchecked = styles.getPropertyValue('border-color').trim()
      
      expect(borderColorUnchecked.toUpperCase()).toBe(theme.color.secondaryLightest)
    })

    radioInput.click()

    await waitFor(() => {
      const styles = window.getComputedStyle(radioInput)
      const backgroundColorChecked = styles.getPropertyValue('background-color').trim()
      
      expect(rgbTohex(backgroundColorChecked)).toBe(theme.color.tertiary)
    })
  })
})
