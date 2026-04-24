import { useTranslation } from 'react-i18next'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import PlaceIcon from '@mui/icons-material/Place'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="section">
      <div className="container-xl">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-8 order-2 order-lg-1">
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

          <div className="col-12 col-lg-4 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end">
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -8,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(124,154,255,0.35), rgba(124,154,255,0) 70%)',
                  filter: 'blur(18px)',
                  zIndex: 0,
                },
              }}
            >
              <Avatar
                src="/me.jpeg"
                alt="Simon Ruotsalainen"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  width: { xs: 160, sm: 200, lg: 260 },
                  height: { xs: 160, sm: 200, lg: 260 },
                  border: '2px solid rgba(124,154,255,0.35)',
                  boxShadow: '0 20px 60px -20px rgba(0,0,0,0.8)',
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </section>
  )
}
