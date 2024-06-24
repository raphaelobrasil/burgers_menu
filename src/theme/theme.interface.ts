import 'styled-components'

interface color {
  primaryLight: string
  primaryDark: string
  secondaryLightest: string
  secondaryLight: string
  secondaryDark: string
  tertiary: string
  quaternary: string
  quinary: string
  bgPrimary: string
  senary: string
}

interface space {
  small: string
  medium: string
  large: string
}

interface breakpoint {
  xlarge: number
  mobile: number
  smobile: number
}

interface transparency {
  percent0: string
  percent5: string
  percent10: string
  percent15: string
  percent20: string
  percent25: string
  percent30: string
  percent35: string
  percent40: string
  percent45: string
  percent50: string
  percent55: string
  percent60: string
  percent65: string
  percent70: string
  percent75: string
  percent80: string
  percent85: string
  percent90: string
  percent95: string
  percent100: string
}

interface theme {
  color: color
  space: space
  breakpoint: breakpoint
  transparency: transparency
}

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
