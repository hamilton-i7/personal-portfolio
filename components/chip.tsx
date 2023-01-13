import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, { ElementType } from 'react'

type ChipProps = {
  label: string
  component?: ElementType<any>
}

const Chip = ({ label, component = 'div' }: ChipProps) => {
  return (
    <Box
      component={component}
      sx={{
        height: '4rem',
        px: '2.4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '0.8rem',
        border: theme => `${theme.palette.common.white} 0.1rem solid`,
        color: theme => theme.palette.common.white,
      }}>
      <Typography variant='button'>{label}</Typography>
    </Box>
  )
}

export default Chip
