import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'

function Hero({ project, copy }) {
  const { image, video, portrait, variant } = project
  if (variant === 'paper') {
    return (
      <Box
        sx={{
          aspectRatio: '16 / 9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.main',
          backgroundColor: '#0b0d12',
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(124,154,255,0.14), transparent 65%)',
          borderRadius: 2,
        }}
      >
        <ArticleOutlinedIcon sx={{ fontSize: 96 }} />
      </Box>
    )
  }
  if (variant === 'private') {
    return (
      <Box
        sx={{
          aspectRatio: '16 / 9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          color: 'text.secondary',
          background:
            'repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 18px, rgba(255,255,255,0.045) 18px 36px)',
          borderRadius: 2,
        }}
      >
        <LockOutlinedIcon fontSize="large" />
      </Box>
    )
  }
  if (variant === 'sandbox') {
    return (
      <Box
        sx={{
          aspectRatio: '16 / 9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.main',
          backgroundColor: '#0b0d12',
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(124,154,255,0.14), transparent 65%), linear-gradient(transparent 95%, rgba(124,154,255,0.18) 95%), linear-gradient(90deg, transparent 95%, rgba(124,154,255,0.18) 95%)',
          backgroundSize: 'auto, 32px 32px, 32px 32px',
          borderRadius: 2,
        }}
      >
        <SportsEsportsOutlinedIcon sx={{ fontSize: 96 }} />
      </Box>
    )
  }

  const box = {
    position: 'relative',
    width: '100%',
    aspectRatio: portrait ? '4 / 3' : '16 / 9',
    overflow: 'hidden',
    backgroundColor: '#0b0d12',
    borderRadius: 2,
  }

  if (portrait && image) {
    return (
      <Box sx={box}>
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(32px) brightness(0.45)',
            transform: 'scale(1.2)',
          }}
        />
        <Box
          component="img"
          src={image}
          alt={copy.title}
          sx={{
            position: 'relative',
            display: 'block',
            height: '100%',
            margin: '0 auto',
            objectFit: 'contain',
          }}
        />
      </Box>
    )
  }

  if (video) {
    return (
      <Box
        component="video"
        src={video}
        poster={image}
        autoPlay
        loop
        muted
        playsInline
        sx={{ ...box, display: 'block', objectFit: 'cover' }}
      />
    )
  }

  return (
    <Box
      component="img"
      src={image}
      alt={copy.title}
      sx={{ ...box, display: 'block', objectFit: 'cover' }}
    />
  )
}

export default function ProjectModal({ project, open, onClose }) {
  const { t } = useTranslation()
  const [diagramFailed, setDiagramFailed] = useState(false)

  if (!project) return null

  const { id, stack, liveUrl, sourceUrl, paperUrl, diagram, variant } = project
  const copy = t(`projects.items.${id}`, { returnObjects: true })
  const labels = t('projects.labels', { returnObjects: true })
  const hasDetails = typeof copy.details === 'string' && copy.details.length > 0

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="body"
      PaperProps={{ sx: { backgroundImage: 'none' } }}
    >
      <DialogTitle sx={{ pr: 6 }}>
        <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
          {copy.title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: 'primary.light', fontStyle: 'italic', fontWeight: 500, mt: 0.5 }}
        >
          {copy.tagline}
        </Typography>
        <IconButton
          onClick={onClose}
          aria-label={labels.close || 'Close'}
          sx={{ position: 'absolute', right: 12, top: 12, color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Hero project={project} copy={copy} />

        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          {copy.description}
        </Typography>

        {hasDetails && (
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75, whiteSpace: 'pre-line' }}>
            {copy.details}
          </Typography>
        )}

        <Box>
          <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
            {labels.stack || 'Stack'}
          </Typography>
          <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', rowGap: 0.75, mt: 1 }}>
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
        </Box>

        {diagram && !diagramFailed && (
          <>
            <Divider flexItem />
            <Box>
              <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.08em' }}>
                {labels.architecture || 'Architecture'}
              </Typography>
              <Box
                component="img"
                src={diagram}
                alt={`${copy.title} architecture diagram`}
                onError={() => setDiagramFailed(true)}
                sx={{
                  display: 'block',
                  width: '100%',
                  mt: 1,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: '#0b0d12',
                }}
              />
            </Box>
          </>
        )}

        {variant !== 'private' && variant !== 'sandbox' && (liveUrl || sourceUrl || paperUrl) && (
          <Stack direction="row" spacing={1} sx={{ pt: 1 }}>
            {liveUrl && (
              <Button
                variant="contained"
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<LaunchIcon />}
              >
                {labels.demo}
              </Button>
            )}
            {sourceUrl && (
              <Button
                variant="outlined"
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
              >
                {labels.source}
              </Button>
            )}
            {paperUrl && (
              <Button
                variant="contained"
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<LaunchIcon />}
              >
                {labels.paper}
              </Button>
            )}
          </Stack>
        )}
      </DialogContent>
    </Dialog>
  )
}
