import { GlobalStyles } from '@theme/GlobalStyles'
import { Theme } from '@theme/Theme'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

function AppDefault({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/gvl5dkf.css"
                ></link>
            </Head>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default AppDefault
