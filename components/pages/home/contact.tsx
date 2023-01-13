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
import Link from '../../link'
import IconButton from '../../button/icon-button'

const PatternRings = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '53rem',
        height: '12.9rem',
        left: { xs: '-25rem', lg: '-20.5rem' },
        bottom: { xs: '15rem', sm: '14.5rem', lg: '22.5rem' },
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
        padding: '7.2rem 1.6rem',
        backgroundColor: theme => theme.palette.background.default,
      }}>
      <PatternRings />
      <Stack>
        <Box
          sx={{
            mb: { xs: '4.8rem' },
            textAlign: { xs: 'center' },
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
              mb: { xs: '0.8rem' },
            }}>
            {t('contact-description')}
          </Typography>
          <TextButton>{t('view-resume')}</TextButton>
        </Box>
        <Stack component='form'>
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
              mb: { xs: '7.2rem' },
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
            <ArrowUpwardRoundedIcon />
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
        }}>
        <Link href='https://github.com/hamilton-i7'>
          <IconButton aria-label='Github' sx={{ mr: '0.8rem' }}>
            <GitHubIcon sx={{ fontSize: '2.4rem' }} />
          </IconButton>
        </Link>
        <Link
          aria-label='Linkedin'
          href='https://www.linkedin.com/in/juan-hamilton-edwards/'>
          <IconButton>
            <LinkedInIcon sx={{ fontSize: '2.4rem' }} />
          </IconButton>
        </Link>
      </Stack>
    </Box>
  )
}

export default Contact
