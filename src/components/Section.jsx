import Typography from '@mui/material/Typography'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container-xl">
        <div className="row mb-4 mb-md-5">
          <div className="col-12 col-lg-10">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem' },
                mb: subtitle ? 1.5 : 0,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', fontSize: '1.1rem' }}
              >
                {subtitle}
              </Typography>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
