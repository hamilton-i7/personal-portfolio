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
        p: '7.2rem 1.6rem',
      }}>
      <Box>
        <Typography
          variant='h4'
          component='h2'
          sx={{ color: theme => theme.palette.neutral.main, mb: '0.8rem' }}>
          {t('about')}
        </Typography>
        <Typography
          variant='h2'
          component='h3'
          sx={{ color: theme => theme.palette.primary.light, mb: '2.4rem' }}>
          <Traits />
        </Typography>
        <Typography
          variant='body1'
          sx={{ color: theme => theme.palette.neutral.dark }}>
          {t('about-description-1')} <br /> <br />
          {t('about-description-2')}
        </Typography>
      </Box>
      <SkillCloud />
    </Stack>
  )
}

export default About
