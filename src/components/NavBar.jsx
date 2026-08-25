import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
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
    { href: '#infrastructure', label: t('nav.infrastructure') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ]

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled ? 'rgba(8,8,10,0.92)' : 'background.default',
        backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
        borderBottom: '2px solid',
        borderColor: 'text.primary',
        transition: 'background-color 200ms',
      }}
    >
      <div className="container-xl">
        <Toolbar disableGutters sx={{ minHeight: 56, gap: 0 }}>
          <Box
            component="a"
            href="#top"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              pr: '22px',
              borderRight: '1px solid',
              borderColor: 'divider',
              textDecoration: 'none',
            }}
          >
            <Box
              component="span"
              sx={{
                fontWeight: 900,
                fontSize: '1.35rem',
                letterSpacing: '0.02em',
                color: 'primary.main',
                lineHeight: 1,
              }}
            >
              SR
            </Box>
            <Box
              component="span"
              className="mono"
              sx={{ fontWeight: 800, fontSize: '0.72rem', color: 'text.primary' }}
            >
              simruo.dev
            </Box>
          </Box>

          <Box sx={{ flex: 1 }} />

          <Stack
            direction="row"
            spacing={0}
            sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'stretch', mr: 1 }}
          >
            {links.map((link) => (
              <Box
                key={link.href}
                component="a"
                href={link.href}
                className="mono"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '18px',
                  color: 'text.secondary',
                  borderLeft: '1px solid',
                  borderColor: 'divider',
                  textDecoration: 'none',
                  transition: 'color 120ms, background-color 120ms',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Stack>
          <LanguageSwitcher />
        </Toolbar>
      </div>
    </AppBar>
  )
}
