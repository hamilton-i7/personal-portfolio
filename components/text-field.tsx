import React from 'react'
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

type TextFieldProps = MuiTextFieldProps & {
  endIcon?: React.ReactNode
  ariaLabel?: string
}

const TextField = ({
  helperText,
  error,
  endIcon,
  sx,
  ariaLabel,
  ...props
}: TextFieldProps) => {
  return (
    <MuiTextField
      variant='standard'
      color='primary'
      fullWidth
      error={error}
      helperText={helperText}
      InputProps={{
        endAdornment: <InputAdornment position='end'>{endIcon}</InputAdornment>,
      }}
      inputProps={{
        'aria-label': ariaLabel,
      }}
      sx={sx}
      {...props}
    />
  )
}

export default TextField
