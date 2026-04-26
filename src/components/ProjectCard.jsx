import { useTranslation } from 'react-i18next'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import LaunchIcon from '@mui/icons-material/Launch'
import GitHubIcon from '@mui/icons-material/GitHub'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'

function StackChips({ items }) {
  return (
    <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', rowGap: 0.75, mb: 2 }}>
      {items.map((item) => (
        <Chip
          key={item}
          label={item}
          size="small"
          variant="outlined"
          sx={{ borderColor: 'divider', color: 'text.secondary' }}
        />
      ))}
    </Stack>
  )
}

function PrivatePlaceholder({ label }) {
  return (
    <Box
      sx={{
        aspectRatio: '16 / 9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1,
        background:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 18px, rgba(255,255,255,0.045) 18px 36px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        color: 'text.secondary',
      }}
    >
      <LockOutlinedIcon fontSize="large" />
      <Typography variant="body2" sx={{ fontWeight: 500, letterSpacing: '0.02em' }}>
        {label}
      </Typography>
    </Box>
  )
}

function SandboxPlaceholder({ label }) {
  return (
    <Box
      sx={{
        aspectRatio: '16 / 9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 1.25,
        position: 'relative',
        backgroundColor: '#0b0d12',
        backgroundImage:
          'radial-gradient(ellipse at center, rgba(124,154,255,0.12), transparent 65%), linear-gradient(transparent 95%, rgba(124,154,255,0.18) 95%), linear-gradient(90deg, transparent 95%, rgba(124,154,255,0.18) 95%)',
        backgroundSize: 'auto, 28px 28px, 28px 28px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        color: 'primary.main',
      }}
    >
      <SportsEsportsOutlinedIcon sx={{ fontSize: 56 }} />
      <Typography
        variant="body2"
        sx={{ fontWeight: 500, letterSpacing: '0.02em', color: 'text.secondary' }}
      >
        {label}
      </Typography>
    </Box>
  )
}

function Media({ image, video, alt, portrait }) {
  const container = {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    overflow: 'hidden',
    backgroundColor: '#0b0d12',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  }

  if (portrait && image) {
    return (
      <Box sx={container}>
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(28px) brightness(0.45) saturate(1.1)',
            transform: 'scale(1.15)',
          }}
        />
        <Box
          component="img"
          src={image}
          alt={alt}
          loading="lazy"
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

  const fill = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }

  if (video) {
    return (
      <Box sx={container}>
        <Box
          component="video"
          src={video}
          poster={image}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={alt}
          sx={fill}
        />
      </Box>
    )
  }

  return (
    <Box sx={container}>
      <Box
        component="img"
        src={image}
        alt={alt}
        loading="lazy"
        sx={fill}
        onError={(e) => {
          e.currentTarget.style.visibility = 'hidden'
        }}
      />
    </Box>
  )
}

export default function ProjectCard({ project, onOpen }) {
  const { t } = useTranslation()
  const { id, variant, image, video, portrait, stack, liveUrl, sourceUrl } = project
  const copy = t(`projects.items.${id}`, { returnObjects: true })
  const labels = t('projects.labels', { returnObjects: true })

  const isPrivate = variant === 'private'
  const isSandbox = variant === 'sandbox'
  const hasActions = !isPrivate && !isSandbox && (liveUrl || sourceUrl)

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 200ms, border-color 200ms',
        '&:hover': {
          transform: 'translateY(-2px)',
          borderColor: 'rgba(124,154,255,0.35)',
        },
      }}
    >
      <CardActionArea
        onClick={onOpen}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', flexGrow: 1 }}
      >
        {isPrivate ? (
          <PrivatePlaceholder label={labels.private} />
        ) : isSandbox ? (
          <SandboxPlaceholder label={labels.sandbox} />
        ) : (
          <Media image={image} video={video} alt={copy.title} portrait={portrait} />
        )}

        <CardContent sx={{ flexGrow: 1, pb: 1, width: '100%' }}>
          <Stack
            direction="row"
            alignItems="baseline"
            justifyContent="space-between"
            sx={{ mb: 0.5, gap: 1 }}
          >
            <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
              {copy.title}
            </Typography>
          </Stack>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'primary.light',
              mb: 2,
              fontStyle: 'italic',
              fontWeight: 500,
            }}
          >
            {copy.tagline}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary', mb: 2.5, lineHeight: 1.6 }}>
            {copy.description}
          </Typography>
          <StackChips items={stack} />
        </CardContent>
      </CardActionArea>

      {hasActions && (
        <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
          {liveUrl && (
            <Button
              variant="contained"
              size="small"
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon />}
              onClick={(e) => e.stopPropagation()}
            >
              {labels.demo}
            </Button>
          )}
          {sourceUrl && (
            <Button
              variant="outlined"
              size="small"
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              onClick={(e) => e.stopPropagation()}
            >
              {labels.source}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  )
}
