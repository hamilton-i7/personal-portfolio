import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'
import React, { useState } from 'react'
import ElevatedIconButton from '../../button/elevated-icon-button'
import TextButton from '../../button/text-button'
import TextField from '../../text-field'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import Divider from '@mui/material/Divider'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useRouter } from 'next/router'
import axios from 'axios'
import { EMAIL_REGEX } from '../../../utils/regex'
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded'
import Collapse from '@mui/material/Collapse'
import Alert from '../../alert'
import { GITHUB_LINK, LINKEDIN_LINK } from '../../../utils/constants'
import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress'

type AlertState = {
  show: boolean
  type: 'success' | 'error'
}

const initialAlertState: AlertState = {
  show: false,
  type: 'success',
}

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
  const { locale } = useRouter()

  const resumeLink = locale === 'en' ? '/resume.pdf' : '/hoja-de-vida.pdf'

  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const [message, setMessage] = useState('')
  const [messageError, setMessageError] = useState(false)

  const [enableFeedback, setEnableFeedback] = useState(false)
  const [sendingMessage, setSendingMessage] = useState(false)

  const [alertState, setAlertState] = useState<AlertState>(initialAlertState)
  const alertMessage =
    alertState.type === 'error' ? t('email-not-sent') : t('email-sent')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
    if (!enableFeedback) return

    setNameError(event.target.value.trim().length === 0)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    if (!enableFeedback) return

    setEmailError(!EMAIL_REGEX.test(event.target.value))
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
    if (!enableFeedback) return

    setMessageError(event.target.value.trim().length === 0)
  }

  const handleAlertState = (newState: Partial<AlertState>) => {
    setAlertState(prev => ({
      ...prev,
      ...newState,
    }))
  }

  const handleSendEmail = async () => {
    setEnableFeedback(true)
    if (!isValidForm()) return

    setSendingMessage(true)

    try {
      const { status } = await axios.post('/api/email', {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        message: message.trim(),
      })

      if (status === 200) {
        resetForm()
        handleAlertState({ show: true, type: 'success' })
      } else {
        handleAlertState({ show: true, type: 'error' })
      }
    } catch (error) {
      handleAlertState({ show: true, type: 'error' })
      console.log(error)
    } finally {
      setSendingMessage(false)
    }
  }

  const resetForm = () => {
    setName('')
    setNameError(false)

    setEmail('')
    setEmailError(false)

    setMessage('')
    setMessageError(false)
  }

  const isValidForm = () => {
    let isValid = true

    if (name.trim().length === 0) {
      isValid = false
      setNameError(true)
    }
    if (!EMAIL_REGEX.test(email)) {
      isValid = false
      setEmailError(true)
    }
    if (message.trim().length === 0) {
      isValid = false
      setMessageError(true)
    }

    return isValid
  }

  return (
    <Stack
      id='contact'
      component='footer'
      sx={{
        py: '7.2rem',
        px: { xs: '1.6rem', sm: '3.2rem', lg: '16.5rem', tv: '25rem' },
        backgroundColor: theme => theme.palette.background.default,
        minHeight: '100vh',
        position: 'relative',
      }}>
      <PatternRings />
      <Collapse
        in={alertState.show}
        sx={{
          position: 'absolute',
          top: '6.4rem',
          left: 0,
          width: '100%',
          px: { xs: '1.6rem', sm: '3.2rem', lg: '16.5rem', tv: '25rem' },
        }}>
        <Alert
          severity={alertState.type}
          message={alertMessage}
          onClose={() => handleAlertState({ show: false })}
        />
      </Collapse>
      <Stack
        sx={{
          alignItems: { xs: 'center' },
          flexDirection: { lg: 'row' },
          justifyContent: { lg: 'space-between' },
          gap: { lg: '4.8rem', desktop: '20%' },
          width: '100%',
          flexGrow: 1,
        }}>
        <Box
          sx={{
            mb: { xs: '4.8rem' },
            textAlign: { xs: 'center', lg: 'left' },
            width: '100%',
            maxWidth: { xs: '44.5rem', xl: '60rem' },
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
          <TextButton href={resumeLink} target='_blank'>
            {t('view-resume')}
          </TextButton>
        </Box>
        <Stack
          component='form'
          sx={{
            width: '100%',
          }}>
          <TextField
            label={t('name')}
            inputProps={{ name: 'from_name' }}
            value={name}
            sx={{
              mb: { xs: '3.2rem' },
            }}
            error={nameError}
            helperText={
              nameError ? (
                <Typography variant='overline'>{t('empty-error')}</Typography>
              ) : (
                ' '
              )
            }
            endIcon={
              nameError && (
                <ErrorOutlineRoundedIcon color='error' fontSize='large' />
              )
            }
            onChange={handleNameChange}
          />
          <TextField
            label={t('email')}
            type='email'
            value={email}
            sx={{
              mb: { xs: '3.2rem' },
            }}
            error={emailError}
            helperText={
              emailError ? (
                <Typography variant='overline'>
                  {t('invalid-format')}
                </Typography>
              ) : (
                ' '
              )
            }
            endIcon={
              emailError && (
                <ErrorOutlineRoundedIcon color='error' fontSize='large' />
              )
            }
            onChange={handleEmailChange}
          />
          <TextField
            label={t('message')}
            inputProps={{ name: 'message' }}
            multiline
            minRows={4}
            value={message}
            sx={{
              mb: { xs: '4rem' },
            }}
            error={messageError}
            helperText={
              messageError ? (
                <Typography variant='overline'>{t('empty-error')}</Typography>
              ) : (
                ' '
              )
            }
            endIcon={
              messageError && (
                <ErrorOutlineRoundedIcon color='error' fontSize='large' />
              )
            }
            onChange={handleMessageChange}
          />
          <TextButton
            onClick={handleSendEmail}
            disabled={sendingMessage}
            startIcon={
              sendingMessage && (
                <CircularProgress color='inherit' size='2.4rem' />
              )
            }
            sx={{
              alignSelf: 'end',
              mb: { xs: '7.2rem', sm: '10.4rem' },
            }}>
            {t('send-message')}
          </TextButton>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: '100%',
          mt: 'auto',
        }}>
        <ElevatedIconButton
          aria-label={t('go-to-top').toString()}
          href='#'
          sx={{
            mb: { xs: '4.2rem' },
            alignSelf: 'end',
          }}>
          <ArrowUpwardRoundedIcon fontSize='large' />
        </ElevatedIconButton>
        <Divider
          flexItem
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
          <IconButton aria-label='Github' href={GITHUB_LINK} target='_blank'>
            <GitHubIcon sx={{ fontSize: '2.4rem' }} />
          </IconButton>
          <IconButton
            aria-label='Linkedin'
            href={LINKEDIN_LINK}
            target='_blank'>
            <LinkedInIcon sx={{ fontSize: '2.4rem' }} />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Contact
