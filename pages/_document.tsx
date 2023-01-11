import { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyles, CssBaseline } from '@mui/material'
import { globalStyles } from '../styles/globals'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap'
          rel='stylesheet'
        />
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
