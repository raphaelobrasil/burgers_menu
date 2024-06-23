import { useEffect } from 'react'

const useHiddenOverFlow = (): void => {
  useEffect(() => {
    const hiddenOverFlow = (value: string) => {
      const body = window.document.querySelector('body')
      if (body) {
        body.style.overflowY = value
      }
    }

    hiddenOverFlow('hidden')

    return () => hiddenOverFlow('unset')    
  }, [])
}

export default useHiddenOverFlow