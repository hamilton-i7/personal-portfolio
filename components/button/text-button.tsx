import React from 'react'
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

type TextButtonProps = MuiButtonProps & {
  children: React.ReactNode
}

const TextButton = ({ children, startIcon, sx, ...props }: TextButtonProps) => {
  return (
    <MuiButton
      variant='text'
      startIcon={startIcon}
      sx={{
        padding: 0,
        color: theme => theme.palette.common.white,
        transition: theme =>
          theme.transitions.create('color', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.shortest,
          }),
        ':hover': {
          color: theme => theme.palette.primary.main,
          background: 'none',
        },
        '& .MuiTouchRipple-root': {
          display: 'none',
        },
        '::after': {
          content: "''",
          position: 'absolute',
          bottom: '-1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '0.2rem',
          width: '95%',
          background: theme => theme.palette.primary.main,
          borderRadius: '0.4rem',
        },
        ...sx,
      }}
      {...props}>
      {children}
    </MuiButton>
  )
}

export default TextButton
