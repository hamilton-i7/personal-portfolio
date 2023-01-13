import React from 'react'
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton'

type IconButtonProps = MuiIconButtonProps & {
  children: React.ReactNode
  href?: string
}

const IconButton = ({ children, sx, href = '' }: IconButtonProps) => {
  return (
    <MuiIconButton
      href={href}
      target='_blank'
      sx={{
        ':hover': {
          color: theme => theme.palette.primary.main,
        },
        ...sx,
      }}>
      {children}
    </MuiIconButton>
  )
}

export default IconButton
