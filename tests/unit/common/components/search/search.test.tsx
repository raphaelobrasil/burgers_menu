import { render, screen } from '@testing-library/react'
import Search from '@/common/components/search'

describe('Search component - UI', () => {
  it('Should render the field search with placeholder', () => {
    render(<Search />)

    const search = screen.getByTestId('search-id-test')
    const placeHolder = screen.getByPlaceholderText('Search menu items')
  
    expect(placeHolder).toBeInTheDocument()
    expect(search).toBeInTheDocument()
  })
})
