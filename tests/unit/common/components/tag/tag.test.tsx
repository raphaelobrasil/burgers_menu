import { render, waitFor } from '@testing-library/react'
import 'jest-styled-components'
import Tag from '@/common/components/tag'
import { theme } from '@/theme/theme'
import rgbToHex from '../../../../utils/rgbToHex'

describe('Tag component - UI', () => {
    const children = '1'

  it('Should render the children content', async () => {
    const { getByText } = render(<Tag>{children}</Tag>)
    await waitFor(() => {
      expect(getByText(children)).toBeInTheDocument()
    })
  })

  it('Should have the correct styles applied', async () => {
    const { container } = render(<Tag>{children}</Tag>)
    const tagElement = container.firstChild as HTMLElement

    await waitFor(() => {
      const styles = window.getComputedStyle(tagElement)
      const backgroundColor = styles.getPropertyValue('background-color').trim()
      const color = styles.getPropertyValue('color').trim()

      expect(rgbToHex(backgroundColor)).toBe(theme.color.tertiary)
      expect(rgbToHex(color)).toBe(theme.color.primaryLight)
    })
  })
})
