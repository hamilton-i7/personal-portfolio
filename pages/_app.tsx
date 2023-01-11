import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import darkTheme from '../styles/theme/dark-theme'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
