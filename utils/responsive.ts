import { Theme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

export const MAX_WIDTH = { xs: '120rem', tv: '150rem' }

export const useSmallScreenMatcher = (theme: Theme) =>
  useMediaQuery(theme.breakpoints.up('sm'))

export const useTabletScreenMatcher = (theme: Theme) =>
  useMediaQuery(theme.breakpoints.up('tablet'))

export const useMediumScreenMatcher = (theme: Theme) =>
  useMediaQuery(theme.breakpoints.up('md'))

export const useLargeScreenMatcher = (theme: Theme) =>
  useMediaQuery(theme.breakpoints.up('lg'))

export const useDesktopScreenMatcher = (theme: Theme) =>
  useMediaQuery(theme.breakpoints.up('desktop'))
