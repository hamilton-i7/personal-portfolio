import { TypographyOptions } from '@mui/material/styles/createTypography'
import breakpoints from './breakpoints'

const typography: TypographyOptions = {
  fontFamily: ['Space Grotesk', 'Arial', 'sans-serif'].join(','),
  h1: {
    fontSize: '4rem',
    fontWeight: 700,
    lineHeight: '4rem',
    letterSpacing: '-0.114rem',
    [`@media (min-width:${breakpoints.values.tablet}px)`]: {
      fontSize: '7.2rem',
      lineHeight: '7.2rem',
      letterSpacing: '-0.205rem',
    },
    [`@media (min-width:${breakpoints.values.desktop}px)`]: {
      fontSize: '8.8rem',
      lineHeight: '8.8rem',
      letterSpacing: '-0.25rem',
    },
  },
  h2: {
    fontSize: '3.7rem',
    fontWeight: 400,
    lineHeight: '4.8rem',
    letterSpacing: '0.025rem',
    [`@media (min-width:${breakpoints.values.tablet}px)`]: {
      fontSize: '6.5rem',
      fontWeight: 300,
      lineHeight: '7.2rem',
      letterSpacing: '-0.05rem',
    },
  },
  h3: {
    fontSize: '2.2rem',
    lineHeight: '3.2rem',
    fontWeight: 500,
    letterSpacing: '0.015rem',
    [`@media (min-width:${breakpoints.values.tablet}px)`]: {
      fontSize: '2.6rem',
      lineHeight: '3.2rem',
      fontWeight: 400,
      letterSpacing: 0,
    },
    [`@media (min-width:${breakpoints.values.desktop}px)`]: {
      fontSize: '3.7rem',
      lineHeight: '4.8rem',
      letterSpacing: '0.025rem',
    },
  },
  h4: {
    fontSize: '2.2rem',
    lineHeight: '3.2rem',
    fontWeight: 500,
    letterSpacing: '0.015rem',
    [`@media (min-width:${breakpoints.values.tablet}px)`]: {
      fontSize: '2.6rem',
      lineHeight: '3.2rem',
      fontWeight: 400,
      letterSpacing: 0,
    },
  },
  subtitle1: {
    fontSize: '1.7rem',
    fontWeight: 500,
    lineHeight: '2.3rem',
    letterSpacing: '0.015rem',
  },
  body1: {
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '2.6rem',
    [`@media (min-width:${breakpoints.values.tablet}px)`]: {
      fontSize: '1.8rem',
      lineHeight: '2.8rem',
    },
  },
  body2: {
    fontSize: '1.6rem',
    fontWeight: 700,
    lineHeight: '2.6rem',
    letterSpacing: '-0.022rem',
  },
  button: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: '2.1rem',
    letterSpacing: '0.125rem',
    textTransform: 'uppercase',
  },
  overline: {
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: '1.6rem',
    letterSpacing: '-0.017rem',
    textTransform: 'none',
  },
}

export default typography
