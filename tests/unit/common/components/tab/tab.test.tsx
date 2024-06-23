import { render, fireEvent, waitFor } from '@testing-library/react'
import Tab from '@/common/components/tab'
import ImgMock from '../../../../mocks/imgMock'

describe('Tab component - UI', () => {
  const title = 'Burgers'

  it('Should render the tab', async () => {
    const { getByText, getByTestId } = render(
      <Tab $src={ImgMock} $title={title} />
    )

    const button = getByTestId('tab-id-test')

    await waitFor(() => {      
      expect(getByText(title)).toBeInTheDocument()
    })
  })
})
