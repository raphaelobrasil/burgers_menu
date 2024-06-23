import { renderHook, act } from '@testing-library/react'
import 'jest-styled-components'
import useResize from '@/common/hooks/useResize'

describe('Hook - useResize', () => {
  it('Should call the useResize custom hook, and execute its functions', async () => {
    const mockAction = jest.fn()
    const { result } = renderHook(() => useResize(mockAction))

    window.dispatchEvent(new Event('resize'))
    
    expect(mockAction).toHaveBeenCalledTimes(1)
  })  
})
