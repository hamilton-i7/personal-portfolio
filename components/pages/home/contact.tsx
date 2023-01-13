import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import React from 'react'
import ElevatedIconButton from '../../button/elevated-icon-button'
import TextButton from '../../button/text-button'
import TextField from '../../text-field'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '../../button/icon-button'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: { xs: '-25rem', lg: '-20.5rem' },
        bottom: { xs: '15rem', sm: '20rem', lg: '22.5rem' },
        background: 'no-repeat url(/pattern-rings.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Box
      id='contact'
      component='footer'
      sx={{
        py: '7.2rem',
        px: { xs: '1.6rem', sm: '3.2rem' },
        backgroundColor: theme => theme.palette.background.default,
      }}>
      <PatternRings />
      <Stack
        sx={{
          alignItems: { xs: 'center' },
        }}>
        <Box
          sx={{
            mb: { xs: '4.8rem' },
            textAlign: { xs: 'center' },
            width: '100%',
            maxWidth: '44.5rem',
          }}>
          <Typography
            variant='h4'
            component='h2'
            sx={{
              mb: { xs: '2.4rem' },
              color: theme => theme.palette.neutral.main,
            }}>
            {t('contact')}
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: theme => theme.palette.neutral.dark,
              mb: { xs: '0.8rem', sm: '3.2rem' },
            }}>
            {t('contact-description')}
          </Typography>
          <TextButton>{t('view-resume')}</TextButton>
        </Box>
        <Stack
          component='form'
          sx={{
            width: '100%',
            maxWidth: '44.5rem',
          }}>
          <TextField
            label={t('name')}
            sx={{
              mb: { xs: '3.2rem' },
            }}
          />
          <TextField
            label={t('email')}
            type='email'
            sx={{
              mb: { xs: '3.2rem' },
            }}
          />
          <TextField
            label={t('message')}
            multiline
            minRows={4}
            sx={{
              mb: { xs: '4rem' },
            }}
          />
          <TextButton
            sx={{
              alignSelf: 'end',
              mb: { xs: '7.2rem', sm: '10.4rem' },
            }}>
            {t('send-message')}
          </TextButton>
          <ElevatedIconButton
            aria-label={t('go-to-top').toString()}
            href='#'
            sx={{
              mb: { xs: '4.2rem' },
              alignSelf: 'end',
            }}>
            <ArrowUpwardRoundedIcon fontSize='large' />
          </ElevatedIconButton>
        </Stack>
      </Stack>
      <Divider
        sx={{
          mb: { xs: '3.2rem' },
          backgroundColor: theme => theme.palette.neutral.dark,
        }}
      />
      <Stack
        direction='row'
        sx={{
          justifyContent: 'center',
          gap: '0.8rem',
        }}>
        <IconButton aria-label='Github' href='https://github.com/hamilton-i7'>
          <GitHubIcon sx={{ fontSize: '2.4rem' }} />
        </IconButton>
        <IconButton
          aria-label='Linkedin'
          href='https://www.linkedin.com/in/juan-hamilton-edwards/'>
          <LinkedInIcon sx={{ fontSize: '2.4rem' }} />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default Contact
