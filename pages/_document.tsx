import { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyles, CssBaseline } from '@mui/material'
import { globalStyles } from '../styles/globals'

export default function Document() {
  return (
    <Html lang='en' style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <meta property='og:title' content='Juan Hamilton | Portfolio' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/me.jpg' />
        <meta property='og:image:type' content='image/jpg' />
        <meta property='og:image:width' content='120' />
        <meta property='og:image:height' content='160' />
        <meta property='og:url' content={process.env.DOMAIN} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
