import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import React from 'react'
import ElevatedButton from '../../button/elevated-button'
import TextButton from '../../button/text-button'

const PatternRingsLeft = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        right: { xs: '-39rem' },
        bottom: { xs: '1.8rem' },
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const PatternRingsRight = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: { xs: '-34.2rem' },
        top: { xs: '7.2rem' },
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const Hero = React.forwardRef((_, ref) => {
  const { t } = useTranslation()

  return (
    <Stack
      component='header'
      ref={ref}
      sx={{
        p: { xs: '5.6rem 1.6rem 3.2rem' },
        background:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), center / cover no-repeat url(/me.jpg)',
        minHeight: '100vh',
        color: theme => theme.palette.common.white,
        position: 'relative',
      }}>
      <PatternRingsLeft />
      <PatternRingsRight />
      <Typography variant='h1' sx={{ mt: '9.6rem' }}>
        <Typography component='span' variant='h3'>
          {t('greeting')}
        </Typography>
        <br />
        <Box
          component='span'
          sx={{
            position: 'relative',
            '::after': {
              content: "''",
              height: '0.4rem',
              width: '97%',
              background: theme => theme.palette.primary.main,
              position: 'absolute',
              bottom: '0.25rem',
              left: 0,
              borderRadius: '0.4rem',
            },
          }}>
          Juan Hamilton.
        </Box>
      </Typography>
      <Typography variant='body1' sx={{ my: '2.4rem', textAlign: 'center' }}>
        {t('hero-description')}
      </Typography>
      <Stack
        sx={{
          alignItems: 'center',
        }}>
        <ElevatedButton sx={{ mb: '1.6rem' }}>{t('contact-me')}</ElevatedButton>
        <TextButton>{t('view-resume')}</TextButton>
      </Stack>
    </Stack>
  )
})

export default Hero
