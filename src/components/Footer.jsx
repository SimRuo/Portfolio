import { useTranslation } from 'react-i18next'
import Typography from '@mui/material/Typography'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '2px solid #f4f4f0',
        marginTop: '3rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
      }}
    >
      <div className="container-xl">
        <div className="row align-items-center g-3">
          <div className="col-12 col-md-auto">
            <Typography component="span" className="mono" sx={{ color: 'text.secondary' }}>
              © {year} SIMON RUOTSALAINEN
            </Typography>
          </div>
          <div className="col-12 col-md text-md-end">
            <Typography component="span" className="mono" sx={{ color: 'text.secondary' }}>
              {t('footer.built')}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  )
}
