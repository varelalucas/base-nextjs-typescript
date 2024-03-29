import 'styled-components'

import theme from './defaultTheme'

export type Theme = typeof theme

declare module 'styled-component' {
  export interface DefaultTheme extends theme {}
}
