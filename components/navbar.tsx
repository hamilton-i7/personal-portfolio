import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import CssBaseline from '@mui/material/CssBaseline'
import Drawer from '@mui/material/Drawer'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/LanguageRounded'
import Link from './link'
import { alpha, Stack, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextButton from './button/text-button'
import { useTranslation } from 'next-i18next'
import LanguageMenu from './language-menu'
import { useSmallScreenMatcher } from '../utils/responsive'
import { COOKIE_LIFESPAN, GITHUB_LINK, LINKEDIN_LINK } from '../utils/constants'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { Cookie } from '../utils/cookie'

type NavbarProps = {
  children?: React.ReactElement
  enableBlurBackground: boolean
}

const TRANSPARENT_BACKGROUND_LIMIT = 100
const DRAWER_WIDTH = 240

const Navbar = ({ children, enableBlurBackground }: NavbarProps) => {
  const { t } = useTranslation()
  const router = useRouter()
  const { pathname, asPath, query } = router
  const theme = useTheme()
  const matchesSmallScreen = useSmallScreenMatcher(theme)

  const navItems = [
    { name: t('about'), href: '#about' },
    { name: t('projects'), href: '#projects' },
    { name: t('contact'), href: '#contact' },
  ]

  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const enableBlur = scrollPosition >= TRANSPARENT_BACKGROUND_LIMIT

  const [toolbarAnchor, setToolbarAnchor] = useState<HTMLElement | null>(null)
  const [drawerAnchor, setDrawerAnchor] = useState<HTMLElement | null>(null)
  const openLanguageMenu = Boolean(toolbarAnchor || drawerAnchor)

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const handleOpenLanguageMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (matchesSmallScreen) {
      setToolbarAnchor(event.currentTarget)
      return
    }
    setDrawerAnchor(event.currentTarget)
  }

  const handleCloseLanguageMenu = () => {
    setToolbarAnchor(null)
    setDrawerAnchor(null)
  }

  const handleChangeLanguage = (locale: 'en' | 'es') => {
    setLanguageCookie(locale)
    router.push({ pathname, query }, asPath, { locale })
    handleCloseLanguageMenu()
  }

  const setCookies = useCookies<keyof Cookie, Cookie>()[1]

  const setLanguageCookie = (locale: 'en' | 'es') => {
    setCookies('NEXT_LOCALE', locale, {
      maxAge: COOKIE_LIFESPAN,
      secure: process.env.NODE_ENV === 'production',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              href={item.href}
              onClick={handleDrawerToggle}>
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  variant: 'button',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Stack
        direction='row'
        sx={{
          justifyContent: 'center',
          mt: '1.6rem',
        }}>
        <IconButton href={GITHUB_LINK} target='_blank'>
          <GitHubIcon fontSize='large' />
        </IconButton>
        <IconButton href={LINKEDIN_LINK} target='_blank'>
          <LinkedInIcon
            fontSize='large'
            sx={{
              mx: '1.2rem',
            }}
          />
        </IconButton>
        <IconButton onClick={handleOpenLanguageMenu}>
          <LanguageIcon fontSize='large' />
        </IconButton>
      </Stack>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        aria-label='top bar navigation'
        sx={{
          background: 'none',
          boxShadow: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          backdropFilter: 'none',
          transition: theme =>
            theme.transitions.create(['backdrop-filter', 'background-color'], {
              duration: theme.transitions.duration.short,
              easing: theme.transitions.easing.easeIn,
            }),
          ...(enableBlur && {
            backdropFilter: 'blur(0.8rem)',
            ...(enableBlurBackground && {
              backgroundColor: theme =>
                alpha(theme.palette.background.default, 0.8),
            }),
          }),
        }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: '1.6rem', sm: '3.2rem', lg: '16.5rem', tv: '25rem' },
          }}>
          <LanguageMenu
            anchorEl={matchesSmallScreen ? toolbarAnchor : drawerAnchor}
            open={openLanguageMenu}
            onClose={handleCloseLanguageMenu}
            onSpanishClick={() => handleChangeLanguage('es')}
            onEnglishClick={() => handleChangeLanguage('en')}
          />
          <Link href='/'>
            <Typography variant='subtitle1' component='a'>
              hamilton
            </Typography>
          </Link>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}>
            <MenuIcon fontSize='large' />
          </IconButton>
          <Stack
            direction='row'
            sx={{
              display: { xs: 'none', sm: 'flex' },
              columnGap: { xs: '0.8rem', lg: '2.4rem' },
            }}>
            {navItems.map(item => (
              <TextButton
                key={item.name}
                showUnderline={false}
                href={item.href}>
                {item.name}
              </TextButton>
            ))}
          </Stack>
          <Stack
            direction='row'
            sx={{
              alignItems: 'center',
              display: { xs: 'none', sm: 'flex' },
              gap: '1.6rem',
            }}>
            <IconButton href={GITHUB_LINK} target='_blank'>
              <GitHubIcon fontSize='large' />
            </IconButton>
            <IconButton href={LINKEDIN_LINK} target='_blank'>
              <LinkedInIcon fontSize='large' />
            </IconButton>
            <IconButton onClick={handleOpenLanguageMenu}>
              <LanguageIcon fontSize='large' />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component='nav' aria-label='navigation drawer'>
        <Drawer
          variant='temporary'
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              backgroundColor: theme => theme.palette.secondary.dark,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          width: '100%',
          overflowX: 'hidden',
          position: 'relative',
        }}>
        {children}
      </Box>
    </Box>
  )
}

export default Navbar
