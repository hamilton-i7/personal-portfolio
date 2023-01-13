import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import React from 'react'
import ElevatedButton from '../../button/elevated-button'
import TextButton from '../../button/text-button'

const PatternRingsRight = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        right: { xs: '-39rem', sm: '-35rem' },
        bottom: { xs: '1.8rem' },
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const PatternRingsLeft = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: { xs: '-34.2rem', sm: '-26.5rem' },
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
        p: { xs: '5.6rem 1.6rem 7.2rem', sm: '5.6rem 3.2rem 7.2rem' },
        background:
          'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), center / cover no-repeat url(/me.jpg)',
        minHeight: '100vh',
        color: theme => theme.palette.common.white,
        position: 'relative',
      }}>
      <PatternRingsRight />
      <PatternRingsLeft />
      <Typography
        variant='h1'
        sx={{
          mt: '9.6rem',
          mb: { sm: '4.8rem' },
        }}>
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
              background: theme => theme.palette.primary.light,
              position: 'absolute',
              bottom: '0.25rem',
              left: 0,
              borderRadius: '0.4rem',
            },
          }}>
          Juan Hamilton.
        </Box>
      </Typography>
      <Typography
        variant='body1'
        sx={{
          my: { xs: '2.4rem', sm: 0 },
          mb: { sm: '6.4rem' },
          textAlign: { xs: 'center', sm: 'left' },
          width: { sm: '44.5rem' },
        }}>
        {t('hero-description')}
      </Typography>
      <Stack
        sx={{
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '1.6rem', sm: '3.2rem' },
        }}>
        <ElevatedButton>{t('contact-me')}</ElevatedButton>
        <TextButton
          sx={{
            mb: { sm: '1rem' },
          }}>
          {t('view-resume')}
        </TextButton>
      </Stack>
    </Stack>
  )
})

export default Hero