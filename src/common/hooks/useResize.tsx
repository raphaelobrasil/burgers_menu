'use client'

import { useEffect } from 'react'

const useResize = (action: () => void, dependecy?: unknown) => {
  useEffect(() => {
    window.addEventListener('resize', action)

    return () => {
      window.removeEventListener('resize', action)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependecy])
}

export default useResize