import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Navbar from '../components/common/navbar'
import Hero from '../components/home/hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Juan Hamilton</title>
        <meta name='description' content="Juan Hamilton's portfolio." />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar aria-label='Top navigation bar'>
        <Hero />
      </Navbar>
    </>
  )
}

export const getStaticProps = async ({
  locale = 'en',
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
