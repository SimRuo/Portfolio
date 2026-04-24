import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import PlaceIcon from '@mui/icons-material/Place'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="section">
      <div className="container-xl">
        <div className="row">
          <div className="col-12 col-lg-10 col-xl-9">
            <Stack direction="row" spacing={1} sx={{ mb: 3, flexWrap: 'wrap', rowGap: 1 }}>
              <Chip
                icon={<PlaceIcon />}
                label={t('hero.location')}
                variant="outlined"
                size="small"
              />
              <Chip
                icon={<WorkOutlineIcon />}
                label={t('hero.role')}
                variant="outlined"
                size="small"
              />
            </Stack>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              {t('hero.greeting')}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: 'text.secondary',
                maxWidth: '42rem',
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              {t('hero.tagline')}
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#projects"
              endIcon={<ArrowDownwardIcon />}
              sx={{ px: 3, py: 1.25 }}
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
