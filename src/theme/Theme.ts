import { DefaultTheme } from 'styled-components'

export const Theme: DefaultTheme = {
    colors: {
        gray: {
            light: '#F5F5F5',
            medium: '#CFCFCF',
            dark: '#808080',
        },
    },

    space: {
        low: '10',
        medium: '20',
        large: '30',
    },

    transition: {
        easeInOut: 'all 0.3s 0s ease-in-out',
    },
}
