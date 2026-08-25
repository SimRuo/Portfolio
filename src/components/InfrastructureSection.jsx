import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'

import Section from './Section.jsx'

const stack = [
  'Ubuntu',
  'Docker',
  'docker-compose',
  'nginx-proxy',
  "Let's Encrypt",
  'certbot',
  'TLS',
  'self-hosted',
]

export default function InfrastructureSection() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <Section
      id="infrastructure"
      title={t('infrastructure.title')}
      subtitle={t('infrastructure.subtitle')}
    >
      <Card
        sx={{
          overflow: 'hidden',
          transition: 'background-color 150ms',
          '&:hover': { backgroundColor: '#16161b' },
          '&:hover .zoom-hint': { opacity: 1 },
        }}
      >
        <Box
          onClick={() => setOpen(true)}
          sx={{
            position: 'relative',
            cursor: 'zoom-in',
            px: { xs: 2, sm: 4, md: 6 },
            py: { xs: 3, sm: 4 },
            backgroundColor: '#0b0b0e',
            borderBottom: '1px solid',
            borderColor: 'divider',
            backgroundImage:
              'radial-gradient(ellipse at top, rgba(255,77,23,0.08), transparent 60%)',
          }}
        >
          <Box
            component="img"
            src="/diagrams/infrastructure.png"
            alt={t('infrastructure.alt')}
            loading="lazy"
            sx={{
              display: 'block',
              width: '100%',
              maxWidth: 1100,
              height: 'auto',
              margin: '0 auto',
            }}
          />
          <Box
            className="zoom-hint"
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              opacity: 0,
              transition: 'opacity 200ms',
              backgroundColor: 'rgba(15,15,18,0.9)',
              border: '1px solid',
              borderColor: 'divider',
              px: 1,
              py: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
              color: 'text.secondary',
              pointerEvents: 'none',
              backdropFilter: 'blur(6px)',
            }}
          >
            <ZoomOutMapIcon fontSize="small" />
            <Typography variant="caption">{t('infrastructure.zoom')}</Typography>
          </Box>
        </Box>

        <CardContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
          <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7, mb: 2.5 }}>
            {t('infrastructure.body')}
          </Typography>
          <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', rowGap: 0.75 }}>
            {stack.map((item) => (
              <Chip
                key={item}
                label={item}
                size="small"
                variant="outlined"
                sx={{ borderColor: 'divider', color: 'text.secondary' }}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(8,8,10,0.96)',
            backgroundImage: 'none',
            m: { xs: 1, sm: 2 },
            maxHeight: 'calc(100vh - 32px)',
          },
        }}
      >
        <IconButton
          onClick={() => setOpen(false)}
          aria-label={t('projects.labels.close')}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'text.primary',
            backgroundColor: 'rgba(8,8,10,0.7)',
            borderRadius: 0,
            zIndex: 1,
            '&:hover': { backgroundColor: 'rgba(8,8,10,0.9)' },
          }}
        >
          <CloseIcon />
        </IconButton>
        <Box
          component="img"
          src="/diagrams/infrastructure.png"
          alt={t('infrastructure.alt')}
          sx={{
            display: 'block',
            width: '100%',
            height: 'auto',
            maxHeight: 'calc(100vh - 32px)',
            objectFit: 'contain',
            p: 2,
          }}
        />
      </Dialog>
    </Section>
  )
}
