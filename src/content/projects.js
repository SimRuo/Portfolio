/**
 * Project data. Copy lives in locales/{en,sv}.json under `projects.items.<id>`.
 * Static facts (stack, URLs, media paths, card variant) stay here.
 *
 * Media: `image` is always a poster fallback. If `video` is set, the card plays
 * the video inline (autoplay, muted, loop) on top of the poster.
 *
 * Variants:
 *   - "default": normal card with media + live demo + source buttons
 *   - "private": no media, no links, styled placeholder (mognadstrappan)
 *   - "bonus": smaller card, source only (canvas-extension)
 *   - "sandbox": ongoing exploration, no demo/source, gamepad-styled placeholder
 */
const projects = [
  {
    id: 'liftlog',
    variant: 'default',
    image: '/screenshots/liftlog.png',
    portrait: true,
    stack: ['React 19', 'Vite', 'MUI v7', 'ASP.NET Core', 'SQL Server', 'JWT', 'Groq', 'Llama 3.3 70B', 'Docker', 'PWA', 'GitHub Actions', 'CI/CD'],
    liveUrl: 'https://liftlog.simruo.dev',
    sourceUrl: 'https://github.com/SimRuo/LiftLog',
    diagram: '/diagrams/liftlog.png',
  },
  {
    id: 'syncio',
    variant: 'default',
    image: '/screenshots/syncio.png',
    video: '/screenshots/syncio.webm',
    stack: ['React', 'MUI', '.NET 8', 'SignalR', 'yt-dlp', 'FFmpeg', 'Docker', 'GitHub Actions', 'CI/CD'],
    liveUrl: 'https://syncio.simruo.dev',
    sourceUrl: 'https://github.com/SimRuo/Syncio',
    diagram: '/diagrams/syncio.png',
  },
  {
    id: 'foodscraper',
    variant: 'default',
    image: '/screenshots/foodscraper.png',
    stack: ['React 19', 'MUI v7', 'Nivo', 'TanStack Query', 'FastAPI', 'Selenium', 'BeautifulSoup', 'pandas', 'Docker', 'GitHub Actions', 'CI/CD'],
    liveUrl: 'https://foodscraper.simruo.dev',
    sourceUrl: 'https://github.com/SimRuo/FoodScraper',
    diagram: '/diagrams/foodscraper.png',
  },
  {
    id: 'mognadstrappan',
    variant: 'private',
    stack: ['React', '.NET', 'Python', 'SQL Server', 'Docker'],
    diagram: '/diagrams/mognadstrappan.png',
  },
  {
    id: 'canvas',
    variant: 'bonus',
    video: '/screenshots/canvas.webm',
    stack: ['JavaScript', 'GNOME Shell'],
    sourceUrl: 'https://github.com/SimRuo/canvas-assignments-gnome-extension',
  },
  {
    id: 'unity',
    variant: 'sandbox',
    stack: ['Unity', 'C#', 'A* pathfinding', 'Stable Diffusion', 'LoRA training'],
  },
  {
    id: 'thesis',
    variant: 'paper',
    stack: ['Grafana', 'OpenTelemetry', 'Model Context Protocol', 'MCP', 'NASA-TLX', 'nginx'],
    paperUrl: 'https://du.diva-portal.org/smash/get/diva2:2082607/FULLTEXT01.pdf',
  },
]

export default projects
