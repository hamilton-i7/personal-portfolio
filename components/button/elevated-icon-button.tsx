import React from 'react'
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton'

type IconButtonProps = MuiIconButtonProps & {
  children: React.ReactNode
  href?: string
}

const ElevatedIconButton = ({ children, href = '', sx }: IconButtonProps) => {
  return (
    <MuiIconButton
      href={href}
      sx={{
        backgroundColor: theme => theme.palette.background.paper,
        color: theme => theme.palette.primary.main,
        ':hover': {
          backgroundColor: theme => theme.palette.primary.main,
          color: theme => theme.palette.secondary.dark,
        },
        ...sx,
      }}>
      {children}
    </MuiIconButton>
  )
}

export default ElevatedIconButton
