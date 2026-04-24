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
        '& .MuiToggleButton-root': {
          px: 1.25,
          py: 0.25,
          fontWeight: 600,
          color: 'text.secondary',
          borderColor: 'divider',
          '&.Mui-selected': {
            color: 'primary.main',
            backgroundColor: 'rgba(124,154,255,0.08)',
          },
        },
      }}
    >
      <ToggleButton value="en">EN</ToggleButton>
      <ToggleButton value="sv">SV</ToggleButton>
    </ToggleButtonGroup>
  )
}
