import React from 'react'
import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert'
import MuiIconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useTranslation } from 'next-i18next'

type AlertProps = MuiAlertProps & {
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  message: string
}

const Alert = ({ onClose, message, severity }: AlertProps) => {
  const { t } = useTranslation()

  return (
    <MuiAlert
      severity={severity}
      sx={{
        alignItems: 'center',
        width: '100%',
        maxWidth: '70rem',
        mx: 'auto',
      }}
      action={
        <MuiIconButton
          aria-label={t('close').toString()}
          color='inherit'
          onClick={onClose}>
          <CloseRoundedIcon fontSize='large' />
        </MuiIconButton>
      }>
      {message}
    </MuiAlert>
  )
}

export default Alert
