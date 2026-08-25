import { createTheme } from '@mui/material/styles'

// Palette lifted from the same idea as indexca.se/testofeight: near-black
// ground, one hot accent that means exactly one thing, a cool accent used
// sparingly for annotations, hairline dividers instead of shadows.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ff4d17', light: '#ff7a4d', dark: '#c53a10' },
    secondary: { main: '#12e0c8' },
    background: {
      default: '#08080a',
      paper: '#0f0f12',
    },
    text: {
      primary: '#f4f4f0',
      secondary: '#8b8b96',
    },
    divider: '#26262e',
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 900, letterSpacing: '-0.045em', textTransform: 'uppercase', lineHeight: 0.96 },
    h2: { fontWeight: 900, letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: 1 },
    h3: { fontWeight: 800, letterSpacing: '-0.02em' },
    h4: { fontWeight: 800, letterSpacing: '-0.01em' },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: '0.1em',
      fontSize: '0.78rem',
    },
    overline: {
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, "Cascadia Mono", monospace',
      letterSpacing: '0.14em',
      fontWeight: 600,
      fontSize: '0.72rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        contained: {
          backgroundColor: '#ff4d17',
          color: '#08080a',
          '&:hover': { backgroundColor: '#e0430f' },
        },
        outlined: {
          borderColor: '#26262e',
          color: '#f4f4f0',
          '&:hover': { borderColor: '#f4f4f0', backgroundColor: 'transparent' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, "Cascadia Mono", monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontSize: '0.68rem',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundImage: 'none',
          boxShadow: 'none',
          border: '1px solid #26262e',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: 0, border: '1px solid #26262e' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: 'none' },
      },
    },
  },
})

export default theme
