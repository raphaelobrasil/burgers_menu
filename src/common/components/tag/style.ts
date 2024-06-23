'use client'

import styled from 'styled-components'
import { theme } from '@/theme/theme'

export const TagContainer = styled.span`
  display: block;
  min-width: 18px;
  min-height: 18px;
  max-height: 18px;
  box-sizing: border-box;
  background-color: ${theme.color.tertiary};
  border-radius: 4px;
  padding: 1px 4px;

  text-align: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 16.41px;
  color: ${theme.color.primaryLight};
`