'use client'

import { ProviderInterface } from './providers.interface'
import StyledComponents from './registry'
import Template from './template'
import { Provider as ProviderRedux } from 'react-redux'
import store from '@/common/redux/store'

const Providers = ({ children }: ProviderInterface) => {
  return (
    <StyledComponents>
      <ProviderRedux store={store}>
        <Template>
        { children }
        </Template>
      </ProviderRedux>
    </StyledComponents>
  )
}

export default Providers