import { useTranslation } from 'react-i18next'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import SchoolIcon from '@mui/icons-material/School'
import VerifiedIcon from '@mui/icons-material/Verified'
import CodeIcon from '@mui/icons-material/Code'

import Section from './Section.jsx'

function InfoCard({ icon, title, children }) {
  return (
    <Card sx={{ height: '100%', transition: 'background-color 150ms', '&:hover': { backgroundColor: '#16161b' } }}>
      <CardContent>
        <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mb: 2, pb: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
          {icon}
          <Typography component="span" className="mono" sx={{ color: 'text.primary' }}>
            {title}
          </Typography>
        </Stack>
        {children}
      </CardContent>
    </Card>
  )
}

export default function AboutSection() {
  const { t } = useTranslation()
  const stackItems = t('about.stack.items', { returnObjects: true })

  return (
    <Section id="about" title={t('about.title')}>
      <div className="row g-4">
        <div className="col-12 col-lg-7">
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'text.primary',
              maxWidth: '48rem',
            }}
          >
            {t('about.body')}
          </Typography>
        </div>
      </div>

      <div className="row g-4 mt-1">
        <div className="col-12 col-md-6 col-lg-4">
          <InfoCard
            icon={<SchoolIcon sx={{ color: 'primary.main' }} />}
            title={t('about.education.title')}
          >
            <Typography sx={{ fontWeight: 500 }}>{t('about.education.degree')}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
              {t('about.education.school')} · {t('about.education.years')}
            </Typography>
          </InfoCard>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <InfoCard
            icon={<VerifiedIcon sx={{ color: 'primary.main' }} />}
            title={t('about.certs.title')}
          >
            <Stack spacing={1.5}>
              <div>
                <Typography sx={{ fontWeight: 500 }}>{t('about.certs.azureAi')}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t('about.certs.azureAiDate')}
                </Typography>
              </div>
              <div>
                <Typography sx={{ fontWeight: 500 }}>
                  {t('about.certs.azureFundamentals')}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {t('about.certs.azureFundamentalsDate')}
                </Typography>
              </div>
            </Stack>
          </InfoCard>
        </div>

        <div className="col-12 col-md-12 col-lg-4">
          <InfoCard
            icon={<CodeIcon sx={{ color: 'primary.main' }} />}
            title={t('about.stack.title')}
          >
            <Stack direction="row" spacing={0.75} sx={{ flexWrap: 'wrap', rowGap: 0.75 }}>
              {stackItems.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                  }}
                />
              ))}
            </Stack>
          </InfoCard>
        </div>
      </div>
    </Section>
  )
}
