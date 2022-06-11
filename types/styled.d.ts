// styled.d.ts
import 'styled-components'

interface IGray {
    light: string
    medium: string
    dark: string
}

interface IColors {
    gray: IGray
}

interface ISpace {
    low: string
    medium: string
    large: string
}

interface ITransition {
    easeInOut: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IColors
        space: ISpace
        transition: ITransition
    }
}
