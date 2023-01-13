import React from 'react'
import MuiIconButton, {
  IconButtonProps as MuiIconButtonProps,
} from '@mui/material/IconButton'

type IconButtonProps = MuiIconButtonProps & {
  children: React.ReactNode
}

const IconButton = ({ children, sx }: IconButtonProps) => {
  return (
    <MuiIconButton
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
