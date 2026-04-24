import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        marginTop: '3rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container-xl">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-auto">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © {year} Simon Ruotsalainen
            </Typography>
          </div>
          <div className="col-12 col-md text-md-end">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {t('footer.built')}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}
