import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import MuiIconButton from '@mui/material/IconButton'
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
import { alpha, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextButton from './button/text-button'
import IconButton from './button/icon-button'

type NavbarProps = {
  children?: React.ReactElement
  enableBlurBackground: boolean
}

const TRANSPARENT_BACKGROUND_LIMIT = 100

const navItems = [
  { name: 'about', href: '#about' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' },
]
const DRAWER_WIDTH = 240

const Navbar = ({ children, enableBlurBackground }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const enableBlur = scrollPosition >= TRANSPARENT_BACKGROUND_LIMIT

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={item.href}>
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
        <Link href=''>
          <GitHubIcon fontSize='large' />
        </Link>
        <Link href=''>
          <LinkedInIcon
            fontSize='large'
            sx={{
              mx: '1.2rem',
            }}
          />
        </Link>
        <LanguageIcon fontSize='large' />
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
          }}>
          <Link href='/'>
            <Typography variant='subtitle1' component='a'>
              hamilton
            </Typography>
          </Link>
          <MuiIconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}>
            <MenuIcon fontSize='large' />
          </MuiIconButton>
          <Stack
            direction='row'
            sx={{
              display: { xs: 'none', sm: 'flex' },
              columnGap: '0.8rem',
            }}>
            {navItems.map(item => (
              <TextButton key={item.name} showUnderline={false}>
                {item.name}
              </TextButton>
            ))}
          </Stack>
          <Stack
            direction='row'
            sx={{
              alignItems: 'center',
              display: { xs: 'none', sm: 'flex' },
            }}>
            <IconButton>
              <GitHubIcon fontSize='large' />
            </IconButton>
            <IconButton>
              <LinkedInIcon fontSize='large' />
            </IconButton>
            <IconButton>
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
