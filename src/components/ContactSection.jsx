import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

import Section from './Section.jsx'
import contact from '../content/contact.js'

export default function ContactSection() {
  const { t } = useTranslation()
  const labels = t('contact.labels', { returnObjects: true })

  return (
    <Section id="contact" title={t('contact.title')}>
      <div className="row">
        <div className="col-12 col-lg-8">
          <Typography
            variant="body1"
            sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'text.secondary', mb: 3.5 }}
          >
            {t('contact.body')}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            sx={{ flexWrap: 'wrap', rowGap: 1.5 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href={`mailto:${contact.email}`}
            >
              {labels.email}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LinkedInIcon />}
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.linkedin}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.github}
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<FileDownloadIcon />}
              href={contact.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.cv}
            </Button>
          </Stack>
        </div>
      </div>
    </Section>
  )
}
