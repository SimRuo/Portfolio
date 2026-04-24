import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import LanguageSwitcher from './LanguageSwitcher.jsx'

export default function NavBar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#projects', label: t('nav.projects') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(11,13,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid' : '1px solid transparent',
        borderColor: 'divider',
        transition: 'background-color 200ms, border-color 200ms',
      }}
    >
      <div className="container-xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Box
            component="a"
            href="#top"
            sx={{
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.01em',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            simruo<Box component="span" sx={{ color: 'primary.main' }}>.dev</Box>
          </Box>
          <Box sx={{ flex: 1 }} />
          <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', sm: 'flex' }, mr: 2 }}>
            {links.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                color="inherit"
                sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
          <LanguageSwitcher />
        </Toolbar>
      </div>
    </AppBar>
  )
}
