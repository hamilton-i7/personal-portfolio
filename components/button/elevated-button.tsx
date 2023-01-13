import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { alpha } from '@mui/material'
import React from 'react'

type ElevatedButtonProps = MuiButtonProps & {
  children: React.ReactNode
}

const ElevatedButton = ({ children, sx, ...props }: ElevatedButtonProps) => {
  return (
    <MuiButton
      variant='contained'
      sx={{
        borderRadius: '3.2rem',
        backgroundColor: theme => theme.palette.neutral.light,
        color: theme => theme.palette.secondary.main,
        height: '4rem',
        px: '2.4rem',
        ':hover': {
          backgroundColor: theme => alpha(theme.palette.neutral.light, 0.92),
        },
        ...sx,
      }}
      {...props}>
      {children}
    </MuiButton>
  )
}

export default ElevatedButton
