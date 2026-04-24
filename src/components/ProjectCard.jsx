import { useTranslation } from 'react-i18next'
import Card from '@mui/material/Card'
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

function Media({ image, video, alt }) {
  const sharedSx = {
    display: 'block',
    width: '100%',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
    backgroundColor: '#0b0d12',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
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
        preload="metadata"
        aria-label={alt}
        sx={sharedSx}
      />
    )
  }

  return (
    <Box
      component="img"
      src={image}
      alt={alt}
      loading="lazy"
      sx={sharedSx}
      onError={(e) => {
        e.currentTarget.style.visibility = 'hidden'
      }}
    />
  )
}

export default function ProjectCard({ project }) {
  const { t } = useTranslation()
  const { id, variant, image, video, stack, liveUrl, sourceUrl } = project
  const copy = t(`projects.items.${id}`, { returnObjects: true })
  const labels = t('projects.labels', { returnObjects: true })

  const isPrivate = variant === 'private'
  const isBonus = variant === 'bonus'

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
      {isPrivate ? (
        <PrivatePlaceholder label={labels.private} />
      ) : (
        <Media image={image} video={video} alt={copy.title} />
      )}

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Stack
          direction="row"
          alignItems="baseline"
          justifyContent="space-between"
          sx={{ mb: 0.5, gap: 1 }}
        >
          <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
            {copy.title}
          </Typography>
          {isBonus && (
            <Chip
              label={labels.bonus}
              size="small"
              sx={{
                backgroundColor: 'rgba(244,162,97,0.12)',
                color: 'secondary.main',
                fontWeight: 600,
              }}
            />
          )}
        </Stack>
        <Typography
          variant="subtitle1"
          sx={{ color: 'text.secondary', mb: 2, fontStyle: 'italic' }}
        >
          {copy.tagline}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary', mb: 2.5, lineHeight: 1.6 }}>
          {copy.description}
        </Typography>
        <StackChips items={stack} />
      </CardContent>

      {!isPrivate && (
        <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
          {liveUrl && (
            <Button
              variant="contained"
              size="small"
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
              size="small"
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
            >
              {labels.source}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  )
}
