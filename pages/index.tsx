import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Hero from '../components/pages/home/hero'
import About from '../components/pages/home/about'
import Navbar from '../components/navbar'
import { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import Projects from '../components/pages/home/projects'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { inViewport: isHeroVisible } = useInViewport(heroRef, undefined, {
    disconnectOnLeave: false,
  })

  return (
    <>
      <Head>
        <title>Juan Hamilton</title>
        <meta name='description' content="Juan Hamilton's portfolio." />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar
        aria-label='Top navigation bar'
        enableBlurBackground={!isHeroVisible}>
        <>
          <Hero ref={heroRef} />
          <About />
          <Projects />
        </>
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
