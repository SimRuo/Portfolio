import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section" style={{ borderBottom: '1px solid #26262e' }}>
      <div className="container-xl">
        <div className="row mb-4 mb-md-5">
          <div className="col-12 col-lg-10">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
              <Box sx={{ width: 22, height: '1px', backgroundColor: 'primary.main' }} />
              <Typography component="span" className="mono" sx={{ color: 'primary.main' }}>
                {id}
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.7rem', sm: '2.2rem' },
                mb: subtitle ? 1.5 : 0,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', fontSize: '1.05rem' }}
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
