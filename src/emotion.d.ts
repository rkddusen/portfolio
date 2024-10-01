import '@emotion/react'
import { lightTheme } from './styles/theme'

type ThemeType = typeof lightTheme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
