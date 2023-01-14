import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import React from 'react'
import SkillCloud from '../../skill-cloud'
import Traits from '../../traits'

const About = () => {
  const { t } = useTranslation()

  return (
    <Stack
      id='about'
      component='section'
      sx={{
        minHeight: '100vh',
        backgroundColor: theme => theme.palette.background.default,
        py: '7.2rem',
        px: { xs: '1.6rem', sm: '3.2rem', lg: '16.5rem', tv: '25rem' },
        flexDirection: { lg: 'row' },
        alignItems: { lg: 'center' },
        gap: { lg: '2.4rem' },
      }}>
      <Box
        sx={{
          flexBasis: { lg: '45%', tv: '40%' },
        }}>
        <Typography
          variant='h4'
          component='h2'
          sx={{ color: theme => theme.palette.neutral.main, mb: '0.8rem' }}>
          {t('about')}
        </Typography>
        <Typography
          variant='h2'
          component='h3'
          sx={{ color: theme => theme.palette.primary.main, mb: '2.4rem' }}>
          <Traits />
        </Typography>
        <Typography
          variant='body1'
          sx={{ color: theme => theme.palette.neutral.dark }}>
          {t('about-description-1')} <br /> <br />
          {t('about-description-2')}
        </Typography>
      </Box>
      <SkillCloud sx={{ flexBasis: { lg: '55%', tv: '60%' } }} />
    </Stack>
  )
}

export default About
