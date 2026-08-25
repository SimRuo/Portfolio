import { useTranslation } from 'react-i18next'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage?.startsWith('sv') ? 'sv' : 'en'

  const handleChange = (_event, next) => {
    if (next && next !== current) {
      i18n.changeLanguage(next)
      document.documentElement.lang = next
    }
  }

  return (
    <ToggleButtonGroup
      value={current}
      exclusive
      size="small"
      onChange={handleChange}
      aria-label={t('lang.switchTo')}
      sx={{
        borderLeft: '1px solid',
        borderColor: 'divider',
        borderRadius: 0,
        '& .MuiToggleButton-root': {
          borderRadius: 0,
          border: 0,
          px: 1.5,
          py: 0.5,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, "Cascadia Mono", monospace',
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          fontWeight: 700,
          color: 'text.secondary',
          '&.Mui-selected': {
            color: 'primary.main',
            backgroundColor: 'transparent',
          },
          '&:hover': { color: 'text.primary', backgroundColor: 'transparent' },
        },
      }}
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="sv">SV</ToggleButton>
    </ToggleButtonGroup>
  )
}
