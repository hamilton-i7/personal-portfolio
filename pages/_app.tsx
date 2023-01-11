import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import darkTheme from '../styles/theme/dark-theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
