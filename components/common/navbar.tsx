import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
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
import { Stack } from '@mui/material'

type NavbarProps = {
  children?: React.ReactElement
}

const navItems = [
  { name: 'about', href: '#about' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' },
]
const DRAWER_WIDTH = 240

const Navbar = ({ children }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
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
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}>
            <MenuIcon fontSize='large' />
          </IconButton>
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => (
              <Button key={item.name} sx={{ color: '#fff' }}>
                {item.name}
              </Button>
            ))}
          </Box>
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
