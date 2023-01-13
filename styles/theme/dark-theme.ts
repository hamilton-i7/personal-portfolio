import { createTheme } from '@mui/material'
import breakpoints from './breakpoints'
import typography from './typography'

const darkTheme = createTheme({
  breakpoints,
  typography,
  spacing: (factor: number) => `${0.8 * factor}rem`,
  palette: {
    mode: 'dark',
    primary: {
      main: '#7DD0FF',
      contrastText: '#E1E2E5',
    },
    secondary: {
      main: '#00658B',
      dark: '#00344A',
    },
    neutral: {
      main: '#E1E2E5',
      light: '#EEF4F9',
      dark: '#C0C7CD',
    },
    background: {
      default: '#243037',
      paper: '#41484D',
    },
  },
})

export default darkTheme
