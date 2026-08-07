import { useTranslation } from 'react-i18next'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="section" style={{ paddingTop: '4rem', borderBottom: '1px solid #26262e' }}>
      <div className="container-xl">
        <div className="row align-items-end g-4 g-lg-5">
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <Stack direction="row" spacing={2.5} className="mono" sx={{ mb: 3, color: 'secondary.main', flexWrap: 'wrap', rowGap: 0.75 }}>
              <span>{t('hero.location')}</span>
              <Box component="span" sx={{ color: 'divider' }}>/</Box>
              <span>{t('hero.role')}</span>
            </Stack>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3.3rem', md: 'clamp(2.6rem, 5.5vw, 4.6rem)' },
                mb: 3,
                maxWidth: '18ch',
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
                lineHeight: 1.6,
                fontSize: { xs: '1rem', sm: '1.15rem' },
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
                border: '1px solid',
                borderColor: 'divider',
                p: '6px',
              }}
            >
              <Avatar
                src="/me.jpeg"
                alt="Simon Ruotsalainen"
                variant="square"
                sx={{
                  width: { xs: 150, sm: 190, lg: 240 },
                  height: { xs: 150, sm: 190, lg: 240 },
                }}
              />
            </Box>
          </div>
        </div>
      </div>
    </section>
  )
}
