import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const FloatButtonRoot = styled.div<{ $type: string, $show: boolean }>`
  display: ${({ $show }) => $show ? 'flex' : 'none'};
  position: ${({ $type }) => $type === 'basket' ? 'fixed' : 'absolute'};
  z-index: 4;
  bottom: 0;

  width: 100%;
  min-height: 80px;
  max-height: 122px;
  padding: 8px 24px 24px;
  box-sizing: border-box;

  background-color: ${theme.color.primaryLight + theme.transparency.percent30};
  backdrop-filter: blur(4px); 
  -webkit-backdrop-filter: blur(4px);

  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
`